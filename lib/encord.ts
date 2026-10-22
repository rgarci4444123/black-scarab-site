import type { CaseStudyArticle } from "@/lib/case-studies";

export const encordDeepDive = (): CaseStudyArticle => ({
  "slug": "encord-founders-physical-ai-data-deep-dive",
  "taxonomy": {
    "primaryIndustry": "cross-industry",
    "relevantIndustries": [
      "warehousing-logistics",
      "transportation-mobility"
    ],
    "technologies": [
      "computer-vision",
      "teleoperation",
      "robot-training-data"
    ],
    "applications": [
      "data-labeling",
      "robot-training"
    ]
  },
  "title": "Encord Deep Dive: Founders, Funding and the Robot Data Market",
  "seoTitle": "Encord: Founders, Funding and the Robot Data Market",
  "summary": "From image labeling to robot data services, Encord is building a business around the experience machines need to learn useful work.",
  "publishedLabel": "Deep Dive · October 21, 2026",
  "publishedDate": "2026-10-21",
  "typeLabel": "Deep Dive",
  "formatLabel": "Founders, technology, services and market analysis",
  "industry": "Physical AI Infrastructure",
  image: "/article-images/encord-physical-ai-data-deep-dive.png",
  "imageAlt": "Editorial illustration of a luminous particle hand grasping a glass, with layered spatial reconstructions beside it.",
  "imageCaption": "Original Black Scarab editorial illustration of physical experience becoming training data.",
  "imageFit": "contain",
  "sourceLinksPlacement": "bottom",
  "seoDescription": "Inside Encord’s founders, funding, data services, Data Labs and the potential market for curating and processing robot training data.",
  "tags": [
    "Encord",
    "Eric Landau",
    "Ulrik Stig Hansen",
    "Physical AI",
    "Robot training data",
    "Encord Data Labs"
  ],
  "author": {
    "name": "Rodolfo Garcia Calderoni, CFA",
    "href": "/about"
  },
  "sections": [
    {
      "paragraphs": [
        "Imagine watching someone pick up a wine glass. You can see the fingers close, the glass leave the table and the hand move toward its destination. The pressure applied by the fingers is harder to see. Too little, and the glass slips. Too much, and it breaks.",
        "People learn to judge that pressure through experience. A robot learning from video faces a different problem: the recording shows a successful movement without necessarily containing every measurement needed to reproduce it.",
        "That distinction helps explain why Encord, a company that began by helping people label images, is now investing in muscle sensing, hand tracking and facilities where physical work becomes training data.",
        "Founded in 2020 by Eric Landau and Ulrik Stig Hansen, Encord has raised a reported $110 million. Its ambition now reaches across the process of collecting experience, making it useful for training and helping developers improve systems after deployment. The business opportunity grows as more machines attempt more kinds of work in more places."
      ]
    },
    {
      "heading": "The company in one view",
      "paragraphs": [
        "Encord combines software with managed data services. Robotics and autonomy teams can use it to collect demonstrations, organize sensor recordings, select useful examples, annotate actions and check the quality of training data. Its software supports the people and processes needed to deliver those results at scale.",
        "The company says more than 300 AI teams use its platform. Named customers include Woven by Toyota, Skydio and Synthesia, while detailed case studies cover robotics developers such as Thoro, Forterra and Pickle Robot. In February 2026, Encord reported tenfold growth in revenue from physical AI customers over the preceding twelve months.",
        "Black Scarab sees the most interesting part of the business in the relationship between these services. A customer encountering a new failure can need fresh recordings, different labels, a revised training selection and another round of testing. Encord wants to help that customer move through the entire process quickly, then return for the next iteration."
      ]
    },
    {
      "heading": "From trading floors to training data",
      "paragraphs": [
        "Before Encord, Landau spent nearly a decade at proprietary trading firm DRW, becoming a lead quantitative researcher on a global equity delta one desk. His education spans a physics bachelor's degree and an electrical engineering master's from Stanford, plus an applied physics master's from Harvard.",
        "In a Y Combinator interview, Landau recalled leaving finance during the 2020 pandemic. Markets were exceptionally volatile and his former desk was having an extraordinary month. He was at home struggling with Python dependencies. The contrast made the decision uncomfortable, but the prospect of building an AI company gave him a different set of problems to care about.",
        "Hansen began in J.P. Morgan's Emerging Markets team before studying computer science at Imperial College London. He and Landau met through an entrepreneur network in London. Landau later told Brite Innovation Review that Hansen explained his startup idea over drinks at a pub, and he decided it was better than the ideas he had been considering himself.",
        "The idea addressed an expensive bottleneck. Training a model to recognize a tumor, track an object or distinguish a pedestrian requires examples with reliable labels. Preparing those examples could consume hours of specialist attention. Encord used software and smaller models to automate repetitive annotation, with people reviewing the results.",
        "Their finance experience mattered because both understood the distance between an interesting model and one that works in production. Data has to arrive in a usable form. Errors have to be investigated. Improvements have to survive the next operating condition. That discipline would become increasingly relevant as Encord moved toward machines working outside controlled settings."
      ]
    },
    {
      "heading": "How the company grew beyond annotation",
      "paragraphs": [
        "Encord's origins date to 2020, followed by Y Combinator's Winter 2021 batch. In their Series B retrospective, the founders described a two person company working from a California dining room, sending cold emails by day and debugging model libraries at night.",
        "Early work included medical imaging. SurgEase, which provides technology for gastrointestinal procedures, became an early customer. Automating parts of the labeling process offered a practical benefit when large video collections otherwise required expensive clinical expertise.",
        "The company expanded into enterprise computer vision, autonomous systems and multimodal AI. Its data could include images, video, text, audio, depth and other sensor readings. In August 2024, Encord announced its Series B and publicly introduced Index, giving customers tools to search and curate large private datasets.",
        "That was a meaningful expansion of responsibility. Labeling a million images makes a process more productive. Helping the customer decide which examples deserve training can also influence computing costs, model performance and the next development priority.",
        "By 2026, the same logic extended into collecting physical demonstrations. Encord could help specify the experience a customer needed, produce it and prepare it for training. The commercial relationship widened from operating a tool to delivering a useful data workflow."
      ]
    },
    {
      "heading": "Why the data services market could become much larger",
      "paragraphs": [
        "A warehouse robot learning to unload boxes may handle ordinary cartons well and struggle with crushed packaging, reflective wrap or an unfamiliar loading pattern. Another robot may work with metal parts in a factory. A third may handle towels in a laundry. Each brings different objects, sensors, movements and definitions of success.",
        "The demand for data services expands along several dimensions at once: robot families, skills, workplaces and the frequency of model updates. Shared models and reusable examples can reduce duplication. New operating conditions and difficult failures create additional work in collection, selection, annotation and evaluation.",
        "The scale is already moving. DROID's public research dataset contains 350 hours of robot interaction. Generalist reported half a million hours of real world experience behind GEN 1 in April 2026. Dyna's August technical report describes more than one million hours of human video used to train Dyna 2. These are separate collections with different purposes, but they show the size of programmes already being built.",
        "The longer term ambition is larger still. In its May 2026 humanoid research report, William Blair estimated that a general purpose humanoid platform could ultimately require several billion hours of embodied, multimodal experience to reach broad generalization. That is an analyst estimate of cumulative training experience, rather than a measured requirement for every physical robot.",
        "The commercial opportunity comes from the work performed on that experience. Existing footage has to be filtered, synchronized, enriched, reviewed and assembled into training sets. Later failures send parts of the process around again. The addressable workload can grow even when much of the underlying data is reused."
      ],
      "editorialVisuals": [
        {
          "afterParagraphIndex": 2,
          "kind": "robotics-data-demand"
        }
      ]
    },
    {
      "heading": "Turning data volume into a market opportunity",
      "paragraphs": [
        "A useful way to size the opportunity is to separate the amount of data created from the amount of processing customers buy. Encord's potential market depends on externally purchased data work, the complexity of that work and the price customers pay for it.",
        "DexSet, another supplier of robotics data services, publishes a 2026 benchmark of $6 to $12 per hour reviewed for curation and quality assurance of existing corpora. Using that supplier benchmark, 100 million externally reviewed hours per year would correspond to $600 million to $1.2 billion in annual industry spending. At one billion hours, the same arithmetic produces $6 billion to $12 billion.",
        "The graphic presents Black Scarab volume scenarios using that benchmark. Its scope is curation and quality assurance. Collection, sensing hardware, storage and model training are separate markets. Encord's own commercial terms and eventual market share would determine how much of the services opportunity it could earn.",
        "The important sensitivity is the relationship between volume and efficiency. Better automation can lower the cost per reviewed hour, while larger corpora, more demanding annotations and repeated development cycles increase the work available. A successful provider needs useful processing demand to grow faster than its own cost of delivery."
      ],
      "editorialVisuals": [
        {
          "afterParagraphIndex": 3,
          "kind": "robotics-data-tam"
        }
      ]
    },
    {
      "heading": "What Encord sells today",
      "paragraphs": [
        "Encord's offering brings together a software platform and teams that carry out data work. Customers can use their own annotators and specialists, buy managed services or combine the two. That gives Encord several routes into an AI programme and room to take on more responsibility as it grows.",
        "Index provides tools for searching, visualizing and curating data. Users can examine metadata, find similar examples, identify duplicates and build more deliberate training selections. The value is in locating the examples that address the model's current problem.",
        "Annotation and review workflows add boxes, masks, keypoints, action descriptions and other structure. For models that learn to connect vision, language and movement, a useful record may need to identify which action happened at which moment. Automated predictions can provide a first pass, with reviewers correcting mistakes.",
        "Evaluation tools help teams inspect labels and compare model behavior. Merlin, introduced in beta in June 2026 through the Model Context Protocol, adds a conversational way to set up labeling projects, inspect coverage and investigate workflow issues.",
        "The public commercial plans span Starter, Team and Enterprise. Larger configurations add capabilities such as additional workspaces, enterprise support and private cloud or on premises deployment. APIs, a Python SDK and storage integrations connect Encord to the customer's existing engineering systems.",
        "The practical result is a division of work. Encord helps prepare and manage the experience. The customer's training systems turn that experience into a model, and its deployment stack brings the model back to the machine. Encord's services become more useful when those handoffs are dependable and fast."
      ]
    },
    {
      "heading": "Creating the experience itself",
      "paragraphs": [
        "For many manipulation tasks, the training example has to be produced deliberately. A team may need a demonstration on a particular robot, a recording of a person doing the work or a combination of visual and physical measurements.",
        "Encord offers collection from specific robot embodiments, leader and follower teleoperation, first person human recordings and handheld UMI grippers. Its facilities include reconfigurable environments, and it also offers work at customer locations. Protocols are designed and piloted around the task, equipment and intended training use.",
        "Its published base equipment includes RGB and depth sensing, inertial measurement, camera synchronization and grippers. Depth helps recover geometry. Inertial measurements help interpret movement. Synchronization makes observations from different sensors describe the same moment.",
        "The economics depend on usable output. One hour of recording can contain valuable demonstrations, repetitive easy behavior or footage that misses the action. A provider earns more than a commodity collection fee when it can consistently deliver examples that help the customer's next model improve.",
        "This is where Encord's software and service operations reinforce each other. Better capture instructions can reduce rejected recordings. A quality check can flag a broken camera stream early. Curation can identify which gaps deserve another collection assignment. The result is a managed production process for training experience."
      ]
    },
    {
      "heading": "What cameras miss about our hands",
      "paragraphs": [
        "On October 20, 2026, Encord introduced Data Labs, a research division focused on capturing and interpreting physical experience. Its first releases address human hands, an important source of demonstrations for robots learning manipulation.",
        "Real work is difficult to record cleanly. Fingers disappear behind objects. Workers wear gloves. Cameras move, hands blur and other people enter the frame. A tracking system can find a hand while still reconstructing its position incorrectly.",
        "Encord REACH is designed for these conditions. The company reports reductions of 80 percent in wrist tracking error and 65 percent in joint tracking error on its strictest reported metrics. Its technical discussion examines gloves, bystanders and the cost of missing difficult detections. Better pose labels could improve training inputs; the downstream test is what robots learn from them.",
        "Encord also introduced EMG 1 with Wearable Devices: 307 hours of field wrist muscle signals paired with first person video, plus a separate 10.4 hour laboratory collection with optical motion capture. Wrist sensors record electrical muscle activity that can remain available when fingers are hidden.",
        "The signal requires interpretation. It does not directly measure joint position, contact or gripping force. In the reported laboratory evaluation, a combined camera and EMG model reduced median fingertip error from 20.3 millimeters to 15.3 millimeters, approximately 25 percent.",
        "That comparison used participant calibration and an offline process with access to future muscle signals. It also combines different camera processing with EMG, so the measured gain belongs to the combined system. The result supports better offline hand reconstruction under the evaluated conditions.",
        "For Encord, the strategic possibility is improving the amount of useful information recovered from each demonstration. That could make its collection services more productive and give customers richer supervision. Exploratory work with Zander Labs similarly investigates whether brain signals can identify moments such as surprise or increased cognitive effort."
      ]
    },
    {
      "heading": "What happens when a robot meets plastic wrap",
      "paragraphs": [
        "The commercial test begins when a robot encounters something its developer did not anticipate. Encord's customer stories offer concrete examples of the data work that follows.",
        "Thoro develops indoor autonomy for industrial mobile robots. Its Encord case study reports approximately 50 percent faster labeling and a model deployment cycle of about a week. When plastic wrapped pallets caused trouble at a new customer site, the team collected additional examples and deployed an updated model within three weeks.",
        "Its data moves from the robot into AWS, through Encord for labeling and quality review, and back through Python training scripts before deployment. Weights & Biases supports evaluation and experiment tracking. Encord participates in a wider development process.",
        "Forterra's case study describes a perception workflow spanning visible light cameras, infrared, radar and LiDAR. It reports ten times more real world data feeding its models and 50 percent faster model iteration. Pickle Robot, which automates package unloading, reports 60 percent faster iteration and a 15 percent improvement in grasping accuracy associated with its improved data workflow.",
        "These results are customer accounts published by Encord. The useful commercial connection is the same in each: when the data pipeline moves faster and produces better examples, engineers can spend more time improving the machine and less time moving or repairing data.",
        "That is how a service provider can become embedded in an operating business. A customer depends on the procedures, labels, integrations and specialist knowledge that make its next improvement possible. A functioning learning process becomes valuable to preserve."
      ]
    },
    {
      "heading": "The capital behind the expansion",
      "paragraphs": [
        "Hansen reported a $4.5 million seed round in 2021 led by CRV. A $12.5 million Series A followed that year. In August 2024, Encord announced a $30 million Series B led by Next47, now branded N47, alongside the expansion of its multimodal platform.",
        "On February 26, 2026, Encord announced a $60 million Series C led by Wellington Management, bringing its reported total funding to $110 million. The announcement named Y Combinator, CRV, N47 and Crane Venture Partners as returning investors, with Bright Pixel and Isomer Capital joining.",
        "Encord also reported tenfold growth in revenue from physical AI customers and an increase from one petabyte to more than five petabytes of data on its platform over the preceding twelve months. The figures point to increasing commercial activity as the company expands the work it performs around customer data.",
        "The capital supports both software development and operating capacity. Building a collection business means funding equipment, environments, operators and quality processes. Encord's opportunity is to use the platform to coordinate that work and its research to make more of it reusable."
      ]
    },
    {
      "heading": "Software economics meet physical operations",
      "paragraphs": [
        "A data service can sell a much broader result than an annotation feature. It can help specify the task, collect the right examples, prepare a training set and support repeated revisions. A valuable customer relationship can therefore expand as the customer's robots take on more work.",
        "Physical delivery also brings costs. Industrial assembly, laundry handling and household manipulation can require different environments and equipment. Skilled operators and reviewers have to produce examples that satisfy the customer's acceptance criteria.",
        "The attractive version of Encord's model uses software and applied research to improve the productivity of these operations. Better tracking can recover useful information from a difficult recording. Automated checks can catch problems during capture. Proven protocols can shorten setup on the next related project.",
        "The harder version leaves every customer as a bespoke assignment. Revenue can grow while specialist labor and coordination grow alongside it. Repeat orders, broader use of the platform and a falling cost per accepted training episode would strengthen the case for a business that scales efficiently.",
        "Data rights and traceability also affect the value of delivery. Customers need to understand how demonstrations, labels and derived outputs can be used across future training runs. A dataset that remains useful through repeated development has greater commercial value than a recording that cannot be reused confidently."
      ]
    },
    {
      "heading": "Can AI automate the work Encord sells",
      "paragraphs": [
        "More capable models can perform basic labeling automatically. Simulation can generate examples that would be difficult or expensive to record. Both developments change which data work customers are willing to buy.",
        "Encord is building services around that shift. In an October 21 technical article, it described work with NVIDIA and ANYbotics using synthetic clips to calibrate industrial anomaly detection. Encord helped curate reference images and verify and label generated outputs.",
        "The reported evaluation increased mean recall on real anomalies from 0.50 to 0.62 across 25 inspection points, a relative improvement of 24 percent. It also increased false alarms on normal scenes. The useful result is a measurable tradeoff that the operator can evaluate, rather than simply a larger collection of generated footage.",
        "This points toward a durable role for data services. A customer may use real recordings to establish what happens, simulation to broaden rare conditions and evaluation to check whether either improves performance. The source of the examples can change while the work of selecting and validating them remains."
      ]
    },
    {
      "heading": "Where the advantage could accumulate",
      "paragraphs": [
        "Encord can build an advantage through connected workflows, practical collection knowledge and automation that improves usable output. These reinforce one another when a finding in evaluation changes what the team records next.",
        "The immediate alternative is often an internal stack: storage, scripts, an annotation tool, experiment tracking and a collection team. A narrow early project may work well that way. A broader programme can become expensive to coordinate across people, tools and suppliers.",
        "Specialist providers can compete on quality, geography or a particular type of recording. Large robot developers can build their own data operations. Encord has to make the integrated service valuable enough that customers prefer it to assembling and managing the pieces themselves.",
        "Working across customers could give Encord experience with different capture methods and recurring workflow problems. That operating knowledge can improve its service. The defensible asset is the ability to deliver a better learning process while respecting each customer's data and commercial arrangements."
      ]
    },
    {
      "heading": "The outlook",
      "paragraphs": [
        "The near term market is already visible in customers moving from demonstrations to repeated deployments. New sites, objects and working conditions create fresh gaps in training coverage. A supplier that helps correct those gaps quickly can become part of the customer's normal operating rhythm.",
        "Over time, more robot families and more ambitious skills could increase both the variety of training data and the frequency of iteration. A broadly capable model may reduce the examples needed for an individual adaptation, while expanding the number of jobs worth attempting. Those forces can operate together.",
        "Encord's opportunity is to capture part of that growing flow of work through software, managed processing and collection. The TAM scenarios show why even a fraction of billion-hour development programmes could support a substantial services market. The realized outcome depends on outsourcing, pricing and how much automation improves delivery.",
        "The indicators worth following are repeat customer programmes, expansion into additional workflows, useful output per operator hour and measurable improvements on deployed tasks. These connect market ambition to the economics of serving it."
      ]
    },
    {
      "heading": "The Black Scarab verdict",
      "paragraphs": [
        "Encord has followed a coherent problem into a larger market. Annotation helped customers describe what was in their data. Curation helped choose which examples mattered. Collection and Data Labs now reach into how useful experience is created and measured.",
        "That progression gives the company more strategic depth than a conventional labeling provider. It can potentially serve several competing robot developers and participate repeatedly as each moves into new tasks and environments.",
        "Black Scarab sees a credible opportunity for Encord to become an important data services and infrastructure supplier to the robot economy. The strongest version of the business uses its software and research to process increasingly complex customer programmes with improving efficiency.",
        "The decisive measure is whether customers can use Encord to make their robots more reliable, more quickly and at an attractive cost. As more machines enter unfamiliar work, the value of understanding and correcting their next mistake could become a substantial business of its own."
      ]
    }
  ],
  "sources": [
    "Company announcements, product documentation, direct founder interviews and customer case studies. Analysis current as of October 21, 2026."
  ],
  "sourceLinks": [
    {
      "label": "Eric Landau at Y Combinator, founder journey and physical AI strategy",
      "url": "https://www.youtube.com/watch?v=F3INH9wZXoQ"
    },
    {
      "label": "Eric Landau, official biography",
      "url": "https://encord.com/author/eric-landau/"
    },
    {
      "label": "Ulrik Stig Hansen, official biography",
      "url": "https://encord.com/author/ulrik-stig-hansen/"
    },
    {
      "label": "Brite Innovation Review, direct founder interview",
      "url": "https://brite.ikeinstitute.org/brite_spring22/innovation_and_challenges_in_ai"
    },
    {
      "label": "Ulrik Stig Hansen, account of the 2021 seed round",
      "url": "https://medium.com/cord-tech/how-we-raised-a-4-5m-seed-round-and-why-we-went-with-mostly-american-investors-99bc75495726"
    },
    {
      "label": "Early micromodels and SurgEase customer history",
      "url": "https://blogs.nvidia.com/blog/encord-micro-models-data-annotation-automation-triton/"
    },
    {
      "label": "2024 Series B announcement and Encord Index launch",
      "url": "https://encord.com/blog/encord-announces-30-million-series-b/"
    },
    {
      "label": "2026 Series C announcement and reported business growth",
      "url": "https://encord.com/blog/encord-announces-60-million-series-c/"
    },
    {
      "label": "N47 portfolio and company identity",
      "url": "https://www.n47.com/portfolio/encord"
    },
    {
      "label": "Encord data indexing and curation",
      "url": "https://encord.com/curation/"
    },
    {
      "label": "Encord annotation and review workflows",
      "url": "https://encord.com/annotate/"
    },
    {
      "label": "Encord cloud integrations",
      "url": "https://encord.com/cloud-integrations/"
    },
    {
      "label": "Encord physical AI data services",
      "url": "https://encord.com/physical-ai-data/"
    },
    {
      "label": "Encord collection methods and equipment",
      "url": "https://encord.com/data-collection/"
    },
    {
      "label": "Merlin beta launch",
      "url": "https://encord.com/blog/merlin-encord-mcp-agentic-intelligence/"
    },
    {
      "label": "Data Labs launch, October 20, 2026",
      "url": "https://encord.com/data-labs/introducing-encord-data-labs/"
    },
    {
      "label": "Encord REACH methodology and benchmark conditions",
      "url": "https://encord.com/data-labs/hands-at-work-egocentric-hand-pose-tracking/"
    },
    {
      "label": "EMG 1 methods, hardware and evaluation",
      "url": "https://encord.com/data-labs/introducing-emg-1/"
    },
    {
      "label": "Forterra customer case study",
      "url": "https://encord.com/customers/forterra/"
    },
    {
      "label": "Thoro customer case study",
      "url": "https://encord.com/customers/thoro-ai/"
    },
    {
      "label": "Encord public plans and commercial features",
      "url": "https://encord.com/pricing/"
    },
    {
      "label": "Independent reporting on the Series C",
      "url": "https://www.eu-startups.com/2026/02/london-based-encord-raises-e50-million-to-support-next-phase-of-physical-ai-deployment/"
    },
    {
      "label": "TechCrunch visit to the data collection operation",
      "url": "https://techcrunch.com/2026/07/26/are-brain-waves-the-next-unlock-for-physical-ai/"
    },
    {
      "label": "Dyna 2 disclosed million-hour training corpus",
      "url": "https://www.dyna.co/dyna-2"
    },
    {
      "label": "Generalist GEN 1 training experience",
      "url": "https://generalistai.com/blog/gen-1"
    },
    {
      "label": "DROID dataset scale and methods",
      "url": "https://droid-dataset.github.io/"
    },
    {
      "label": "William Blair humanoid data outlook, May 2026, page 17",
      "url": "https://www.williamblair.com/-/media/downloads/eqr/2026/williamblair_race-to-infinite-labor-the-humanoid-hypothesis.pdf"
    },
    {
      "label": "DexSet 2026 curation and QA pricing benchmarks",
      "url": "https://dexset.ai/blogs/state-of-robotics-training-data-2027/"
    },
    {
      "label": "Pickle Robot customer case study",
      "url": "https://encord.com/customers/pickle-robot/"
    },
    {
      "label": "Encord, NVIDIA and ANYbotics synthetic data evaluation",
      "url": "https://encord.com/data-labs/nvidia-anybotics-synthetic-data/"
    }
  ],
  "readingMinutes": 15,
  "publishedAt": "2026-10-22T00:30:42.045323+00:00"
});
