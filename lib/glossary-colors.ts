// Nine distinct shades within a restrained blue, teal, and violet palette.
export const glossaryCategoryColors: Record<string, string> = {
  "Foundations": "#005BDD",
  "Models and Learning": "#6D28D9",
  "Compute and Memory": "#9630B8",
  "Sensors and Perception": "#008170",
  "Navigation and Control": "#0072A8",
  "Robotics and Actuation": "#2459C5",
  "Simulation and Data": "#4F46D9",
  "Software and Connectivity": "#007D91",
  "Industry and Safety": "#007A49",
};

export function glossaryCategoryColor(category: string): string {
  return glossaryCategoryColors[category] ?? "#626a74";
}
