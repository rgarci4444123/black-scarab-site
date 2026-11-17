import "server-only";
import { upcomingVirtualEvents, fingerprint, manuallyVerified, DAY, type VirtualEvent } from "@/lib/virtual-events";
import { verifyCandidate } from "@/scripts/virtual-events/evidence.mjs";
import { fetchPage } from "@/scripts/virtual-events/network.mjs";

export async function verifiedPublicEvents(records: VirtualEvent[], now = new Date()) {
  const approved = records.filter(e => ["approved", "published"].includes(e.status)
    && e.approvedFingerprint === fingerprint(e) && Date.parse(e.startUtc) > now.getTime()
    && Date.parse(e.startUtc) <= now.getTime() + 30 * DAY)
    .sort((a,b) => Date.parse(a.startUtc) - Date.parse(b.startUtc)).slice(0, 20);
  const checked = await Promise.all(approved.map(async record => {
    // Runtime health checks keep already-approved events fresh without daily editorial merges.
    const event = structuredClone(record);
    await verifyCandidate(event, url => fetchPage(url, { next: { revalidate: 300 } }), now);
    if (event.verification.error && !manuallyVerified(event, now)) console.warn("Virtual event hidden", { id: event.id, reason: event.verification.error });
    return event;
  }));
  return upcomingVirtualEvents(checked, now);
}
