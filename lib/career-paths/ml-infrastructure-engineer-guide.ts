import type {CareerGuideContent,Citation} from '@/lib/career-paths/types';
import {researchForRole} from '@/lib/career-paths/research';
import evidence from '@/public/research/ml-infrastructure-engineer-evidence-2026-11-09.json';
import compensation from '@/public/research/ml-infrastructure-engineer-compensation-2026-11-02.json';
import scaling from '@/public/research/ml-infrastructure-scaling-example-2026-11-09.json';
import decisions from '@/research/seo/2026-11-09/decisions.json';

const roleId='machine-learning-infrastructure-engineer';
const role=researchForRole(roleId,evidence.snapshotId);
if(!role||compensation.snapshotId!==evidence.snapshotId)throw new Error('ML infrastructure guide research mismatch');
const seo=decisions.guides.find(item=>item.occupationId===roleId);
if(!seo)throw new Error('Missing ML infrastructure SEO decision');
const salary=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const number=new Intl.NumberFormat('en-US',{maximumFractionDigits:2});
const evidencePath='/research/ml-infrastructure-engineer-evidence-2026-11-09.json';
const compensationPath='/research/ml-infrastructure-engineer-compensation-2026-11-02.json';
const scalingPath='/research/ml-infrastructure-scaling-example-2026-11-09.json';
const quickstart='https://docs.pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html';
const profiler='https://docs.pytorch.org/tutorials/recipes/recipes/profiler_recipe.html';
const checkpoints='https://docs.pytorch.org/tutorials/beginner/saving_loading_models.html';
const tracking='https://mlflow.org/docs/latest/ml/tracking/';
const reproducibility='https://docs.pytorch.org/docs/stable/notes/randomness.html';
const source=(id:string,title:string,url:string,scope:string):Citation=>({id,title,url,scope,accessedAt:'2026-11-09'});
const posting=(id:string,recordId:string):Citation=>{
  const r=evidence.records.find(item=>item.id===recordId);
  if(!r)throw new Error(`Missing ML infrastructure evidence: ${recordId}`);
  return source(id,`${r.employer}: ${r.title}`,r.url,'Employer advertisement collected November 2, 2026. Full-source contextual review, qualifications and original hashes are preserved in the evidence export.');
};

export const mlInfrastructureEngineerGuide:CareerGuideContent={
  id:roleId,occupationId:roleId,familyId:'platforms-simulation',slug:roleId,
  title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-09',reviewedAt:'2026-11-09',
  research:{snapshotId:evidence.snapshotId,roleId,evidencePath},
  deck:'Build the computing systems that help robotics companies train AI models, manage experiments and turn research into reliable software.',
  introduction:["Imagine a robotics company training an AI model to help a humanoid robot recognize objects and manipulate them."],
  illustration:{src:'/career-paths/ml-infrastructure-engineer-lab-v2.webp',width:1672,height:941,alt:'Conceptual editorial illustration of an engineer on a catwalk overlooking monumental compute columns, with an amber-lit connection leading to a distant robotics test bay.'},
  overview:[
    {label:'What you do',value:'Build the infrastructure used to train, test and deploy AI models for robots',sourceIds:['agility','apptronik','nimble']},
    {label:'Core skills',value:'Python, Linux, GPUs, distributed computing, machine learning frameworks and cloud infrastructure',sourceIds:['nimble','rhoda','zoox-training']},
    {label:'Education',value:'Typically computer science, software engineering or a related technical field',sourceIds:['apptronik','nimble']},
    {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
  ],
  sections:[
  {
    "id": "day-to-day",
    "heading": "What does a machine learning infrastructure engineer do?",
    "navLabel": "The work",
    "paragraphs": [],
    "sourceIds": [
      "agility",
      "apptronik",
      "nimble",
      "rhoda",
      "zoox-training",
      "zoox-inference",
      "checkpoints"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Imagine a robotics company training an AI model to help a humanoid robot recognize objects and manipulate them."
      },
      {
        "type": "paragraph",
        "text": "Researchers collect thousands of hours of robot recordings, develop a machine learning model and launch a training experiment using powerful computers equipped with GPUs."
      },
      {
        "type": "paragraph",
        "text": "The experiment might run for hours or days, consuming substantial computing resources."
      },
      {
        "type": "paragraph",
        "text": "But what happens if the training job crashes halfway through? What if the GPUs spend most of their time waiting for data? Or what if a researcher achieves a promising result but cannot reproduce it?"
      },
      {
        "type": "paragraph",
        "text": "Machine learning infrastructure engineers build the systems that solve these problems."
      },
      {
        "type": "paragraph",
        "text": "Their work makes AI development faster, more reliable and easier to scale. They create the software and computing platforms that researchers use to run experiments, manage datasets, monitor performance and prepare trained models for deployment."
      },
      {
        "type": "paragraph",
        "text": "Unlike machine learning researchers, who primarily focus on improving how AI models learn, infrastructure engineers focus on the systems that make that learning possible."
      },
      {
        "type": "paragraph",
        "text": "In robotics, this is particularly important because models may need to process enormous volumes of video, sensor measurements, robot actions and simulation data."
      },
      {
        "type": "heading",
        "text": "Three areas of ML infrastructure engineering"
      },
      {
        "type": "table",
        "caption": "ML infrastructure specializations",
        "columns": [
          "Specialization",
          "What engineers work on"
        ],
        "rows": [
          [
            "Training infrastructure",
            "Running AI training efficiently across GPUs, servers, storage and networks"
          ],
          [
            "ML platforms and experiment management",
            "Building tools for launching experiments, tracking results and managing model versions"
          ],
          [
            "Model evaluation and deployment",
            "Testing trained models and preparing them to run reliably on production systems"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These areas frequently overlap."
      },
      {
        "type": "paragraph",
        "text": "An engineer might develop infrastructure that distributes training across dozens of GPUs. Another might build a platform that allows researchers to launch experiments without manually configuring servers."
      },
      {
        "type": "paragraph",
        "text": "Others focus on optimizing inference, the process of running a trained AI model to generate predictions or actions."
      },
      {
        "type": "paragraph",
        "text": "Companies such as Agility Robotics, Apptronik, Nimble Robotics and Rhoda AI have advertised positions covering different parts of this work."
      },
      {
        "type": "heading",
        "text": "What does a typical day look like?"
      },
      {
        "type": "paragraph",
        "text": "Much of the job involves identifying problems that slow down AI development."
      },
      {
        "type": "paragraph",
        "text": "An engineer might begin the morning investigating a training experiment that suddenly takes twice as long as expected."
      },
      {
        "type": "paragraph",
        "text": "The GPUs appear to be working, but closer inspection reveals that they spend much of their time waiting for data to arrive from storage."
      },
      {
        "type": "paragraph",
        "text": "The engineer investigates the data-loading pipeline, measures performance and tests whether a different approach improves training speed."
      },
      {
        "type": "paragraph",
        "text": "Later, they might work on a tool that allows researchers to restart interrupted experiments, automate model evaluations or track which software version produced a particular result."
      },
      {
        "type": "paragraph",
        "text": "A typical development cycle involves:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Understand the workload. Determine what the AI model needs, how much data it processes and which computing resources it uses.",
          "Measure performance. Identify bottlenecks involving GPUs, memory, storage or networking.",
          "Improve infrastructure. Develop software or change system configurations to make training more efficient.",
          "Build reliable workflows. Automate experiments, save progress and make results reproducible.",
          "Support evaluation and deployment. Help teams test models and deliver them to the systems that will use them."
        ]
      },
      {
        "type": "paragraph",
        "text": "The objective is not simply to make computers faster. It is to help researchers spend less time dealing with infrastructure and more time improving their models."
      },
      {
        "type": "heading",
        "text": "When a robotics training experiment crashes"
      },
      {
        "type": "paragraph",
        "text": "Consider a company training a model that helps a robot learn to pick up different objects."
      },
      {
        "type": "paragraph",
        "text": "The training process runs across several GPUs and is expected to take two days."
      },
      {
        "type": "paragraph",
        "text": "After 30 hours, one of the machines fails and the experiment stops."
      },
      {
        "type": "paragraph",
        "text": "Without proper infrastructure, researchers might lose most of their progress and have to restart the experiment."
      },
      {
        "type": "paragraph",
        "text": "An ML infrastructure engineer helps prevent this by developing a system that periodically saves checkpoints."
      },
      {
        "type": "paragraph",
        "text": "A checkpoint preserves the information needed to resume training, including model parameters, optimizer state and training progress."
      },
      {
        "type": "paragraph",
        "text": "When a failure occurs, the system can restart from a recent checkpoint rather than beginning again."
      },
      {
        "type": "paragraph",
        "text": "The engineer also needs to ensure that the resumed experiment uses the correct dataset, software configuration and model version."
      },
      {
        "type": "paragraph",
        "text": "This illustrates an important part of the job: keeping expensive AI experiments reliable even when individual components fail."
      }
    ]
  },
  {
    "id": "ml-infrastructure-vs-other-roles",
    "heading": "How is ML infrastructure different from other robotics careers?",
    "navLabel": "Related careers",
    "paragraphs": [],
    "sourceIds": [
      "agility",
      "apptronik",
      "pi-data",
      "nimble",
      "mlops"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Robotics companies need several types of engineers to develop and deploy AI models."
      },
      {
        "type": "paragraph",
        "text": "Their work overlaps, but they solve different problems."
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
            "Robot Learning Engineer",
            "Develops models and algorithms that teach robots new behaviors"
          ],
          [
            "Robotics Data Engineer",
            "Organizes robot recordings and prepares datasets for training"
          ],
          [
            "ML Infrastructure Engineer",
            "Builds the computing systems that make training, evaluation and deployment efficient and reliable"
          ],
          [
            "Robotics Platform Engineer",
            "Develops shared software and tools supporting a robot's broader software systems"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "For example, imagine a company training a robot to fold laundry."
      },
      {
        "type": "paragraph",
        "text": "A robotics data engineer helps prepare recordings of successful and unsuccessful attempts."
      },
      {
        "type": "paragraph",
        "text": "A robot learning engineer develops the model and learning process."
      },
      {
        "type": "paragraph",
        "text": "The ML infrastructure engineer builds the systems that allow the experiment to run efficiently across computing resources, track its results and recover when something fails."
      },
      {
        "type": "paragraph",
        "text": "Once the trained model is ready, other engineers may help integrate it into the robot's software and hardware."
      },
      {
        "type": "paragraph",
        "text": "At smaller companies, these responsibilities may overlap."
      },
      {
        "type": "heading",
        "text": "Is this the same as MLOps?"
      },
      {
        "type": "paragraph",
        "text": "Machine learning operations, commonly called MLOps, focuses on making machine learning development and deployment repeatable, manageable and reliable."
      },
      {
        "type": "paragraph",
        "text": "ML infrastructure engineering includes many of those responsibilities but can extend deeper into computing performance, GPU utilization, distributed training and large-scale systems engineering."
      },
      {
        "type": "paragraph",
        "text": "For example, an MLOps-focused engineer may build automated model evaluation and deployment workflows."
      },
      {
        "type": "paragraph",
        "text": "An infrastructure engineer specializing in training performance might investigate why a model trains slowly across eight GPUs or why network communication limits performance."
      },
      {
        "type": "paragraph",
        "text": "Both areas contribute to reliable AI development."
      }
    ]
  },
  {
    "id": "skills",
    "heading": "Which skills and tools do employers look for?",
    "navLabel": "Skills & tools",
    "paragraphs": [],
    "sourceIds": [
      "agility",
      "apptronik",
      "pi-data",
      "nimble",
      "rhoda",
      "zoox-training",
      "zoox-inference",
      "quickstart",
      "profiler",
      "checkpoints",
      "tracking",
      "scaling"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Python and software engineering"
      },
      {
        "type": "paragraph",
        "text": "Python is one of the most useful programming languages in machine learning infrastructure."
      },
      {
        "type": "paragraph",
        "text": "Engineers use it to automate experiments, build platform tools, manage datasets and interact with machine learning frameworks."
      },
      {
        "type": "paragraph",
        "text": "Strong software engineering fundamentals are equally important."
      },
      {
        "type": "paragraph",
        "text": "These include writing maintainable code, building APIs, debugging complex applications, testing software and using version control systems such as Git."
      },
      {
        "type": "paragraph",
        "text": "Infrastructure engineers often develop tools used by entire research teams, so reliability and usability matter."
      },
      {
        "type": "paragraph",
        "text": "Some performance-oriented roles also require C++ or GPU programming, but those are not necessary starting points for every position."
      },
      {
        "type": "heading",
        "text": "Linux and computer systems"
      },
      {
        "type": "paragraph",
        "text": "Many AI training environments run on Linux servers."
      },
      {
        "type": "paragraph",
        "text": "Engineers should understand how operating systems manage processes, memory, files, permissions and computing resources."
      },
      {
        "type": "paragraph",
        "text": "Networking and storage fundamentals also matter because training jobs frequently move large quantities of data between machines."
      },
      {
        "type": "paragraph",
        "text": "A model might run on one server while its training data is stored elsewhere."
      },
      {
        "type": "paragraph",
        "text": "If the data cannot arrive quickly enough, the GPUs may spend time waiting instead of performing calculations."
      },
      {
        "type": "paragraph",
        "text": "Understanding how these systems interact is essential to diagnosing performance problems."
      },
      {
        "type": "heading",
        "text": "GPUs and machine learning training"
      },
      {
        "type": "paragraph",
        "text": "A graphics processing unit, or GPU, is a processor designed to perform many calculations in parallel."
      },
      {
        "type": "paragraph",
        "text": "That capability makes GPUs particularly useful for training deep learning models."
      },
      {
        "type": "paragraph",
        "text": "During training, a machine learning model processes data, generates predictions, calculates errors and updates its internal parameters."
      },
      {
        "type": "paragraph",
        "text": "This process repeats across many batches of training data."
      },
      {
        "type": "paragraph",
        "text": "Frameworks such as PyTorch handle much of the numerical computation involved."
      },
      {
        "type": "paragraph",
        "text": "An ML infrastructure engineer should understand the training process well enough to investigate its performance and reliability."
      },
      {
        "type": "paragraph",
        "text": "They do not necessarily need to invent new machine learning algorithms, but they must understand how the models use computing resources."
      },
      {
        "type": "heading",
        "text": "Distributed computing"
      },
      {
        "type": "paragraph",
        "text": "As AI models and datasets become larger, training may require multiple GPUs or several servers working together."
      },
      {
        "type": "paragraph",
        "text": "This is known as distributed computing."
      },
      {
        "type": "paragraph",
        "text": "Rather than assigning all work to a single machine, the training system distributes calculations across available hardware."
      },
      {
        "type": "paragraph",
        "text": "However, adding more GPUs does not always produce proportional improvements."
      },
      {
        "type": "paragraph",
        "text": "The machines may need to exchange information, synchronize calculations or wait for data."
      },
      {
        "type": "paragraph",
        "text": "Infrastructure engineers develop and optimize systems that coordinate this work."
      },
      {
        "type": "paragraph",
        "text": "Important concepts include parallel processing, communication overhead, memory management and resource scheduling."
      },
      {
        "type": "heading",
        "text": "Performance profiling and optimization"
      },
      {
        "type": "paragraph",
        "text": "One of the most important skills in ML infrastructure is understanding why a system is slow."
      },
      {
        "type": "paragraph",
        "text": "A training job might be limited by GPU computation, insufficient memory, slow data loading or communication between machines."
      },
      {
        "type": "paragraph",
        "text": "Engineers use profiling tools to measure how much time different operations require."
      },
      {
        "type": "paragraph",
        "text": "They may evaluate:"
      },
      {
        "type": "table",
        "caption": "Performance measures",
        "columns": [
          "Metric",
          "What it measures"
        ],
        "rows": [
          [
            "Training throughput",
            "How much work the system completes per unit of time"
          ],
          [
            "Step time",
            "How long one training update takes"
          ],
          [
            "GPU utilization",
            "Activity reported by GPU monitoring tools"
          ],
          [
            "Memory usage",
            "How much memory the workload requires"
          ],
          [
            "Data-loading time",
            "How long the system takes to prepare inputs for training"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These measurements help engineers identify where improvements will have the greatest impact."
      },
      {
        "type": "paragraph",
        "text": "The goal is to make changes based on evidence rather than assumptions."
      },
      {
        "type": "heading",
        "text": "Why more GPUs don't always mean better efficiency"
      },
      {
        "type": "paragraph",
        "text": "Imagine a training experiment that takes 60 minutes on one GPU."
      },
      {
        "type": "paragraph",
        "text": "Adding more GPUs can reduce the time required to finish the experiment, but not every part of the workload can necessarily run in parallel."
      },
      {
        "type": "paragraph",
        "text": "Consider a simplified example in which 10% of the original work cannot be parallelized, while the remaining 90% scales perfectly."
      },
      {
        "type": "table",
        "variant": "numeric",
        "caption": "Training speed and allocated compute",
        "columns": [
          "GPUs",
          "Training time (min)",
          "Allocated GPU-min"
        ],
        "rows": scaling.rows.map(row=>[String(row.gpus),number.format(row.elapsedMinutes),number.format(row.allocatedGpuMinutes)])
      },
      {
        "type": "paragraph",
        "text": "Illustrative calculation assuming all allocated GPUs remain reserved for the entire run."
      },
      {
        "type": "paragraph",
        "text": "Eight GPUs finish the experiment much faster than one, reducing training time from 60 minutes to 12.75 minutes."
      },
      {
        "type": "paragraph",
        "text": "However, they also consume 102 allocated GPU-minutes instead of 60."
      },
      {
        "type": "paragraph",
        "text": "The experiment finishes sooner but uses more total computing capacity."
      },
      {
        "type": "paragraph",
        "text": "This is an important trade-off."
      },
      {
        "type": "paragraph",
        "text": "For a robotics company developing a new AI model, finishing an experiment quickly may be worth the additional cost. In other cases, maximizing computing efficiency may be more important."
      },
      {
        "type": "paragraph",
        "text": "Infrastructure engineers help teams understand these trade-offs and make better decisions about how resources are used."
      },
      {
        "type": "heading",
        "text": "Experiment tracking and reproducibility"
      },
      {
        "type": "paragraph",
        "text": "Machine learning researchers often run many versions of the same experiment."
      },
      {
        "type": "paragraph",
        "text": "They may change a model's architecture, adjust training parameters or use a different dataset."
      },
      {
        "type": "paragraph",
        "text": "Without proper tracking, it can become difficult to determine which changes produced a particular result."
      },
      {
        "type": "paragraph",
        "text": "Infrastructure engineers build systems that record important information, including:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "The software version used for training.",
          "The dataset and configuration.",
          "The computing environment.",
          "Training and evaluation metrics.",
          "Model checkpoints and output files."
        ]
      },
      {
        "type": "paragraph",
        "text": "This makes experiments easier to compare and reproduce."
      },
      {
        "type": "paragraph",
        "text": "MLflow is one example of a tool used for experiment tracking and model management."
      },
      {
        "type": "paragraph",
        "text": "The objective is to ensure that a promising result can be traced back to the conditions that produced it."
      },
      {
        "type": "heading",
        "text": "Cloud infrastructure and containers"
      },
      {
        "type": "paragraph",
        "text": "AI training environments frequently use cloud computing, dedicated GPU servers or a combination of both."
      },
      {
        "type": "paragraph",
        "text": "Infrastructure engineers may work with technologies such as:"
      },
      {
        "type": "table",
        "caption": "Infrastructure tools",
        "columns": [
          "Technology",
          "Typical purpose"
        ],
        "rows": [
          [
            "Docker",
            "Packages software and its dependencies into portable containers"
          ],
          [
            "Kubernetes",
            "Helps schedule and manage applications and workloads across machines"
          ],
          [
            "Cloud platforms",
            "Provide access to computing, storage and networking resources"
          ],
          [
            "PyTorch",
            "Supports model development and training"
          ],
          [
            "MLflow",
            "Tracks experiments, metrics and model artifacts"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Not every job requires experience with all these tools."
      },
      {
        "type": "paragraph",
        "text": "The underlying concepts matter more than memorizing a particular technology stack."
      },
      {
        "type": "paragraph",
        "text": "An engineer should understand how to run workloads reliably, allocate resources, monitor performance and recover from failures."
      },
      {
        "type": "heading",
        "text": "Model evaluation and deployment"
      },
      {
        "type": "paragraph",
        "text": "Training a model successfully does not guarantee that it is ready for use."
      },
      {
        "type": "paragraph",
        "text": "Robotics companies must evaluate whether a trained model performs reliably under relevant conditions."
      },
      {
        "type": "paragraph",
        "text": "Infrastructure engineers help build automated systems that run these evaluations and connect results to specific model versions."
      },
      {
        "type": "paragraph",
        "text": "Some also develop systems for delivering models to production environments."
      },
      {
        "type": "paragraph",
        "text": "For example, a model trained on powerful GPUs in a data center may eventually need to run on a robot with much more limited computing resources."
      },
      {
        "type": "paragraph",
        "text": "This creates additional challenges involving memory, latency and inference performance."
      }
    ]
  },
  {
    "id": "education",
    "heading": "What education do you need?",
    "navLabel": "Education",
    "paragraphs": [],
    "sourceIds": [
      "agility",
      "apptronik",
      "nimble",
      "nuro",
      "applied"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Computer science, software engineering and related technical disciplines provide common educational pathways."
      },
      {
        "type": "paragraph",
        "text": "These programs develop the foundations needed to understand programming, operating systems, algorithms and computing infrastructure."
      },
      {
        "type": "paragraph",
        "text": "A machine learning-specific degree is not always necessary."
      },
      {
        "type": "paragraph",
        "text": "Experience in backend software development, cloud computing, distributed systems or site reliability engineering provides relevant preparation."
      },
      {
        "type": "heading",
        "text": "What employers expect"
      },
      {
        "type": "table",
        "caption": "Qualifications in employer advertisements",
        "columns": [
          "Employer",
          "Representative qualifications"
        ],
        "rows": [
          [
            "Apptronik",
            "Relevant technical degree or equivalent experience, plus production platform engineering"
          ],
          [
            "Nimble Robotics",
            "Relevant degree or practical experience, with several years in a related technical discipline"
          ],
          [
            "Agility Robotics",
            "At least five years of software experience, including experience with ML infrastructure, data platforms or MLOps"
          ],
          [
            "Applied Intuition",
            "Advanced academic preparation for certain research-oriented AI infrastructure positions"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "These examples represent different types of positions, many of them experienced roles."
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
        "text": "A bachelor's degree combined with relevant professional experience can provide a strong foundation."
      },
      {
        "type": "paragraph",
        "text": "Graduate education may be valuable for research-oriented positions involving advanced machine learning systems, optimization or distributed AI training."
      },
      {
        "type": "paragraph",
        "text": "However, employers also value engineers who have built reliable production software and demonstrated practical systems expertise."
      },
      {
        "type": "heading",
        "text": "What should you study?"
      },
      {
        "type": "paragraph",
        "text": "A useful foundation includes:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Python programming, algorithms and software architecture.",
          "Linux, operating systems and networking.",
          "Databases, storage and distributed computing.",
          "Machine learning fundamentals and PyTorch.",
          "Cloud infrastructure and containerization.",
          "Software testing, monitoring and performance profiling."
        ]
      },
      {
        "type": "paragraph",
        "text": "The strongest preparation combines software engineering skills with enough machine learning knowledge to understand the workloads being supported."
      },
      {
        "type": "heading",
        "text": "Can you enter without a technical degree?"
      },
      {
        "type": "paragraph",
        "text": "Some employers consider equivalent professional experience, but ML infrastructure is a technically demanding field."
      },
      {
        "type": "paragraph",
        "text": "Someone starting without a software background should first learn programming, Linux and computer systems."
      },
      {
        "type": "paragraph",
        "text": "From there, they can move into cloud computing, machine learning fundamentals and small infrastructure projects."
      },
      {
        "type": "paragraph",
        "text": "A practical project that demonstrates reliable execution, performance measurement and recovery from failures can help establish relevant experience."
      }
    ]
  },
  {
    "id": "salary",
    "heading": "How much do ML infrastructure engineers in robotics earn?",
    "navLabel": "Compensation",
    "paragraphs": [],
    "sourceIds": [
      "compensation",
      "nimble",
      "rhoda",
      "skydio"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Machine learning infrastructure combines advanced software engineering with increasingly important AI computing systems."
      },
      {
        "type": "paragraph",
        "text": "Compensation varies by experience, specialization, location and technical responsibilities."
      },
      {
        "type": "paragraph",
        "text": "Black Scarab estimates annual compensation at $253,000 based on reviewed U.S. robotics and autonomy employer advertisements, with an emphasis on experienced positions."
      },
      {
        "type": "compensation",
        "caption": "Selected U.S. salary advertisements",
        "note": "Annual advertised salary · collected November 2, 2026",
        "examples": evidence.roles[roleId].compensation
      },
      {
        "type": "heading",
        "text": "What influences compensation?"
      },
      {
        "type": "paragraph",
        "text": "Experience and technical ownership. Compare responsibility for individual tools, complete training platforms and distributed infrastructure."
      },
      {
        "type": "paragraph",
        "text": "Specialization. Expertise in GPU performance, distributed training, large-scale storage and inference optimization can be valuable for specialized positions."
      },
      {
        "type": "paragraph",
        "text": "Scale and complexity. Supporting hundreds of experiments or large computing clusters introduces different challenges from managing a small research environment."
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
        "text": "Early-career engineers may begin by improving internal tools, monitoring training jobs or developing automated workflows."
      },
      {
        "type": "paragraph",
        "text": "With experience, they take responsibility for larger infrastructure components, training pipelines or experiment-management systems."
      },
      {
        "type": "paragraph",
        "text": "Senior and staff engineers may design entire ML platforms, lead performance optimization efforts and make architectural decisions affecting an organization's AI development capabilities."
      }
    ]
  },
  {
    "id": "employers",
    "heading": "Which companies hire ML infrastructure engineers for robotics?",
    "navLabel": "Employers & titles",
    "paragraphs": [],
    "sourceIds": [
      "agility",
      "apptronik",
      "nimble",
      "rhoda",
      "skydio",
      "zoox-training",
      "zoox-inference",
      "applied",
      "pi-data"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Machine learning infrastructure is important across humanoid robotics, autonomous vehicles, drones and companies developing robot foundation models."
      },
      {
        "type": "heading",
        "text": "Humanoid robotics"
      },
      {
        "type": "paragraph",
        "text": "Agility Robotics and Apptronik provide examples of organizations developing infrastructure for robot learning and model development."
      },
      {
        "type": "paragraph",
        "text": "These systems support training experiments, evaluation workflows and the software processes used to manage evolving AI models."
      },
      {
        "type": "heading",
        "text": "Robotics and AI training systems"
      },
      {
        "type": "paragraph",
        "text": "Nimble Robotics and Rhoda AI have advertised positions involving machine learning infrastructure and training performance."
      },
      {
        "type": "paragraph",
        "text": "These roles can involve GPU optimization, distributed computing, data pipelines and systems that help researchers run experiments efficiently."
      },
      {
        "type": "heading",
        "text": "Autonomous vehicles and drones"
      },
      {
        "type": "paragraph",
        "text": "Zoox, Skydio and Applied Intuition develop technology involving autonomous systems and machine learning."
      },
      {
        "type": "paragraph",
        "text": "Infrastructure engineers may support model training, large-scale datasets, simulation workflows and inference optimization."
      },
      {
        "type": "paragraph",
        "text": "Autonomous systems can generate enormous quantities of sensor data, making efficient storage, processing and evaluation particularly important."
      },
      {
        "type": "heading",
        "text": "Robot foundation models"
      },
      {
        "type": "paragraph",
        "text": "Physical Intelligence develops AI systems intended to support robotic behavior across different tasks and hardware."
      },
      {
        "type": "paragraph",
        "text": "Its machine learning data-systems work illustrates the importance of storage, caching and efficient access to training data."
      },
      {
        "type": "paragraph",
        "text": "For large-scale robot learning, keeping GPUs supplied with data can be as important as the computing hardware itself."
      },
      {
        "type": "heading",
        "text": "Related job titles"
      },
      {
        "type": "paragraph",
        "text": "Relevant searches include Machine Learning Infrastructure Engineer, ML Platform Engineer, Training Systems Engineer, AI Infrastructure Engineer, Distributed Training Engineer and Software Engineer — ML Infrastructure."
      },
      {
        "type": "paragraph",
        "text": "Some employers use titles related to MLOps, inference optimization or research infrastructure."
      },
      {
        "type": "paragraph",
        "text": "Read the responsibilities carefully. A general platform engineering role may involve cloud services or enterprise applications rather than AI training systems."
      }
    ]
  },
  {
    "id": "transition",
    "heading": "How to transition into ML infrastructure engineering",
    "navLabel": "Career transitions",
    "paragraphs": [],
    "sourceIds": [
      "agility",
      "apptronik",
      "pi-data",
      "nimble",
      "rhoda",
      "quickstart"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "text": "Several technical backgrounds provide useful starting points."
      },
      {
        "type": "table",
        "caption": "Routes into ML infrastructure",
        "columns": [
          "Your background",
          "Skills to prioritize",
          "Suggested project"
        ],
        "rows": [
          [
            "Backend software engineering",
            "Machine learning, GPUs and distributed training",
            "Build a reproducible ML training pipeline"
          ],
          [
            "Cloud or DevOps engineering",
            "PyTorch, model evaluation and training performance",
            "Deploy and monitor a containerized training workload"
          ],
          [
            "Data engineering",
            "Model training, experiment tracking and GPU workloads",
            "Optimize a data-loading pipeline"
          ],
          [
            "Machine learning research",
            "Software reliability, infrastructure design and automation",
            "Build a platform for managing repeatable experiments"
          ],
          [
            "Complete beginner",
            "Python, Linux, computer systems and ML fundamentals",
            "Run, track and recover a small training experiment"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "If you already work in backend software engineering"
      },
      {
        "type": "paragraph",
        "text": "Your experience with APIs, databases, software architecture and testing can transfer directly."
      },
      {
        "type": "paragraph",
        "text": "Learn how machine learning training works, then develop familiarity with PyTorch and GPU computing."
      },
      {
        "type": "paragraph",
        "text": "A useful project is to create a system that launches experiments, tracks configurations and recovers from interruptions."
      },
      {
        "type": "heading",
        "text": "If you work in cloud infrastructure or DevOps"
      },
      {
        "type": "paragraph",
        "text": "You may already understand containers, orchestration, networking and computing resources."
      },
      {
        "type": "paragraph",
        "text": "Focus on the specific requirements of machine learning workloads."
      },
      {
        "type": "paragraph",
        "text": "Learn how models are trained, why GPUs are used and how data-loading performance affects training speed."
      },
      {
        "type": "paragraph",
        "text": "Build an environment that runs, monitors and manages a repeatable training job."
      },
      {
        "type": "heading",
        "text": "If you come from data engineering"
      },
      {
        "type": "paragraph",
        "text": "Your knowledge of storage systems, pipelines and large datasets is highly relevant."
      },
      {
        "type": "paragraph",
        "text": "Develop a deeper understanding of how AI training consumes data through batching, caching and parallel loading."
      },
      {
        "type": "paragraph",
        "text": "Investigate how different data-loading strategies affect training performance."
      },
      {
        "type": "heading",
        "text": "If you work in machine learning research"
      },
      {
        "type": "paragraph",
        "text": "You already understand model development, experimentation and evaluation."
      },
      {
        "type": "paragraph",
        "text": "Focus on the engineering needed to support multiple researchers using shared systems."
      },
      {
        "type": "paragraph",
        "text": "Learn infrastructure automation, monitoring, testing and fault recovery."
      },
      {
        "type": "paragraph",
        "text": "A strong project demonstrates that another researcher can launch an experiment, reproduce its results and recover from failure without your direct assistance."
      },
      {
        "type": "heading",
        "text": "If you are starting from scratch"
      },
      {
        "type": "paragraph",
        "text": "Begin with Python and Linux."
      },
      {
        "type": "paragraph",
        "text": "Develop a basic understanding of how computers execute programs, manage memory and store data."
      },
      {
        "type": "paragraph",
        "text": "Then learn the fundamentals of machine learning and run a simple PyTorch training example."
      },
      {
        "type": "paragraph",
        "text": "Once that works, add experiment tracking, automated testing and checkpoint recovery."
      },
      {
        "type": "paragraph",
        "text": "Move toward cloud infrastructure and distributed systems after you understand how a single-machine training job operates."
      },
      {
        "type": "heading",
        "text": "What matters in an interview?"
      },
      {
        "type": "paragraph",
        "text": "Infrastructure engineering interviews often focus on how candidates investigate performance and reliability problems."
      },
      {
        "type": "paragraph",
        "text": "You may be asked why a GPU training job is slow, how to recover from a failed experiment or how to design a platform supporting several researchers."
      },
      {
        "type": "paragraph",
        "text": "Prepare one project in detail."
      },
      {
        "type": "paragraph",
        "text": "Explain the workload, the measurements you collected, the bottleneck you identified and the change you made."
      },
      {
        "type": "paragraph",
        "text": "Employers may also ask how you tested correctness and whether an optimization actually improved performance."
      },
      {
        "type": "paragraph",
        "text": "A strong answer demonstrates that you can solve complex computing problems systematically."
      }
    ]
  },
  {
    "id": "portfolio",
    "heading": "Build your first ML infrastructure project",
    "navLabel": "Portfolio project",
    "paragraphs": [],
    "sourceIds": [
      "quickstart",
      "profiler",
      "checkpoints",
      "tracking",
      "reproducibility"
    ],
    "blocks": [
      {
        "type": "heading",
        "text": "Make an AI training experiment reliable and reproducible"
      },
      {
        "type": "paragraph",
        "text": "A useful beginner project is to create a small machine learning training system that can track experiments, recover from interruptions and measure performance."
      },
      {
        "type": "paragraph",
        "text": "You do not need an expensive GPU cluster."
      },
      {
        "type": "paragraph",
        "text": "A normal computer running a small PyTorch model is enough to demonstrate many of the underlying principles."
      },
      {
        "type": "paragraph",
        "text": "The goal is not to build the most accurate AI model. It is to create reliable infrastructure around the training process."
      },
      {
        "type": "heading",
        "text": "Step 1: Run a simple machine learning model"
      },
      {
        "type": "paragraph",
        "text": "Use a public dataset such as FashionMNIST and a basic PyTorch training example."
      },
      {
        "type": "paragraph",
        "text": "Train a small model and record:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "The model configuration.",
          "The dataset used.",
          "Training and evaluation results.",
          "The time required to complete training."
        ]
      },
      {
        "type": "paragraph",
        "text": "Keep the experiment small enough to repeat several times."
      },
      {
        "type": "heading",
        "text": "Step 2: Track your experiments"
      },
      {
        "type": "paragraph",
        "text": "Create a system for recording the important details of every training run."
      },
      {
        "type": "paragraph",
        "text": "Use local files or an experiment-tracking tool such as MLflow."
      },
      {
        "type": "paragraph",
        "text": "Assign each run a unique identifier and save its configuration, software version and results."
      },
      {
        "type": "paragraph",
        "text": "This allows you to compare experiments and understand which changes affected performance."
      },
      {
        "type": "heading",
        "text": "Step 3: Add checkpoint recovery"
      },
      {
        "type": "paragraph",
        "text": "Modify the training program to save progress periodically."
      },
      {
        "type": "paragraph",
        "text": "The checkpoint should contain the information needed to continue training, including model parameters, optimizer state and training progress."
      },
      {
        "type": "paragraph",
        "text": "Interrupt the experiment deliberately."
      },
      {
        "type": "paragraph",
        "text": "Restart the program and verify that it resumes from the saved checkpoint rather than beginning again."
      },
      {
        "type": "paragraph",
        "text": "Document what state was recovered and whether the results meet your expectations."
      },
      {
        "type": "heading",
        "text": "Step 4: Investigate a performance problem"
      },
      {
        "type": "paragraph",
        "text": "Use PyTorch profiling tools to measure how much time different parts of the training process require."
      },
      {
        "type": "paragraph",
        "text": "Examine data loading and model execution separately."
      },
      {
        "type": "paragraph",
        "text": "Then introduce an artificial delay into a copy of the data-loading process."
      },
      {
        "type": "paragraph",
        "text": "Run the experiment again and determine whether your measurements reveal the bottleneck."
      },
      {
        "type": "paragraph",
        "text": "The objective is to demonstrate that you can identify why a workload slows down."
      },
      {
        "type": "heading",
        "text": "Step 5: Test an improvement"
      },
      {
        "type": "paragraph",
        "text": "Change one part of the system to improve performance."
      },
      {
        "type": "paragraph",
        "text": "For example, adjust the data-loading configuration or remove an unnecessary delay."
      },
      {
        "type": "paragraph",
        "text": "Run the original and improved versions under the same conditions."
      },
      {
        "type": "paragraph",
        "text": "Compare training time, throughput and model evaluation results."
      },
      {
        "type": "paragraph",
        "text": "Repeat the measurements where practical to reduce the influence of random fluctuations."
      },
      {
        "type": "heading",
        "text": "Step 6: Make the workflow reproducible"
      },
      {
        "type": "paragraph",
        "text": "Provide simple commands for launching a new experiment and resuming an interrupted one."
      },
      {
        "type": "paragraph",
        "text": "Document the software dependencies, configuration and dataset."
      },
      {
        "type": "paragraph",
        "text": "Ensure that another person can follow the instructions and reproduce the workflow."
      },
      {
        "type": "heading",
        "text": "Step 7: Document your findings"
      },
      {
        "type": "paragraph",
        "text": "Prepare a short technical report describing the infrastructure you built."
      },
      {
        "type": "paragraph",
        "text": "Explain how experiment tracking works, how checkpoint recovery was tested and what performance bottleneck you investigated."
      },
      {
        "type": "paragraph",
        "text": "Include a comparison of the original and improved workflows."
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
          "A reproducible training configuration.",
          "Recorded experiment parameters and results.",
          "Model checkpoints and a tested recovery example.",
          "Performance measurements and profiling results.",
          "A before-and-after comparison of one optimization.",
          "A short technical report explaining what you learned."
        ]
      },
      {
        "type": "heading",
        "text": "An optional advanced extension"
      },
      {
        "type": "paragraph",
        "text": "If you have access to multiple GPUs, run the same training workload using different GPU counts."
      },
      {
        "type": "paragraph",
        "text": "Measure how training time and allocated computing resources change."
      },
      {
        "type": "paragraph",
        "text": "Investigate whether the workload is limited by computation, data loading or communication between devices."
      },
      {
        "type": "paragraph",
        "text": "Compare performance and resource consumption rather than assuming that using more GPUs is automatically more efficient."
      },
      {
        "type": "paragraph",
        "text": "This brings the project closer to the work performed by infrastructure engineers supporting large robotics AI teams."
      }
    ]
  }
],
  nextSteps:{
  "id": "next-steps",
  "heading": "Where to go next",
  "paragraphs": [],
  "sourceIds": [
    "quickstart",
    "profiler",
    "tracking"
  ],
  "blocks": [
    {
      "type": "resources",
      "items": [
        {
          "title": "PyTorch — Quickstart",
          "href": "https://docs.pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html",
          "description": "Learn how machine learning models are trained, evaluated and saved using PyTorch."
        },
        {
          "title": "PyTorch — Profiler",
          "href": "https://docs.pytorch.org/tutorials/recipes/recipes/profiler_recipe.html",
          "description": "Explore how to identify performance bottlenecks and measure execution time in machine learning workloads."
        },
        {
          "title": "MLflow — Experiment Tracking",
          "href": "https://mlflow.org/docs/latest/ml/tracking/",
          "description": "Learn how to organize training runs, record metrics and connect model artifacts to the experiments that produced them."
        }
      ]
    },
    {
      "type": "paragraph",
      "text": "Start with one reliable training workflow. Once you can reproduce its results, recover from failures and explain its performance, move toward more advanced infrastructure involving GPUs, distributed training and large-scale experiment platforms."
    }
  ]
},
  researchNotes:[
    `Black Scarab’s November 2, 2026 primary ML infrastructure cohort contains ${role.postingCount} advertisements across ${role.employerCount} selected employers. Twelve stored full sources were reviewed for this guide. The cohort includes data-system specializations, a multi-team graduate opening and an external model-API product role whose body expressly distinguishes it from traditional ML infrastructure. Skills are presented contextually; no raw cohort counts are used as clean profession-specific vacancies or skill prevalence. Original classifications remain unchanged.`,
    `The compensation estimate is the median annual salary-range midpoint from ${compensation.postingCount} eligible U.S. advertisements across ${compensation.employerCount} employers, rounded to the nearest $1,000. The exact median is $${compensation.exactMedianMidpoint.toLocaleString('en-US')}. Four observations are Zoox requisitions. The sample emphasizes experienced roles in California and includes senior/staff technical ownership; it is not an entry-level estimate or representative market median. Structured salary fields do not consistently identify base pay. Bonus and equity are excluded.`,
    'The salary export preserves complete eligible ranges, original source hashes, annual-period evidence and exclusions. Mixed or unverified geography, unverified annual periods, external API-product scope and broad multi-team graduate hiring are excluded. Annual bonus language does not establish a salary period. Distinct requisitions are counted separately; no pay ladder is inferred.',
    'The scaling table is an illustrative arithmetic model: T(N) = 60 × (0.1 + 0.9/N) minutes; allocated GPU-minutes = N × T(N). The workload is fixed, 10% cannot be parallelized, the rest scales perfectly and all GPUs remain allocated for the full run. There is no additional communication, queueing, storage or memory overhead in the model. These are not employer measurements, utilization rates, cloud prices or predicted real training results. The linked example export preserves assumptions and values.',
    'Employer examples refer to advertisements collected November 2, 2026, rather than a live vacancy inventory. Nimble’s advertisement was checked November 9. Nuro’s graduate opening spans several possible teams and is not a dedicated ML infrastructure placement. The opening, daily-work sequence and portfolio are educational examples. FashionMNIST is a small systems exercise, not evidence of a deployable robot policy. Checkpoint recovery requirements depend on the training process; exact continuation can also require random-generator and data-loader state. The hero is a conceptual editorial illustration. Editorial review: November 9, 2026.',
  ],
  citations:[
    source('study','Black Scarab: November 2 employer research','/research/physical-ai-careers-2026-11-02.json','Pinned selected-employer aggregate and taxonomy.'),
    source('evidence','ML infrastructure: reviewed employer evidence',evidencePath,'Full-source contextual reviews, qualification spans and source provenance.'),
    source('compensation','Black Scarab: ML infrastructure compensation estimate',compensationPath,'Eligible annual USD ranges, median calculation, role-scope decisions and exclusions.'),
    source('scaling','Black Scarab: illustrative training-scaling model',scalingPath,'Explicit assumptions and reproducible allocated-compute arithmetic; not a measured benchmark.'),
    posting('agility','agility:greenhouse:6148969004'),posting('apptronik','apptronik:greenhouse:6176116004'),
    posting('pi-data','physical-intelligence:ashby:1f6cf3eb-f70f-480b-9fff-befd56c7fd07'),posting('nuro','nuro:greenhouse:7351066'),
    posting('applied','applied-intuition:ashby:091ed808-95c9-420b-8061-0ff2eb9342bc'),posting('nimble','nimble:greenhouse:4373712009'),
    posting('rhoda','rhoda:ashby:643d697d-45c4-4505-8967-433df7873134'),posting('skydio','skydio:ashby:b6be08f7-89c0-48dd-b427-f587f23dbf34'),
    posting('zoox-training','zoox:lever:91ff6263-49fb-421e-860f-36e7b9bae784'),posting('zoox-inference','zoox:lever:bc11276c-8db7-426e-9d00-d41c2097723a'),
    posting('zoox-training-staff','zoox:lever:2ae1f38f-1b7e-4ec1-8a20-cc3816f96878'),posting('zoox-inference-staff','zoox:lever:2ed8a665-cee8-4d70-bcb1-e96b6214b371'),
    source('quickstart','PyTorch: Quickstart',quickstart,'Official small-model workflow using FashionMNIST, data loading, optimization and evaluation.'),
    source('profiler','PyTorch: Profiler',profiler,'Official profiling tools for execution time, memory and traces. Project investigation is an editorial adaptation.'),
    source('checkpoints','PyTorch: Saving and Loading Models',checkpoints,'Official model and training-checkpoint documentation, including optimizer and progress state.'),
    source('reproducibility','PyTorch: Reproducibility',reproducibility,'Official limits on reproducibility across releases, platforms and CPU/GPU execution, with guidance on random sources.'),
    source('mlops','Google Cloud: MLOps continuous delivery and automation','https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning','Official description of MLOps automation, monitoring and the model development and operations lifecycle.'),
    source('tracking','MLflow: Experiment Tracking',tracking,'Official documentation on parameters, metrics, runs and output artifacts.'),
  ],
};
