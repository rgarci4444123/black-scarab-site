import type { FamilyId, Occupation } from './types';
const roles: Record<FamilyId, [string, string][]> = {
  'hardware-manufacturing': [
    ['Mechanical Engineer', 'Designs structures, joints, enclosures, and mechanisms around loads, motion, and physical constraints.'],
    ['Mechatronics Engineer', 'Combines mechanical assemblies, electronics, sensors, and control into working electromechanical systems.'],
    ['Electrical Engineer', 'Designs power distribution, circuits, wiring, and electrical interfaces for intelligent machines.'],
    ['Embedded Firmware Engineer', 'Writes the low-level software that connects processors to sensors, motors, and other hardware.'],
    ['Actuator Engineer', 'Develops the motor, transmission, sensing, and drive systems that produce controlled movement.'],
    ['Manufacturing Engineer', 'Turns a product design into a repeatable assembly, inspection, and production process.'],
    ['Robotics Technician', 'Assembles, wires, calibrates, and tests robotic hardware and diagnoses faults during development and production.'],
  ],
  'intelligence-autonomy': [
    ['Robot Learning Engineer', 'Develops and evaluates policies that let robots learn actions from demonstrations, experience, or rewards.'],
    ['Computer Vision Engineer', 'Builds algorithms that extract objects, features, and spatial information from images and video.'],
    ['Robotics Perception Engineer', 'Combines sensor inputs into an estimate of the robot’s surroundings and relevant objects.'],
    ['Motion Planning Engineer', 'Develops algorithms that choose feasible paths and trajectories around obstacles and physical limits.'],
    ['Robotics Controls Engineer', 'Designs feedback algorithms that turn desired movement into stable, precise machine behavior.'],
    ['Localization & Mapping Engineer', 'Builds methods for estimating a robot’s position and constructing maps of its environment.'],
    ['Autonomy Research Scientist', 'Investigates new methods for machine decision-making and tests their capabilities and limitations.'],
  ],
  'platforms-simulation': [
    ['Robotics Simulation Engineer', 'Builds virtual environments, sensor models, and physics-based tests for developing robotic systems.'],
    ['Digital Twin Engineer', 'Connects a digital representation to physical-system data so teams can inspect and test operational scenarios.'],
    ['Robotics Middleware Engineer', 'Builds the communication, interfaces, and runtime services connecting robot software components.'],
    ['Robotics Data Engineer', 'Creates pipelines for recording, organizing, validating, and retrieving robot and sensor data.'],
    ['Machine Learning Infrastructure Engineer', 'Builds the systems used to train, evaluate, version, and deploy machine learning models.'],
    ['GPU Systems Engineer', 'Configures and optimizes accelerated computing systems for simulation, training, and inference workloads.'],
    ['Robotics Test Automation Engineer', 'Builds repeatable software and hardware-in-the-loop tests that catch regressions in robotic systems.'],
  ],
  'integration-operations': [
    ['Robotics Systems Integration Engineer', 'Connects robots, tooling, sensors, and software into a complete system for a specific application.'],
    ['Industrial Automation Engineer', 'Develops PLC logic, machine interfaces, and industrial controls that coordinate a production process.'],
    ['Robotics Commissioning Engineer', 'Brings installed systems into service through configuration, site testing, and acceptance checks.'],
    ['Functional Safety Engineer', 'Analyzes hazardous system behavior and develops and verifies safety-related control functions.'],
    ['Field Robotics Engineer', 'Diagnoses and resolves hardware and software problems in robots operating at customer sites.'],
    ['Robotics Fleet Operations Engineer', 'Monitors deployed robots, investigates operational incidents, and improves fleet reliability.'],
    ['Robotics Maintenance Technician', 'Inspects, services, troubleshoots, and repairs deployed robotic equipment.'],
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
