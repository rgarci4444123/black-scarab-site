import sharp from "sharp";
import { calendarIcal } from "@/lib/earnings/ical";
import { getEarningsCalendar } from "@/lib/earnings/calendar";
import { calendarArtwork, calendarPdf } from "@/lib/earnings/export";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const format = params.get("format") ?? "pdf";
  if (format !== "pdf" && format !== "png" && format !== "ics" && format !== "jpg") return new Response("Choose pdf, png, jpg or ics.", { status: 400 });
  const calendar = await getEarningsCalendar(params.get("month") ?? undefined);
  if (!calendar) return new Response("Calendar edition not found.", { status: 404 });
  if (format === "ics") return new Response(calendarIcal(calendar), { headers: {
    "Content-Type": "text/calendar; charset=utf-8",
    "Content-Disposition": `attachment; filename="black-scarab-physical-ai-earnings-${calendar.id}.ics"`,
    "Cache-Control": "no-store",
    "X-Robots-Tag": "noindex",
  } });
  const svg = await calendarArtwork(calendar);
  const file = format === "png" ? await sharp(svg).png().toBuffer() : format === "jpg" ? await sharp(svg).jpeg({ quality: 95, chromaSubsampling: "4:4:4" }).toBuffer() : await calendarPdf(svg);
  const filename = `black-scarab-physical-ai-earnings-${calendar.id}.${format}`;
  return new Response(new Uint8Array(file), { headers: {
    "Content-Type": format === "pdf" ? "application/pdf" : format === "jpg" ? "image/jpeg" : "image/png",
    "Content-Disposition": `${params.get("inline") === "1" ? "inline" : "attachment"}; filename="${filename}"`,
    "Cache-Control": "no-store",
    "X-Robots-Tag": "noindex",
  } });
}
