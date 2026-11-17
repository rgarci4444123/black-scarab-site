export type VirtualEvent = {
  id: string;
  officialTitle: string;
  displayTitle: string;
  organizer: string;
  organizerWebsite: string;
  category: string;
  format: string;
  originalStart: string;
  sourceTimezone: string;
  startUtc: string;
  endUtc: string | null;
  url: string;
  sourceUrl: string;
  summary: string;
  cost: "free" | "paid" | "unknown";
  price: string | null;
  score: number;
  rationale: string[];
  status: "candidate" | "approved" | "rejected" | "published" | "expired" | "canceled";
  firstDiscoveredAt: string;
  lastVerifiedAt: string | null;
  publishedAt: string | null;
  duplicateKey: string;
  aliases: string[];
  evidence: { title: string; schedule: string; attendance: string; description: string; cost: string | null };
  verification: { official: boolean; online: boolean; schedule: boolean; registration: boolean; live: boolean; checkedAt: string; error: string | null };
  approvedFingerprint: string | null;
  reviewedBy: string | null;
  reviewedAt: string | null;
  overrideReason: string | null;
  reviewNotifiedFingerprint: string | null;
  changes: string[];
};

export const DAY = 86_400_000;
export const SCORE_MAX = { relevance: 35, credibility: 25, education: 20, quality: 10, accessibility: 10 };

export function canonicalUrl(raw: string): string {
  const url = new URL(raw);
  url.hash = "";
  for (const key of [...url.searchParams.keys()]) {
    if (/^(utm_|fbclid|gclid|mc_)/i.test(key)) url.searchParams.delete(key);
  }
  url.searchParams.sort();
  url.hostname = url.hostname.replace(/^www\./, "");
  if (/^(?:uk|nl|se|la|de|es|fr|it|ch|au|in|jp|kr|ca)\.mathworks\.com$/.test(url.hostname)) url.hostname = "mathworks.com";
  url.pathname = url.pathname.replace(/\/$/, "") || "/";
  return url.toString();
}

export function duplicateKey(organizer: string, title: string, startUtc: string): string {
  const clean = (value: string) => value.normalize("NFKD").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  // Same title on a different day can be a distinct session. URL aliases handle reschedules.
  return `${clean(organizer)}|${clean(title)}|${startUtc.slice(0, 10)}`;
}

export function fingerprint(event: VirtualEvent): string {
  return JSON.stringify([event.officialTitle, event.displayTitle, event.organizer, event.organizerWebsite,
    event.category, event.format, event.originalStart, event.sourceTimezone, event.startUtc, event.endUtc,
    canonicalUrl(event.url), canonicalUrl(event.sourceUrl), event.summary, event.cost, event.price]);
}

export function verified(event: VirtualEvent, now = new Date()): boolean {
  const v = event.verification;
  return Boolean(v && v.official && v.online && v.schedule && v.registration && v.live && !v.error
    && event.lastVerifiedAt && Date.parse(event.lastVerifiedAt) <= now.getTime()
    && now.getTime() - Date.parse(event.lastVerifiedAt) < 36 * 60 * 60 * 1000
    && event.sourceTimezone && /(?:Z|[+-]\d{2}:\d{2})$/.test(event.originalStart)
    && Date.parse(event.originalStart) === Date.parse(event.startUtc)
    && Number.isFinite(Date.parse(event.startUtc))
    && (!event.endUtc || Date.parse(event.endUtc) > Date.parse(event.startUtc)));
}

export function eligible(event: VirtualEvent, now = new Date()): boolean {
  const words = event.summary.trim().split(/\s+/).length;
  return verified(event, now) && Date.parse(event.startUtc) > now.getTime()
    && Boolean(event.organizer && event.officialTitle && event.displayTitle && event.category && event.format)
    && /^https:\/\//.test(event.url) && /^https:\/\//.test(event.sourceUrl)
    && words >= 12 && words <= 24 && (event.cost !== "paid" || Boolean(event.price))
    && (event.score >= 65 || Boolean(event.overrideReason));
}

export function upcomingVirtualEvents(records: VirtualEvent[], now = new Date()): VirtualEvent[] {
  const seen = new Set<string>();
  return records.filter(event => {
    const allowed = ["approved", "published"].includes(event.status) && eligible(event, now)
      && event.approvedFingerprint === fingerprint(event)
      && Date.parse(event.startUtc) <= now.getTime() + 30 * DAY && !seen.has(event.duplicateKey);
    if (allowed) seen.add(event.duplicateKey);
    return allowed;
  }).sort((a, b) => Date.parse(a.startUtc) - Date.parse(b.startUtc)).slice(0, 20);
}

export function groupVirtualEvents<T extends { startUtc: string }>(events: T[], now = new Date()) {
  if (events.length < 4) return [{ label: null, events }];
  return [
    { label: "Next 7 Days", events: events.filter(e => Date.parse(e.startUtc) < now.getTime() + 7 * DAY) },
    { label: "Coming Up", events: events.filter(e => Date.parse(e.startUtc) >= now.getTime() + 7 * DAY) },
  ].filter(group => group.events.length);
}

export function approve(event: VirtualEvent, reviewer: string, now = new Date()) {
  if (!reviewer.trim()) throw new Error("A reviewer name is required.");
  if (!eligible(event, now)) throw new Error("Event does not pass mandatory verification and editorial checks.");
  if (["expired", "canceled"].includes(event.status)) throw new Error("An expired or canceled event cannot be approved.");
  event.status = "approved";
  event.reviewedBy = reviewer.trim();
  event.reviewedAt = now.toISOString();
  event.approvedFingerprint = fingerprint(event);
  return event;
}

export function reconcile(records: VirtualEvent[], incoming: VirtualEvent): VirtualEvent {
  const urls = new Set([incoming.sourceUrl, incoming.url, ...incoming.aliases].map(canonicalUrl));
  const existing = records.find(e => e.duplicateKey === incoming.duplicateKey
    || (e.officialTitle === incoming.officialTitle
      && [e.sourceUrl, e.url, ...e.aliases].some(url => urls.has(canonicalUrl(url)))));
  if (!existing) { records.push(incoming); return incoming; }
  const changed = fingerprint(existing) !== fingerprint(incoming);
  const rejectedFacts = (event: VirtualEvent) => JSON.stringify([event.officialTitle, event.organizer,
    event.startUtc, event.endUtc, event.cost, event.price, event.format, event.verification.online, event.verification.live]);
  const stillRejected = existing.status === "rejected" && rejectedFacts(existing) === rejectedFacts(incoming);
  const status = incoming.status === "canceled" ? "canceled" : stillRejected ? "rejected"
    : changed ? incoming.status === "rejected" ? "rejected" : "candidate" : existing.status;
  const merged = { ...incoming, id: existing.id, firstDiscoveredAt: existing.firstDiscoveredAt,
    aliases: [...new Set([...existing.aliases, existing.url, existing.sourceUrl, ...incoming.aliases])],
    status, approvedFingerprint: changed ? null : existing.approvedFingerprint,
    reviewedBy: existing.reviewedBy, reviewedAt: existing.reviewedAt, publishedAt: existing.publishedAt,
    overrideReason: existing.overrideReason,
    reviewNotifiedFingerprint: existing.reviewNotifiedFingerprint,
    changes: changed ? [...existing.changes, `Material change detected ${incoming.verification.checkedAt}`] : existing.changes };
  Object.assign(existing, merged);
  return existing;
}

export function expireEvents(records: VirtualEvent[], now = new Date()) {
  for (const event of records) {
    // Without an authoritative end, remove at start rather than invent a duration.
    if (!["canceled", "rejected"].includes(event.status)
      && Date.parse(event.endUtc ?? event.startUtc) <= now.getTime()) event.status = "expired";
  }
  return records;
}
