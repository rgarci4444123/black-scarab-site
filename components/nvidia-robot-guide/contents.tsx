import styles from "./guide.module.css";

const sections = [
  ["step-1", "Virtual workcell"],
  ["step-2", "Robot policy"],
  ["step-3", "Demonstrations"],
  ["step-4", "Simulation testing"],
  ["step-5", "Cosmos augmentation"],
  ["step-6", "Reinforcement learning"],
  ["step-7", "Sim2Real"],
  ["step-8", "Onboard deployment"],
  ["step-9", "Continuous improvement"],
] as const;

export default function RobotGuideContents() {
  return (
    <nav aria-label="Guide contents" className={styles.contents}>
      <details>
        <summary id="guide-contents-title">
          <span>In this guide</span>
          <span className={styles.contentsToggle} aria-hidden="true" />
        </summary>
        <ul>{sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
      </details>
    </nav>
  );
}
