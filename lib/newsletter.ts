export const newsletterName = "Black Scarab Weekly";
export const newsletterCadence = "Thursdays at 10:00 a.m. Eastern";

export function isValidNewsletterEmail(email: unknown): email is string {
  return (
    typeof email === "string" &&
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  );
}

export function normalizeNewsletterSource(source: unknown) {
  if (typeof source !== "string") {
    return "website";
  }

  const normalized = source
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9:_-]+/g, "-")
    .slice(0, 120);

  return normalized || "website";
}
