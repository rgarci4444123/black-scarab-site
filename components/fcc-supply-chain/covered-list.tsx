"use client";

import { useState } from "react";
import { coveredEntries, coveredReference } from "@/lib/fcc-reference";
import styles from "./tools.module.css";

const formatDate = (value: string) => new Date(`${value}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

const groups = [
  { value: "Producer or provider", label: "Named producers and providers" },
  { value: "Production location", label: "Equipment categories" },
];

export default function CoveredList() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("All");
  const search = query.trim().toLocaleLowerCase();
  const entries = coveredEntries.filter(entry =>
    (kind === "All" || entry.restrictionType === kind) &&
    (!search || [entry.name, entry.displayName, ...entry.aliases, ...entry.categories, entry.explanation].join(" ").toLocaleLowerCase().includes(search))
  );

  return <div className={styles.tool} aria-label="Covered List reference">
    <div className={styles.filters}>
      <label>Producer or equipment<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try Hikvision, DJI or mobile robots" /></label>
      <label>Show<select value={kind} onChange={event => setKind(event.target.value)}>
        <option>All</option>
        {groups.map(group => <option key={group.value} value={group.value}>{group.label}</option>)}
      </select></label>
    </div>
    <p className={styles.note}>List dated {formatDate(coveredReference.officialListDate)}. Reference checked {formatDate(coveredReference.lastVerified)}.</p>
    <p className={styles.count} role="status">{entries.length} {entries.length === 1 ? "entry" : "entries"}</p>
    {groups.map(group => {
      const matches = entries.filter(entry => entry.restrictionType === group.value);
      return matches.length ? <section key={group.value} className={styles.referenceGroup}>
        <h3>{group.label}</h3>
        {matches.map(entry => <details className={styles.entry} key={entry.id}>
          <summary><span className={styles.entryName}>{entry.displayName}</span><span className={styles.entryDescription}>{entry.explanation}</span></summary>
          <div className={styles.entryBody}>
            <p><strong>Check:</strong> {entry.useRestriction}</p>
            {entry.notes.map(note => <p key={note}>{note}</p>)}
            <blockquote>{entry.officialDescription}</blockquote>
            <a href={entry.sourceUrl} target="_blank" rel="noreferrer">Read the official entry ↗</a>
          </div>
        </details>)}
      </section> : null;
    })}
    {!entries.length ? <p className={styles.empty}>No entry found in this reference. Check the legal producer name, relevant affiliates and equipment category in the <a href={coveredReference.sourceUrl} target="_blank" rel="noreferrer">official Covered List</a>.</p> : null}
    <p className={styles.handoff}><a href={`${coveredReference.sourceUrl}#conditional-approvals`} target="_blank" rel="noreferrer">Check current conditional approvals ↗</a></p>
  </div>;
}
