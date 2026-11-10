import type {CareerGuideContent,Citation} from '@/lib/career-paths/types';
import {researchForRole} from '@/lib/career-paths/research';
import evidence from '@/public/research/manufacturing-engineer-evidence-2026-11-10.json';
import compensation from '@/public/research/manufacturing-engineer-compensation-2026-11-02.json';
import batch from '@/public/research/manufacturing-yield-example-2026-11-10.json';
import decisions from '@/research/seo/2026-11-10/decisions.json';

const roleId='manufacturing-engineer';
const role=researchForRole(roleId,evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('Manufacturing guide research mismatch');
const seo=decisions.guides.find(item=>item.occupationId===roleId);
if(!seo)throw new Error('Missing manufacturing SEO decision');
const salary=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const evidencePath='/research/manufacturing-engineer-evidence-2026-11-10.json';
const compensationPath='/research/manufacturing-engineer-compensation-2026-11-02.json';
const batchPath='/research/manufacturing-yield-example-2026-11-10.json';
const glossary='https://asq.org/quality-resources/quality-glossary';
const capability='https://www.itl.nist.gov/div898/handbook/pmc/section1/pmc16.htm';
const fundamentals='https://www.sme.org/training/robotics-in-manufacturing-fundamentals-rmf-certification/';
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-10'});
const posting=(id:string,recordId:string):Citation=>{
  const r=evidence.records.find(item=>item.id===recordId);
  if(!r)throw new Error(`Missing manufacturing evidence: ${recordId}`);
  return source(id,`${r.employer}: ${r.title}`,r.url,'Advertisement collected November 2, 2026. Full-source review, qualification context and original source hashes are in the evidence export.');
};

export const manufacturingEngineerGuide:CareerGuideContent={
  id:roleId,occupationId:roleId,familyId:'hardware-manufacturing',slug:roleId,
  title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-10',reviewedAt:'2026-11-10',
  research:{snapshotId:evidence.snapshotId,roleId,evidencePath},
  deck:'Turn robot designs into real products by developing the assembly processes, equipment and quality controls needed to manufacture them reliably at scale.',
  introduction:['Imagine a robotics company developing a new humanoid robot.'],
  illustration:{src:'/career-paths/manufacturing-engineer-lab.webp',width:1672,height:941,alt:'Conceptual editorial illustration of gloved hands positioning a robot joint in a metal alignment fixture, with yellow tooling and unfinished robot assemblies receding through a workshop.'},
  overview:[
    {label:'What you do',value:'Develop and improve the processes used to manufacture robotic hardware',sourceIds:['fieldai','apptronik-assembly','figure']},
    {label:'Core skills',value:'CAD, manufacturing processes, fixture design, quality control, production data and process improvement',sourceIds:['one-x','skydio-design','standard-bots']},
    {label:'Education',value:'Typically mechanical, manufacturing, industrial or related engineering; some roles accept equivalent experience',sourceIds:['apptronik-assembly','standard-bots','figure']},
    {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
  ],
  sections:[
  {
    "id": "day-to-day",
    "heading": "What does a manufacturing engineer do in robotics?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "one-x",
      "figure",
      "cobot",
      "apptronik-assembly"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a robotics company developing a new humanoid robot."
      },
      {
        "type": "paragraph",
        "text": "After months of engineering, the team builds a prototype that can walk, pick up objects and perform the tasks it was designed for."
      },
      {
        "type": "paragraph",
        "text": "But building one successful robot is very different from manufacturing hundreds or thousands of them."
      },
      {
        "type": "paragraph",
        "text": "The prototype might require engineers to carefully align components, adjust individual parts or solve assembly problems by hand."
      },
      {
        "type": "paragraph",
        "text": "Those approaches may work when building a few robots, but they become expensive, inconsistent and difficult to manage as production increases."
      },
      {
        "type": "paragraph",
        "text": "Manufacturing engineers develop the processes that allow companies to build robots consistently, efficiently and at scale."
      },
      {
        "type": "paragraph",
        "text": "They determine how components should be assembled, what tools and equipment are required, how workers should perform each operation and how finished assemblies should be inspected."
      },
      {
        "type": "paragraph",
        "text": "Their goal is to make manufacturing repeatable."
      },
      {
        "type": "paragraph",
        "text": "Instead of depending on one experienced technician who knows exactly how to assemble a difficult component, the process should be documented and designed so trained workers can reproduce the same result."
      },
      {
        "type": "heading",
        "text": "Three areas of robotics manufacturing engineering"
      },
      {
        "type": "table",
        "caption": "Robotics manufacturing specializations",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "New Product Introduction (NPI)",
            "Preparing new robot designs for production, including pilot builds, tooling and manufacturing processes"
          ],
          [
            "Process and assembly engineering",
            "Developing assembly methods, fixtures, workstations and manufacturing instructions"
          ],
          [
            "Production improvement",
            "Reducing defects, improving output and making manufacturing processes more reliable and efficient"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These responsibilities frequently overlap."
      },
      {
        "type": "paragraph",
        "text": "An engineer might help introduce a new robot into production, then remain responsible for improving its assembly process as manufacturing volumes increase."
      },
      {
        "type": "paragraph",
        "text": "Others specialize in particular components, such as robotic joints, electronics, sensors or precision mechanical assemblies."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "Manufacturing engineers spend time both at their computers and on the factory floor."
      },
      {
        "type": "paragraph",
        "text": "Imagine an engineer arriving at a robotics factory and learning that several robot shoulder assemblies failed their final alignment inspection."
      },
      {
        "type": "paragraph",
        "text": "The engineer reviews production records, examines the defective assemblies and watches technicians perform the operation."
      },
      {
        "type": "paragraph",
        "text": "They discover that the fixture used to hold the components allows a small amount of movement during assembly."
      },
      {
        "type": "paragraph",
        "text": "Although individual parts meet their design specifications, the final assembly can end up slightly misaligned."
      },
      {
        "type": "paragraph",
        "text": "The engineer redesigns part of the fixture, updates the assembly instructions and tests whether the change improves consistency."
      },
      {
        "type": "paragraph",
        "text": "Later, they might meet with mechanical engineers to discuss simplifying a component, review production data or help prepare a new robot design for manufacturing."
      },
      {
        "type": "paragraph",
        "text": "A typical development cycle includes:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Understand the product. Review engineering drawings, components and assembly requirements.",
          "Develop the manufacturing process. Determine how the product should be built and what equipment is needed.",
          "Design tooling and fixtures. Create devices that help position, hold and assemble components consistently.",
          "Test the process. Build initial units and identify assembly difficulties or quality problems.",
          "Improve production. Use measurements and manufacturing data to reduce defects and inefficiencies.",
          "Document the process. Create instructions and procedures that allow production teams to repeat the work."
        ]
      },
      {
        "type": "paragraph",
        "text": "The work combines mechanical engineering, practical problem-solving and production management."
      },
      {
        "type": "heading",
        "text": "When a robot joint repeatedly fails inspection"
      },
      {
        "type": "paragraph",
        "text": "Consider a company manufacturing robotic arms."
      },
      {
        "type": "paragraph",
        "text": "Each arm contains several joints that must be assembled with precise alignment."
      },
      {
        "type": "paragraph",
        "text": "During production, technicians discover that some joints fail their alignment checks."
      },
      {
        "type": "paragraph",
        "text": "The manufacturing engineer investigates."
      },
      {
        "type": "paragraph",
        "text": "Perhaps the components are being installed in slightly different positions, the assembly sequence creates unnecessary variation or the tooling does not hold the parts firmly enough."
      },
      {
        "type": "paragraph",
        "text": "The engineer reviews measurements, examines the assembly process and identifies the likely causes."
      },
      {
        "type": "paragraph",
        "text": "One solution might be to design a fixture that positions the components more consistently."
      },
      {
        "type": "paragraph",
        "text": "After implementing the change, the engineer measures additional assemblies to determine whether the defect rate has improved."
      },
      {
        "type": "paragraph",
        "text": "The important part is not simply repairing the defective joints."
      },
      {
        "type": "paragraph",
        "text": "The goal is to improve the manufacturing process so future joints are less likely to experience the same problem."
      },
      {
        "type": "paragraph",
        "text": "This distinction is central to manufacturing engineering."
      }
    ]
  },
  {
    "id": "manufacturing-quality",
    "heading": "Why manufacturing quality matters",
    "navLabel": "Quality & yield",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "one-x",
      "cobot",
      "skydio-design",
      "asq",
      "yield-example"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Building robots reliably requires more than checking whether the finished product works."
      },
      {
        "type": "paragraph",
        "text": "Manufacturing engineers also need to understand how many units pass inspection the first time and how much additional work is required to correct problems."
      },
      {
        "type": "paragraph",
        "text": "One important metric is first-pass yield (FPY)."
      },
      {
        "type": "paragraph",
        "text": "First-pass yield measures the percentage of units that meet their acceptance criteria without needing rework or retesting."
      },
      {
        "type": "paragraph",
        "text": "Imagine a factory producing 100 robot joint assemblies."
      },
      {
        "type": "yield-comparison",
        "id": "manufacturing-first-pass-yield",
        "title": "Rework can hide behind a good final yield",
        "total": batch.total,
        "firstPass": batch.firstPass,
        "reworkedPass": batch.reworkedPass,
        "scrapped": batch.scrapped,
        "note": "Illustrative batch of 100 assemblies. Each square is one assembly; acceptance criteria stay the same after rework."
      },
      {
        "type": "paragraph",
        "text": "At first glance, a 97% final yield might seem like a strong result."
      },
      {
        "type": "paragraph",
        "text": "However, 15 assemblies required additional work before they could be accepted."
      },
      {
        "type": "paragraph",
        "text": "That rework consumes labor, equipment capacity and production time."
      },
      {
        "type": "paragraph",
        "text": "A manufacturing engineer investigates why those units failed initially and develops changes that improve the first-pass yield."
      },
      {
        "type": "paragraph",
        "text": "The objective is to make more units pass inspection correctly the first time, not simply become better at repairing defective products."
      },
      {
        "type": "heading",
        "text": "Other important manufacturing metrics"
      },
      {
        "type": "table",
        "caption": "Manufacturing metrics",
        "columns": [
          "Metric",
          "What it measures"
        ],
        "rows": [
          [
            "Cycle time",
            "How long an assembly operation or production cycle takes"
          ],
          [
            "Throughput",
            "How many units a process produces over a given period"
          ],
          [
            "Defect rate",
            "How frequently products fail to meet requirements"
          ],
          [
            "Rework rate",
            "How often units need additional work"
          ],
          [
            "First-pass yield",
            "How many units pass inspection without rework or retesting"
          ],
          [
            "Scrap rate",
            "How frequently units or materials must be discarded"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Manufacturing engineers use these measurements to understand where production is losing time, money or quality."
      },
      {
        "type": "paragraph",
        "text": "For example, a single slow assembly station can limit the output of an entire production line."
      },
      {
        "type": "paragraph",
        "text": "Improving a different station may have little effect if the main bottleneck remains unchanged."
      }
    ]
  },
  {
    "id": "manufacturing-vs-related-roles",
    "heading": "How is manufacturing engineering different from other robotics careers?",
    "navLabel": "Related careers",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "apptronik-assembly",
      "standard-bots",
      "skydio-design"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Several engineering disciplines contribute to bringing a robot from design into production."
      },
      {
        "type": "paragraph",
        "text": "The distinction is what each engineer is responsible for."
      },
      {
        "type": "table",
        "caption": "Responsibilities compared",
        "columns": [
          "Career",
          "Main responsibility"
        ],
        "rows": [
          [
            "Mechanical Engineer",
            "Designs the robot's physical components, mechanisms and assemblies"
          ],
          [
            "Manufacturing Engineer",
            "Develops the processes needed to build those components and assemblies consistently"
          ],
          [
            "Industrial Automation Engineer",
            "Programs the machines and control systems used in automated production"
          ],
          [
            "Hardware Test Engineer",
            "Develops systems and procedures for testing hardware performance"
          ],
          [
            "Quality Engineer",
            "Develops quality systems and methods for preventing and identifying defects"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, imagine a company producing a robotic hand."
      },
      {
        "type": "paragraph",
        "text": "A mechanical engineer designs the fingers, joints and supporting components."
      },
      {
        "type": "paragraph",
        "text": "A manufacturing engineer determines how those parts should be assembled, what fixtures are needed and how the process can be repeated reliably."
      },
      {
        "type": "paragraph",
        "text": "An industrial automation engineer might program equipment that performs part of the assembly automatically."
      },
      {
        "type": "paragraph",
        "text": "A hardware test engineer develops tests that confirm whether the completed hand operates correctly."
      },
      {
        "type": "paragraph",
        "text": "The quality engineer helps establish processes that prevent defects and ensure products meet requirements."
      },
      {
        "type": "paragraph",
        "text": "At smaller companies, these responsibilities may overlap."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills & tools",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "one-x",
      "standard-bots",
      "cobot",
      "skydio-design",
      "skydio-process",
      "apptronik-supplier",
      "nist"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Manufacturing and assembly processes"
      },
      {
        "type": "paragraph",
        "text": "Manufacturing engineers need to understand how physical products are made."
      },
      {
        "type": "paragraph",
        "text": "Robots combine mechanical components, electronics, motors, sensors and other systems, each with its own manufacturing requirements."
      },
      {
        "type": "paragraph",
        "text": "Depending on the role, useful knowledge may include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Machining and precision mechanical assembly.",
          "Fasteners, torque specifications and mechanical joints.",
          "Adhesive bonding and material joining.",
          "Electrical wiring and cable routing.",
          "Printed circuit board assembly.",
          "Inspection and testing procedures."
        ]
      },
      {
        "type": "paragraph",
        "text": "The specific technical skills depend on the product."
      },
      {
        "type": "paragraph",
        "text": "An engineer working on robot electronics may specialize in soldering and circuit-board manufacturing."
      },
      {
        "type": "paragraph",
        "text": "Someone working on humanoid joints may focus on bearings, alignment, machining tolerances and mechanical assembly."
      },
      {
        "type": "heading",
        "text": "Design for Manufacturing and Assembly"
      },
      {
        "type": "paragraph",
        "text": "Two important concepts are Design for Manufacturing (DFM) and Design for Assembly (DFA)."
      },
      {
        "type": "paragraph",
        "text": "These approaches help engineers develop products that are easier, more reliable and more economical to manufacture."
      },
      {
        "type": "paragraph",
        "text": "Consider a robotic arm with a component that is difficult to install because several screws are hidden behind other parts."
      },
      {
        "type": "paragraph",
        "text": "The mechanical design might work perfectly once assembled, but production workers could struggle to reach the fasteners."
      },
      {
        "type": "paragraph",
        "text": "A manufacturing engineer may suggest relocating the screws or changing the assembly sequence."
      },
      {
        "type": "paragraph",
        "text": "These changes can reduce assembly time and lower the risk of mistakes."
      },
      {
        "type": "paragraph",
        "text": "DFM and DFA encourage engineers to think about how a product will be built before manufacturing begins."
      },
      {
        "type": "heading",
        "text": "CAD and engineering drawings"
      },
      {
        "type": "paragraph",
        "text": "Computer-aided design (CAD) is widely used in manufacturing engineering."
      },
      {
        "type": "paragraph",
        "text": "Engineers use CAD tools to develop fixtures, assembly aids, gauges and workstation layouts."
      },
      {
        "type": "paragraph",
        "text": "Common software includes SolidWorks, Siemens NX and other mechanical design platforms."
      },
      {
        "type": "paragraph",
        "text": "Engineers also need to understand technical drawings."
      },
      {
        "type": "paragraph",
        "text": "An engineering drawing specifies important dimensions, materials and manufacturing requirements."
      },
      {
        "type": "paragraph",
        "text": "Geometric Dimensioning and Tolerancing (GD&T) is a system used to describe allowable variation in the geometry of manufactured parts."
      },
      {
        "type": "paragraph",
        "text": "For example, a robotic joint may require a bearing to be positioned within a narrow tolerance."
      },
      {
        "type": "paragraph",
        "text": "A manufacturing engineer uses the drawing requirements to determine how the component should be assembled and inspected."
      },
      {
        "type": "heading",
        "text": "Tooling and fixture design"
      },
      {
        "type": "paragraph",
        "text": "A fixture is a device that holds or positions components during manufacturing."
      },
      {
        "type": "paragraph",
        "text": "Fixtures help workers perform operations consistently."
      },
      {
        "type": "paragraph",
        "text": "Imagine a technician assembling a robotic joint."
      },
      {
        "type": "paragraph",
        "text": "Without a fixture, they may need to manually hold several parts in alignment while tightening fasteners."
      },
      {
        "type": "paragraph",
        "text": "A properly designed fixture can hold those components in the correct position, making the operation easier to repeat."
      },
      {
        "type": "paragraph",
        "text": "Manufacturing engineers develop fixtures for tasks such as:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Positioning components.",
          "Aligning mechanical assemblies.",
          "Holding parts during fastening or bonding.",
          "Supporting inspection and measurement.",
          "Preventing incorrect assembly orientations."
        ]
      },
      {
        "type": "paragraph",
        "text": "A small improvement in tooling can make a substantial difference when the same operation is performed hundreds or thousands of times."
      },
      {
        "type": "heading",
        "text": "Quality control and process improvement"
      },
      {
        "type": "paragraph",
        "text": "Manufacturing engineers use measurements to understand whether production processes are operating consistently."
      },
      {
        "type": "paragraph",
        "text": "Common methods include statistical process control, defect analysis and root-cause investigation."
      },
      {
        "type": "paragraph",
        "text": "Statistical Process Control (SPC) uses measurements collected over time to monitor process behavior and identify unusual variation."
      },
      {
        "type": "paragraph",
        "text": "Process capability evaluates how well a stable process operates relative to specified requirements."
      },
      {
        "type": "paragraph",
        "text": "For example, a manufacturing process might produce nearly identical components every time, but those components could still be slightly outside the required dimensions."
      },
      {
        "type": "paragraph",
        "text": "Consistency and meeting specifications are related but different objectives."
      },
      {
        "type": "paragraph",
        "text": "Engineers must evaluate both."
      },
      {
        "type": "heading",
        "text": "Production data and analysis"
      },
      {
        "type": "paragraph",
        "text": "Manufacturing engineering increasingly involves working with production data."
      },
      {
        "type": "paragraph",
        "text": "Engineers may analyze assembly times, inspection results, defect categories and equipment performance."
      },
      {
        "type": "paragraph",
        "text": "A spreadsheet can be sufficient for smaller investigations."
      },
      {
        "type": "paragraph",
        "text": "Larger operations may use SQL, Python or business-intelligence tools to analyze manufacturing information."
      },
      {
        "type": "paragraph",
        "text": "Useful questions include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Which assembly operation produces the most defects?",
          "Does one workstation consistently take longer than the others?",
          "Did the defect rate change after a new fixture was introduced?",
          "Which problems account for the largest amount of rework?",
          "Can a production improvement be demonstrated through measurements?"
        ]
      },
      {
        "type": "paragraph",
        "text": "The ability to connect manufacturing data with physical processes is an important skill."
      },
      {
        "type": "heading",
        "text": "Manufacturing documentation and production systems"
      },
      {
        "type": "paragraph",
        "text": "A manufacturing process must be understandable to the people performing the work."
      },
      {
        "type": "paragraph",
        "text": "Engineers develop documentation such as assembly instructions, bills of materials, inspection procedures and manufacturing process plans."
      },
      {
        "type": "paragraph",
        "text": "Larger organizations also use specialized software systems."
      },
      {
        "type": "table",
        "caption": "Manufacturing information systems",
        "columns": [
          "System",
          "Main purpose"
        ],
        "rows": [
          [
            "PLM — Product Lifecycle Management",
            "Manages product designs, engineering changes and technical information"
          ],
          [
            "ERP — Enterprise Resource Planning",
            "Helps manage materials, purchasing, inventory and business operations"
          ],
          [
            "MES — Manufacturing Execution System",
            "Tracks and supports manufacturing activities on the production floor"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Manufacturing engineers may use these systems to ensure the correct components, instructions and engineering revisions are available during production."
      },
      {
        "type": "paragraph",
        "text": "This becomes increasingly important as a robotics company introduces new product versions or scales manufacturing across multiple facilities."
      }
    ]
  },
  {
    "id": "education",
    "heading": "What education do you need?",
    "navLabel": "Education",
    "paragraphs": [],
    "sourceIds": [
      "apptronik-assembly",
      "apptronik-supplier",
      "one-x",
      "standard-bots",
      "figure",
      "anybotics",
      "sme"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Manufacturing engineers commonly come from mechanical engineering, manufacturing engineering, industrial engineering, electrical engineering or mechatronics."
      },
      {
        "type": "paragraph",
        "text": "The most relevant degree depends on the products and processes involved."
      },
      {
        "type": "paragraph",
        "text": "For example, mechanical engineering provides useful preparation for precision assemblies and tooling."
      },
      {
        "type": "paragraph",
        "text": "Electrical engineering may be more relevant for electronics manufacturing."
      },
      {
        "type": "paragraph",
        "text": "Industrial and manufacturing engineering programs focus more directly on production processes, quality and manufacturing systems."
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
            "Apptronik",
            "Engineering degree for its reviewed supplier manufacturing position"
          ],
          [
            "Figure",
            "Related technical degree listed as a preferred qualification for a manufacturing role"
          ],
          [
            "Standard Bots",
            "Associate degree, bachelor's degree or equivalent hands-on experience for electronics manufacturing"
          ],
          [
            "ANYbotics",
            "Relevant degree or technical diploma alongside manufacturing experience"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These examples show that manufacturing engineering has multiple entry routes."
      },
      {
        "type": "paragraph",
        "text": "Some positions require formal engineering qualifications, while others place greater emphasis on relevant technical experience."
      },
      {
        "type": "heading",
        "text": "Can you enter without an engineering degree?"
      },
      {
        "type": "paragraph",
        "text": "Some manufacturing positions accept candidates with technical diplomas, associate degrees or equivalent professional experience."
      },
      {
        "type": "paragraph",
        "text": "People working in machining, precision assembly, electronics manufacturing or industrial maintenance may already possess valuable practical skills."
      },
      {
        "type": "paragraph",
        "text": "However, moving into manufacturing engineering typically requires additional responsibility for process design, analysis, tooling, documentation and improvement."
      },
      {
        "type": "paragraph",
        "text": "Someone beginning in a production role can develop these skills through technical education and hands-on engineering projects."
      },
      {
        "type": "paragraph",
        "text": "Requirements vary by employer."
      },
      {
        "type": "heading",
        "text": "What should you study?"
      },
      {
        "type": "paragraph",
        "text": "Useful foundations include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Mechanical design and CAD.",
          "Manufacturing processes and materials.",
          "Engineering drawings and GD&T.",
          "Quality control and statistical analysis.",
          "Tooling and fixture design.",
          "Production planning and process improvement.",
          "Manufacturing documentation and technical communication."
        ]
      },
      {
        "type": "paragraph",
        "text": "Hands-on experience is particularly valuable."
      },
      {
        "type": "paragraph",
        "text": "A student robotics team, engineering laboratory or production internship can provide opportunities to design fixtures, assemble hardware and improve manufacturing processes."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do manufacturing engineers in robotics earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "one-x",
      "standard-bots",
      "skydio-design"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Manufacturing engineering compensation varies by experience, location, specialization and the scale of production responsibilities."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annual compensation at $182,000 based on reviewed U.S. robotics and autonomous-hardware manufacturing positions."
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
        "text": "Experience and responsibility. Compare whether a role involves individual assembly processes, a production launch or responsibility for a complete manufacturing system."
      },
      {
        "type": "paragraph",
        "text": "Specialization. Experience with precision electromechanical assemblies, robotics hardware, electronics manufacturing and complex production processes can be valuable."
      },
      {
        "type": "paragraph",
        "text": "Production scale. Developing a prototype assembly process presents different challenges from launching high-volume manufacturing."
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
        "text": "Early-career manufacturing engineers may begin by supporting assembly processes, documenting work instructions, designing simple fixtures and analyzing production data."
      },
      {
        "type": "paragraph",
        "text": "With experience, they can take responsibility for complete manufacturing processes or production lines."
      },
      {
        "type": "paragraph",
        "text": "Senior engineers may lead new product introductions, develop manufacturing strategies and coordinate production improvements across several teams."
      },
      {
        "type": "paragraph",
        "text": "Other career paths include manufacturing management, supplier engineering, operations leadership and industrialization."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire manufacturing engineers in robotics?",
    "navLabel": "Employers & titles",
    "paragraphs": [],
    "sourceIds": [
      "figure",
      "one-x",
      "apptronik-assembly",
      "apptronik-supplier",
      "cobot",
      "skydio-design",
      "standard-bots",
      "fieldai",
      "anybotics"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Manufacturing engineers work at robotics companies developing humanoids, industrial robots, autonomous machines and other advanced hardware."
      },
      {
        "type": "paragraph",
        "text": "They may also work with suppliers responsible for producing components or assemblies."
      },
      {
        "type": "heading",
        "text": "Humanoid robotics"
      },
      {
        "type": "paragraph",
        "text": "Figure, 1X and Apptronik provide examples of companies developing humanoid robots that require complex electromechanical manufacturing."
      },
      {
        "type": "paragraph",
        "text": "Their manufacturing challenges can include precision joint assemblies, wiring, actuator integration, tooling and production readiness."
      },
      {
        "type": "paragraph",
        "text": "As humanoid platforms move from prototypes toward larger production volumes, manufacturing engineering becomes important for improving repeatability, throughput and cost."
      },
      {
        "type": "heading",
        "text": "Industrial and collaborative robotics"
      },
      {
        "type": "paragraph",
        "text": "Standard Bots and Collaborative Robotics develop robotic systems that require reliable manufacturing processes."
      },
      {
        "type": "paragraph",
        "text": "Manufacturing engineers may work on mechanical assemblies, robot electronics, production equipment, fixtures and inspection procedures."
      },
      {
        "type": "heading",
        "text": "Drones and autonomous systems"
      },
      {
        "type": "paragraph",
        "text": "Skydio develops autonomous drones that combine electronics, sensors, cameras and precision mechanical components."
      },
      {
        "type": "paragraph",
        "text": "Manufacturing engineering responsibilities can involve assembly processes, tooling, production testing and scaling manufacturing capacity."
      },
      {
        "type": "heading",
        "text": "Field and industrial robots"
      },
      {
        "type": "paragraph",
        "text": "FieldAI and ANYbotics provide additional examples of companies developing robotic platforms that require specialized manufacturing processes."
      },
      {
        "type": "paragraph",
        "text": "Engineers may work on hardware assembly, production support, tooling and improving manufacturing yields."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Useful searches include Manufacturing Engineer, Process Engineer, Production Engineer, NPI Engineer, Manufacturing Design Engineer and Industrialization Engineer."
      },
      {
        "type": "paragraph",
        "text": "NPI stands for New Product Introduction, the process of preparing new products for manufacturing."
      },
      {
        "type": "paragraph",
        "text": "Some employers also recruit supplier manufacturing engineers, who work with external manufacturers to improve production quality and readiness."
      },
      {
        "type": "paragraph",
        "text": "Read the position's responsibilities to understand whether it focuses on assembly processes, supplier operations, product design or factory management."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into robotics manufacturing engineering",
    "navLabel": "Career transitions",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "standard-bots",
      "one-x",
      "apptronik-assembly",
      "anybotics"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Several technical backgrounds provide useful routes into the profession."
      },
      {
        "type": "table",
        "caption": "Routes into robotics manufacturing",
        "columns": [
          "Your background",
          "Skills to prioritize",
          "Suggested project"
        ],
        "rows": [
          [
            "Manufacturing in another industry",
            "Robotics hardware, precision assemblies and electromechanical products",
            "Improve an assembly process for a small robotic component"
          ],
          [
            "Machining or technical trades",
            "CAD, engineering drawings, fixture design and process analysis",
            "Design a fixture that improves assembly consistency"
          ],
          [
            "Mechanical engineering",
            "Production processes, quality methods and manufacturing documentation",
            "Develop an assembly plan for a robotic mechanism"
          ],
          [
            "Electrical engineering",
            "Electronics manufacturing, production testing and assembly methods",
            "Develop a repeatable electronic assembly process"
          ],
          [
            "Complete beginner",
            "CAD, basic mechanical systems and manufacturing principles",
            "Design and document a simple sensor-bracket assembly"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you already work in manufacturing"
      },
      {
        "type": "paragraph",
        "text": "Your experience with production processes, quality, assembly and equipment can transfer directly."
      },
      {
        "type": "paragraph",
        "text": "Focus on understanding the electromechanical systems used in robotics."
      },
      {
        "type": "paragraph",
        "text": "A project involving precision mechanical assemblies, sensors or robotic components can demonstrate how your experience applies to the industry."
      },
      {
        "type": "heading",
        "text": "If you come from machining or a technical trade"
      },
      {
        "type": "paragraph",
        "text": "Your practical knowledge of manufacturing equipment, tolerances and assembly processes is valuable."
      },
      {
        "type": "paragraph",
        "text": "Develop stronger skills in CAD, fixture design, technical drawings and data analysis."
      },
      {
        "type": "paragraph",
        "text": "A useful project is to document a recurring assembly problem, propose an improvement and measure whether the change makes the process more consistent."
      },
      {
        "type": "heading",
        "text": "If you are a mechanical engineer"
      },
      {
        "type": "paragraph",
        "text": "Your experience designing parts and mechanisms provides a strong foundation."
      },
      {
        "type": "paragraph",
        "text": "Focus on what happens after a design is completed."
      },
      {
        "type": "paragraph",
        "text": "Learn how components are assembled, which manufacturing operations create difficulties and how tooling can improve repeatability."
      },
      {
        "type": "paragraph",
        "text": "Practice developing assembly instructions, inspection procedures and fixture designs."
      },
      {
        "type": "heading",
        "text": "If you are an electrical engineer"
      },
      {
        "type": "paragraph",
        "text": "Electronics manufacturing can provide a natural entry point."
      },
      {
        "type": "paragraph",
        "text": "Learn about printed circuit board assembly, cable harnesses, manufacturing testing and production quality."
      },
      {
        "type": "paragraph",
        "text": "Develop practical experience connecting electronic design requirements with repeatable manufacturing processes."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin with basic mechanical systems, introductory CAD and manufacturing principles."
      },
      {
        "type": "paragraph",
        "text": "Choose a simple assembly and study how its components fit together."
      },
      {
        "type": "paragraph",
        "text": "Then develop a process for building it consistently."
      },
      {
        "type": "paragraph",
        "text": "Technical courses, manufacturing programs and hands-on projects can help you determine which specialization interests you most."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Manufacturing engineering interviews often focus on how candidates solve practical production problems."
      },
      {
        "type": "paragraph",
        "text": "You may be asked how you would improve a difficult assembly, investigate a recurring defect or reduce the time required for a manufacturing operation."
      },
      {
        "type": "paragraph",
        "text": "Prepare one example where you can explain:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "The original manufacturing problem.",
          "How you investigated its cause.",
          "The improvement you proposed.",
          "How the change was implemented.",
          "What measurements showed whether it worked."
        ]
      },
      {
        "type": "paragraph",
        "text": "A credible, well-documented improvement to a simple assembly can be more convincing than an elaborate project with no measurable results."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first manufacturing engineering project",
    "navLabel": "Portfolio project",
    "paragraphs": [],
    "sourceIds": [
      "fieldai",
      "apptronik-assembly",
      "one-x",
      "asq",
      "nist"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Develop a repeatable assembly process for a robot sensor bracket"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to create an assembly process for a small bracket that could hold a camera or sensor on a robot."
      },
      {
        "type": "paragraph",
        "text": "You do not need to manufacture an entire robot."
      },
      {
        "type": "paragraph",
        "text": "The objective is to demonstrate how a manufacturing engineer designs a repeatable process, creates tooling and measures quality."
      },
      {
        "type": "paragraph",
        "text": "You can use 3D-printed components, purchased hardware or a CAD model, depending on the resources available."
      },
      {
        "type": "heading",
        "text": "Step 1: Define the assembly"
      },
      {
        "type": "paragraph",
        "text": "Design a simple bracket that holds a small sensor or camera module."
      },
      {
        "type": "paragraph",
        "text": "The assembly might include a base, mounting bracket, fasteners and an alignment feature."
      },
      {
        "type": "paragraph",
        "text": "Determine how the components should fit together."
      },
      {
        "type": "paragraph",
        "text": "Define a few requirements that can be measured, such as alignment, orientation and correct assembly."
      },
      {
        "type": "heading",
        "text": "Step 2: Create the manufacturing plan"
      },
      {
        "type": "paragraph",
        "text": "Develop a bill of materials listing the components needed."
      },
      {
        "type": "paragraph",
        "text": "Write a simple assembly sequence showing how each part should be installed."
      },
      {
        "type": "paragraph",
        "text": "Identify the tools required and the points where measurements or inspections should occur."
      },
      {
        "type": "paragraph",
        "text": "The instructions should be clear enough that another person could follow them."
      },
      {
        "type": "heading",
        "text": "Step 3: Design a fixture"
      },
      {
        "type": "paragraph",
        "text": "Create a simple fixture that helps position or align the components during assembly."
      },
      {
        "type": "paragraph",
        "text": "For example, the fixture could hold the bracket in a repeatable orientation while fasteners are installed."
      },
      {
        "type": "paragraph",
        "text": "Use CAD to develop the design."
      },
      {
        "type": "paragraph",
        "text": "Explain which features of the fixture control the assembly's position and how the fixture reduces opportunities for error."
      },
      {
        "type": "heading",
        "text": "Step 4: Write assembly instructions"
      },
      {
        "type": "paragraph",
        "text": "Create a short illustrated work instruction."
      },
      {
        "type": "paragraph",
        "text": "Include the assembly sequence, required tools and inspection points."
      },
      {
        "type": "paragraph",
        "text": "Use photographs or diagrams where they make the process easier to understand."
      },
      {
        "type": "paragraph",
        "text": "Avoid relying on knowledge that only the original designer possesses."
      },
      {
        "type": "paragraph",
        "text": "A strong instruction should be usable by another trained person."
      },
      {
        "type": "heading",
        "text": "Step 5: Build a small batch"
      },
      {
        "type": "paragraph",
        "text": "If physical parts are available, assemble several units using your documented process."
      },
      {
        "type": "paragraph",
        "text": "Record the results for each assembly."
      },
      {
        "type": "paragraph",
        "text": "Useful measurements include:"
      },
      {
        "type": "table",
        "caption": "A small-batch build record",
        "columns": [
          "Record",
          "What to capture"
        ],
        "rows": [
          [
            "Assembly ID",
            "Which unit was built"
          ],
          [
            "Build time",
            "How long assembly took"
          ],
          [
            "First-pass result",
            "Whether the assembly met the requirements without rework"
          ],
          [
            "Defects or rework",
            "What went wrong and what additional work was needed"
          ],
          [
            "Final result",
            "Whether the assembly was accepted or rejected"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Even a small batch can help reveal problems in the assembly sequence or tooling."
      },
      {
        "type": "paragraph",
        "text": "Keep the original first-pass results when recording repairs. Otherwise, rework can hide problems in the process."
      },
      {
        "type": "heading",
        "text": "Step 6: Investigate one problem"
      },
      {
        "type": "paragraph",
        "text": "Identify an issue in your initial assembly process."
      },
      {
        "type": "paragraph",
        "text": "Perhaps alignment varies between units, one fastener is difficult to reach or the work instructions are unclear."
      },
      {
        "type": "paragraph",
        "text": "Investigate the cause and propose an improvement."
      },
      {
        "type": "paragraph",
        "text": "You might redesign the fixture, change the assembly sequence or clarify the instructions."
      },
      {
        "type": "heading",
        "text": "Step 7: Test the improvement"
      },
      {
        "type": "paragraph",
        "text": "Repeat the relevant assembly steps after making the change."
      },
      {
        "type": "paragraph",
        "text": "Compare the results with the original process."
      },
      {
        "type": "paragraph",
        "text": "Did assembly time decrease? Was alignment more consistent? Were fewer corrections needed?"
      },
      {
        "type": "paragraph",
        "text": "Document what improved and what limitations remained."
      },
      {
        "type": "paragraph",
        "text": "For a small project, avoid making broad claims from a handful of assemblies. Focus on demonstrating the investigation and measurements."
      },
      {
        "type": "heading",
        "text": "Step 8: Document your results"
      },
      {
        "type": "paragraph",
        "text": "Prepare a short manufacturing report explaining the process, tooling and improvements."
      },
      {
        "type": "paragraph",
        "text": "Include drawings, photographs, assembly records and a summary of the changes."
      },
      {
        "type": "paragraph",
        "text": "An optional extension is to ask another person to follow your instructions."
      },
      {
        "type": "paragraph",
        "text": "Observe where they have questions or encounter difficulties. Their experience can reveal steps that seemed obvious to you but were not clearly documented."
      },
      {
        "type": "heading",
        "text": "What to include in your portfolio"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "CAD drawings of the bracket and fixture.",
          "A bill of materials.",
          "Assembly instructions.",
          "Photographs of the process and completed assemblies.",
          "Inspection results and build records.",
          "First-pass yield and rework observations, if physical builds were completed.",
          "A comparison of the original and improved process.",
          "A short explanation of one problem and how you addressed it."
        ]
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "Design a second version of the bracket intended to be easier to assemble."
      },
      {
        "type": "paragraph",
        "text": "Apply Design for Manufacturing and Assembly principles by reducing unnecessary parts, improving fastener access or simplifying alignment."
      },
      {
        "type": "paragraph",
        "text": "Compare the original and revised designs using the same assembly requirements."
      },
      {
        "type": "paragraph",
        "text": "This demonstrates how manufacturing engineers can influence product design before a robot enters large-scale production."
      }
    ]
  }
],
  nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "asq-resources",
    "nist-home",
    "sme-home"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "American Society for Quality (ASQ) — Quality Resources",
          "href": "https://asq.org/quality-resources",
          "description": "Learn about first-pass yield, root-cause analysis, corrective action and other manufacturing-quality concepts."
        },
        {
          "title": "National Institute of Standards and Technology (NIST)",
          "href": "https://www.nist.gov/",
          "description": "Explore manufacturing measurement, process improvement and engineering research."
        },
        {
          "title": "Society of Manufacturing Engineers (SME)",
          "href": "https://www.sme.org/",
          "description": "Find educational resources and professional information about manufacturing processes, industrial automation and modern production systems."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Start with one simple assembly and make its manufacturing process repeatable."
    },
    {
      "type": "paragraph",
      "text": "Once you can explain how the product is built, measure the results and improve the process, move toward more complex robotic hardware and production systems."
    }
  ]
},
  researchNotes:[
    'Employer advertisements were collected November 2, 2026; ten full stored sources were reviewed November 10. The original primary cohort contains 67 advertisements from 18 selected employers, including adjacent technician, test, quality and product-design roles. These are dated selected advertisements, not a count of current openings or an industry census.',
    'The guide focuses on hands-on engineering ownership of manufacturing processes, assembly methods, tooling, production systems and supplier readiness. Senior and staff technical roles are included when duties concern that work. Skills and education are described qualitatively in context; Figure’s related-degree wording is a bonus, Apptronik’s supplier role expressly requires a degree, and Standard Bots accepts an associate degree or equivalent experience.',
    'The compensation estimate is the median of seven eligible annual USD range midpoints across six employers, rounded to the nearest $1,000 with halves rounded upward. Four ranges have explicit annual text; three use official structured annual fields. The median is $182,000. Bonus and equity are excluded. Structured fields do not consistently identify base pay, so the guide labels these observations annual salary.',
    'This small purposive U.S. sample emphasizes experienced technical roles and California locations; two observations are separate Skydio requisitions. It is not an entry-level rate or representative market median, and it does not establish a salary premium by seniority. Exclusions include hourly technician work, dedicated test/quality roles, a battery product-design role, and 1X harness and hands advertisements with conflicting structured and body salary amounts. Full observations and exclusion decisions are downloadable.',
    'The yield visual is an illustrative batch, not employer data. Of 100 distinct assemblies, 82 pass initially, 15 pass after rework and three are scrapped. All units use the same acceptance criteria. First-pass yield is 82/100; final accepted yield is (82+15)/100. The categories are mutually exclusive and no units enter or leave the batch except through these outcomes. The square order is a visual grouping, not a production timeline.',
    'The opening, fixture investigation and portfolio are educational examples. A small portfolio batch demonstrates assembly planning, documentation and measurement; it does not establish statistical process capability or qualify a production process. The hero is a conceptual editorial illustration. Figure’s live advertisement and the official ASQ, NIST and SME resources were checked November 10, 2026.',
  ],
  citations:[
    source('study','Black Scarab: November 2 employer research','/research/physical-ai-careers-2026-11-02.json','Dated employer aggregate and original role definitions.'),
    source('evidence','Reviewed manufacturing-engineering evidence',evidencePath,'Ten contextual full-source reviews, qualifications and original hashes.'),
    source('compensation','Manufacturing Engineer compensation derivation',compensationPath,'Seven eligible annual observations, exclusions and reproducible salary estimate.'),
    source('yield-example','Illustrative manufacturing yield calculation',batchPath,'Single-batch counts and arithmetic underlying the editorial visual.'),
    posting('fieldai','fieldai:lever:61d53082-301f-4a1a-9439-180d10d4ebc0'),posting('one-x','one-x:ashby:e350ff0d-dd7f-4299-8415-dc8e6da051ac'),posting('standard-bots','standard-bots:ashby:7ea413c0-82ad-48c2-a706-2fa8d6dba91a'),posting('cobot','cobot:ashby:c54fa946-dd6b-4f0a-8957-4370b7d62e25'),posting('figure','figure:greenhouse:4375064006'),posting('skydio-design','skydio:ashby:ab193d47-71aa-4110-af25-b7f6335d16aa'),posting('skydio-process','skydio:ashby:ffbc31a1-c7dc-4083-9fc2-08dca7b79619'),posting('apptronik-assembly','apptronik:greenhouse:6237444004'),posting('apptronik-supplier','apptronik:greenhouse:5809796004'),posting('anybotics','anybotics:lever:41220f43-53f8-4336-94a1-eaed97c34784'),
    source('asq-resources','ASQ: quality resources','https://asq.org/quality-resources','Official educational resources on quality methods and manufacturing improvement.'),
    source('nist-home','National Institute of Standards and Technology','https://www.nist.gov/','Official gateway to measurement, manufacturing and engineering research.'),
    source('sme-home','SME: manufacturing education and professional resources','https://www.sme.org/','Official manufacturing technology, training and professional resources.'),
    source('asq','ASQ: quality glossary',glossary,'Official definitions including first-pass yield, rework and quality methods.'),
    source('nist','NIST: what is process capability?',capability,'Official explanation of stable-process output, specification limits and capability estimates.'),
    source('sme','SME: robotics in manufacturing fundamentals',fundamentals,'Official description of an optional foundational manufacturing-robotics credential.'),
  ],
};
