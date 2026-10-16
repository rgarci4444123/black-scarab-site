import covered from "../data/fcc-supply-chain/covered-list.json";
import directory from "../data/fcc-supply-chain/providers.json";
import resources from "../data/fcc-supply-chain/resources.json";

export type CoveredEntry = (typeof covered.entries)[number];
export type Provider = (typeof directory.providers)[number];
export const coveredReference = covered;
export const coveredEntries = covered.entries;
export const complianceProviders = directory.providers;
export const officialResources = resources;

export const componentCategories = [
  { name: "Main processor", check: "Identify the chipmaker and the processor’s digital functions." },
  { name: "Embedded computing board", check: "List the installed chips and modules. Establish who controls board design and assembly." },
  { name: "Wireless communications module", check: "Get the maker’s name, FCC grant and instructions for installing it in the robot." },
  { name: "Camera system", check: "Check its processing and networking electronics, maker and planned surveillance use." },
  { name: "Sensor module", check: "Check for a digital controller or radio inside the sensor assembly." },
  { name: "Motor controller", check: "Identify the maker and digital control functions." },
  { name: "Power electronics", check: "Check the digital controls. Apply the separate inverter definition to grid connected equipment." },
  { name: "Battery cells", check: "Plain cells are outside the component definition. Review a smart pack’s management board separately." },
  { name: "Wiring", check: "Passive wiring is outside the component definition. Check any built in repeater or controller." },
  { name: "Mechanical housing", check: "A plain housing is outside the component definition. Review electronics supplied inside it separately." },
] as const;

export const screeningSteps = [
  ["Start with the robot", "Record the model and intended use. Check whether the complete machine faces a production restriction."],
  ["Check the FCC route", "Ask the lab or TCB which approvals and module conditions apply."],
  ["Get the full BOM", "Include the parts inside purchased boards, optional modules and approved substitutes."],
  ["Identify the makers", "Get supplier records showing who designed and made each relevant assembly."],
  ["Find the entry", "Check producer names and affiliates, plus any production category that applies."],
  ["Apply the component test", "Check the digital functions and whether the robot would be barred if that maker built it. Confirm any use condition or exception."],
  ["Fill the gaps", "Request the missing part specifications, production records, ownership documents or FCC grants."],
  ["Resolve uncertain cases", "Take the part records and planned configuration to FCC counsel and the lab or TCB before filing."],
  ["Keep the decision record", "Save the sources, supplier evidence and reviewer’s decision with the design revision."],
  ["Recheck changes", "Review supplier, part, software, production or use changes that could affect the result."],
] as const;
