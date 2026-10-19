import { Fragment } from "react";
import { palletizerOptions } from "@/lib/palletizer-options";
import styles from "./palletizers.module.css";

export default function PalletizerComparison() {
  return <div className={styles.comparison}>
    <p className={styles.note}>Choose the supply scope first. Packaged cells include more of the installation; industrial arms require a cell builder. Ratings below describe the named configuration.</p>
    <div className={styles.desktopComparison}>
      <table><caption className={styles.srOnly}>Eight robotic palletizing options, grouped by supply scope</caption>
        <thead><tr><th scope="col">System and type</th><th scope="col">Best application</th><th scope="col">Payload basis</th><th scope="col">Published rate</th><th scope="col">Pricing</th><th scope="col">Check first</th></tr></thead>
        <tbody>{palletizerOptions.map((option,index)=><Fragment key={option.id}>
          {index === 0 || option.group !== palletizerOptions[index-1].group ? <tr className={styles.group}><th colSpan={6} scope="colgroup">{option.group}</th></tr> : null}
          <tr><th scope="row"><a href={`#${option.id}`}>{option.name}</a><small>{option.type}</small></th><td>{option.application}</td><td><strong>{option.payload}</strong><small>{option.payloadNote}</small></td><td>{option.rate}<small>{option.rateNote}</small></td><td><strong>{option.price}</strong><small>{option.priceNote}</small></td><td>{option.limitation}</td></tr>
        </Fragment>)}</tbody>
      </table>
    </div>
    <div className={styles.mobileComparison}>{palletizerOptions.map((option,index)=><Fragment key={option.id}>
      {index === 0 || option.group !== palletizerOptions[index-1].group ? <h3>{option.group}</h3> : null}
      <details className={styles.option}>
        <summary><span><strong>{option.name}</strong><span>{option.application}</span><span className={styles.price}>{option.price}</span></span><span className={styles.expand} aria-hidden="true">+</span></summary>
        <div className={styles.optionBody}>
          <p className={styles.optionType}>{option.type}</p>
          <dl><div><dt>Payload</dt><dd>{option.payload}<small>{option.payloadNote}</small></dd></div><div><dt>Rate</dt><dd>{option.rate}<small>{option.rateNote}</small></dd></div></dl>
          <p className={styles.note}>{option.priceNote}. {option.limitation}</p>
          <a href={`#${option.id}`} className={styles.textLink}>Read our assessment</a>
        </div>
      </details>
    </Fragment>)}</div>
    <p className={styles.method}>Reviewed October 19, 2026. Cases moved can exceed picks when a tool carries several packages. Prices are regional vendor starting offers, with the exact configuration and installed scope to be quoted.</p>
  </div>;
}
