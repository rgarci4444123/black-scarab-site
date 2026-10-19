import styles from "./palletizers.module.css";

export default function PalletizerCellDiagram() {
  return <figure className={styles.cellFigure}>
    <div className={styles.cellFlow} aria-label="Palletizing cell workflow">
      <div className={styles.cellStage}><span className={styles.stageNumber}>01</span><h3>Present</h3><div className={styles.conveyor} aria-hidden="true"><i/><i/><i/></div><p>Conveyor, stops and sensors align the package.</p></div>
      <span className={styles.flowArrow} aria-hidden="true">→</span>
      <div className={styles.cellStage}><span className={styles.stageNumber}>02</span><h3>Pick and place</h3><div className={styles.robotIcon} aria-hidden="true"><svg viewBox="0 0 150 85"><path d="M21 76h52M47 76V53l37-18 26 13M47 53l-9-33 48-8 24 36" fill="none" stroke="currentColor" strokeWidth="9" strokeLinejoin="round"/><circle cx="47" cy="53" r="9" fill="#6f8a7a"/><circle cx="86" cy="12" r="8" fill="#6f8a7a"/><path d="M100 51h25m-21 2v6m17-6v6" stroke="currentColor" strokeWidth="3"/><rect x="99" y="61" width="28" height="18" fill="#c5a77f"/></svg></div><p>Robot and gripper build the selected pattern.</p></div>
      <span className={styles.flowArrow} aria-hidden="true">→</span>
      <div className={styles.cellStage}><span className={styles.stageNumber}>03</span><h3>Exchange and exit</h3><div className={styles.palletIcon} aria-hidden="true"><i/><i/><i/><i/><i/><i/></div><p>Clear a stable load and supply the next pallet.</p></div>
    </div>
    <div className={styles.controlBand}><strong>Cell controls and safeguarding</strong><span>Coordinate the infeed, robot, pallet positions and operator access.</span></div>
    <figcaption>Functional workflow. The installation may use two pallet positions, automatic exchange and separate sheet handling.</figcaption>
  </figure>;
}
