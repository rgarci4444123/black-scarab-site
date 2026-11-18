import "server-only";
import { upcomingVirtualEvents, type VirtualEvent } from "@/lib/virtual-events";

export function approvedPublicEvents(records: VirtualEvent[], now = new Date()) {
  return upcomingVirtualEvents(records, now);
}
