import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import companyMarkData from "@/data/earnings/company-marks.json";
import { notFound } from "next/navigation";
import { getEarningsCalendar, getEditionRegistry, getCalendarWeeks } from "@/lib/earnings/calendar";
import styles from "./page.module.css";
import MonthNavigation from "./month-navigation";

const companyMarks: Record<string, { file: string }> = companyMarkData;

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Physical AI Earnings Calendar",
  description: "Track earnings across 35 companies shaping Physical AI. Download Black Scarab’s monthly earnings calendar as a shareable image or PDF.",
  alternates: { canonical: "/markets/earnings-calendar" },
  openGraph: { title: "Physical AI Earnings Calendar | Black Scarab", url: "/markets/earnings-calendar", type: "website" },
};

export default async function EarningsCalendarPage({ searchParams }: { searchParams: Promise<{ month?: string }> }) {
  const { month } = await searchParams;
  const [calendar, registry] = await Promise.all([getEarningsCalendar(month), getEditionRegistry()]);
  if (!calendar) notFound();
  const download = `/markets/earnings-calendar/download?month=${calendar.id}`;
  const weeks = getCalendarWeeks(calendar);
  const estimated = weeks.some(week => week.some(day => day?.companies.some(company => company.status === "estimated")));
  const tbd = calendar.companies.filter(company => calendar.tbdCompanyIds.includes(company.id));
  return <div className={styles.scope}>
    <header className={styles.intro}>
      <h1>Physical AI Earnings Calendar</h1>
      <p>Track earnings across 35 companies shaping Physical AI.</p>
    </header>
    <section className={styles.edition} aria-label={`${calendar.label} earnings calendar`}>
      <div className={styles.calendarToolbar}>
      <Link className={styles.back} href="/markets">← Markets</Link>
      <MonthNavigation selectedMonth={calendar.id} editions={registry.editions.map(({ id, label }) => ({ id, label }))} />
      <span aria-hidden="true" />
      </div>
      <div className={styles.calendarViewport} role="region" aria-label="Monthly calendar" tabIndex={0}><div className={styles.calendar} role="table" aria-label={calendar.label}>
        <div className={styles.weekdays} role="row">{["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => <div role="columnheader" key={day}><span className={styles.fullDay}>{day}</span><span className={styles.shortDay}>{day.slice(0, 3)}</span></div>)}</div>
        {weeks.map((week, index) => <div className={styles.week} role="row" key={index}>
          {week.map((day, dayIndex) => <div role="cell" key={day?.date ?? `empty-${dayIndex}`} className={`${styles.day} ${day ? "" : styles.empty}`}>
            {day ? <><time dateTime={day.date} className={styles.dayNumber}>{day.day}</time><ul className={styles.events}>{day.companies.map(company => <li key={company.id}><a href={company.sourceUrl!} target="_blank" rel="noopener noreferrer" aria-label={`${company.name}, ${company.ticker}, ${day.date}${company.status === "estimated" ? ", estimated" : ""}`}><span className={styles.company}>{company.name}</span><span className={styles.security}>{companyMarks[company.ticker] ? <Image className={styles.companyMark} src={companyMarks[company.ticker].file} alt="" width={15} height={15} unoptimized /> : null}<span className={styles.ticker}>{company.ticker}{company.status === "estimated" ? <sup>*</sup> : null}</span></span></a></li>)}</ul></> : null}
          </div>)}
        </div>)}
      </div>
      </div>
      <div className={styles.notes}><div className={styles.noteText}>{estimated ? <span>* Estimated</span> : null}{estimated && tbd.length ? <span aria-hidden="true"> · </span> : null}{tbd.length ? <span>Dates TBD: {tbd.map(company => company.name).join(", ")}</span> : null}</div></div>
      <div className={styles.downloads}>
        <a href={`${download}&format=png`} download>Download Image <span>(PNG)</span></a>
        <a href={`${download}&format=pdf`} download>Download PDF</a>
        <a href={`${download}&format=ics`} download>Add to Calendar <span>(iCal)</span></a>
      </div>
    </section>
  </div>;
}
