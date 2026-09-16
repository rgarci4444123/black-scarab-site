# Robot actuators deep dive production notes

## Status

Website draft created September 15, 2026. The article has not been deployed or described as live. No LinkedIn or X edition has been created or published.

Working title: `What Are Robot Actuators? Motors, Gears, Costs, and Companies`

Canonical path after deployment: `https://www.blackscarab.ai/insights/what-are-robot-actuators-motors-gears-costs-companies`

## Editorial position

The article treats an actuator as an integrated motion system, not merely a motor. It separates motor, transmission, bearings, sensing, braking, electronics, housing, thermal behavior, and service requirements.

The supplier map identifies commercially relevant companies by component layer. A company offering a suitable product is not presented as evidence that the product is installed in a named robot.

The connection to physical AI remains implicit through the hardware, control, and commercial analysis.

## Verified facts and company claims

* Universal Robots publishes six rotating joints for its current articulated arms.
* Unitree publishes 23 joint motors for the base G1 and 23 to 43 degrees of freedom for configurable G1 EDU systems.
* Schaeffler states that an average humanoid uses 25 to 30 actuators in major body joints. The company also describes an integrated planetary actuator that combines a two stage gearbox, motor, encoder, and controller.
* Harmonic Drive Systems states that vertically articulated robots typically use six reducers and compact or collaborative robots commonly use five to six. Its report also illustrates up to 15 reducer equipped joints per humanlike hand.
* Nabtesco estimates that it holds about 60 percent of the precision reduction gear market for medium and large industrial robot joints.
* maxon publicly identifies its motors, gearboxes, and encoders in the Reachy 2 Orbita joints.
* Kollmorgen defines frameless motors as separate rotor and stator kits that omit the housing, bearings, output shaft, feedback device, and brake found in a complete housed motor.
* MIT research supports the descriptions of series elastic and quasi direct drive actuator architectures.

All market share and average content statements remain attributed to the companies that published them.

## Public pricing evidence

Prices were reviewed on supplier stores on September 15, 2026 and are described as changing retail snapshots, not production quotations.

* ROBOTIS AX 12A: $57.39.
* ROBOTIS X family examples: approximately $103 to $632.
* ROBOTIS DYNAMIXEL P family examples: approximately $1,092 to $3,542.
* CubeMars AK40 family reviewed examples: approximately $135.90 to $185.90.
* CubeMars AK60, AK70, and AK80 reviewed examples: approximately $299 to $990.

The article does not infer a private robot bill of materials from these prices. The multiplication tables and fictional quadruped case are explicitly labeled as Black Scarab illustrations.

## Original artwork

Project asset: `public/article-images/what-are-robot-actuators-cover.png`

The cover was generated with the built in image generation tool as an original Black Scarab editorial illustration. It shows a representative exploded rotary actuator. It contains no logos, labels, numbers, or proprietary product design and is captioned as an editorial interpretation rather than an official product photograph.

Final generation prompt:

> Create a wide, polished engineering cutaway of a modern rotary robot joint actuator as an exploded assembly on a warm ivory technical backdrop. Show a motor, precision reducer, bearing, encoders, brake, electronics, hollow cable path, housing, fasteners, and seals. Use charcoal, muted sage, brushed aluminum, restrained copper, and mechanically plausible construction. No people, logos, text, labels, numbers, watermark, neon, or brand specific design.

## Publication hold

Do not deploy until editorial, metadata, structured data, lint, build, desktop, and mobile checks pass. After deployment, verify the live canonical URL before any LinkedIn work. LinkedIn must use Black Scarab company ID `111898269` and the verified live article link must appear as the first company comment. This topic is outside the authorized X manufacturing series, so provide final X copy and image paths to Rodolfo rather than publishing it.
