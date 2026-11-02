import type { FamilyId, Occupation } from './types';
const roles: Record<FamilyId, [string, string][]> = {
  "hardware-manufacturing": [
    ["Mechanical Engineer", "Designs the structures, mechanisms and enclosures of a robot, using load analysis, tolerances and prototypes to turn motion requirements into physical parts."],
    ["Electrical Engineer", "Designs circuits, power distribution and sensor interfaces, then brings up and tests the electronics that connect the robot’s components."],
    ["Embedded Software Engineer", "Writes firmware, device drivers and real-time software that read sensors, communicate with electronics and command hardware."],
    ["Manufacturing Engineer", "Develops assembly processes, fixtures, work instructions and production checks so a robot can be built consistently at scale."],
    ["Hardware Test Engineer", "Builds instrumented tests for components and assemblies, measures performance and durability, and investigates physical failures."],
  ],
  "intelligence-autonomy": [
    ["Robot Learning Engineer", "Trains and evaluates policies that learn physical tasks from demonstrations, interaction or rewards, then tests how those policies transfer to robots."],
    ["Perception Engineer", "Turns camera and other sensor data into information about objects and surroundings through computer vision, tracking and sensor fusion."],
    ["Motion Planning Engineer", "Develops algorithms that choose feasible paths and trajectories around obstacles, task requirements and the robot’s physical limits."],
    ["Robotics Controls Engineer", "Uses models, feedback and optimization to make the robot execute movement with stability, precision and predictable responses."],
    ["Localization & Mapping Engineer", "Estimates where a robot is and builds or maintains its map, using geometry, state estimation and sensor measurements."],
  ],
  "platforms-simulation": [
    ["Simulation Engineer", "Builds virtual environments, physics and sensor models so teams can develop robots and test behavior under repeatable conditions."],
    ["Robotics Platform Engineer", "Builds shared runtime software, communication interfaces and developer tools that connect and support the robot’s software components."],
    ["Robotics Data Engineer", "Creates pipelines for recording, synchronizing, checking and retrieving robot data so it can support training and evaluation."],
    ["Machine Learning Infrastructure Engineer", "Builds the computing and software systems used to train, evaluate, version and reproduce machine learning experiments efficiently."],
    ["Verification & Validation Engineer", "Defines system tests, runs scenarios and investigates regressions to establish whether a robot meets its requirements."],
  ],
  "integration-operations": [
    ["Systems Integration Engineer", "Connects robots, sensors, tooling and software into a working application, then checks its performance against the customer’s requirements."],
    ["Industrial Automation Engineer", "Programs PLCs, machine interfaces and industrial controls that coordinate robots with conveyors, equipment and production processes."],
    ["Systems Safety Engineer", "Identifies hazards, defines safety requirements and builds the evidence and reasoning needed to assess risk across a system’s lifecycle."],
    ["Field Service Engineer", "Diagnoses and repairs deployed equipment, carries out preventive maintenance and helps restore reliable operation at customer sites."],
    ["Robot Operations Specialist", "Runs robot missions or shifts, monitors performance, handles interventions and records issues for engineering and service teams."],
  ],
};
export const occupations: Occupation[] = Object.entries(roles).flatMap(([familyId, entries]) =>
  entries.map(([title, summary]) => {
    const slug = title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
    return { id: slug, slug, title, summary, aliases: [], primaryFamilyId: familyId as FamilyId,
      track: 'technical' as const, specializations: [], status: 'foundation' as const, lastReviewed: null };
  })
);
// Cross-functional profiles can use primaryFamilyId: null and track: 'cross-functional'.
export const occupationsFor = (familyId: FamilyId) => occupations.filter(role => role.primaryFamilyId === familyId && ['foundation', 'published'].includes(role.status));
