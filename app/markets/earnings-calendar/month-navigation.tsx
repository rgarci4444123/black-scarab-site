import Link from "next/link";
import styles from "./page.module.css";

export default function MonthNavigation({ selectedMonth, editions }: {
  selectedMonth: string;
  editions: { id: string; label: string }[];
}) {
  const position = editions.findIndex(edition => edition.id === selectedMonth);
  const previous = editions[position - 1];
  const next = editions[position + 1];
  const chevron = (forward: boolean) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d={forward ? "m6 3 5 5-5 5" : "m10 3-5 5 5 5"} /></svg>;

  return <nav className={styles.monthNav} aria-label="Calendar editions">
    {previous ? <Link className={styles.monthArrow} href={`?month=${previous.id}`} rel="prev" aria-label={`Previous month: ${previous.label}`}>{chevron(false)}</Link> : <button className={styles.monthArrow} type="button" disabled aria-label="No earlier calendar available">{chevron(false)}</button>}
    <span className={styles.currentMonth} aria-current="date">{editions[position].label.replace(/ \d{4}$/, "")} <span className={styles.monthYear}>{selectedMonth.slice(0, 4)}</span></span>
    {next ? <Link className={styles.monthArrow} href={`?month=${next.id}`} rel="next" aria-label={`Next month: ${next.label}`}>{chevron(true)}</Link> : <button className={styles.monthArrow} type="button" disabled aria-label="No later calendar available">{chevron(true)}</button>}
  </nav>;
}
