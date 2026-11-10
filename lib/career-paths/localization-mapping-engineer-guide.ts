import type {CareerGuideContent,Citation} from '@/lib/career-paths/types';
import {researchForRole} from '@/lib/career-paths/research';
import evidence from '@/public/research/localization-mapping-engineer-evidence-2026-11-10.json';
import compensation from '@/public/research/localization-mapping-engineer-compensation-2026-11-02.json';
import model from '@/public/research/localization-loop-closure-example-2026-11-10.json';
import decisions from '@/research/seo/2026-11-10/decisions.json';
const occupationId='localization-and-mapping-engineer';
const roleId='localization-mapping-engineer';
const role=researchForRole(occupationId,evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('Localization guide research mismatch');
const seo=decisions.guides.find(item=>item.occupationId===occupationId);
if(!seo)throw new Error('Missing Localization SEO decision');
const salary=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-10'});
const posting=(id:string,index:number):Citation=>{const r=evidence.records[index];return source(id,`${r.employer}: ${r.title}`,r.url,'Employer advertisement collected November 2, 2026.');};
export const localizationMappingEngineerGuide:CareerGuideContent={
 id:occupationId,occupationId,familyId:'intelligence-autonomy',slug:occupationId,
 title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-10',reviewedAt:'2026-11-10',
 research:{snapshotId:evidence.snapshotId,roleId,evidencePath:'/research/localization-mapping-engineer-evidence-2026-11-10.json'},
 deck:'Develop the systems that help robots understand where they are, track their movement and build maps of the physical world.',
 introduction:['Imagine a warehouse robot traveling through a large distribution center.'],
 illustration:{src:'/career-paths/localization-mapping-engineer-atrium.webp',width:1672,height:941,alt:'Conceptual editorial illustration of an invented concrete transit atrium transitioning into a spatial point-cloud reconstruction, with monochrome architecture and restrained electric-blue geometry.'},
 overview:[
  {label:'What you do',value:'Develop software that estimates robot position, tracks movement and maps surrounding environments',sourceIds:['figure','sunday','bedrock']},
  {label:'Core skills',value:'SLAM, sensor fusion, 3D geometry, C++, Python and sensor calibration',sourceIds:['field-calibration','figure','sunday']},
  {label:'Education',value:'Typically robotics, computer science, electrical engineering or a related technical field',sourceIds:['applied','boston','field-mapping']},
  {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
 ],
 sections:[
  {
    "id": "day-to-day",
    "heading": "What does a localization and mapping engineer do?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "bedrock",
      "sunday",
      "nav2"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a warehouse robot traveling through a large distribution center."
      },
      {
        "type": "paragraph",
        "text": "It passes storage racks, turns down an aisle and approaches its destination. Along the way, it encounters several corridors that look almost identical."
      },
      {
        "type": "paragraph",
        "text": "The robot can detect nearby obstacles, but how does it know which aisle it's in? How does it track the distance it has traveled? And how does it determine its location when GPS signals are unavailable?"
      },
      {
        "type": "paragraph",
        "text": "Localization and mapping engineers develop the software that helps robots answer these questions."
      },
      {
        "type": "paragraph",
        "text": "Their work allows machines to estimate where they are, understand how they are moving and create maps of their surroundings."
      },
      {
        "type": "paragraph",
        "text": "These capabilities are essential for autonomous navigation. A robot cannot reliably plan a route to a destination if it doesn't have a useful estimate of its own position."
      },
      {
        "type": "paragraph",
        "text": "Localization engineers combine information from cameras, laser scanners, motion sensors and other devices to develop an understanding of the robot's position and environment."
      },
      {
        "type": "paragraph",
        "text": "The challenge is that these measurements are imperfect."
      },
      {
        "type": "paragraph",
        "text": "Wheels can slip, cameras can lose track of visual features and sensors can produce inaccurate readings."
      },
      {
        "type": "paragraph",
        "text": "Engineers must develop systems that continue providing useful estimates even when individual measurements become unreliable."
      },
      {
        "type": "heading",
        "text": "What are localization, mapping and SLAM?"
      },
      {
        "type": "paragraph",
        "text": "Three closely related concepts define the profession."
      },
      {
        "type": "table",
        "caption": "What are localization, mapping and SLAM?",
        "columns": [
          "Concept",
          "What it means"
        ],
        "rows": [
          [
            "Localization",
            "Estimating where the robot is and which direction it is facing"
          ],
          [
            "Mapping",
            "Creating a representation of the environment around the robot"
          ],
          [
            "SLAM",
            "Estimating the robot's location while simultaneously building or updating a map"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "SLAM stands for Simultaneous Localization and Mapping."
      },
      {
        "type": "paragraph",
        "text": "Imagine a robot entering a building it has never visited."
      },
      {
        "type": "paragraph",
        "text": "It has no existing map and doesn't know its location within the building."
      },
      {
        "type": "paragraph",
        "text": "As it moves, the robot observes walls, corridors and other features using its sensors."
      },
      {
        "type": "paragraph",
        "text": "It uses those observations to estimate how far it has traveled and create a map of the environment."
      },
      {
        "type": "paragraph",
        "text": "But the process creates a challenge."
      },
      {
        "type": "paragraph",
        "text": "To build an accurate map, the robot needs to know where it was when each observation was made. Yet to determine where it is, the robot can benefit from having an accurate map."
      },
      {
        "type": "paragraph",
        "text": "SLAM algorithms address these related problems together."
      },
      {
        "type": "heading",
        "text": "Three areas of localization and mapping engineering"
      },
      {
        "type": "table",
        "caption": "Three areas of localization and mapping engineering",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "Localization and state estimation",
            "Estimating robot position, orientation and movement using multiple sensor measurements"
          ],
          [
            "Mapping and 3D reconstruction",
            "Creating and maintaining representations of physical environments"
          ],
          [
            "Sensor fusion and calibration",
            "Combining measurements from different sensors and ensuring they agree geometrically and in time"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These specializations frequently overlap."
      },
      {
        "type": "paragraph",
        "text": "An engineer working on humanoid robots might focus on tracking the robot's movement using cameras and inertial sensors."
      },
      {
        "type": "paragraph",
        "text": "Someone developing autonomous construction equipment may combine GPS, LiDAR and motion measurements to estimate where a machine is operating."
      },
      {
        "type": "paragraph",
        "text": "A mapping engineer may process recordings from several robot journeys to reconstruct a large facility."
      },
      {
        "type": "paragraph",
        "text": "The underlying challenge is the same: turning imperfect sensor measurements into a useful estimate of the physical world."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "Localization and mapping engineers spend much of their time writing software, analyzing sensor recordings and investigating errors in a robot's estimated position."
      },
      {
        "type": "paragraph",
        "text": "Imagine an engineer reviewing a recording from a robot that successfully completed a warehouse route."
      },
      {
        "type": "paragraph",
        "text": "During the journey, the robot's estimated position suddenly jumped sideways near a glass wall."
      },
      {
        "type": "paragraph",
        "text": "The engineer examines the camera footage, LiDAR measurements and motion sensor data."
      },
      {
        "type": "paragraph",
        "text": "Perhaps the localization algorithm incorrectly matched the glass wall with another part of the environment. The problem could also involve inaccurate sensor calibration or a timing difference between measurements."
      },
      {
        "type": "paragraph",
        "text": "After identifying a likely cause, the engineer modifies the algorithm or calibration settings."
      },
      {
        "type": "paragraph",
        "text": "They replay the original recording to determine whether the problem has improved, then test additional routes to check for unintended effects."
      },
      {
        "type": "paragraph",
        "text": "A typical development cycle involves:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Collect sensor data. Record camera images, LiDAR scans, motion measurements and other relevant information.",
          "Estimate movement. Develop algorithms that track how the robot changes position and orientation.",
          "Build or update maps. Combine observations into a representation of the environment.",
          "Investigate errors. Examine inaccurate positions, sensor disagreements and mapping failures.",
          "Improve the algorithms. Adjust estimation, calibration or mapping methods.",
          "Evaluate performance. Measure accuracy, reliability and processing speed.",
          "Test on robots. Validate the system under realistic operating conditions."
        ]
      },
      {
        "type": "paragraph",
        "text": "Much of the work involves understanding why a system that performs well in one environment struggles in another."
      },
      {
        "type": "heading",
        "text": "When a robot loses track of its position"
      },
      {
        "type": "paragraph",
        "text": "Consider a mobile robot navigating a warehouse."
      },
      {
        "type": "paragraph",
        "text": "The robot estimates how far it has traveled using measurements from its wheels."
      },
      {
        "type": "paragraph",
        "text": "Under normal conditions, this works reasonably well."
      },
      {
        "type": "paragraph",
        "text": "But the robot crosses a slippery section of flooring, and one wheel briefly spins without moving the robot as far as expected."
      },
      {
        "type": "paragraph",
        "text": "The system may now overestimate the distance traveled."
      },
      {
        "type": "paragraph",
        "text": "As the robot continues navigating, additional small errors can accumulate."
      },
      {
        "type": "paragraph",
        "text": "Eventually, the robot's estimated position may differ noticeably from its actual location."
      },
      {
        "type": "paragraph",
        "text": "A localization engineer develops methods to reduce these errors by combining wheel measurements with information from other sensors."
      },
      {
        "type": "paragraph",
        "text": "For example, camera observations or LiDAR scans may reveal that the robot is closer to a familiar wall than its wheel measurements suggest."
      },
      {
        "type": "paragraph",
        "text": "By combining these sources, the system can produce a more reliable estimate of its location."
      },
      {
        "type": "paragraph",
        "text": "This illustrates a fundamental principle: robots cannot rely on a single source of information to understand their movement in every situation."
      }
    ]
  },
  {
    "id": "localization-vs-perception",
    "heading": "How is localization different from other robotics careers?",
    "navLabel": "Related roles",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "sunday",
      "applied"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Localization and mapping are part of the larger robotics autonomy system."
      },
      {
        "type": "paragraph",
        "text": "Several engineering disciplines work together to help a robot understand its environment and complete tasks."
      },
      {
        "type": "table",
        "caption": "How is localization different from other robotics careers?",
        "columns": [
          "Career",
          "Main responsibility"
        ],
        "rows": [
          [
            "Perception Engineer",
            "Identifies objects, surfaces and other relevant information from sensor data"
          ],
          [
            "Localization & Mapping Engineer",
            "Estimates the robot's position and builds representations of its environment"
          ],
          [
            "Motion Planning Engineer",
            "Determines a feasible path or trajectory toward a destination"
          ],
          [
            "Robotics Controls Engineer",
            "Regulates how the physical robot follows the intended movement"
          ],
          [
            "Robot Learning Engineer",
            "Develops models that help robots learn behaviors from data and experience"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Imagine a robot delivering materials across a factory."
      },
      {
        "type": "paragraph",
        "text": "The perception system detects obstacles and other objects."
      },
      {
        "type": "paragraph",
        "text": "The localization system estimates where the robot is within the facility."
      },
      {
        "type": "paragraph",
        "text": "The motion planner determines how to reach the destination without colliding with obstacles."
      },
      {
        "type": "paragraph",
        "text": "The controls system adjusts the robot's motors to follow the planned movement."
      },
      {
        "type": "paragraph",
        "text": "These responsibilities overlap, particularly in advanced robotics systems that combine several functions."
      },
      {
        "type": "heading",
        "text": "What is the difference between localization and perception?"
      },
      {
        "type": "paragraph",
        "text": "Both disciplines may use cameras, LiDAR and other sensors."
      },
      {
        "type": "paragraph",
        "text": "However, they focus on different questions."
      },
      {
        "type": "paragraph",
        "text": "A perception engineer might develop an algorithm that recognizes a pallet sitting in a warehouse aisle."
      },
      {
        "type": "paragraph",
        "text": "A localization engineer might use visual features and geometric measurements to determine where the robot is relative to its environment."
      },
      {
        "type": "paragraph",
        "text": "In some systems, recognizing familiar features can also help the robot determine its location."
      },
      {
        "type": "paragraph",
        "text": "The technologies overlap, but the primary output is different."
      },
      {
        "type": "paragraph",
        "text": "Perception helps describe the surrounding scene. Localization provides an estimate of the robot's own position and orientation."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills",
    "paragraphs": [],
    "sourceIds": [
      "field-calibration",
      "field-mapping",
      "shield-staff",
      "rep105",
      "gtsam",
      "opencv"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Linear algebra and 3D geometry"
      },
      {
        "type": "paragraph",
        "text": "Localization engineering requires understanding how positions and movements are represented mathematically."
      },
      {
        "type": "paragraph",
        "text": "A robot may contain several sensors, each measuring the environment from a different location and orientation."
      },
      {
        "type": "paragraph",
        "text": "For example, a camera mounted on a robot's head observes the world from a different perspective than a LiDAR sensor mounted on its body."
      },
      {
        "type": "paragraph",
        "text": "Engineers use coordinate systems and mathematical transformations to relate these measurements."
      },
      {
        "type": "paragraph",
        "text": "Linear algebra provides much of the mathematical foundation."
      },
      {
        "type": "paragraph",
        "text": "Important concepts include vectors, matrices, rotations and coordinate transformations."
      },
      {
        "type": "paragraph",
        "text": "Engineers use these tools to convert measurements between reference frames, such as a camera frame, robot frame and map frame."
      },
      {
        "type": "paragraph",
        "text": "These relationships are essential when combining sensor information."
      },
      {
        "type": "heading",
        "text": "Robot position, orientation and odometry"
      },
      {
        "type": "paragraph",
        "text": "A robot's position describes where it is located."
      },
      {
        "type": "paragraph",
        "text": "Its orientation describes which direction it is facing."
      },
      {
        "type": "paragraph",
        "text": "Together, these are commonly called its pose."
      },
      {
        "type": "paragraph",
        "text": "For example, a mobile robot may know that it is approximately five meters from a reference point and facing toward a particular aisle."
      },
      {
        "type": "paragraph",
        "text": "Odometry estimates how the robot's position changes as it moves."
      },
      {
        "type": "paragraph",
        "text": "Wheel odometry uses wheel rotation measurements. Visual odometry estimates movement from changes in camera images. Inertial measurements can also contribute to movement estimation."
      },
      {
        "type": "paragraph",
        "text": "The challenge is that small errors accumulate over time."
      },
      {
        "type": "paragraph",
        "text": "A robot might estimate each short movement reasonably well but gradually develop a larger error after traveling a long distance."
      },
      {
        "type": "paragraph",
        "text": "This accumulation is known as drift."
      },
      {
        "type": "paragraph",
        "text": "Localization engineers develop methods to measure, reduce and correct that drift."
      },
      {
        "type": "heading",
        "text": "SLAM and loop closure"
      },
      {
        "type": "paragraph",
        "text": "One of the most interesting challenges in localization is recognizing when a robot has returned to a familiar location."
      },
      {
        "type": "paragraph",
        "text": "Imagine a robot exploring a building."
      },
      {
        "type": "paragraph",
        "text": "It travels through several corridors and eventually returns to the area where it began."
      },
      {
        "type": "paragraph",
        "text": "Because small movement errors have accumulated, the robot's estimated path may not connect perfectly with its starting location."
      },
      {
        "type": "paragraph",
        "text": "Its internal map might show two slightly different positions for what is actually the same place."
      },
      {
        "type": "paragraph",
        "text": "A SLAM system can recognize the previously visited environment and use that information to correct accumulated errors."
      },
      {
        "type": "paragraph",
        "text": "This process is known as loop closure."
      },
      {
        "type": "loop-closure",
        "id": "localization-loop-closure",
        "title": "Recognizing a place can correct accumulated drift",
        "model": model
      },
      {
        "type": "paragraph",
        "text": "The SLAM system uses the newly recognized relationship to adjust its earlier position estimates."
      },
      {
        "type": "paragraph",
        "text": "This can improve the consistency of the map rather than merely changing the robot's latest position."
      },
      {
        "type": "paragraph",
        "text": "However, recognizing a place incorrectly can also introduce errors."
      },
      {
        "type": "paragraph",
        "text": "For example, two warehouse aisles may look almost identical."
      },
      {
        "type": "paragraph",
        "text": "If the system mistakenly concludes that the robot has returned to a previous location, it could distort the map."
      },
      {
        "type": "paragraph",
        "text": "Engineers must therefore evaluate whether the identified match is trustworthy."
      },
      {
        "type": "paragraph",
        "text": "Reducing the end-to-start gap also does not automatically prove that the entire map is accurate. Independent reference measurements provide stronger evidence when available."
      },
      {
        "type": "heading",
        "text": "Sensor fusion"
      },
      {
        "type": "paragraph",
        "text": "Robots often use several sensors because no single device works perfectly under every condition."
      },
      {
        "type": "paragraph",
        "text": "Sensor fusion combines measurements from different sources to estimate the robot's state."
      },
      {
        "type": "table",
        "caption": "Sensor fusion",
        "columns": [
          "Sensor",
          "What it contributes"
        ],
        "rows": [
          [
            "Camera",
            "Images that can help track visual features and movement"
          ],
          [
            "LiDAR",
            "Distance measurements that describe surrounding geometry"
          ],
          [
            "IMU",
            "Measurements of acceleration and rotational motion"
          ],
          [
            "Wheel encoders",
            "Information about wheel rotation and estimated movement"
          ],
          [
            "GPS/GNSS",
            "Positioning information when suitable satellite signals are available"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Each sensor has strengths and weaknesses."
      },
      {
        "type": "paragraph",
        "text": "Cameras can struggle in poor lighting or environments with few recognizable features."
      },
      {
        "type": "paragraph",
        "text": "LiDAR can have difficulty with certain surfaces or changing environments."
      },
      {
        "type": "paragraph",
        "text": "Wheel encoders may become unreliable when wheels slip."
      },
      {
        "type": "paragraph",
        "text": "Satellite positioning may be unavailable or inaccurate indoors or near structures that interfere with reception."
      },
      {
        "type": "paragraph",
        "text": "By combining these measurements, a localization system can become more robust than one that depends on a single sensor."
      },
      {
        "type": "paragraph",
        "text": "However, additional sensors also introduce challenges involving calibration, timing and measurement uncertainty."
      },
      {
        "type": "heading",
        "text": "Probability and state estimation"
      },
      {
        "type": "paragraph",
        "text": "Sensor measurements contain uncertainty."
      },
      {
        "type": "paragraph",
        "text": "A robot might estimate its position as being near a particular location without knowing its exact coordinates."
      },
      {
        "type": "paragraph",
        "text": "Localization engineers use probability and estimation methods to combine uncertain information."
      },
      {
        "type": "paragraph",
        "text": "One widely used family of techniques is Kalman filtering."
      },
      {
        "type": "paragraph",
        "text": "A Kalman filter combines predictions about how a system should move with incoming measurements."
      },
      {
        "type": "paragraph",
        "text": "Different variants are used depending on the system and the mathematical assumptions involved."
      },
      {
        "type": "paragraph",
        "text": "For example, an extended Kalman filter can be used when a robot's motion or measurement relationships are nonlinear."
      },
      {
        "type": "paragraph",
        "text": "Other localization systems use optimization-based approaches, such as factor graphs."
      },
      {
        "type": "paragraph",
        "text": "These methods help engineers estimate position and movement while accounting for measurement errors."
      },
      {
        "type": "paragraph",
        "text": "The mathematics can become advanced, but the underlying goal is straightforward: combine imperfect information to produce the most useful estimate possible under the model's assumptions."
      },
      {
        "type": "heading",
        "text": "Sensor calibration and synchronization"
      },
      {
        "type": "paragraph",
        "text": "Even sophisticated estimation algorithms can fail if the sensor data is inconsistent."
      },
      {
        "type": "paragraph",
        "text": "Imagine a robot with a camera and LiDAR sensor."
      },
      {
        "type": "paragraph",
        "text": "The camera is mounted slightly higher than the LiDAR and points in a somewhat different direction."
      },
      {
        "type": "paragraph",
        "text": "To combine their observations, the software needs an accurate description of how the sensors are positioned relative to each other."
      },
      {
        "type": "paragraph",
        "text": "This is called extrinsic calibration."
      },
      {
        "type": "paragraph",
        "text": "Camera systems may also require intrinsic calibration, which describes properties such as focal length and lens distortion."
      },
      {
        "type": "paragraph",
        "text": "Timing is equally important."
      },
      {
        "type": "paragraph",
        "text": "If a camera image was recorded at a different moment from a LiDAR scan, the measurements may not align when the robot is moving."
      },
      {
        "type": "paragraph",
        "text": "Engineers must account for timestamps, synchronization and possible delays."
      },
      {
        "type": "paragraph",
        "text": "A small calibration or timing error can create significant problems when several sensors are combined."
      },
      {
        "type": "heading",
        "text": "C++ and Python programming"
      },
      {
        "type": "paragraph",
        "text": "Localization engineers use programming to develop algorithms, process sensor data and evaluate performance."
      },
      {
        "type": "paragraph",
        "text": "C++ is important in production robotics because estimation and mapping software often needs to operate efficiently and in real time."
      },
      {
        "type": "paragraph",
        "text": "Python is useful for research, numerical experiments, data analysis and visualization."
      },
      {
        "type": "paragraph",
        "text": "Engineers should also understand software testing, debugging, version control and performance profiling."
      },
      {
        "type": "paragraph",
        "text": "Frameworks such as ROS 2 can help connect sensors, algorithms and other robotic software components."
      },
      {
        "type": "paragraph",
        "text": "However, knowing how to launch an existing SLAM package is not the same as understanding how the underlying system works."
      },
      {
        "type": "paragraph",
        "text": "Employers value engineers who can investigate failures, improve performance and explain algorithmic behavior."
      },
      {
        "type": "heading",
        "text": "Testing and evaluating localization accuracy"
      },
      {
        "type": "paragraph",
        "text": "Localization and mapping algorithms need to be evaluated using repeatable measurements."
      },
      {
        "type": "paragraph",
        "text": "Useful metrics include:"
      },
      {
        "type": "table",
        "caption": "Testing and evaluating localization accuracy",
        "columns": [
          "Metric",
          "What it measures"
        ],
        "rows": [
          [
            "Position error",
            "Difference between the estimated position and an appropriate reference"
          ],
          [
            "Orientation error",
            "Difference between the estimated and reference orientation"
          ],
          [
            "Trajectory error",
            "How the estimated path differs from a reference trajectory"
          ],
          [
            "Drift",
            "Accumulated estimation error over movement"
          ],
          [
            "Runtime",
            "How long the software takes to process data"
          ],
          [
            "Failure rate",
            "Frequency of localization loss or other defined failures"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "A localization system might produce an accurate estimate under ideal conditions but struggle in environments containing repetitive structures, reflective surfaces or poor lighting."
      },
      {
        "type": "paragraph",
        "text": "Engineers evaluate how performance changes under those conditions."
      },
      {
        "type": "paragraph",
        "text": "They also measure computational requirements because estimates must often arrive quickly enough for other robotic systems to use them."
      },
      {
        "type": "paragraph",
        "text": "An accurate estimate delivered too late may be unsuitable for a moving robot."
      }
    ]
  },
  {
    "id": "education",
    "heading": "What education do you need?",
    "navLabel": "Education",
    "paragraphs": [],
    "sourceIds": [
      "applied",
      "field-calibration",
      "boston",
      "figure"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Localization and mapping engineers commonly come from robotics, computer science, electrical engineering, mechanical engineering, aerospace engineering or applied mathematics."
      },
      {
        "type": "paragraph",
        "text": "The profession combines advanced mathematics with software engineering and physical sensor systems."
      },
      {
        "type": "paragraph",
        "text": "A computer science degree can provide strong programming and algorithmic foundations."
      },
      {
        "type": "paragraph",
        "text": "Electrical engineering is useful for sensor systems, signals and estimation methods."
      },
      {
        "type": "paragraph",
        "text": "Mechanical and aerospace engineering can provide preparation in dynamics, motion and navigation."
      },
      {
        "type": "paragraph",
        "text": "Robotics programs frequently combine several of these areas."
      },
      {
        "type": "heading",
        "text": "What employers expect"
      },
      {
        "type": "table",
        "caption": "What employers expect",
        "columns": [
          "Employer",
          "Representative qualifications"
        ],
        "rows": [
          [
            "Applied Intuition",
            "Related bachelor's degree or equivalent experience, including production estimation knowledge"
          ],
          [
            "FieldAI",
            "Advanced preparation in geometric perception, mapping and related technical disciplines"
          ],
          [
            "Boston Dynamics",
            "PhD or equivalent research experience for certain specialized SLAM research positions"
          ],
          [
            "Figure",
            "Experience developing localization, tracking and mapping systems for robotics applications"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These examples reflect different types of positions."
      },
      {
        "type": "paragraph",
        "text": "Research-focused roles may emphasize advanced academic preparation, while production engineering positions can place greater weight on software experience and demonstrated results."
      },
      {
        "type": "heading",
        "text": "Do you need a master's degree or PhD?"
      },
      {
        "type": "paragraph",
        "text": "Not for every position."
      },
      {
        "type": "paragraph",
        "text": "Some employers accept bachelor's degrees combined with relevant engineering experience."
      },
      {
        "type": "paragraph",
        "text": "However, graduate education can be particularly valuable for roles involving advanced estimation theory, geometric optimization and new SLAM algorithms."
      },
      {
        "type": "paragraph",
        "text": "Research-oriented positions may require a master's degree, PhD or equivalent experience."
      },
      {
        "type": "paragraph",
        "text": "Candidates should evaluate the requirements of the specific roles they want to pursue."
      },
      {
        "type": "heading",
        "text": "What should you study?"
      },
      {
        "type": "paragraph",
        "text": "A useful technical foundation includes:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Linear algebra, calculus and probability.",
          "Three-dimensional geometry and coordinate transformations.",
          "Robot kinematics and motion estimation.",
          "Sensor systems and calibration.",
          "Filtering and mathematical optimization.",
          "C++, Python and Linux.",
          "SLAM algorithms and mapping.",
          "Simulation, testing and data analysis."
        ]
      },
      {
        "type": "paragraph",
        "text": "Practical projects should accompany the mathematics."
      },
      {
        "type": "paragraph",
        "text": "A candidate who can explain why a robot's estimated position drifted and how they investigated it demonstrates valuable engineering understanding."
      },
      {
        "type": "heading",
        "text": "Can you enter without a robotics degree?"
      },
      {
        "type": "paragraph",
        "text": "Yes."
      },
      {
        "type": "paragraph",
        "text": "Software engineers, computer vision specialists and engineers with experience in navigation or control systems can develop the additional skills needed for localization."
      },
      {
        "type": "paragraph",
        "text": "However, this is a mathematically demanding specialization."
      },
      {
        "type": "paragraph",
        "text": "Someone without a technical background should begin with programming, linear algebra and probability before attempting complex SLAM systems."
      },
      {
        "type": "paragraph",
        "text": "Public datasets and simulation provide opportunities to build experience without purchasing a physical robot."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do localization and mapping engineers earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "boston",
      "figure",
      "sunday"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Localization and mapping engineering combines advanced mathematics, robotics algorithms and production software development."
      },
      {
        "type": "paragraph",
        "text": "Compensation varies by experience, technical specialization, location and employer."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annual compensation at $250,000 based on reviewed U.S. localization, mapping and state-estimation positions, emphasizing experienced engineering roles."
      },
      {
        "type": "compensation",
        "caption": "Selected U.S. salary advertisements, November 2026",
        "note": "Annual advertised salary, USD.",
        "examples": evidence.roles[roleId].compensation
      },
      {
        "type": "heading",
        "text": "What influences compensation?"
      },
      {
        "type": "paragraph",
        "text": "Experience and responsibility. Engineers responsible for complete localization systems or major autonomy capabilities generally command higher compensation."
      },
      {
        "type": "paragraph",
        "text": "Specialization. Expertise in SLAM, state estimation, geometric optimization and multi-sensor fusion can be particularly valuable."
      },
      {
        "type": "paragraph",
        "text": "Production experience. Employers value engineers who have deployed localization systems on physical robots and resolved failures in real environments."
      },
      {
        "type": "paragraph",
        "text": "Research depth. Positions developing new algorithms may require specialized mathematical or academic expertise."
      },
      {
        "type": "paragraph",
        "text": "Location and employer. Compensation varies across geographic markets, robotics startups and larger technology companies."
      },
      {
        "type": "heading",
        "text": "Career progression"
      },
      {
        "type": "paragraph",
        "text": "Early-career engineers may begin by developing algorithm components, analyzing sensor recordings and testing existing localization systems."
      },
      {
        "type": "paragraph",
        "text": "With experience, they take responsibility for complete localization or mapping subsystems."
      },
      {
        "type": "paragraph",
        "text": "Senior and staff engineers may define estimation architectures, develop new mapping methods and coordinate technical work across perception, planning and autonomy teams."
      },
      {
        "type": "paragraph",
        "text": "Some engineers progress into research leadership, autonomous systems architecture or specialized robotics software development."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire localization and mapping engineers?",
    "navLabel": "Employers",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "boston",
      "sunday",
      "field-calibration",
      "bedrock",
      "applied",
      "shield-staff"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Localization and mapping are important wherever robots must navigate or maintain an understanding of their physical surroundings."
      },
      {
        "type": "paragraph",
        "text": "Applications range from humanoid robots and autonomous vehicles to construction equipment and drones."
      },
      {
        "type": "heading",
        "text": "Humanoid and home robotics"
      },
      {
        "type": "paragraph",
        "text": "Figure, Boston Dynamics and Sunday Robotics provide examples of companies developing robotic systems that require spatial awareness."
      },
      {
        "type": "paragraph",
        "text": "Humanoid robots need to estimate how their bodies are moving and where they are relative to the surrounding environment."
      },
      {
        "type": "paragraph",
        "text": "Home robots may need to map rooms, track movement and recognize previously visited locations."
      },
      {
        "type": "paragraph",
        "text": "These applications often combine cameras, inertial measurements and other sensors."
      },
      {
        "type": "heading",
        "text": "Field and industrial robotics"
      },
      {
        "type": "paragraph",
        "text": "FieldAI develops autonomy technology for robots operating in complex environments."
      },
      {
        "type": "paragraph",
        "text": "Localization and mapping work can involve combining multiple sensors and maintaining useful spatial estimates as robots move through unfamiliar or changing areas."
      },
      {
        "type": "heading",
        "text": "Autonomous construction equipment"
      },
      {
        "type": "paragraph",
        "text": "Bedrock Robotics provides an example of localization and state-estimation work applied to construction machinery."
      },
      {
        "type": "paragraph",
        "text": "Heavy equipment operating outdoors may combine satellite positioning, inertial measurements and LiDAR to estimate movement and position."
      },
      {
        "type": "paragraph",
        "text": "These environments introduce challenges involving vibration, uneven terrain and changing site conditions."
      },
      {
        "type": "heading",
        "text": "Autonomous vehicles"
      },
      {
        "type": "paragraph",
        "text": "Applied Intuition develops technology supporting autonomous systems, including onboard mapping and estimation."
      },
      {
        "type": "paragraph",
        "text": "Localization engineering for vehicles may involve combining sensor measurements with existing maps and maintaining accurate position estimates during movement."
      },
      {
        "type": "heading",
        "text": "Autonomous aircraft"
      },
      {
        "type": "paragraph",
        "text": "Shield AI develops autonomous systems that may need to navigate when satellite positioning is unreliable or unavailable."
      },
      {
        "type": "paragraph",
        "text": "Navigation and state estimation become particularly important when a machine cannot depend on external positioning information."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Useful searches include Localization Engineer, SLAM Engineer, State Estimation Engineer, Navigation Engineer, Visual-Inertial Odometry Engineer, Mapping Engineer and Robotics Software Engineer — Localization."
      },
      {
        "type": "paragraph",
        "text": "Job titles vary considerably."
      },
      {
        "type": "paragraph",
        "text": "A Navigation Engineer might work on aircraft guidance or motion planning rather than localization."
      },
      {
        "type": "paragraph",
        "text": "A Mapping Engineer might focus on geographic data rather than robotic sensing."
      },
      {
        "type": "paragraph",
        "text": "Look for responsibilities involving sensor fusion, pose estimation, SLAM, calibration, odometry and geometric reconstruction."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into localization and mapping engineering",
    "navLabel": "Getting started",
    "paragraphs": [],
    "sourceIds": [
      "sunday",
      "bedrock",
      "field-calibration",
      "shield-staff"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Several technical backgrounds provide useful starting points."
      },
      {
        "type": "table",
        "caption": "How to transition into localization and mapping engineering",
        "columns": [
          "Your background",
          "Skills to prioritize",
          "Suggested project"
        ],
        "rows": [
          [
            "Software engineering",
            "3D geometry, estimation and sensor fusion",
            "Analyze a robot trajectory using recorded sensor data"
          ],
          [
            "Computer vision or AR/VR",
            "Inertial sensing, SLAM and robotics deployment",
            "Build a visual odometry or mapping experiment"
          ],
          [
            "Electrical engineering",
            "Geometric estimation, C++ and mapping algorithms",
            "Fuse simulated motion measurements from multiple sensors"
          ],
          [
            "Robotics or controls engineering",
            "SLAM, mapping and geometric optimization",
            "Compare odometry with map-corrected localization"
          ],
          [
            "Surveying or geospatial work",
            "Robotics software, sensors and real-time estimation",
            "Map a simulated route and evaluate positional drift"
          ],
          [
            "Complete beginner",
            "Python, linear algebra and probability",
            "Create a simple 2D localization simulation"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you already work in software engineering"
      },
      {
        "type": "paragraph",
        "text": "Your programming experience provides a useful foundation."
      },
      {
        "type": "paragraph",
        "text": "Focus on spatial mathematics, coordinate transformations and estimation methods."
      },
      {
        "type": "paragraph",
        "text": "Begin with recorded robot trajectories or simulated sensor measurements."
      },
      {
        "type": "paragraph",
        "text": "Develop software that estimates movement, then compare its output with a reference."
      },
      {
        "type": "paragraph",
        "text": "As your understanding develops, move toward C++ implementations and more advanced SLAM systems."
      },
      {
        "type": "heading",
        "text": "If you work in computer vision"
      },
      {
        "type": "paragraph",
        "text": "Your experience with images, camera models and visual features can transfer directly."
      },
      {
        "type": "paragraph",
        "text": "Develop stronger knowledge of robotics coordinate frames, inertial sensing and multi-sensor estimation."
      },
      {
        "type": "paragraph",
        "text": "A useful project is to estimate camera movement from recorded images and investigate how the results change under difficult conditions."
      },
      {
        "type": "heading",
        "text": "If you come from electrical engineering"
      },
      {
        "type": "paragraph",
        "text": "Your knowledge of sensors, signals and measurements provides a strong foundation."
      },
      {
        "type": "paragraph",
        "text": "Focus on geometry, estimation algorithms and robotics software."
      },
      {
        "type": "paragraph",
        "text": "A project combining simulated sensor measurements can demonstrate how different information sources contribute to a position estimate."
      },
      {
        "type": "heading",
        "text": "If you work in robotics or controls"
      },
      {
        "type": "paragraph",
        "text": "You may already understand robot motion, coordinate systems and state estimation."
      },
      {
        "type": "paragraph",
        "text": "Develop deeper experience with SLAM, mapping and geometric optimization."
      },
      {
        "type": "paragraph",
        "text": "A useful project is to compare a robot's locally estimated movement with its position estimates after incorporating map information."
      },
      {
        "type": "heading",
        "text": "If you come from surveying or geospatial work"
      },
      {
        "type": "paragraph",
        "text": "Your experience with positioning, coordinates and mapping can be relevant."
      },
      {
        "type": "paragraph",
        "text": "The main gaps may involve robotics software, real-time sensor processing and estimation algorithms."
      },
      {
        "type": "paragraph",
        "text": "Learn how mobile robots combine different sensors and maintain position estimates while moving."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin with Python, linear algebra and probability."
      },
      {
        "type": "paragraph",
        "text": "Learn how to represent positions, distances and rotations in two-dimensional space."
      },
      {
        "type": "paragraph",
        "text": "Then create a simple simulation in which a robot moves through an environment while receiving imperfect measurements."
      },
      {
        "type": "paragraph",
        "text": "Observe how errors accumulate and experiment with methods for correcting them."
      },
      {
        "type": "paragraph",
        "text": "Progress toward real robotics datasets and SLAM software once you understand the basic principles."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Localization and mapping interviews often test mathematical reasoning, software engineering and the ability to investigate sensor-related problems."
      },
      {
        "type": "paragraph",
        "text": "You may be asked how coordinate transformations work, why odometry drifts or how to combine measurements from different sensors."
      },
      {
        "type": "paragraph",
        "text": "Employers may also ask about Kalman filters, SLAM, calibration and optimization."
      },
      {
        "type": "paragraph",
        "text": "Prepare one project where you can explain:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Which sensors or measurements were used.",
          "How you represented the robot's position.",
          "What assumptions your algorithm made.",
          "How you measured error.",
          "What caused localization problems.",
          "How you evaluated a proposed improvement."
        ]
      },
      {
        "type": "paragraph",
        "text": "A clear explanation of a failed localization estimate can be more persuasive than simply demonstrating a visually impressive 3D map."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first localization and mapping project",
    "navLabel": "Portfolio",
    "paragraphs": [],
    "sourceIds": [
      "nav2",
      "slam-toolbox",
      "rep105",
      "gtsam"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Map a robot's route and investigate position drift"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to analyze how a simulated robot estimates its movement while traveling through an environment."
      },
      {
        "type": "paragraph",
        "text": "The objective is to understand how localization errors accumulate and how recognizing a previously visited location can help correct them."
      },
      {
        "type": "paragraph",
        "text": "You can use Python and a simple two-dimensional simulator, or a documented public robotics dataset."
      },
      {
        "type": "paragraph",
        "text": "You do not need a physical robot."
      },
      {
        "type": "heading",
        "text": "Step 1: Create the environment"
      },
      {
        "type": "paragraph",
        "text": "Start with a simple two-dimensional map containing several walls or recognizable features."
      },
      {
        "type": "paragraph",
        "text": "Define a route that travels through the environment and eventually returns near its starting position."
      },
      {
        "type": "paragraph",
        "text": "Keep the environment small enough that you can understand the robot's movements."
      },
      {
        "type": "paragraph",
        "text": "For a simulation, record the robot's actual trajectory so it can serve as a reference."
      },
      {
        "type": "heading",
        "text": "Step 2: Simulate imperfect movement measurements"
      },
      {
        "type": "paragraph",
        "text": "Create simulated odometry measurements describing how the robot moves between successive positions."
      },
      {
        "type": "paragraph",
        "text": "Introduce small errors in the measurements."
      },
      {
        "type": "paragraph",
        "text": "For example, each movement estimate might be slightly too long or have a small angular error."
      },
      {
        "type": "paragraph",
        "text": "Use these imperfect measurements to estimate the robot's trajectory."
      },
      {
        "type": "heading",
        "text": "Step 3: Observe accumulated drift"
      },
      {
        "type": "paragraph",
        "text": "Plot the robot's estimated trajectory alongside its reference trajectory."
      },
      {
        "type": "paragraph",
        "text": "As the robot travels, its position estimate may gradually diverge."
      },
      {
        "type": "paragraph",
        "text": "When it returns to the starting area, the estimated path may not close correctly."
      },
      {
        "type": "paragraph",
        "text": "Measure the end-to-start gap and, if you have a reference trajectory, calculate how the estimated positions differ from that reference."
      },
      {
        "type": "paragraph",
        "text": "The goal is to understand how small measurement errors create larger localization problems."
      },
      {
        "type": "heading",
        "text": "Step 4: Introduce a familiar location"
      },
      {
        "type": "paragraph",
        "text": "Add simulated landmarks or observations that allow the robot to recognize a previously visited area."
      },
      {
        "type": "paragraph",
        "text": "For example, the robot might observe a particular arrangement of walls or fixed features near its starting point."
      },
      {
        "type": "paragraph",
        "text": "Create a loop-closure constraint connecting the earlier and later observations."
      },
      {
        "type": "paragraph",
        "text": "Use a suitable existing optimization tool or simple pose-graph example to adjust the trajectory estimates."
      },
      {
        "type": "heading",
        "text": "Step 5: Compare the results"
      },
      {
        "type": "paragraph",
        "text": "Plot the trajectory before and after loop closure."
      },
      {
        "type": "paragraph",
        "text": "Use the same scale and reference frame so the difference is clear."
      },
      {
        "type": "paragraph",
        "text": "Evaluate:"
      },
      {
        "type": "table",
        "caption": "Step 5: Compare the results",
        "columns": [
          "Measurement",
          "What it tells you"
        ],
        "rows": [
          [
            "End-to-start gap",
            "How closely the estimated loop connects"
          ],
          [
            "Position error",
            "Difference between estimated and reference positions, when available"
          ],
          [
            "Trajectory consistency",
            "Whether the estimated movement agrees with available constraints"
          ],
          [
            "Processing time",
            "How long the estimation or correction requires"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The corrected trajectory may become more consistent with the recognized location."
      },
      {
        "type": "paragraph",
        "text": "However, a smaller end-to-start gap does not by itself establish that the complete trajectory is accurate."
      },
      {
        "type": "heading",
        "text": "Step 6: Introduce a controlled fault"
      },
      {
        "type": "paragraph",
        "text": "Now deliberately create a problem."
      },
      {
        "type": "paragraph",
        "text": "For example, modify the simulated sensor measurements so one sensor reports information with a timing offset."
      },
      {
        "type": "paragraph",
        "text": "Alternatively, introduce an incorrect sensor mounting angle in the software model."
      },
      {
        "type": "paragraph",
        "text": "Run the estimation again and measure how the error changes."
      },
      {
        "type": "paragraph",
        "text": "Keep the route and other settings unchanged so the comparison remains meaningful."
      },
      {
        "type": "heading",
        "text": "Step 7: Investigate and correct the problem"
      },
      {
        "type": "paragraph",
        "text": "Examine which measurements first begin to disagree."
      },
      {
        "type": "paragraph",
        "text": "Determine whether the problem comes from the introduced timing or calibration error."
      },
      {
        "type": "paragraph",
        "text": "Restore the correct configuration and repeat the experiment."
      },
      {
        "type": "paragraph",
        "text": "Compare the original, faulty and corrected results."
      },
      {
        "type": "paragraph",
        "text": "This demonstrates an important localization engineering skill: identifying whether an estimation problem comes from the algorithm or the information being supplied to it."
      },
      {
        "type": "heading",
        "text": "Step 8: Document your findings"
      },
      {
        "type": "paragraph",
        "text": "Prepare a short technical report explaining the project."
      },
      {
        "type": "paragraph",
        "text": "Include the simulated environment, measurement assumptions, localization method and evaluation results."
      },
      {
        "type": "paragraph",
        "text": "Show plots comparing the trajectories."
      },
      {
        "type": "paragraph",
        "text": "Explain why drift occurred, how loop closure changed the estimate and what happened when you introduced a sensor problem."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Python source code or the simulation configuration.",
          "A diagram of the environment and robot route.",
          "Documentation of the sensor measurements and assumptions.",
          "Trajectory plots showing drift and correction.",
          "Quantitative comparisons of localization performance.",
          "A record of the introduced fault and its effect.",
          "An explanation of the investigation and correction.",
          "Instructions allowing another person to reproduce the results."
        ]
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "Move from a simple simulation to a public robotics dataset or ROS 2 environment."
      },
      {
        "type": "paragraph",
        "text": "Use recorded camera, LiDAR or inertial measurements with an existing SLAM system."
      },
      {
        "type": "paragraph",
        "text": "Compare the estimated trajectory before and after incorporating additional sensor information or a valid loop closure."
      },
      {
        "type": "paragraph",
        "text": "Investigate what happens when timestamps or calibration parameters are changed."
      },
      {
        "type": "paragraph",
        "text": "This introduces more realistic sensor behavior while preserving the same engineering process: establish a baseline, identify a problem, test a change and measure the result."
      }
    ]
  }
],
 nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "ros2",
    "opencv",
    "gtsam-home",
    "slam-toolbox"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "ROS 2 — Official Documentation",
          "href": "https://docs.ros.org/",
          "description": "Learn how robotics software manages coordinate frames, sensor data and communication between components."
        },
        {
          "title": "OpenCV — Camera Calibration and 3D Geometry",
          "href": "https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html",
          "description": "Explore the geometry and calibration methods used when interpreting camera measurements."
        },
        {
          "title": "GTSAM — Georgia Tech Smoothing and Mapping",
          "href": "https://gtsam.org/",
          "description": "Explore an open-source library for factor-graph optimization, estimation and mapping."
        },
        {
          "title": "SLAM Toolbox — ROS",
          "href": "https://github.com/SteveMacenski/slam_toolbox",
          "description": "Study a practical SLAM implementation used for mapping and localization in ROS-based robotics systems."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Begin with one small localization problem."
    },
    {
      "type": "paragraph",
      "text": "Once you can explain how a robot estimates its movement, why its position drifts and how additional observations improve the estimate, move toward more advanced systems involving multiple sensors, real-time processing and three-dimensional mapping."
    }
  ]
},
 researchNotes:[
  'Employer advertisements were collected November 2, 2026. Ten complete stored sources from seven employers were contextually reviewed November 10, with three additional boundary reviews. The original cohort contains 23 advertisements from thirteen employers. It is a dated selected sample, not a current vacancy count or skill-frequency study.',
  'The guide covers robot and autonomous-system pose/state estimation, mapping, calibration and sensor integration. Aircraft navigation is included; wearable human pose collection, primary learned-vision training and senior-principal GNC/team-building scope are excluded from the salary calculation. Original classifications and immutable source archives remain unchanged.',
  'The $250,000 estimate is the median of eight eligible annual USD range midpoints across six employers, rounded to the nearest $1,000. Three observations are at Shield AI. Senior/staff and experienced roles contribute; this is not an entry-level rate or representative market median. Bonus and equity are excluded. Structured ATS salary fields do not consistently establish base-pay status. The downloadable derivation preserves every observation and exclusion.',
  'The loop-closure visual is an invented translation-only 2D least-squares example, not a benchmark. The start is anchored; four relative displacement factors and one zero-displacement loop-closure factor receive equal weights. The optimizer distributes the endpoint residual across all five factors. Correspondences are assumed known; rotations and sensor models are omitted. A finite-weight closure reduces the gap without forcing it to zero.',
 ],
 citations:[
  source('evidence','Localization & Mapping: reviewed employer evidence','/research/localization-mapping-engineer-evidence-2026-11-10.json','Selected sources, qualification spans and immutable source hashes.'),
  source('compensation','Black Scarab: Localization & Mapping compensation','/research/localization-mapping-engineer-compensation-2026-11-02.json','Eight annual observations, source clauses, eligibility and exclusions.'),
  source('loop-model','Illustrative loop-closure model','/research/localization-loop-closure-example-2026-11-10.json','Exact displacements, weights, least-squares assumptions and position estimates.'),
  posting('applied',0),posting('bedrock',1),posting('boston',2),posting('field-mapping',3),posting('field-calibration',4),posting('figure',5),posting('shield-navigation',6),posting('shield-estimation',7),posting('shield-staff',8),posting('sunday',9),
  source('ros2','ROS 2: Official Documentation','https://docs.ros.org/','Official robotics middleware, coordinate frames, sensors and communication documentation.'),
  source('opencv','OpenCV: Camera Calibration and 3D Reconstruction','https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html','Official camera geometry, calibration and pose-estimation reference.'),
  source('gtsam-home','GTSAM: Georgia Tech Smoothing and Mapping','https://gtsam.org/','Official library for factor-graph estimation, smoothing and mapping.'),
  source('rep105','ROS REP 105: Coordinate Frames for Mobile Platforms','https://github.com/ros-infrastructure/rep/blob/master/rep-0105.rst','Official odom/map frame conventions, drift and global localization corrections.'),
  source('nav2','Nav2: Mapping and Localization','https://docs.nav2.org/rolling/configuration_and_development/first_time_robot_setup_guide/sensors/mapping_localization/','Official ROS 2 mapping, localization and sensor configuration tutorial.'),
  source('slam-toolbox','SLAM Toolbox','https://github.com/SteveMacenski/slam_toolbox','Maintainer documentation for mapping and pose-graph processing.'),
  source('gtsam','GTSAM: SLAM','https://borglab.github.io/gtsam/slam/','Official documentation for pose constraints and geometric SLAM factors.'),
 ],
};
