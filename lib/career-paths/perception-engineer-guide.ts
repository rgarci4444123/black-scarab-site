import type { CareerGuideContent, Citation } from '@/lib/career-paths/types';
import { researchForRole } from '@/lib/career-paths/research';
import evidence from '@/public/research/perception-engineer-evidence-2026-11-09.json';
import compensation from '@/public/research/perception-engineer-compensation-2026-11-02.json';
import decisions from '@/research/seo/2026-11-09/decisions.json';

const role = researchForRole('perception-engineer',evidence.snapshotId);
if (!role || compensation.snapshotId !== evidence.snapshotId) throw new Error('Perception guide research mismatch');
const seo = decisions.guides.find(item=>item.occupationId==='perception-engineer');
if (!seo) throw new Error('Missing perception SEO decision');
const salary = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const evidencePath = '/research/perception-engineer-evidence-2026-11-09.json';
const compensationPath = '/research/perception-engineer-compensation-2026-11-02.json';
const calibration = 'https://docs.opencv.org/4.13.0/dc/dbb/tutorial_py_calibration.html';
const detection = 'https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html';
const geometry = 'https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html';
const ros = 'https://docs.ros.org/';
const source = (id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-09'});
const posting = (id:string,recordId:string):Citation=>{
  const record=evidence.records.find(item=>item.id===recordId);
  if(!record)throw new Error(`Missing perception evidence: ${recordId}`);
  return source(id,`${record.employer}: ${record.title}`,record.url,'Employer advertisement collected November 2, 2026; full-source context, qualifications and source hashes are preserved in the evidence export.');
};

export const perceptionEngineerGuide:CareerGuideContent={
  id:'perception-engineer',occupationId:'perception-engineer',familyId:'intelligence-autonomy',slug:'perception-engineer',
  title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-09',reviewedAt:'2026-11-09',
  research:{snapshotId:evidence.snapshotId,roleId:'perception-engineer',evidencePath},
  deck:"Build the systems that help robots recognize objects, understand their surroundings and navigate the physical world.",
  introduction:["Imagine a warehouse robot trying to pick up a package. Its camera captures an image, but the robot still needs to determine which object is the package, where it is positioned, how far away it sits and whether something is blocking it."],
  illustration:{src:'/career-paths/perception-engineer-lab.webp',width:1672,height:941,alt:'Illustration of a perception engineer inspecting a point cloud and object segmentation while a robot camera observes objects on a workbench.'},
  overview:[
  {
    "label": "What you do",
    "value": "Develop software that helps robots interpret camera images and sensor data",
    "sourceIds": [
      "figure",
      "agility",
      "rhoda"
    ]
  },
  {
    "label": "Core skills",
    "value": "Computer vision, Python, C++, machine learning and 3D geometry",
    "sourceIds": [
      "apptronik",
      "path",
      "one-x"
    ]
  },
  {
    "label": "Education",
    "value": "Typically a degree in computer science, robotics, engineering or a related field",
    "sourceIds": [
      "fieldai",
      "path",
      "apptronik"
    ]
  },
  {
    "label": "Compensation",
    "value": `${salary}/year`,
    "detail": "Black Scarab estimate",
    "sourceIds": [
      "compensation"
    ]
  }
],
  sections:[
  {
    "id": "day-to-day",
    "heading": "What does a perception engineer do?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "agility",
      "path",
      "rhoda",
      "one-x"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a warehouse robot trying to pick up a package. Its camera captures an image, but the robot still needs to determine which object is the package, where it is positioned, how far away it sits and whether something is blocking it."
      },
      {
        "type": "paragraph",
        "text": "Perception engineers build the software that turns raw camera images and sensor measurements into information robots can use."
      },
      {
        "type": "paragraph",
        "text": "Their work combines computer vision, machine learning, geometry and software engineering. Some specialize in recognizing objects, while others reconstruct three-dimensional environments or combine information from several sensors."
      },
      {
        "type": "paragraph",
        "text": "The challenge isn't simply getting a robot to recognize something in a demonstration. It's making that recognition reliable when lighting changes, objects overlap or the robot encounters an unfamiliar environment."
      },
      {
        "type": "table",
        "caption": "Four areas of robotics perception",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "Object detection and segmentation",
            "Identifying objects, people and surfaces in images or 3D data"
          ],
          [
            "Tracking and motion",
            "Following objects over time and estimating how they move"
          ],
          [
            "3D perception and sensor fusion",
            "Combining cameras, depth sensors and other measurements to understand the environment"
          ],
          [
            "Real-time perception",
            "Making algorithms run accurately and quickly on the robot's onboard computer"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These specialties frequently overlap."
      },
      {
        "type": "paragraph",
        "text": "A perception engineer working on a humanoid robot might develop software that recognizes people and objects. An engineer working on an autonomous warehouse robot might focus on detecting packages, identifying obstacles and measuring their locations."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "Perception engineering involves much more than training artificial intelligence models."
      },
      {
        "type": "paragraph",
        "text": "An engineer might spend the morning examining camera recordings from a robot that failed to identify an object. They could discover that the training dataset contained too few examples of objects under poor lighting."
      },
      {
        "type": "paragraph",
        "text": "Later, they might modify an algorithm, test it against recorded sensor data and measure whether the change improved accuracy."
      },
      {
        "type": "paragraph",
        "text": "Before deploying the updated software, they also need to check whether it runs quickly enough on the robot's computer."
      },
      {
        "type": "paragraph",
        "text": "A typical development cycle involves:"
      },
      {
        "type": "list",
        "items": [
          "Collect sensor data. Record camera images, depth measurements or other information from robots operating in realistic environments.",
          "Develop algorithms. Build or adapt software to detect objects, estimate their positions or interpret a scene.",
          "Evaluate performance. Measure accuracy and identify situations where the system makes mistakes.",
          "Optimize the software. Improve processing speed and reduce computational requirements.",
          "Test on robots. Verify that the system performs reliably outside a controlled demonstration."
        ],
        "ordered": true
      },
      {
        "type": "paragraph",
        "text": "The last step is particularly important. A model that performs well on a computer can still struggle when installed on a moving robot."
      },
      {
        "type": "heading",
        "text": "When a robot fails to recognize a package"
      },
      {
        "type": "paragraph",
        "text": "Consider a warehouse robot designed to pick packages from a conveyor."
      },
      {
        "type": "paragraph",
        "text": "The system recognizes a cardboard box when it is fully visible. But when another package partially blocks it, the robot fails to detect it."
      },
      {
        "type": "paragraph",
        "text": "The perception engineer reviews the camera footage and compares the failed detection with examples that worked."
      },
      {
        "type": "paragraph",
        "text": "Several explanations are possible. The training data might contain too few partially hidden objects. The camera might be positioned poorly, or the detection algorithm might require too much confidence before reporting an object."
      },
      {
        "type": "paragraph",
        "text": "The engineer tests possible improvements using the same evaluation dataset and measures whether the changes reduce missed detections."
      },
      {
        "type": "paragraph",
        "text": "A successful solution must also avoid introducing new problems, such as incorrectly identifying objects that are not present."
      },
      {
        "type": "paragraph",
        "text": "This cycle of observing failures, developing improvements and validating the results is central to perception engineering."
      }
    ]
  },
  {
    "id": "perception-vs-computer-vision",
    "heading": "How is perception different from computer vision?",
    "navLabel": "Perception & computer vision",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "apptronik",
      "one-x"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Computer vision and robotics perception are closely related, but they are not identical."
      },
      {
        "type": "paragraph",
        "text": "Computer vision focuses on extracting information from images or video. Robotics perception applies visual and other sensor information to help a physical machine understand its surroundings."
      },
      {
        "type": "table",
        "caption": "Comparison",
        "columns": [
          "Discipline",
          "Main question"
        ],
        "rows": [
          [
            "Computer vision",
            "What can we identify or measure in an image?"
          ],
          [
            "Robotics perception",
            "What is happening around the robot?"
          ],
          [
            "Localization and mapping",
            "Where is the robot, and what does its environment look like?"
          ],
          [
            "Robot learning",
            "What behaviors and actions can the robot learn?"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, a computer vision algorithm might identify a coffee cup in an image."
      },
      {
        "type": "paragraph",
        "text": "A robotics perception system may need to determine where the cup is relative to the robot, how far away it is and whether it can be reached."
      },
      {
        "type": "paragraph",
        "text": "That information can then be passed to motion-planning software, which determines how the robot should move."
      },
      {
        "type": "figure",
        "src": "/career-paths/perception-sensor-to-action.webp",
        "alt": "Illustrated perception workflow showing camera images, object segmentation and 3D depth, followed by sensor input, perception, a world model and robot action.",
        "caption": "View full-size diagram",
        "width": 1774,
        "height": 887,
        "fullSizeHref": "/career-paths/perception-sensor-to-action.webp"
      },
      {
        "type": "paragraph",
        "text": "These boundaries are not rigid. Employers sometimes combine perception, localization, mapping and machine learning responsibilities into one position."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills & tools",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "apptronik",
      "path",
      "pickle",
      "rhoda",
      "one-x",
      "calibration"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Python and C++"
      },
      {
        "type": "paragraph",
        "text": "Python is widely used for machine learning experiments, data analysis and model development."
      },
      {
        "type": "paragraph",
        "text": "C++ is common in deployed robotics software, particularly when processing speed, memory efficiency and integration with other systems matter."
      },
      {
        "type": "paragraph",
        "text": "Perception engineers should also understand version control, software testing and debugging."
      },
      {
        "type": "paragraph",
        "text": "The goal is not simply to write an algorithm that works once. It is to build software that other engineers can test, reproduce and maintain."
      },
      {
        "type": "heading",
        "text": "Computer vision"
      },
      {
        "type": "paragraph",
        "text": "Computer vision provides many of the techniques used in perception."
      },
      {
        "type": "paragraph",
        "text": "Important concepts include object detection, image segmentation, feature extraction, camera calibration and depth estimation."
      },
      {
        "type": "paragraph",
        "text": "OpenCV is a commonly used library for image processing, camera geometry and computer vision tasks."
      },
      {
        "type": "paragraph",
        "text": "Engineers should understand how images are formed and how changes in lighting, perspective or camera position affect the results."
      },
      {
        "type": "heading",
        "text": "Machine learning"
      },
      {
        "type": "paragraph",
        "text": "Modern perception systems frequently use deep learning to recognize objects and interpret scenes."
      },
      {
        "type": "paragraph",
        "text": "PyTorch is a widely used framework for developing and training these models."
      },
      {
        "type": "paragraph",
        "text": "Important skills include preparing datasets, training models, evaluating predictions and understanding why algorithms fail."
      },
      {
        "type": "paragraph",
        "text": "Knowing how to run an existing model is a starting point. More advanced engineers must know how to improve its performance and determine whether those improvements are meaningful."
      },
      {
        "type": "heading",
        "text": "3D geometry and sensor calibration"
      },
      {
        "type": "paragraph",
        "text": "Robots operate in three-dimensional environments."
      },
      {
        "type": "paragraph",
        "text": "A camera might identify an object in an image, but the robot must often determine where that object exists in physical space."
      },
      {
        "type": "paragraph",
        "text": "Engineers use coordinate systems, transformations and camera geometry to connect observations to the robot's position."
      },
      {
        "type": "paragraph",
        "text": "Sensor calibration ensures that measurements from different devices correspond correctly."
      },
      {
        "type": "paragraph",
        "text": "For example, if a camera and depth sensor are not properly aligned, a robot might identify an object accurately but estimate its location incorrectly."
      },
      {
        "type": "heading",
        "text": "Sensor fusion"
      },
      {
        "type": "paragraph",
        "text": "Robots may combine multiple types of sensors, including cameras, LiDAR, depth cameras and inertial measurement units."
      },
      {
        "type": "paragraph",
        "text": "Each sensor provides different information."
      },
      {
        "type": "paragraph",
        "text": "A camera can capture detailed visual features. A depth sensor measures distance, while an inertial sensor provides information about motion and orientation."
      },
      {
        "type": "paragraph",
        "text": "Sensor fusion combines these measurements into a more useful representation of the environment."
      },
      {
        "type": "paragraph",
        "text": "This requires accurate calibration, consistent coordinate systems and appropriate timing."
      },
      {
        "type": "heading",
        "text": "Real-time performance and evaluation"
      },
      {
        "type": "paragraph",
        "text": "A perception algorithm must operate within the robot's computing resources and timing requirements."
      },
      {
        "type": "paragraph",
        "text": "An object detector that takes several seconds to process an image may be unsuitable for a robot moving through a busy environment."
      },
      {
        "type": "paragraph",
        "text": "Engineers measure latency, processing speed, memory usage and prediction accuracy."
      },
      {
        "type": "paragraph",
        "text": "They also investigate how performance changes across conditions such as lighting, distance, occlusion and unfamiliar objects."
      },
      {
        "type": "paragraph",
        "text": "A good perception system balances accuracy, speed and reliability."
      }
    ]
  },
  {
    "id": "education",
    "heading": "What education do you need?",
    "navLabel": "Education",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "path",
      "apptronik",
      "one-x"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Most perception engineers come from computer science, robotics, electrical engineering or related technical disciplines."
      },
      {
        "type": "paragraph",
        "text": "Useful university subjects include linear algebra, probability, statistics, computer vision, machine learning, algorithms and software engineering."
      },
      {
        "type": "paragraph",
        "text": "A robotics-specific degree is not mandatory. Many engineers enter the field after developing relevant skills in machine learning, computer vision or general software engineering."
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
            "FieldAI",
            "PhD, relevant master's plus 2+ years, or relevant bachelor's plus 4+ years of experience"
          ],
          [
            "Path Robotics",
            "Master's or PhD; a bachelor's with strong production ML experience is also considered"
          ],
          [
            "Apptronik",
            "Relevant master's or PhD and several years developing and deploying perception or SLAM systems"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These examples reflect experienced positions, not universal requirements."
      },
      {
        "type": "paragraph",
        "text": "Research-heavy roles may prefer graduate degrees, while software-oriented positions can place greater emphasis on engineering experience and demonstrated results."
      },
      {
        "type": "heading",
        "text": "Do you need a master's degree or PhD?"
      },
      {
        "type": "paragraph",
        "text": "Not necessarily."
      },
      {
        "type": "paragraph",
        "text": "Graduate education can be particularly valuable for research-focused work involving new algorithms, advanced machine learning or complex 3D perception."
      },
      {
        "type": "paragraph",
        "text": "However, engineers who can build, evaluate and deploy reliable perception software may also qualify through relevant industry experience."
      },
      {
        "type": "paragraph",
        "text": "The most useful qualification depends on the role."
      },
      {
        "type": "paragraph",
        "text": "Someone developing novel perception algorithms may need stronger research credentials than someone integrating and optimizing existing models for production robots."
      },
      {
        "type": "heading",
        "text": "Can you enter without a technical background?"
      },
      {
        "type": "paragraph",
        "text": "Yes, but perception engineering requires substantial programming and mathematical knowledge."
      },
      {
        "type": "paragraph",
        "text": "A practical starting point is to learn Python, linear algebra and basic statistics before moving into image processing and machine learning."
      },
      {
        "type": "paragraph",
        "text": "From there, develop projects that demonstrate your ability to work with real data, evaluate results and explain failures."
      },
      {
        "type": "paragraph",
        "text": "A short course can introduce the field, but independent responsibility for a production perception system generally requires deeper technical preparation."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do perception engineers earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "evidence",
      "figure",
      "apptronik",
      "pickle"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Perception engineering is a specialized field combining software development, machine learning and robotics."
      },
      {
        "type": "paragraph",
        "text": "Compensation varies by experience, location and the complexity of the systems an engineer is responsible for."
      },
      {
        "type": "compensation",
        "caption": "Selected U.S. salary advertisements — November 2026",
        "examples": evidence.roles['perception-engineer'].compensation,
        "note": ""
      },
      {
        "type": "paragraph",
        "text": "These are selected advertised salary ranges for experienced positions. Bonuses and equity may be additional."
      },
      {
        "type": "heading",
        "text": "What influences compensation?"
      },
      {
        "type": "paragraph",
        "text": "Experience and technical responsibility. Engineers responsible for entire perception systems generally earn more than those contributing to individual components."
      },
      {
        "type": "paragraph",
        "text": "Specialization. Expertise in 3D perception, sensor fusion, geometric vision or real-time machine learning can be valuable for specialized positions."
      },
      {
        "type": "paragraph",
        "text": "Production experience. Employers value engineers who have deployed software onto physical robots and solved problems that appeared outside laboratory conditions."
      },
      {
        "type": "paragraph",
        "text": "Location and employer. Compensation varies across geographic markets, established robotics companies and venture-backed startups."
      },
      {
        "type": "heading",
        "text": "Career progression"
      },
      {
        "type": "paragraph",
        "text": "Early-career engineers often begin by contributing to data preparation, experiments, software components and testing."
      },
      {
        "type": "paragraph",
        "text": "With experience, they may take ownership of a perception subsystem, including its algorithms, evaluation and deployment."
      },
      {
        "type": "paragraph",
        "text": "Senior and staff engineers can lead perception architecture, coordinate across robotics teams and make technical decisions affecting entire products or robot fleets."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire perception engineers?",
    "navLabel": "Hiring employers",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "apptronik",
      "agility",
      "pickle",
      "path",
      "fieldai"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Perception engineering is relevant across humanoid robotics, industrial automation, warehouse systems and autonomous machines."
      },
      {
        "type": "heading",
        "text": "Humanoid robotics"
      },
      {
        "type": "paragraph",
        "text": "Figure, Apptronik and Agility Robotics develop humanoid platforms that need to interpret their surroundings and interact with objects."
      },
      {
        "type": "paragraph",
        "text": "Perception responsibilities may involve object recognition, depth estimation, scene understanding and integration with robot manipulation systems."
      },
      {
        "type": "heading",
        "text": "Warehouse robotics"
      },
      {
        "type": "paragraph",
        "text": "Pickle Robot develops robotic systems for handling packages."
      },
      {
        "type": "paragraph",
        "text": "Perception work in this environment involves identifying packages, estimating their location and supporting reliable robotic manipulation."
      },
      {
        "type": "paragraph",
        "text": "Real-world warehouses introduce challenges such as inconsistent lighting, overlapping objects and packages of different shapes."
      },
      {
        "type": "heading",
        "text": "Industrial robotics"
      },
      {
        "type": "paragraph",
        "text": "Path Robotics applies perception to automated welding."
      },
      {
        "type": "paragraph",
        "text": "Its systems must interpret three-dimensional geometry, identify welding locations and support precise robotic movements."
      },
      {
        "type": "paragraph",
        "text": "These applications illustrate that perception is not limited to recognizing familiar objects. It can also involve detailed geometric measurements needed for industrial processes."
      },
      {
        "type": "heading",
        "text": "Field robotics and autonomous systems"
      },
      {
        "type": "paragraph",
        "text": "FieldAI develops autonomy technology for robots operating in complex environments."
      },
      {
        "type": "paragraph",
        "text": "Its perception-related work involves combining sensor information and helping robots understand surroundings that may change or lack detailed prior maps."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Search for Robotics Perception Engineer, Computer Vision Engineer, Perception Software Engineer, Machine Learning Engineer — Perception, and 3D Perception Engineer."
      },
      {
        "type": "paragraph",
        "text": "Job titles overlap considerably. Some positions focus on research and model development, while others emphasize software deployment, sensors or real-time systems."
      },
      {
        "type": "paragraph",
        "text": "Read the responsibilities to understand the actual work."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into perception engineering",
    "navLabel": "Career transitions",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "path",
      "pickle",
      "rhoda",
      "one-x"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Your existing technical background determines which skills you need to develop."
      },
      {
        "type": "table",
        "caption": "Routes into robotics electronics",
        "columns": [
          "Your background",
          "Skills to prioritize",
          "Suggested project"
        ],
        "rows": [
          [
            "Software engineering",
            "Computer vision, sensor geometry and machine learning",
            "Build an object-detection pipeline using recorded video"
          ],
          [
            "Machine learning or data science",
            "Camera calibration, 3D geometry and real-time deployment",
            "Evaluate a vision model under changing physical conditions"
          ],
          [
            "Electrical engineering",
            "Python, C++, computer vision and model evaluation",
            "Connect camera measurements to a robotics application"
          ],
          [
            "Robotics engineering",
            "Deep learning, perception algorithms and evaluation",
            "Develop an obstacle-detection or object-tracking system"
          ],
          [
            "Complete beginner",
            "Programming, linear algebra and statistics",
            "Build a simple image-classification project before moving to detection"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you already work in software"
      },
      {
        "type": "paragraph",
        "text": "Build on your programming experience by learning computer vision and the geometry used in robotics."
      },
      {
        "type": "paragraph",
        "text": "Start with recorded camera data and create a system that detects or tracks objects."
      },
      {
        "type": "paragraph",
        "text": "Demonstrate that you can evaluate errors and improve the software rather than simply run a pretrained model."
      },
      {
        "type": "heading",
        "text": "If you work in machine learning"
      },
      {
        "type": "paragraph",
        "text": "Your experience with model training and evaluation provides a useful foundation."
      },
      {
        "type": "paragraph",
        "text": "Focus on the additional constraints of robotics: camera calibration, sensor measurements, three-dimensional geometry and real-time processing."
      },
      {
        "type": "paragraph",
        "text": "A model that performs well on a conventional dataset is not necessarily ready for a moving robot."
      },
      {
        "type": "heading",
        "text": "If you come from electrical engineering"
      },
      {
        "type": "paragraph",
        "text": "Your understanding of sensors, electronics and physical systems can transfer into perception."
      },
      {
        "type": "paragraph",
        "text": "Develop stronger software engineering and machine learning capabilities, particularly Python, C++ and computer vision."
      },
      {
        "type": "paragraph",
        "text": "Projects combining real sensor measurements with perception algorithms can demonstrate the connection between your existing skills and robotics applications."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Build your programming and mathematical foundations first."
      },
      {
        "type": "paragraph",
        "text": "Learn Python, basic image processing and the principles of machine learning. Then develop a focused project using recorded video or a webcam."
      },
      {
        "type": "paragraph",
        "text": "You do not need an expensive robot to get started."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Be ready to explain a system you built and how you evaluated it."
      },
      {
        "type": "paragraph",
        "text": "Employers may ask why you selected a particular model, how you prepared the dataset, what types of mistakes occurred or whether the software could run on real hardware."
      },
      {
        "type": "paragraph",
        "text": "A strong explanation covers what the system was supposed to accomplish, how you measured performance, what went wrong and how you improved it."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first perception project",
    "navLabel": "Portfolio project",
    "paragraphs": [],
    "sourceIds": [
      "detection",
      "calibration",
      "geometry"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Detect everyday objects under changing conditions"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner portfolio project is to build a system that recognizes everyday objects through a webcam."
      },
      {
        "type": "paragraph",
        "text": "You might choose cups, bottles and books placed on a desk."
      },
      {
        "type": "paragraph",
        "text": "The goal is not to invent a new artificial intelligence model. It is to demonstrate the complete perception workflow, from collecting data to evaluating and improving results."
      },
      {
        "type": "paragraph",
        "text": "You can use a pretrained object-detection model and an ordinary computer."
      },
      {
        "type": "heading",
        "text": "Step 1: Define the task"
      },
      {
        "type": "paragraph",
        "text": "Choose three or four object categories and decide what your system should produce."
      },
      {
        "type": "paragraph",
        "text": "For example, it might draw a bounding box around each object and display its predicted class."
      },
      {
        "type": "paragraph",
        "text": "Specify the camera position, image resolution and conditions under which the system should operate."
      },
      {
        "type": "heading",
        "text": "Step 2: Collect evaluation data"
      },
      {
        "type": "paragraph",
        "text": "Record short videos or images of your objects under different conditions."
      },
      {
        "type": "paragraph",
        "text": "Include changes in lighting, camera angle, distance and partial obstruction."
      },
      {
        "type": "paragraph",
        "text": "Create separate development and evaluation sessions."
      },
      {
        "type": "paragraph",
        "text": "Avoid using nearly identical consecutive video frames in both groups. This can make a model appear more accurate than it actually is."
      },
      {
        "type": "heading",
        "text": "Step 3: Run a pretrained model"
      },
      {
        "type": "paragraph",
        "text": "Choose an existing object-detection model and run it on your images or video."
      },
      {
        "type": "paragraph",
        "text": "Use Python to record the predictions."
      },
      {
        "type": "paragraph",
        "text": "Compare the results with manually annotated examples to determine which objects were correctly identified, missed or incorrectly detected."
      },
      {
        "type": "heading",
        "text": "Step 4: Measure performance"
      },
      {
        "type": "paragraph",
        "text": "Evaluate the system using several practical metrics:"
      },
      {
        "type": "table",
        "caption": "Evaluation metrics",
        "columns": [
          "Metric",
          "What it tells you"
        ],
        "rows": [
          [
            "Precision",
            "How often reported detections are correct"
          ],
          [
            "Recall",
            "How many actual objects the system detects"
          ],
          [
            "Latency",
            "How long the system takes to process an input"
          ],
          [
            "Failure conditions",
            "Which situations most frequently cause mistakes"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Use a consistent matching rule when comparing predicted bounding boxes with annotated objects."
      },
      {
        "type": "paragraph",
        "text": "Record performance across different conditions rather than reporting only one overall accuracy figure."
      },
      {
        "type": "heading",
        "text": "Step 5: Investigate a failure"
      },
      {
        "type": "paragraph",
        "text": "Identify a situation where the system performs poorly."
      },
      {
        "type": "paragraph",
        "text": "Perhaps it misses a bottle when the room becomes darker, or fails to recognize a cup partially hidden behind another object."
      },
      {
        "type": "paragraph",
        "text": "Examine the images and predictions to understand what changed."
      },
      {
        "type": "paragraph",
        "text": "Develop a hypothesis about the cause before modifying the system."
      },
      {
        "type": "heading",
        "text": "Step 6: Test one improvement"
      },
      {
        "type": "paragraph",
        "text": "Try a targeted change, such as adjusting camera placement, improving lighting or fine-tuning the model with additional training examples."
      },
      {
        "type": "paragraph",
        "text": "Run the revised system against the same evaluation dataset."
      },
      {
        "type": "paragraph",
        "text": "Compare its precision, recall and processing speed with the original version."
      },
      {
        "type": "paragraph",
        "text": "The improvement should be measurable, not simply more convincing in a demonstration."
      },
      {
        "type": "heading",
        "text": "Step 7: Document your results"
      },
      {
        "type": "paragraph",
        "text": "Prepare a short report showing what you built, how you evaluated it and what changed."
      },
      {
        "type": "paragraph",
        "text": "Include screenshots or annotated frames that demonstrate both successful detections and failures."
      },
      {
        "type": "paragraph",
        "text": "If your improvement helped one situation but caused problems elsewhere, explain that trade-off."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "items": [
          "Source code and instructions for reproducing the project.",
          "A short description of the dataset and recording conditions.",
          "Annotated images showing successful and failed detections.",
          "Precision, recall and latency results.",
          "A comparison between the original and improved systems.",
          "A brief explanation of one failure and how you investigated it.",
          "A demonstration video showing the system operating on new scenes."
        ],
        "ordered": false
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "Once the object detector works, add camera calibration or depth measurements."
      },
      {
        "type": "paragraph",
        "text": "Instead of simply identifying a cup, estimate its position relative to the camera."
      },
      {
        "type": "paragraph",
        "text": "This brings the project closer to a robotics perception problem, where recognizing an object is only one part of understanding how a machine can interact with it."
      }
    ]
  }
],
  nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "detection",
    "geometry",
    "ros"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "PyTorch — Object Detection Fine-Tuning",
          "href": "https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html",
          "description": "Learn how to adapt an object-detection model to a custom dataset, train it and evaluate the results."
        },
        {
          "title": "OpenCV — Camera Calibration and 3D Geometry",
          "href": "https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html",
          "description": "Explore how cameras represent the physical world, including calibration, geometric transformations and depth-related calculations."
        },
        {
          "title": "ROS 2 — Official Documentation",
          "href": "https://docs.ros.org/",
          "description": "Learn how robotics software components communicate and how sensor information can be incorporated into larger robotic systems."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Begin with one working perception pipeline. Once you can explain its predictions, evaluate its mistakes and improve its performance, move toward more advanced projects involving depth, object tracking or multiple sensors."
    }
  ]
},
  researchNotes:[
    `Black Scarab’s November 2, 2026 cohort contains ${role.postingCount} perception advertisements across ${role.employerCount} selected employers. The broad classification also includes sensor hardware, dedicated evaluation, generative research and overlapping localization work. Nine stored full sources were reviewed for this guide. Skills and qualifications are presented contextually rather than as clean perception-only prevalence estimates. Original classifications and review flags are unchanged.`,
    `The Black Scarab estimate is the median annual salary-range midpoint from ${compensation.postingCount} eligible U.S. advertisements across ${compensation.employerCount} employers, rounded to the nearest $1,000. The exact median midpoint is $${compensation.exactMedianMidpoint.toLocaleString('en-US')}. The sample spans experienced individual contributors, including senior/staff roles and tactile perception. It is not an entry-level salary estimate. Structured advertised salary fields do not always explicitly identify base pay; bonus and equity are excluded.`,
    'The linked derivation preserves observations, periods, source clauses, hashes and exclusions. Dedicated sensor-hardware, evaluation/data-science and primarily generative-world-model roles are excluded. Unverified annual periods are not inferred. Distinct requisitions count separately, including similar job families. Coverage is purposive and uneven; no live-vacancy count or representative market salary is claimed.',
    'Employer examples describe the pinned advertisements, not necessarily current vacancies. Figure and Apptronik combine perception with neighboring responsibilities; Pickle Robot separates model development from runtime integration. The partly hidden carton and tabletop project are educational examples, not reported employer incidents or a validated robot safety system. Editorial review: November 9, 2026.',
  ],
  citations:[
    source('study','Black Scarab: November 2 employer research','/research/physical-ai-careers-2026-11-02.json','Pinned selected-employer aggregate and taxonomy.'),
    source('evidence','Perception engineering: reviewed employer evidence',evidencePath,'Contextual source reviews, qualification spans and original source hashes.'),
    source('compensation','Black Scarab: perception engineering compensation estimate',compensationPath,'Eligible annual USD observations, median calculation, exclusions and provenance.'),
    posting('figure','figure:greenhouse:4007375006'),posting('apptronik','apptronik:greenhouse:6225394004'),posting('agility','agility:greenhouse:6210999004'),
    posting('path','path-robotics:greenhouse:8925919002'),posting('pickle','pickle-robot:lever:403803e1-68a0-4225-b657-a46e72b64d73'),posting('fieldai','fieldai:lever:95c1d7a7-f2b4-45ca-9888-2196b14afa77'),
    posting('rhoda','rhoda:ashby:5096d04e-0bb8-4fe1-b8bf-e8901a9d013f'),posting('one-x','one-x:ashby:8065ae1f-697e-4b73-9ae2-cc55a5373991'),posting('boston','boston-dynamics:workday:R2564'),
    source('detection','PyTorch: TorchVision Object Detection Fine-Tuning Tutorial',detection,'Official training and evaluation tutorial. The portfolio adapts the workflow to a small tabletop task.'),
    source('calibration','OpenCV 4.13: Camera Calibration',calibration,'Official camera-model, distortion and calibration tutorial.'),
    source('geometry','OpenCV: Camera Calibration and 3D Reconstruction',geometry,'Official reference for camera geometry, coordinate transforms, calibration and reconstruction.'),
    source('ros','ROS 2: Official Documentation',ros,'Official documentation entry point for robotics software and communication concepts.'),
  ],
};
