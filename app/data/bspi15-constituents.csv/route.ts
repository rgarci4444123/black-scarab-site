import { physicalAiAdoptionConstituents } from "@/lib/physical-ai-adoption-index";
import { latestPhysicalAiAdoptionPerformance } from "@/lib/physical-ai-adoption-performance";

function csvCell(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

export function GET() {
  const latest = latestPhysicalAiAdoptionPerformance;
  const rows = [
    ["Company", "Ticker", "Exchange", "Country", "Exposure Sleeve", "Weight", "Role", "As of"],
    ...physicalAiAdoptionConstituents.map((company) => {
      const weight = latest.constituentWeights[company.ticker];
      if (!Number.isFinite(weight)) {
        throw new Error(`Missing current index weight for ${company.ticker}`);
      }
      return [
        company.company,
        company.ticker,
        company.exchange,
        company.country,
        company.sleeve,
        `${weight.toFixed(2)}%`,
        company.role,
        latest.date,
      ];
    }),
  ];

  return new Response(`${rows.map((row) => row.map(csvCell).join(",")).join("\r\n")}\r\n`, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="bspi15-constituents-${latest.date}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
