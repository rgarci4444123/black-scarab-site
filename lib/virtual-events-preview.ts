export function allowsLocalVirtualEventsPreview(settings: {
  nodeEnv?: string; enabled?: string; host: string | null; vercel?: string;
}) {
  return settings.nodeEnv === "development" && settings.enabled === "1" && !settings.vercel
    && /^(localhost|127\.0\.0\.1|\[::1\])(?::\d{1,5})?$/.test(settings.host?.toLowerCase() ?? "");
}
