// Exact zero-state unit-step response of wn² / (s² + 2ζwn s + wn²), 0 < ζ < 1.
export function secondOrderStepResponse(timeSeconds:number,dampingRatio:number,naturalFrequency:number) {
  const dampedFrequency=naturalFrequency*Math.sqrt(1-dampingRatio*dampingRatio);
  return 1-Math.exp(-dampingRatio*naturalFrequency*timeSeconds)*(Math.cos(dampedFrequency*timeSeconds)+dampingRatio/Math.sqrt(1-dampingRatio*dampingRatio)*Math.sin(dampedFrequency*timeSeconds));
}
