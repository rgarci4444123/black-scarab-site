import type { CaseStudySection } from "@/lib/case-studies";
import { complianceProviders } from "@/lib/fcc-reference";
import CoveredList from "./covered-list";
import styles from "./tools.module.css";

export type FccToolName = NonNullable<CaseStudySection["tool"]>;

function History() {
  const milestones = [
    ["2021", "The first Covered List", "The FCC publishes its initial list, naming equipment from Huawei, ZTE, Hytera, Hikvision and Dahua. Congress then passes the Secure Equipment Act."],
    ["2022", "The approval gate", "The FCC adopts rules blocking new equipment authorizations for covered equipment. The list becomes a market access question for product manufacturers."],
    ["July 2026", "Mobile robots enter the list", "A new entry covers foreign produced advanced robotic devices meeting a specific definition, with a conditional approval route."],
    ["October 13, 2026", "Certain components count too", "FCC 26-50 takes effect. Relevant electronics from named producers can affect authorization of another company’s finished device."],
  ];
  return <ol className={styles.timeline} aria-label="Covered List history">{milestones.map(([date, title, text]) => <li key={date}><span className={styles.date}>{date}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>;
}

function RobotCheck() {
  return <div className={styles.tool} aria-label="Complete robot checklist">
    <ul className={styles.checklist}>
      <li><strong>Movement:</strong> a mobile machine that moves on the ground and operates at a distance from a person through commands or sensor responses.</li>
      <li><strong>Weight:</strong> more than 4.4 pounds, including the applicable ground or docking station.</li>
      <li><strong>Sensing:</strong> a sensor that perceives its environment.</li>
      <li><strong>Connectivity:</strong> wired or wireless network capability of at least 200 kilobits per second in either direction.</li>
      <li><strong>Software:</strong> local or remote software controlling the specified navigation, movement, perception, data collection or command functions.</li>
    </ul>
    <a className={styles.textLink} href="https://www.fcc.gov/sites/default/files/robots-nsd.pdf" target="_blank" rel="noreferrer">Check the full definition and exclusions ↗</a>
    <div className={styles.callout}>
      <h3>If your robot fits, check production next</h3>
      <p>The FCC guidance requires US manufacture and domestic component costs above 65 percent of total component cost for deliveries through 2028, rising to above 75 percent from 2029. Standard purchased components count too. US assembly alone does not establish the result.</p>
      <p>Take the component origins, costs and manufacturing plan to your adviser for the calculation.</p>
      <a href="https://www.fcc.gov/covered-list-faqs-robots-inverters" target="_blank" rel="noreferrer">Open the FCC production guidance ↗</a>
    </div>
    <details className={styles.detail}>
      <summary>If you need conditional approval</summary>
      <p>Approval can cover specified models or classes of devices. Check its exact scope against your configuration. The robotics application asks for ownership and supply chain records, a detailed parts list and a dated US manufacturing plan.</p>
      <p>January 1, 2028 is the application deadline in the guidance. An application does not itself authorize a product for sale.</p>
      <a href="https://www.fcc.gov/sites/default/files/robots-ca.pdf" target="_blank" rel="noreferrer">Read the application requirements ↗</a>
    </details>
  </div>;
}

function Components() {
  const checks = [
    ["Computing board and processor", "Run the robot’s software.", "Get exact board and chip models, revisions, producer identities and records showing who controls design and assembly."],
    ["Wireless module", "Connects the robot to a network.", "Request the producer, exact module, FCC grant and instructions for installing it in the finished robot."],
    ["Cameras and sensors", "Observe the surroundings.", "Identify the processing and networking electronics inside the assembly, their producers and the planned use."],
    ["Motor and power controls", "Control motion and electrical power.", "Identify digital controllers, including the management board inside a smart battery pack, and request their part records."],
  ];
  return <div className={styles.tool} aria-label="Component records to request">
    <div className={styles.componentList}>{checks.map(([name, role, request]) => <div key={name}><h3>{name}</h3><p className={styles.role}>{role}</p><p>{request}</p></div>)}</div>
    <p className={styles.note}>Plain battery cells, passive wiring and mechanical housings are outside this component definition. They can still matter to domestic component cost calculations or separate drone rules.</p>
    <details className={styles.detail}>
      <summary>The precise electronics definition</summary>
      <p>The rule includes digital hardware generating and using timing signals above 9,000 cycles per second, specified digital telephone equipment, and hardware using radiofrequency energy to compute, store or transfer data. Software and firmware are not included in this hardware definition; separate applicable entries still need review.</p>
    </details>
  </div>;
}

function Downloads() {
  return <div className={`${styles.tool} ${styles.download}`}>
    <p className={styles.eyebrow}>Take this to your suppliers</p>
    <h3>One request. A useful evidence file.</h3>
    <p>A ready to edit request for producer identities, part revisions, manufacturing locations, approval records and substitution notices. Includes a short project brief for your reviewer.</p>
    <a className={styles.button} href="/data/fcc-supply-chain/supplier-request.txt" download>Download supplier request <span>TXT ↓</span></a>
    <details className={styles.detail}>
      <summary>What to collect</summary>
      <ul className={styles.checklist}>
        <li>Exact part number, revision and actual producer.</li>
        <li>Who designed and assembled purchased boards, and the relevant installed chips and modules.</li>
        <li>Manufacturing locations, origin evidence and component costs needed for a production review.</li>
        <li>Applicable FCC grant or conformity records, installation conditions and test reports.</li>
        <li>A supplier contact and notice of proposed substitutions or production changes.</li>
      </ul>
    </details>
  </div>;
}

function Providers() {
  const groups = [
    { title: "Which approvals does my robot need?", who: "Testing laboratory or certification body", capability: "FCC testing and authorization", text: "Ask for the approval route for the finished robot and its radio integration, the required tests and who handles Covered List review. Confirm the specific site’s FCC recognition and scope." },
    { title: "Who actually made this part?", who: "Component data and supplier research", capability: "research", text: "Start with the supplier. If its records leave gaps, ask a research provider to identify the producer and ownership links for a small sample of parts. Ask it to show the evidence behind each match." },
    { title: "Does this restriction apply to my design?", who: "FCC regulatory counsel", capability: "Regulatory legal advice", text: "Request an assessment of the exact product, producer, intended use and production plan. Bring unresolved matches and ask whether a conditional approval or further FCC guidance is needed." },
  ];
  return <div className={styles.tool} aria-label="Find the right expert">{groups.map(group => {
    const providers = complianceProviders.filter(provider => group.capability === "research" ? provider.capabilities.some(capability => ["Component intelligence", "Supplier mapping", "Restricted party screening"].includes(capability)) : provider.capabilities.includes(group.capability));
    return <details className={styles.expert} key={group.title}>
      <summary><span className={styles.entryName}>{group.title}</span><span className={styles.entryDescription}>{group.who}</span></summary>
      <p>{group.text}</p>
      <ul className={styles.providerList}>{providers.map(provider => <li key={provider.id}><a href={provider.sourceUrls[0]} target="_blank" rel="noreferrer">{provider.name} ↗</a><p>{provider.summary}</p></li>)}</ul>
      {group.capability === "research" ? <p className={styles.note}>Confirm the specific FCC coverage offered. A general supplier screening service does not settle product authorization.</p> : null}
    </details>;
  })}<p className={styles.note}>Provider service references checked October 14, 2026.</p></div>;
}

function LaunchCheck() {
  return <div className={styles.tool} aria-label="Before sale reference">
    <details className={styles.detail}><summary>A module’s FCC ID and the finished robot</summary>
      <p>A certified radio module has a grant with integration conditions. Have the lab confirm how those conditions apply to your robot and what additional testing or authorization it needs.</p>
      <p>Certification produces an FCC ID. Supplier’s Declaration of Conformity, or SDoC, is another route in which the responsible party establishes compliance and keeps supporting records. Both routes are subject to Covered List restrictions; an SDoC device may have no FCC ID.</p>
      <a href="https://apps.fcc.gov/oetcf/eas/reports/GenericSearch.cfm" target="_blank" rel="noreferrer">Find an FCC grant and its conditions ↗</a>
    </details>
    <details className={styles.detail}><summary>Selling through an online marketplace</summary>
      <p>Give the marketplace the model and approval information for the configuration you will ship. The FCC ID display requirement applies to certified devices, subject to exceptions.</p>
      <p>March 1, 2027 is the compliance date for marketplaces selling their own devices or physically accessing or taking ownership of a seller’s device. June 1, 2027 applies to the specified platforms relying on seller certifications. Exceptions include used devices, qualifying low volume sellers and qualifying existing listings until updated.</p>
      <a href="https://www.govinfo.gov/content/pkg/FR-2026-09-11/html/2026-18535.htm" target="_blank" rel="noreferrer">Read the marketplace requirements and exceptions ↗</a>
    </details>
  </div>;
}

export default function FccTool({ name }: { name: FccToolName }) {
  switch (name) {
    case "history": return <History />;
    case "robot-check": return <RobotCheck />;
    case "components": return <Components />;
    case "covered-list": return <CoveredList />;
    case "downloads": return <Downloads />;
    case "providers": return <Providers />;
    case "launch-check": return <LaunchCheck />;
  }
}
