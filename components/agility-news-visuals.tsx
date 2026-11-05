import styles from './agility-news-visuals.module.css';

const peers = [
  { company: 'Agility', revenue: '1.8', margin: '(151%)', result: '(138.1)', profitable: false },
  { company: 'Unitree', revenue: '236.4', margin: '60.4%', result: '38.7', profitable: true },
  { company: 'UBTECH', revenue: '278.4', margin: '37.7%', result: '(109.9)', profitable: false },
];

export function PeerFinancials() {
  return <figure id="peer-financials" data-editorial-visual="humanoid-peer-financials" className={styles.figure}>
    <header className={styles.heading}>
      <h3 className={styles.title}>Humanoid maker fundamentals</h3>
      <p className={styles.subtitle}>FY2025 · US$ millions, except gross margin</p>
    </header>
    <table className={styles.table}>
      <caption className="sr-only">Consolidated companywide financial results. Parentheses indicate losses.</caption>
      <colgroup><col style={{width:'24%'}}/><col style={{width:'24%'}}/><col style={{width:'26%'}}/><col style={{width:'26%'}}/></colgroup>
      <thead><tr><th scope="col">Company</th><th scope="col">Revenue</th><th scope="col">Gross<br/>margin</th><th scope="col">Net<br/>result</th></tr></thead>
      <tbody>{peers.map(peer => <tr key={peer.company}>
        <th scope="row">{peer.company}</th>
        <td>{peer.revenue}</td>
        <td className={peer.company === 'Agility' ? styles.negative : styles.positive}>{peer.margin}</td>
        <td className={`${styles.result} ${peer.profitable ? styles.positive : styles.negative}`}>{peer.result}</td>
      </tr>)}</tbody>
    </table>
    <figcaption className={styles.caption}>Companywide results. RMB translated at the 2025 average of 7.1875 per U.S. dollar. Gross margins use consolidated revenue and cost of sales. Parentheses indicate losses.</figcaption>
  </figure>;
}

const applications = [
  { label: 'Entertainment and performance', share: 26 },
  { label: 'Data production', share: 22 },
  { label: 'Other applications', share: 52 },
];

export function MarketRevenue() {
  return <figure id="market-revenue" data-editorial-visual="humanoid-revenue-applications" className={styles.figure}>
    <header className={styles.heading}>
      <h3 className={styles.title}>Humanoid sales by application</h3>
      <p className={styles.subtitle}>Share of estimated global sales revenue, 2025</p>
    </header>
    {applications.map(application => <div key={application.label} className={styles.application}>
      <div className={styles.applicationLabel}><span>{application.label}</span><strong>{application.share}%</strong></div>
      <div aria-hidden="true" className={styles.track}><div className={styles.bar} style={{width:`${application.share}%`}}/></div>
    </div>)}
    <figcaption className={styles.caption}>Source: Counterpoint Research, February 2026.</figcaption>
  </figure>;
}
