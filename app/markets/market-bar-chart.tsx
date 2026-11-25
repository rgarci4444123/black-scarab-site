import type { CSSProperties } from "react";
import type { MarketChart } from "@/lib/market-commentaries";
import { ChartViewport } from "./chart-viewport";
import styles from "./market-bar-chart.module.css";

export function MarketBarChart({ id, chart }: { id: string; chart: MarketChart }) {
  const [min, max] = chart.domain;
  const position = (value: number) => (100 * (value - min)) / (max - min);
  const zero = position(0);
  const titleId = `${id}-title`;

  return (
    <ChartViewport className={styles.figure} titleId={titleId}>
      {chart.metrics?.length ? (
        <div className={styles.highlights}>
          <p className={styles.metricsHeading}>{chart.metricsHeading}</p>
          <dl className={styles.metrics}>
            {chart.metrics.map(({ label, value, detail }) => (
              <div key={label}>
                <dt>{label}{detail ? <span> {detail}</span> : null}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
      <h3 id={titleId}>{chart.title}</h3>
      <p className={styles.subtitle}>{chart.subtitle}</p>
      <table className={styles.table} aria-labelledby={titleId}>
        <thead>
          <tr>
            <th scope="col">{chart.columns[0]}</th>
            <th scope="col">{chart.columns[1]}</th>
          </tr>
        </thead>
        <tbody>
          {chart.rows.map(({ label, value, display, tone }) => (
            <tr key={label} data-tone={tone}>
              <th scope="row">{label}</th>
              <td>
                <div className={styles.measure}>
                  <span className={styles.track} aria-hidden="true" style={{ "--zero": `${zero}%` } as CSSProperties}>
                    <span className={styles.bar} style={{
                      insetInlineStart: `${Math.min(zero, position(value))}%`,
                      inlineSize: `${Math.abs(position(value) - zero)}%`,
                      transformOrigin: value < 0 ? "right" : "left",
                    }} />
                  </span>
                  <span>{display}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption>{chart.caption}</figcaption>
    </ChartViewport>
  );
}
