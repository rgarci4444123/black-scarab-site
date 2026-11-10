import type {CareerGuideContent,Citation} from '@/lib/career-paths/types';
import {researchForRole} from '@/lib/career-paths/research';
import evidence from '@/public/research/motion-planning-engineer-evidence-2026-11-10.json';
import compensation from '@/public/research/motion-planning-engineer-compensation-2026-11-02.json';
import model from '@/public/research/motion-planning-clearance-example-2026-11-10.json';
import decisions from '@/research/seo/2026-11-10/decisions.json';
const roleId='motion-planning-engineer';
const role=researchForRole(roleId,evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('Motion planning research mismatch');
const seo=decisions.guides.find(item=>item.occupationId===roleId);
if(!seo)throw new Error('Missing motion planning SEO decision');
const salary=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const evidencePath='/research/motion-planning-engineer-evidence-2026-11-10.json';
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-10'});
const posting=(id:string,index:number):Citation=>{const r=evidence.records[index];return source(id,`${r.employer}: ${r.title}`,r.url,'Advertisement collected November 2, 2026. Contextual full-source review and provenance in the evidence export.');};
export const motionPlanningEngineerGuide:CareerGuideContent={
 id:roleId,occupationId:roleId,familyId:'intelligence-autonomy',slug:roleId,
 title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-10',reviewedAt:'2026-11-10',
 research:{snapshotId:evidence.snapshotId,roleId,evidencePath},
 deck:'Develop the algorithms that help robots navigate obstacles, plan movements and reach their destinations safely and efficiently.',
 introduction:['Imagine a warehouse robot trying to retrieve a box from a crowded shelf.'],
 illustration:{src:'/career-paths/motion-planning-engineer-lab.webp',width:1672,height:941,alt:'Conceptual editorial illustration of a compact rover and translucent future poses following a coral route through monumental gray obstacles in an open-air proving ground.'},
 overview:[
 {label:'What you do',value:'Develop software that plans how robots move around obstacles while respecting their physical limitations',sourceIds:['applied','pickle','zipline']},
 {label:'Core skills',value:'C++, Python, geometry, algorithms, optimization and simulation',sourceIds:['applied','pickle','gatik']},
 {label:'Education',value:'Typically computer science, robotics, engineering or a related technical field',sourceIds:['applied','shield','zoox']},
 {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
 ],
sections:[
  {
    "id": "day-to-day",
    "heading": "What does a motion planning engineer do?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "applied",
      "pickle",
      "gatik",
      "zipline"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a warehouse robot trying to retrieve a box from a crowded shelf."
      },
      {
        "type": "paragraph",
        "text": "The robot knows where the box is, but reaching it isn't as simple as moving its arm in a straight line. Other boxes are in the way, the shelf limits how the arm can move, and the robot must avoid hitting anything."
      },
      {
        "type": "paragraph",
        "text": "Motion planning engineers develop the algorithms that figure out how robots can move from one position to another while avoiding obstacles and respecting physical constraints."
      },
      {
        "type": "paragraph",
        "text": "Their work helps robotic arms reach objects, autonomous vehicles navigate traffic and drones plan routes through complex environments."
      },
      {
        "type": "paragraph",
        "text": "A motion planner must consider more than the destination. It also needs to account for the robot's size, shape, movement capabilities and surrounding environment."
      },
      {
        "type": "paragraph",
        "text": "For example, a mobile robot might identify a short route between two obstacles. But if the opening is too narrow for the robot to pass through, that route is not useful."
      },
      {
        "type": "paragraph",
        "text": "A good motion planning system finds a movement that is not only mathematically possible but physically achievable."
      },
      {
        "type": "paragraph",
        "text": "The job combines geometry, computer science, robotics and mathematical optimization."
      },
      {
        "type": "heading",
        "text": "Three areas of motion planning"
      },
      {
        "type": "table",
        "caption": "Motion planning specializations",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "Robotic manipulation",
            "Planning movements for robot arms to reach, grasp and move objects without collisions"
          ],
          [
            "Autonomous vehicles and mobile robots",
            "Generating paths and trajectories that account for obstacles, vehicle movement and changing surroundings"
          ],
          [
            "Autonomous flight",
            "Planning drone or aircraft movements around obstacles while respecting flight dynamics and operating constraints"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These specialties share many underlying principles, but their engineering challenges differ."
      },
      {
        "type": "paragraph",
        "text": "A robotic arm must account for its joints, links and the objects it carries."
      },
      {
        "type": "paragraph",
        "text": "An autonomous vehicle must consider steering, braking and other road users."
      },
      {
        "type": "paragraph",
        "text": "A drone must respect its flight capabilities and may need to account for wind, energy consumption and changing conditions."
      },
      {
        "type": "paragraph",
        "text": "Companies such as Pickle Robot, Applied Intuition and Zipline illustrate these different applications."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "Motion planning engineers spend much of their time developing algorithms, writing software and testing how robots behave in simulation."
      },
      {
        "type": "paragraph",
        "text": "Imagine an engineer reviewing a failed warehouse robot operation from the previous day."
      },
      {
        "type": "paragraph",
        "text": "The robot successfully identified a box and generated a movement to retrieve it. However, during execution, the robot stopped because the box came too close to the shelf."
      },
      {
        "type": "paragraph",
        "text": "The engineer investigates the motion planner."
      },
      {
        "type": "paragraph",
        "text": "Perhaps the software considered the robot's arm but failed to account for the size of the box it was carrying."
      },
      {
        "type": "paragraph",
        "text": "They update the collision model, reproduce the problem in simulation and test whether the revised planner avoids the obstacle."
      },
      {
        "type": "paragraph",
        "text": "Later, the engineer might improve the speed of an algorithm, analyze performance data or work with perception and controls engineers to integrate changes."
      },
      {
        "type": "paragraph",
        "text": "A typical development cycle involves:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Define the movement goal. Determine where the robot needs to go and which obstacles or physical limitations matter.",
          "Represent the environment. Create a model of the robot and its surroundings.",
          "Generate possible movements. Use search or optimization algorithms to identify feasible paths.",
          "Evaluate the results. Check collisions, movement constraints, computation time and overall performance.",
          "Test in simulation. Reproduce difficult scenarios and investigate failures.",
          "Validate on hardware. Test the planned behavior on physical robots under appropriate supervision and operating procedures."
        ]
      },
      {
        "type": "paragraph",
        "text": "A major part of the job involves determining why a plan that appears correct in software fails when a real machine attempts to execute it."
      },
      {
        "type": "heading",
        "text": "When the shortest route is the wrong route"
      },
      {
        "type": "paragraph",
        "text": "Consider a warehouse robot trying to travel from one side of a room to another."
      },
      {
        "type": "paragraph",
        "text": "The shortest route passes between two storage racks."
      },
      {
        "type": "paragraph",
        "text": "The robot's navigation software identifies the opening and generates a path directly through it."
      },
      {
        "type": "paragraph",
        "text": "However, the robot is wider than the gap."
      },
      {
        "type": "paragraph",
        "text": "Even though the center of the robot could theoretically follow the planned line, the body would collide with the racks."
      },
      {
        "type": "paragraph",
        "text": "The motion planning engineer must account for the robot's physical dimensions."
      },
      {
        "type": "paragraph",
        "text": "Once the algorithm understands how much space the robot requires, it can reject the narrow passage and generate another route."
      },
      {
        "type": "paragraph",
        "text": "This illustrates a fundamental principle: the shortest path is not necessarily a feasible path."
      },
      {
        "type": "paragraph",
        "text": "A useful motion plan must consider the entire robot, not just a point representing its position."
      }
    ]
  },
  {
    "id": "planning-vs-related-roles",
    "heading": "How is motion planning different from other robotics careers?",
    "navLabel": "Related careers",
    "paragraphs": [],
    "sourceIds": [
      "applied",
      "kodiak",
      "pickle",
      "nuro"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Motion planning is one part of the larger robotics autonomy system."
      },
      {
        "type": "paragraph",
        "text": "Several engineering disciplines contribute to helping a robot understand its environment and move through it."
      },
      {
        "type": "table",
        "caption": "Responsibilities across the autonomy stack",
        "columns": [
          "Career",
          "Main responsibility"
        ],
        "rows": [
          [
            "Perception Engineer",
            "Uses sensor information to identify objects and understand the surrounding environment"
          ],
          [
            "Localization and Mapping Engineer",
            "Determines where the robot is and represents the environment around it"
          ],
          [
            "Motion Planning Engineer",
            "Determines a feasible movement that reaches a desired goal"
          ],
          [
            "Robotics Controls Engineer",
            "Develops algorithms that help the physical robot follow the intended movement"
          ],
          [
            "Robot Learning Engineer",
            "Develops models that learn robot behaviors from data and experience"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Imagine a robotic arm attempting to pick up a bottle."
      },
      {
        "type": "paragraph",
        "text": "The perception system identifies the bottle and estimates its position."
      },
      {
        "type": "paragraph",
        "text": "The motion planner determines how the arm can reach the bottle without hitting nearby objects."
      },
      {
        "type": "paragraph",
        "text": "The controls system regulates the motors to follow the intended movement."
      },
      {
        "type": "paragraph",
        "text": "A robot learning system might contribute to selecting a grasp or generating movement behavior."
      },
      {
        "type": "paragraph",
        "text": "These responsibilities can overlap, particularly when companies use machine learning to develop systems that combine planning and control."
      },
      {
        "type": "heading",
        "text": "What's the difference between a path and a trajectory?"
      },
      {
        "type": "paragraph",
        "text": "The terms are closely related, but they describe different things."
      },
      {
        "type": "paragraph",
        "text": "A path describes the route or sequence of positions a robot should follow."
      },
      {
        "type": "paragraph",
        "text": "A trajectory also specifies timing, describing how the robot should move along that route over time."
      },
      {
        "type": "paragraph",
        "text": "For example, a mobile robot might plan a curved path around an obstacle."
      },
      {
        "type": "paragraph",
        "text": "The trajectory determines how quickly it travels along different sections of that path, including when it accelerates, slows down or stops."
      },
      {
        "type": "paragraph",
        "text": "This distinction matters because a path that avoids obstacles may still require movements that the robot cannot physically perform."
      },
      {
        "type": "heading",
        "text": "What about behavior planning?"
      },
      {
        "type": "paragraph",
        "text": "Behavior planning operates at a higher level."
      },
      {
        "type": "paragraph",
        "text": "For an autonomous vehicle, a behavior planner might decide whether to remain in a lane, yield to another vehicle or change lanes."
      },
      {
        "type": "paragraph",
        "text": "Motion planning then determines a feasible movement to carry out that decision."
      },
      {
        "type": "paragraph",
        "text": "Some companies combine behavior and motion planning responsibilities into the same engineering position."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills & tools",
    "paragraphs": [],
    "sourceIds": [
      "applied",
      "gatik",
      "pickle",
      "shield",
      "zipline",
      "zoox",
      "ompl",
      "moveit",
      "timing",
      "modern"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "C++ and Python programming"
      },
      {
        "type": "paragraph",
        "text": "Motion planning engineers write software that must handle complex calculations efficiently."
      },
      {
        "type": "paragraph",
        "text": "C++ is particularly important in production robotics because it offers control over performance, memory and software execution."
      },
      {
        "type": "paragraph",
        "text": "Python is widely used for experimentation, simulation, data analysis and testing algorithms."
      },
      {
        "type": "paragraph",
        "text": "Engineers should also understand data structures, algorithms, software testing and debugging."
      },
      {
        "type": "paragraph",
        "text": "A motion planner must not only find a valid solution. It must also handle situations where no solution exists or where the available computation time runs out."
      },
      {
        "type": "heading",
        "text": "Geometry and robot kinematics"
      },
      {
        "type": "paragraph",
        "text": "Robots move through three-dimensional space, and their movement depends on the geometry of their bodies."
      },
      {
        "type": "paragraph",
        "text": "Motion planning engineers need to understand positions, rotations, coordinate systems and how different robot components move relative to one another."
      },
      {
        "type": "paragraph",
        "text": "Kinematics describes how the movement of a robot's joints relates to the position and orientation of its components."
      },
      {
        "type": "paragraph",
        "text": "For example, a robotic arm may have six joints."
      },
      {
        "type": "paragraph",
        "text": "Changing the angle of one joint affects the position of everything connected beyond it."
      },
      {
        "type": "paragraph",
        "text": "A motion planning algorithm must account for these relationships when determining whether a movement is possible."
      },
      {
        "type": "heading",
        "text": "Configuration space"
      },
      {
        "type": "paragraph",
        "text": "One of the most important concepts in motion planning is configuration space."
      },
      {
        "type": "paragraph",
        "text": "A robot's configuration describes the positions of the variables that determine its physical arrangement."
      },
      {
        "type": "paragraph",
        "text": "For a mobile robot moving across a floor, a simplified configuration might include its position and orientation."
      },
      {
        "type": "paragraph",
        "text": "For a robotic arm, a configuration could consist of the angles of all its joints."
      },
      {
        "type": "paragraph",
        "text": "The planner searches through possible configurations to find a sequence that connects the starting position to the goal."
      },
      {
        "type": "paragraph",
        "text": "This is important because a robotic arm's gripper might have a clear route toward an object while another part of the arm would collide with an obstacle."
      },
      {
        "type": "paragraph",
        "text": "The planner must consider the full configuration of the robot."
      },
      {
        "type": "heading",
        "text": "Collision detection and obstacle clearance"
      },
      {
        "type": "paragraph",
        "text": "A motion planner needs to determine whether a proposed movement would cause the robot to collide with its surroundings."
      },
      {
        "type": "paragraph",
        "text": "This requires accurate models of the robot and nearby obstacles."
      },
      {
        "type": "paragraph",
        "text": "Consider a mobile robot with a width of 0.8 meters attempting to pass through a 0.6-meter opening."
      },
      {
        "type": "paragraph",
        "text": "The robot cannot fit, even if its centerline passes through the gap."
      },
      {
        "type": "paragraph",
        "text": "If the application also requires 0.1 meters of clearance on each side, the opening must be at least 1.0 meter wide."
      },
      {
        "type": "planning-clearance",
        "id": "motion-planning-clearance",
        "title": "A clear centerline can still lead to a collision",
        "model": model
      },
      {
        "type": "paragraph",
        "text": "The planner must identify that the passage is too narrow and find an alternative route."
      },
      {
        "type": "paragraph",
        "text": "For a simple circular robot, engineers can account for its footprint by expanding obstacles according to the robot's radius and required clearance."
      },
      {
        "type": "paragraph",
        "text": "This technique helps convert a robot with physical dimensions into a simpler geometric planning problem."
      },
      {
        "type": "paragraph",
        "text": "Real robots may require more detailed collision models, particularly when their shape or orientation changes during movement."
      },
      {
        "type": "heading",
        "text": "Search algorithms"
      },
      {
        "type": "paragraph",
        "text": "Many planning problems involve searching through possible routes or robot configurations."
      },
      {
        "type": "paragraph",
        "text": "One widely used algorithm is A*, pronounced A-star."
      },
      {
        "type": "paragraph",
        "text": "A* explores possible routes through a graph while using an estimate of the remaining distance or cost to guide its search."
      },
      {
        "type": "paragraph",
        "text": "For example, a warehouse robot operating on a grid map can use A* to find a path around obstacles."
      },
      {
        "type": "paragraph",
        "text": "Other planning algorithms include:"
      },
      {
        "type": "table",
        "caption": "Planning algorithms",
        "columns": [
          "Algorithm",
          "General approach"
        ],
        "rows": [
          [
            "A*",
            "Searches a graph for a low-cost route using a heuristic"
          ],
          [
            "RRT — Rapidly-exploring Random Tree",
            "Explores possible configurations by sampling and connecting them"
          ],
          [
            "PRM — Probabilistic Roadmap",
            "Builds a network of sampled configurations that can be used to connect start and goal positions"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These methods have different advantages and limitations."
      },
      {
        "type": "paragraph",
        "text": "Graph-search techniques are useful when a problem can be represented through connected states."
      },
      {
        "type": "paragraph",
        "text": "Sampling-based methods can be valuable for robots operating in spaces with many dimensions, such as multi-joint robotic arms."
      },
      {
        "type": "paragraph",
        "text": "The Open Motion Planning Library (OMPL) provides implementations of sampling-based motion planning algorithms."
      },
      {
        "type": "heading",
        "text": "Trajectory optimization"
      },
      {
        "type": "paragraph",
        "text": "Finding a collision-free path is often only the beginning."
      },
      {
        "type": "paragraph",
        "text": "The robot must also follow that path while respecting its movement limits."
      },
      {
        "type": "paragraph",
        "text": "For example, a vehicle cannot make an instantaneous sharp turn at high speed."
      },
      {
        "type": "paragraph",
        "text": "A robotic arm cannot exceed its joint velocity or acceleration limits."
      },
      {
        "type": "paragraph",
        "text": "Trajectory generation and optimization help produce movements that satisfy these requirements."
      },
      {
        "type": "paragraph",
        "text": "Depending on the application, engineers may optimize for travel time, smoothness, energy consumption, clearance or other objectives."
      },
      {
        "type": "paragraph",
        "text": "A mathematically shorter route may not be preferable if it requires excessive acceleration or places the robot too close to obstacles."
      },
      {
        "type": "heading",
        "text": "Robot dynamics and physical constraints"
      },
      {
        "type": "paragraph",
        "text": "Dynamics connects movement to forces, torque, mass and inertia."
      },
      {
        "type": "paragraph",
        "text": "This becomes important when planning movements for vehicles, aircraft and robots operating near their physical limits."
      },
      {
        "type": "paragraph",
        "text": "A heavy robotic arm cannot accelerate indefinitely."
      },
      {
        "type": "paragraph",
        "text": "A drone must remain within its available thrust and flight capabilities."
      },
      {
        "type": "paragraph",
        "text": "An autonomous vehicle must respect steering and braking constraints."
      },
      {
        "type": "paragraph",
        "text": "Planning engineers need enough understanding of these physical systems to generate movements that can be executed reliably."
      },
      {
        "type": "heading",
        "text": "Simulation and testing"
      },
      {
        "type": "paragraph",
        "text": "Motion planning algorithms are frequently developed and evaluated in simulation before being tested on real robots."
      },
      {
        "type": "paragraph",
        "text": "Simulation allows engineers to create controlled scenarios involving obstacles, difficult movements and unexpected conditions."
      },
      {
        "type": "paragraph",
        "text": "Useful evaluation metrics include:"
      },
      {
        "type": "table",
        "caption": "Planner evaluation metrics",
        "columns": [
          "Metric",
          "What it measures"
        ],
        "rows": [
          [
            "Planning success rate",
            "How often the algorithm finds a valid solution"
          ],
          [
            "Planning time",
            "How long the algorithm takes to generate a plan"
          ],
          [
            "Path length",
            "The distance covered by the planned route"
          ],
          [
            "Minimum clearance",
            "How close the robot comes to obstacles"
          ],
          [
            "Trajectory feasibility",
            "Whether the planned movement respects relevant physical constraints"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "A visually impressive demonstration is not sufficient evidence that a planner works reliably."
      },
      {
        "type": "paragraph",
        "text": "Engineers need repeatable tests, including situations where the planner should correctly report that no valid solution exists."
      },
      {
        "type": "heading",
        "text": "Learning-based motion planning"
      },
      {
        "type": "paragraph",
        "text": "Some robotics companies also use machine learning to develop planning systems."
      },
      {
        "type": "paragraph",
        "text": "These approaches may involve imitation learning, reinforcement learning or learned models that generate movements."
      },
      {
        "type": "paragraph",
        "text": "Nuro provides an example of a company combining planning with machine learning in autonomous driving."
      },
      {
        "type": "paragraph",
        "text": "Other organizations continue to use classical search and optimization methods, particularly where predictable behavior and explicit constraints are important."
      },
      {
        "type": "paragraph",
        "text": "Machine learning is therefore a valuable specialization, but it is not a universal requirement for motion planning engineering."
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
      "pickle",
      "shield",
      "gatik",
      "zoox",
      "nuro",
      "zipline"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Motion planning engineers commonly come from computer science, robotics, mechanical engineering, electrical engineering or applied mathematics."
      },
      {
        "type": "paragraph",
        "text": "The most useful preparation combines programming, algorithms, geometry and an understanding of physical systems."
      },
      {
        "type": "paragraph",
        "text": "A computer science background may provide strong programming and algorithmic foundations."
      },
      {
        "type": "paragraph",
        "text": "Mechanical engineering offers useful preparation in kinematics and dynamics."
      },
      {
        "type": "paragraph",
        "text": "Robotics programs often combine these disciplines."
      },
      {
        "type": "heading",
        "text": "What employers expect"
      },
      {
        "type": "table",
        "caption": "Qualifications in reviewed employer advertisements",
        "columns": [
          "Employer",
          "Representative qualifications"
        ],
        "rows": [
          [
            "Applied Intuition",
            "Related bachelor's degree and production software or planning experience"
          ],
          [
            "Shield AI",
            "Related bachelor's degree or equivalent practical experience, with substantial C++ knowledge"
          ],
          [
            "Pickle Robot",
            "Several years developing production software; direct planning experience may be preferred"
          ],
          [
            "Zoox",
            "Relevant master's degree and experience with real-time motion planning"
          ],
          [
            "Gatik",
            "Advanced academic preparation and professional planning experience for a senior role"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These examples represent different positions, many of them experienced engineering roles."
      },
      {
        "type": "heading",
        "text": "Do you need a master's degree or PhD?"
      },
      {
        "type": "paragraph",
        "text": "Not always."
      },
      {
        "type": "paragraph",
        "text": "Some motion planning positions accept candidates with bachelor's degrees and relevant software engineering experience."
      },
      {
        "type": "paragraph",
        "text": "However, graduate education can be particularly useful for research-oriented roles involving advanced robotics algorithms, mathematical optimization or complex autonomous systems."
      },
      {
        "type": "paragraph",
        "text": "Some employers explicitly require graduate degrees for specialized positions."
      },
      {
        "type": "paragraph",
        "text": "Candidates should evaluate the requirements of their target roles rather than assuming that one educational pathway applies to the entire profession."
      },
      {
        "type": "heading",
        "text": "What should you study?"
      },
      {
        "type": "paragraph",
        "text": "Useful academic and technical foundations include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Linear algebra, calculus and probability.",
          "Data structures, algorithms and numerical methods.",
          "Robotics kinematics and dynamics.",
          "Coordinate transformations and computational geometry.",
          "Search algorithms and mathematical optimization.",
          "C++, Python and Linux.",
          "Simulation, software testing and performance analysis."
        ]
      },
      {
        "type": "paragraph",
        "text": "Hands-on projects are particularly valuable."
      },
      {
        "type": "paragraph",
        "text": "A candidate who can develop a planning algorithm, explain its assumptions and demonstrate how it handles difficult scenarios provides evidence of practical ability."
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
        "text": "Software engineers with strong algorithmic backgrounds can transition into motion planning by developing robotics geometry, kinematics and simulation skills."
      },
      {
        "type": "paragraph",
        "text": "Mechanical and electrical engineers may already understand physical systems but need additional experience with programming and planning algorithms."
      },
      {
        "type": "paragraph",
        "text": "Someone without a technical background should begin with programming, mathematics and simple two-dimensional planning problems before moving toward complex robot models."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do motion planning engineers earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "applied",
      "pickle",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Motion planning engineering combines specialized software development, robotics algorithms and mathematical problem-solving."
      },
      {
        "type": "paragraph",
        "text": "Compensation varies by experience, specialization, location and technical responsibility."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annual compensation at $218,000 based on reviewed U.S. robotics and autonomous-vehicle planning positions."
      },
      {
        "type": "compensation",
        "caption": "Selected U.S. salary advertisements",
        "note": "Annual advertised salary · November 2026",
        "examples": evidence.roles[roleId].compensation
      },
      {
        "type": "heading",
        "text": "What influences compensation?"
      },
      {
        "type": "paragraph",
        "text": "Experience and technical responsibility. Compare whether a role focuses on individual planning components, complete planning systems or critical autonomy capabilities."
      },
      {
        "type": "paragraph",
        "text": "Specialization. Advanced expertise in trajectory optimization, real-time planning, robot manipulation and autonomous navigation can be valuable."
      },
      {
        "type": "paragraph",
        "text": "Production experience. Employers value engineers who have deployed planning algorithms onto real robots and investigated failures outside simulation."
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
        "text": "Early-career engineers may begin by implementing planning algorithms, improving tests and analyzing failures."
      },
      {
        "type": "paragraph",
        "text": "With experience, they take responsibility for larger planning capabilities, including algorithm development, performance evaluation and integration with other robotics systems."
      },
      {
        "type": "paragraph",
        "text": "Senior and staff engineers may define planning architectures, lead research-oriented algorithm development and coordinate technical work across perception, controls and autonomy teams."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire motion planning engineers?",
    "navLabel": "Employers",
    "paragraphs": [],
    "sourceIds": [
      "pickle",
      "applied",
      "gatik",
      "kodiak",
      "nuro",
      "shield",
      "zipline",
      "zoox"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Motion planning is relevant across warehouse robotics, autonomous vehicles, drones and other systems that navigate or manipulate the physical world."
      },
      {
        "type": "heading",
        "text": "Warehouse robotics and manipulation"
      },
      {
        "type": "paragraph",
        "text": "Pickle Robot develops robotic systems that handle packages in logistics environments."
      },
      {
        "type": "paragraph",
        "text": "Motion planning work can involve identifying feasible grasp movements, avoiding collisions and coordinating the sequence of robotic operations."
      },
      {
        "type": "paragraph",
        "text": "Warehouse environments introduce challenges such as irregularly positioned boxes, changing obstacles and limited space for robot movement."
      },
      {
        "type": "heading",
        "text": "Autonomous vehicles"
      },
      {
        "type": "paragraph",
        "text": "Applied Intuition, Gatik, Kodiak, Nuro and Zoox provide examples of companies working on autonomous driving and vehicle planning."
      },
      {
        "type": "paragraph",
        "text": "Their planning systems may determine how vehicles follow roads, navigate obstacles, respond to other road users and execute maneuvers."
      },
      {
        "type": "paragraph",
        "text": "These systems must work closely with perception, prediction and vehicle controls."
      },
      {
        "type": "paragraph",
        "text": "Planning also involves balancing safety-related constraints, driving progress, ride comfort and real-time computational requirements."
      },
      {
        "type": "heading",
        "text": "Autonomous drones and aircraft"
      },
      {
        "type": "paragraph",
        "text": "Zipline develops autonomous delivery aircraft that require real-time planning and decision-making."
      },
      {
        "type": "paragraph",
        "text": "Motion planning in this environment must account for flight capabilities, environmental conditions and other operating constraints."
      },
      {
        "type": "paragraph",
        "text": "Shield AI also develops autonomous systems involving planning and decision-making for aircraft and other platforms."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Relevant searches include Motion Planning Engineer, Robotics Planning Engineer, Trajectory Planning Engineer, Task and Motion Planning Engineer, Software Engineer — Planning, and Autonomy Engineer."
      },
      {
        "type": "paragraph",
        "text": "Some positions also use titles related to behavior planning or manipulation."
      },
      {
        "type": "paragraph",
        "text": "Read the job description carefully."
      },
      {
        "type": "paragraph",
        "text": "A position focused on scheduling deliveries or choosing routes between destinations is not necessarily the same as developing collision-aware movements for a physical robot."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into motion planning engineering",
    "navLabel": "Your starting point",
    "paragraphs": [],
    "sourceIds": [
      "applied",
      "pickle",
      "shield",
      "modern",
      "ompl"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Several technical backgrounds provide useful starting points."
      },
      {
        "type": "table",
        "caption": "Routes into motion planning",
        "columns": [
          "Your background",
          "Skills to prioritize",
          "Suggested project"
        ],
        "rows": [
          [
            "Software engineering",
            "Robot geometry, kinematics and planning algorithms",
            "Build an A* or RRT path planner"
          ],
          [
            "Mechanical engineering",
            "C++, Python, algorithms and optimization",
            "Simulate motion planning for a robotic arm"
          ],
          [
            "Electrical engineering",
            "Robotics geometry, software development and trajectory planning",
            "Develop a mobile robot navigation simulation"
          ],
          [
            "Machine learning or data science",
            "Collision detection, dynamics and real-time planning",
            "Compare a learned planning method against a classical baseline"
          ],
          [
            "Complete beginner",
            "Python, geometry and algorithms",
            "Build a simple two-dimensional obstacle-avoidance planner"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you already work in software engineering"
      },
      {
        "type": "paragraph",
        "text": "Your programming experience provides a strong foundation."
      },
      {
        "type": "paragraph",
        "text": "Focus on robotics geometry, kinematics and planning algorithms."
      },
      {
        "type": "paragraph",
        "text": "Begin with a small path-planning project that searches through an environment containing obstacles."
      },
      {
        "type": "paragraph",
        "text": "Demonstrate that your software can generate valid routes, recognize when no route exists and measure performance."
      },
      {
        "type": "paragraph",
        "text": "As your skills develop, progress toward more realistic robot models and C++ implementations."
      },
      {
        "type": "heading",
        "text": "If you come from mechanical engineering"
      },
      {
        "type": "paragraph",
        "text": "Your understanding of physical movement, kinematics and dynamics is useful."
      },
      {
        "type": "paragraph",
        "text": "Develop stronger programming skills and study search algorithms and optimization."
      },
      {
        "type": "paragraph",
        "text": "A simulated robotic arm is a good project because it combines physical constraints with computational planning."
      },
      {
        "type": "heading",
        "text": "If you work in electrical engineering"
      },
      {
        "type": "paragraph",
        "text": "You may already understand sensors, actuators and robot hardware."
      },
      {
        "type": "paragraph",
        "text": "Focus on software development, computational geometry and algorithm design."
      },
      {
        "type": "paragraph",
        "text": "Develop a navigation or manipulation simulation that demonstrates how a robot can find feasible movements around obstacles."
      },
      {
        "type": "heading",
        "text": "If you work in machine learning"
      },
      {
        "type": "paragraph",
        "text": "Your experience with models and data provides a useful starting point for learning-based planning."
      },
      {
        "type": "paragraph",
        "text": "However, robotics planning requires understanding physical geometry, constraints and closed-loop behavior."
      },
      {
        "type": "paragraph",
        "text": "Develop a classical planning baseline first, then evaluate whether a learned approach provides meaningful improvements."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin with Python and basic coordinate geometry."
      },
      {
        "type": "paragraph",
        "text": "Learn how graphs represent connected locations and how search algorithms explore them."
      },
      {
        "type": "paragraph",
        "text": "Then develop a simple two-dimensional environment containing a start position, a destination and several obstacles."
      },
      {
        "type": "paragraph",
        "text": "Progress toward more sophisticated planning methods after you understand how to identify collisions and evaluate valid paths."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Motion planning interviews frequently test algorithmic reasoning and how candidates approach constrained movement problems."
      },
      {
        "type": "paragraph",
        "text": "You may be asked how A* works, how to handle obstacles or how to determine whether a robot can follow a proposed path."
      },
      {
        "type": "paragraph",
        "text": "Employers may also ask about collision detection, computation time, kinematics and planning failures."
      },
      {
        "type": "paragraph",
        "text": "Prepare one project where you can explain:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "How you represented the environment and robot.",
          "Which planning algorithm you selected and why.",
          "How you checked for collisions.",
          "What happened when no valid route existed.",
          "How you measured performance.",
          "What changes improved the results."
        ]
      },
      {
        "type": "paragraph",
        "text": "A clear explanation of a failed plan and its correction can be more persuasive than simply listing sophisticated algorithms."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first motion planning project",
    "navLabel": "Portfolio",
    "paragraphs": [],
    "sourceIds": [
      "modern",
      "ompl",
      "moveit",
      "timing"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Plan a mobile robot through an obstacle course"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to develop software that plans routes for a simulated mobile robot moving through a two-dimensional environment."
      },
      {
        "type": "paragraph",
        "text": "You do not need to purchase a physical robot."
      },
      {
        "type": "paragraph",
        "text": "The goal is to demonstrate how motion planning algorithms account for obstacles, robot dimensions and movement constraints."
      },
      {
        "type": "paragraph",
        "text": "You can build the project using Python and basic visualization tools."
      },
      {
        "type": "heading",
        "text": "Step 1: Create the environment"
      },
      {
        "type": "paragraph",
        "text": "Build a simple two-dimensional map containing several obstacles."
      },
      {
        "type": "paragraph",
        "text": "Include a starting position and destination."
      },
      {
        "type": "paragraph",
        "text": "Design at least three scenarios:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "An open environment with a clear route.",
          "A narrow passage that may be too small for the robot.",
          "A destination completely blocked by obstacles."
        ]
      },
      {
        "type": "paragraph",
        "text": "Define the robot's dimensions and the clearance it requires."
      },
      {
        "type": "heading",
        "text": "Step 2: Represent the robot"
      },
      {
        "type": "paragraph",
        "text": "Begin with a circular robot."
      },
      {
        "type": "paragraph",
        "text": "Give it a radius and define how much clearance it should maintain from obstacles."
      },
      {
        "type": "paragraph",
        "text": "Rather than treating the robot as a dimensionless point, include its physical footprint in collision checking."
      },
      {
        "type": "paragraph",
        "text": "A simple method is to expand obstacles by the robot's radius plus the clearance margin."
      },
      {
        "type": "paragraph",
        "text": "This allows the planner to search for a path for the robot's center while accounting for its size."
      },
      {
        "type": "heading",
        "text": "Step 3: Implement A* path planning"
      },
      {
        "type": "paragraph",
        "text": "Represent the environment as a grid."
      },
      {
        "type": "paragraph",
        "text": "Implement the A* algorithm to search for a route between the start and goal."
      },
      {
        "type": "paragraph",
        "text": "The planner should avoid blocked locations and return a valid path when one exists."
      },
      {
        "type": "paragraph",
        "text": "If diagonal movements are allowed, prevent paths from cutting through blocked corners."
      },
      {
        "type": "paragraph",
        "text": "Also ensure that the software reports when the destination cannot be reached."
      },
      {
        "type": "heading",
        "text": "Step 4: Test difficult scenarios"
      },
      {
        "type": "paragraph",
        "text": "Run the planner through your three environments."
      },
      {
        "type": "paragraph",
        "text": "Evaluate whether it:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Finds a valid route in open space.",
          "Avoids a passage that is too narrow.",
          "Correctly reports an unreachable destination."
        ]
      },
      {
        "type": "paragraph",
        "text": "Check the complete path for collisions, not just the start and end positions."
      },
      {
        "type": "paragraph",
        "text": "A successful planner must recognize invalid movements even when they appear visually close to a valid route."
      },
      {
        "type": "heading",
        "text": "Step 5: Compare two planning approaches"
      },
      {
        "type": "paragraph",
        "text": "Add another planning approach, such as RRT, or compare A* using different grid resolutions."
      },
      {
        "type": "paragraph",
        "text": "Use the same robot dimensions, obstacles and clearance requirements."
      },
      {
        "type": "paragraph",
        "text": "Record the results under consistent test conditions."
      },
      {
        "type": "paragraph",
        "text": "If you use a randomized planner, repeat trials and record the random seeds."
      },
      {
        "type": "heading",
        "text": "Step 6: Measure performance"
      },
      {
        "type": "paragraph",
        "text": "Evaluate the planners using several metrics."
      },
      {
        "type": "table",
        "caption": "A small planning benchmark",
        "columns": [
          "Measurement",
          "What it tells you"
        ],
        "rows": [
          [
            "Success rate",
            "How often the planner finds a valid route"
          ],
          [
            "Planning time",
            "How long the algorithm takes to generate a route"
          ],
          [
            "Path length",
            "The distance traveled along the planned route"
          ],
          [
            "Minimum clearance",
            "How close the robot comes to obstacles"
          ],
          [
            "Failure cases",
            "Situations where no valid route is found or the planner times out"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Compare the results rather than assuming that the algorithm producing the shortest-looking path is best."
      },
      {
        "type": "paragraph",
        "text": "A fast planner that returns invalid routes is not an improvement."
      },
      {
        "type": "heading",
        "text": "Step 7: Add movement timing"
      },
      {
        "type": "paragraph",
        "text": "Once your planner generates a valid path, assign a speed profile."
      },
      {
        "type": "paragraph",
        "text": "Define maximum speed and acceleration limits for the simulated robot."
      },
      {
        "type": "paragraph",
        "text": "For a simple model that cannot turn instantaneously while moving, you can require the robot to slow down or stop at sharp corners."
      },
      {
        "type": "paragraph",
        "text": "More advanced implementations can smooth the path and generate a feasible trajectory."
      },
      {
        "type": "paragraph",
        "text": "If you change the geometry of the path during smoothing, check it again for collisions."
      },
      {
        "type": "heading",
        "text": "Step 8: Investigate one failure"
      },
      {
        "type": "paragraph",
        "text": "Identify a scenario where the planner performs poorly."
      },
      {
        "type": "paragraph",
        "text": "Perhaps the grid resolution is too coarse to identify a narrow valid route, or the algorithm takes too long in a cluttered environment."
      },
      {
        "type": "paragraph",
        "text": "Investigate the cause and change one part of the implementation."
      },
      {
        "type": "paragraph",
        "text": "Repeat the original tests to measure whether the modification improved the results."
      },
      {
        "type": "heading",
        "text": "Step 9: Document your results"
      },
      {
        "type": "paragraph",
        "text": "Prepare a short report describing your robot model, planning algorithms and evaluation."
      },
      {
        "type": "paragraph",
        "text": "Include maps showing successful and failed planning attempts."
      },
      {
        "type": "paragraph",
        "text": "Explain the assumptions, physical constraints and performance trade-offs."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Python source code and installation instructions.",
          "A diagram of the robot's dimensions and collision model.",
          "Maps showing different obstacle configurations.",
          "Visualizations of successful and failed routes.",
          "A comparison of planning time, path length and success rate.",
          "An explanation of one problem and how you improved it.",
          "A short video demonstrating the planner."
        ]
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "Move from a mobile robot to a simulated robotic arm using MoveIt."
      },
      {
        "type": "paragraph",
        "text": "Unlike a circular mobile robot, a robotic arm must account for several joints moving together."
      },
      {
        "type": "paragraph",
        "text": "Include the arm's complete geometry, joint limits and nearby obstacles."
      },
      {
        "type": "paragraph",
        "text": "Then add an object attached to the gripper."
      },
      {
        "type": "paragraph",
        "text": "Compare how the planner behaves when the arm moves without an object versus when it carries a package."
      },
      {
        "type": "paragraph",
        "text": "This introduces a more realistic manipulation problem where both the robot and its payload must avoid collisions."
      }
    ]
  }
],
nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "modern-home",
    "ompl",
    "moveit-home"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "Modern Robotics — Motion Planning",
          "href": "https://modernrobotics.northwestern.edu/",
          "description": "Learn the mathematical foundations of motion planning, configuration spaces and robotics algorithms."
        },
        {
          "title": "Open Motion Planning Library (OMPL)",
          "href": "https://ompl.kavrakilab.org/",
          "description": "Explore open-source motion planning algorithms and examples, including sampling-based methods such as RRT and PRM."
        },
        {
          "title": "MoveIt — Robotics Motion Planning",
          "href": "https://moveit.ai/",
          "description": "Learn how motion planning is implemented for robotic arms, including collision checking, planning pipelines and robot configuration."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Start with a small planning problem that you can understand completely."
    },
    {
      "type": "paragraph",
      "text": "Once you can generate a valid route, explain why it avoids collisions and measure its performance, progress toward more complex robotic systems involving multiple joints, changing environments and real-time constraints."
    }
  ]
},
researchNotes:[
  "Employer advertisements were collected November 2, 2026; ten complete stored sources were reviewed November 10, with two additional mission/discrete-planning boundary reviews. The original primary cohort contains 25 advertisements. It is a dated selected sample, not a count of current openings or an industry census. Original classifications and stored sources are unchanged.",
  "The guide covers technical ownership of local motion, collision-aware paths, feasible trajectories and learned vehicle planning. Behavior responsibilities are included where they connect directly to motion. Dedicated mission routing, discrete task allocation and planning infrastructure are treated as adjacent specialties. Skills and qualifications are contextual descriptions, not cohort-wide frequency estimates.",
  "The compensation estimate is the median of seven eligible annual USD range midpoints across five employers, rounded to the nearest $1,000 with halves upward. Six ranges use official structured annual fields; Nuro explicitly states a yearly base-pay range. The median is $217,500, producing a $218,000 estimate. One observation is included per distinct requisition; two Applied Intuition and two Zoox requisitions remain separate. Bonus and equity are excluded. Structured fields do not consistently identify base pay, so the table uses annual advertised salary.",
  "This purposive sample includes general, senior and staff technical roles and emphasizes autonomous vehicles and California locations. It is not an entry-level rate or representative market median. Mission planning and discrete task allocation are excluded even where an annual salary exists. Gatik, Kodiak and Zipline ranges lack an explicitly verified annual period in the stored source and are excluded; an annual bonus does not establish salary frequency. Full observations and exclusion decisions are downloadable.",
  "The clearance graphic is an illustrative static 2D geometry example, not measured employer performance or a production planner. A circular translating robot has radius 0.4 m and a 0.1 m clearance margin. Axis-aligned obstacle rectangles are expanded by 0.5 m with rounded corners, representing their Minkowski sum with that disk. The 0.6 m gap cannot admit the 0.8 m robot; including both margins requires 1.0 m. The detour remains outside the expanded obstacles and map boundary. It is a geometric path with corners, not a timed trajectory or a shortest-path claim. Shape, orientation, dynamics, uncertainty and moving obstacles require richer models.",
  "The shelf example and portfolio exercise are educational scenarios. A small simulation demonstrates implementation and evaluation, not deployment readiness or safety certification. The cover is a conceptual editorial illustration. Technical documentation was checked November 10, 2026. The Pickle Robot search result reproduced planning responsibilities, but direct retrieval returned 403; no current-opening claim is made."
],
 citations:[
 source('study','Black Scarab: November 2 employer research','/research/physical-ai-careers-2026-11-02.json','Dated aggregate and original role definitions.'),
 source('evidence','Reviewed motion-planning evidence',evidencePath,'Ten full-source contextual reviews, qualifications and original hashes.'),
 source('compensation','Motion Planning Engineer compensation derivation','/research/motion-planning-engineer-compensation-2026-11-02.json','Seven eligible annual observations, exclusions and reproducible estimate.'),
 source('clearance','Illustrative motion-planning clearance model','/research/motion-planning-clearance-example-2026-11-10.json','Robot radius, clearance, obstacle geometry and exact route coordinates.'),
 posting('applied',0),posting('fallback',1),posting('gatik',2),posting('kodiak',3),posting('nuro',4),posting('pickle',5),posting('shield',6),posting('zipline',7),posting('zoox-senior',8),posting('zoox',9),
 source('modern-home','Modern Robotics: video supplements','https://modernrobotics.northwestern.edu/','Official foundations, configuration space and motion-planning chapters.'),
 source('moveit-home','MoveIt: robotics motion planning','https://moveit.ai/','Official framework overview and entry point to tutorials and documentation.'),
 source('modern','Modern Robotics: overview of motion planning','https://modernrobotics.northwestern.edu/nu-gm-book-resource/10-1-overview-of-motion-planning/','Official textbook supplement on configuration space and motion-planning problems.'),
 source('ompl','The Open Motion Planning Library','https://ompl.kavrakilab.org/','Official library documentation, algorithms, integration boundaries and benchmarking.'),
 source('moveit','MoveIt: motion planning pipeline','https://moveit.picknik.ai/main/doc/examples/motion_planning_pipeline/motion_planning_pipeline_tutorial.html','Official explanation of planning and configurable pre/post-processing.'),
 source('timing','MoveIt: time parameterization','https://moveit.picknik.ai/main/doc/examples/time_parameterization/time_parameterization_tutorial.html','Official timing, limit, smoothing and collision-rechecking guidance.'),
 ],
};
