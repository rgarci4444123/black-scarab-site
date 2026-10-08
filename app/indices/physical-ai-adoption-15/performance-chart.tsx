"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { PhysicalAiAdoptionPerformanceObservation } from "@/lib/physical-ai-adoption-performance";
import styles from "./performance-chart.module.css";

type SeriesKey = "bspi15" | "sp500" | "nasdaqComposite";

const series = [
  { key: "bspi15" as const, name: "BSPI15", color: "#586f4c", width: 3.2 },
  { key: "sp500" as const, name: "S&P 500", color: "#8a98ab", width: 2 },
  { key: "nasdaqComposite" as const, name: "Nasdaq", color: "#bb9772", width: 2 },
];

const padding = { top: 24, right: 20, bottom: 46, left: 54 };

function formatLevel(value: number) {
  return value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatReturn(value: number) {
  return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
}

function niceTicks(minimum: number, maximum: number, count = 4) {
  const span = maximum - minimum || 1;
  const roughStep = span / count;
  const magnitude = 10 ** Math.floor(Math.log10(roughStep));
  const normalized = roughStep / magnitude;
  const step = (normalized < 1.5 ? 1 : normalized < 3 ? 2 : normalized < 7 ? 5 : 10) * magnitude;
  const start = Math.floor(minimum / step) * step;
  const end = Math.ceil(maximum / step) * step;
  const ticks: number[] = [];

  for (let value = start; value <= end + step / 2; value += step) {
    ticks.push(Number(value.toFixed(6)));
  }

  return ticks;
}

function interpolate(a: number, b: number, amount: number) {
  return a + (b - a) * amount;
}

export default function PerformanceChart({
  observations,
}: {
  observations: PhysicalAiAdoptionPerformanceObservation[];
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(960);
  const [hoverRatio, setHoverRatio] = useState<number | null>(null);
  const [visible, setVisible] = useState<Record<SeriesKey, boolean>>({
    bspi15: true,
    sp500: true,
    nasdaqComposite: true,
  });

  useEffect(() => {
    const element = wrapRef.current;
    if (!element) return;

    const updateWidth = () => setWidth(Math.max(320, Math.round(element.clientWidth)));
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const height = width < 560 ? 286 : 380;
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const latest = observations[observations.length - 1];
  const first = observations[0];

  const domain = useMemo(() => {
    const values = observations.flatMap((observation) =>
      series.filter((item) => visible[item.key]).map((item) => observation[item.key]),
    );
    const minimum = Math.min(...values, 1000);
    const maximum = Math.max(...values, 1000);
    const range = maximum - minimum || 4;
    return { minimum: minimum - range * 0.14, maximum: maximum + range * 0.16 };
  }, [observations, visible]);

  const ticks = niceTicks(domain.minimum, domain.maximum, width < 560 ? 3 : 4);
  const tickMinimum = Math.min(...ticks);
  const tickMaximum = Math.max(...ticks);

  const x = (index: number) =>
    padding.left + (observations.length === 1 ? 0 : (index / (observations.length - 1)) * plotWidth);
  const y = (value: number) =>
    padding.top + ((tickMaximum - value) / (tickMaximum - tickMinimum || 1)) * plotHeight;
  const pathFor = (key: SeriesKey) =>
    observations
      .map((observation, index) => `${index === 0 ? "M" : "L"}${x(index).toFixed(2)},${y(observation[key]).toFixed(2)}`)
      .join(" ");

  const areaPath = `${pathFor("bspi15")} L${x(observations.length - 1).toFixed(2)},${(
    height - padding.bottom
  ).toFixed(2)} L${x(0).toFixed(2)},${(height - padding.bottom).toFixed(2)} Z`;

  const hover = useMemo(() => {
    if (hoverRatio === null || observations.length < 2) return null;
    const exactIndex = hoverRatio * (observations.length - 1);
    const leftIndex = Math.min(Math.floor(exactIndex), observations.length - 2);
    const amount = exactIndex - leftIndex;
    const left = observations[leftIndex];
    const right = observations[leftIndex + 1];

    return {
      x: padding.left + hoverRatio * plotWidth,
      label: amount < 0.5 ? left.dateLabel : right.dateLabel,
      values: Object.fromEntries(
        series.map((item) => [item.key, interpolate(left[item.key], right[item.key], amount)]),
      ) as Record<SeriesKey, number>,
    };
  }, [hoverRatio, observations, plotWidth]);

  function updateHover(clientX: number) {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const svgX = ((clientX - rect.left) / rect.width) * width;
    setHoverRatio(Math.max(0, Math.min(1, (svgX - padding.left) / plotWidth)));
  }

  return (
    <div className={styles.shell}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Latest market close</h3>
        </div>
        <div className={styles.asOf}>
          <p className={styles.asOfLabel}>As of</p>
          <p className={styles.asOfDate}>{latest.dateLabel}</p>
        </div>
      </div>

      <div className={styles.metrics} aria-label="Latest index levels">
        {series.map((item) => {
          const returnSinceLaunch = (latest[item.key] / first[item.key] - 1) * 100;
          return (
            <div className={styles.metric} key={item.key}>
              <div className={styles.metricName}>
                <span className={styles.metricSwatch} style={{ backgroundColor: item.color }} aria-hidden="true" />
                <span className={styles.metricLabel}>{item.name}</span>
              </div>
              <p className={styles.metricValue}>{formatLevel(latest[item.key])}</p>
              <p className={styles.metricDelta}>{formatReturn(returnSinceLaunch)} since launch</p>
            </div>
          );
        })}
      </div>

      <div className={styles.chartHeader}>
        <p className={styles.unit}>Index level</p>
        <div className={styles.legend} aria-label="Toggle chart series">
          {series.map((item) => (
            <button
              className={styles.legendButton}
              key={item.key}
              type="button"
              aria-pressed={visible[item.key]}
              onClick={() =>
                setVisible((current) => ({ ...current, [item.key]: !current[item.key] }))
              }
            >
              <span className={styles.legendSwatch} style={{ backgroundColor: item.color }} aria-hidden="true" />
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div
        className={styles.chartWrap}
        ref={wrapRef}
        onPointerMove={(event) => updateHover(event.clientX)}
        onPointerLeave={() => setHoverRatio(null)}
        onPointerDown={(event) => updateHover(event.clientX)}
      >
        <svg
          className={styles.svg}
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-labelledby="performance-chart-title performance-chart-description"
        >
          <title id="performance-chart-title">BSPI15 performance against the S&amp;P 500 and Nasdaq Composite</title>
          <desc id="performance-chart-description">Currency neutral price return levels rebased to 1,000 on October 1, 2026.</desc>
          <defs>
            <linearGradient id="bspi-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#90ad83" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#90ad83" stopOpacity="0" />
            </linearGradient>
            <clipPath id="performance-clip">
              <rect x={padding.left} y={padding.top} width={plotWidth} height={plotHeight} />
            </clipPath>
          </defs>

          {ticks.map((tick) => (
            <g key={tick}>
              <line
                x1={padding.left}
                x2={width - padding.right}
                y1={y(tick)}
                y2={y(tick)}
                stroke={tick === 1000 ? "rgba(112,133,99,0.32)" : "rgba(122,131,112,0.13)"}
                strokeDasharray={tick === 1000 ? "5 7" : undefined}
                vectorEffect="non-scaling-stroke"
              />
              <text x={padding.left - 12} y={y(tick) + 4} textAnchor="end" fill="#7f8b7c" fontSize="11">
                {tick.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </text>
            </g>
          ))}

          <g clipPath="url(#performance-clip)">
            {visible.bspi15 ? <path d={areaPath} fill="url(#bspi-area)" /> : null}
            {series.map((item) =>
              visible[item.key] ? (
                <path
                  key={item.key}
                  d={pathFor(item.key)}
                  fill="none"
                  stroke={item.color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={item.width}
                  vectorEffect="non-scaling-stroke"
                />
              ) : null,
            )}

            {hover ? (
              <>
                <line
                  x1={hover.x}
                  x2={hover.x}
                  y1={padding.top}
                  y2={height - padding.bottom}
                  stroke="rgba(112,133,99,0.4)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                {series.map((item) =>
                  visible[item.key] ? (
                    <circle
                      key={item.key}
                      cx={hover.x}
                      cy={y(hover.values[item.key])}
                      r={item.key === "bspi15" ? 5 : 4}
                      fill="#fffdfa"
                      stroke={item.color}
                      strokeWidth="2.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  ) : null,
                )}
              </>
            ) : null}
          </g>

          {observations.map((observation, index) => {
            const show = width < 560
              ? index === 0 || index === observations.length - 1
              : index === 0 || index === observations.length - 1 || index % 2 === 0;
            return show ? (
              <text
                key={observation.date}
                x={x(index)}
                y={height - 17}
                textAnchor={index === 0 ? "start" : index === observations.length - 1 ? "end" : "middle"}
                fill="#7f8b7c"
                fontSize="11"
              >
                {observation.dateLabel.replace(", 2026", "")}
              </text>
            ) : null;
          })}

          <rect
            x={padding.left}
            y={padding.top}
            width={plotWidth}
            height={plotHeight}
            fill="transparent"
          />
        </svg>

        {hover ? (
          <div
            className={styles.tooltip}
            role="tooltip"
            style={{
              left: `${Math.max(118, Math.min(width - 118, hover.x))}px`,
              top: `${Math.max(120, y(hover.values.bspi15))}px`,
            }}
          >
            <p className={styles.tooltipDate}>{hover.label}</p>
            <div className={styles.tooltipRows}>
              {series.map((item) =>
                visible[item.key] ? (
                  <div className={styles.tooltipRow} key={item.key}>
                    <span className={styles.legendSwatch} style={{ backgroundColor: item.color }} aria-hidden="true" />
                    <span>{item.name}</span>
                    <strong>{formatLevel(hover.values[item.key])}</strong>
                  </div>
                ) : null,
              )}
            </div>
          </div>
        ) : null}
      </div>

      <div className={styles.footer}>
        <span><strong>October 1, 2026</strong> = 1,000</span>
        <span>Currency neutral price return</span>
      </div>
    </div>
  );
}
