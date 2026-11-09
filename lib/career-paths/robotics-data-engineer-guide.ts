import type { CareerGuideContent, Citation } from '@/lib/career-paths/types';
import { paragraph, heading, list, comparison, summaries } from '@/lib/career-paths/guide-editorial';
import { researchForRole } from '@/lib/career-paths/research';
import evidence from '@/public/research/robotics-data-engineer-evidence-2026-11-09.json';
import compensation from '@/public/research/robotics-data-engineer-compensation-2026-11-02.json';
import decisions from '@/research/seo/2026-11-09/decisions.json';

const role = researchForRole('robotics-data-engineer', evidence.snapshotId);
if (!role || compensation.snapshotId !== evidence.snapshotId) throw new Error('Robotics data guide research mismatch');
const seo = decisions.guides.find(item => item.occupationId === 'robotics-data-engineer');
if (!seo) throw new Error('Missing robotics data SEO decision');
const salary = new Intl.NumberFormat('en-US', {style:'currency',currency:'USD',maximumFractionDigits:0}).format(compensation.estimate);
const evidencePath = '/research/robotics-data-engineer-evidence-2026-11-09.json';
const compensationPath = '/research/robotics-data-engineer-compensation-2026-11-02.json';
const lerobot = 'https://huggingface.co/docs/lerobot/main/lerobot-dataset-v3';
const mcap = 'https://mcap.dev/spec';
const parquet = 'https://parquet.apache.org/docs/overview/';
const source = (id:string,title:string,url:string,scope:string):Citation => ({id,title,url,scope,accessedAt:'2026-11-09'});
const posting = (id:string,recordId:string):Citation => {
  const record = evidence.records.find(item => item.id === recordId);
  if (!record) throw new Error(`Missing robotics data evidence: ${recordId}`);
  return source(id,`${record.employer}: ${record.title}`,record.url,'Employer advertisement collected November 2, 2026; contextual review, qualifications and original source hashes are preserved in the evidence export.');
};

export const roboticsDataEngineerGuide:CareerGuideContent = {
  id:'robotics-data-engineer',occupationId:'robotics-data-engineer',familyId:'platforms-simulation',slug:'robotics-data-engineer',
  title:seo.h1,seoTitle:seo.seoTitle,description:seo.description,status:'published',publishedAt:'2026-11-09',reviewedAt:'2026-11-09',
  research:{snapshotId:evidence.snapshotId,roleId:'robotics-data-engineer',evidencePath},
  deck:'Turn robot recordings into reliable datasets for learning, evaluation and deployment.',
  introduction:['A robot can record thousands of hours of activity and still leave researchers without a usable dataset. Robotics data engineers build the systems that make those recordings organized, synchronized and trustworthy.'],
  illustration:{src:'/career-paths/robotics-data-engineer-lab.webp',width:1672,height:941,alt:'Conceptual illustration of an unoccupied futuristic robot recording chamber, with synchronized sensor streams organized into episode sequences and a data archive.'},
  overview:[
    {label:'What you do',value:'Build systems that capture, organize and deliver robot data',sourceIds:['agile','gram','figure']},
    {label:'Core skills',value:'Python, SQL, data pipelines, sensor synchronization and dataset quality',sourceIds:['agile','fieldai','tri']},
    {label:'Education',value:'Computer science, engineering or equivalent practical experience',sourceIds:['agile','gram','figure']},
    {label:'Compensation',value:`${salary}/year`,detail:'Black Scarab estimate',sourceIds:['compensation']},
  ],
  sections:[
    {id:'day-to-day',heading:'What does a robotics data engineer do?',navLabel:'The work',paragraphs:[],sourceIds:['agile','gram','figure','pi','lerobot','mcap'],blocks:[
      paragraph('A robot learning to pick up a cup might record camera images, joint positions, gripper commands and force measurements. The recordings are useful only if an engineer can tell which measurements belong together, what the robot was trying to do and whether the attempt succeeded.'),
      paragraph('Robotics data engineers build that connection. They design recording software, move data off robots, check its quality and turn raw files into datasets that other engineers can use.'),
      paragraph('A common unit is an episode: one bounded attempt at a task. An episode might contain observations, the robot’s state, actions and an outcome, linked by timestamps and metadata.'),
      heading('What does a typical day look like?'),
      paragraph('The morning might start with a failed recording job. An engineer traces missing camera files to interrupted uploads, adds a recovery path and checks that rerunning the job does not create duplicate episodes.'),
      paragraph('Later, a learning team asks for every successful grasp involving a particular object. The engineer builds a query, verifies the selected episodes and publishes a dataset manifest: a record of exactly which data belongs in that release.'),
      paragraph('The work also involves the people collecting demonstrations. Clear recording tools and early quality checks can catch a disconnected sensor before an entire collection session is lost.'),
      heading('When the images and actions disagree'),
      paragraph('Imagine a dataset in which the camera shows a gripper closing before the corresponding action is recorded. A model trained on those mismatched examples may learn an unreliable relationship between what it sees and what it should do.'),
      paragraph('The data engineer investigates the camera clock, robot timestamps and recording path. After identifying an offset, they correct the alignment, rerun the affected processing jobs and issue a new dataset version. The original recordings remain traceable.'),
      paragraph('This is why robotics data engineering requires attention to the physical system as well as the database.'),
    ]},
    {id:'skills',heading:'Which skills and tools do employers look for?',navLabel:'Skills & tools',paragraphs:[],sourceIds:['agile','gram','dyna','fieldai','nuro','skydio','tri','lerobot','mcap','parquet'],blocks:[
      heading('Python, SQL and reliable software'),
      paragraph('Python is central to processing data, building quality checks and connecting research workflows. SQL helps engineers search metadata and inspect large collections. Software testing, Git, Linux and debugging matter because these pipelines run repeatedly and serve other teams.'),
      paragraph('FieldAI’s data engineering role emphasizes production pipelines, monitoring and recovery. Dyna’s data infrastructure role combines Python-based processing with tools for exploring and annotating robot recordings.'),
      heading('Schemas, storage and data pipelines'),
      paragraph('A schema defines what a record contains and what each field means. Robot datasets need consistent units, sensor names, task identifiers and links to the robot configuration and calibration used during collection.'),
      paragraph('Engineers work with object storage, databases and formats suited to different parts of the pipeline. MCAP stores timestamped messages. Parquet supports column-oriented data. LeRobotDataset organizes sensorimotor data, video and episode metadata for robotics workflows.'),
      paragraph('The useful skill is choosing and maintaining a clear data contract, then handling changes without silently breaking downstream users.'),
      heading('Sensor timing and robotics fundamentals'),
      paragraph('Learn how cameras, encoders and other sensors produce measurements at different rates. Understand timestamps, clock offsets, coordinate frames and calibration metadata.'),
      paragraph('A file’s recording time does not necessarily tell you when the physical measurement occurred. Engineers need enough knowledge of the recording system to align observations and actions correctly.'),
      heading('Quality, curation and reproducibility'),
      paragraph('Quality checks identify missing frames, invalid values, duplicate episodes and inconsistent metadata. Curation selects data that serves a particular learning or evaluation task.'),
      paragraph('Versioning connects a dataset to its source recordings and processing code. A researcher should be able to reproduce a release and identify which examples changed between versions.'),
      paragraph('Training and evaluation splits also need care. Nearly identical frames from the same recording session can make a model look stronger if they appear in both groups.'),
      {type:'workflow',id:'robot-data-workflow',title:'From recording to a reusable dataset',stages:[
        {title:'Record',description:'Capture images, robot state and actions.'},
        {title:'Align',description:'Match streams to a shared timeline.'},
        {title:'Check',description:'Find missing frames, time drift and invalid values.'},
        {title:'Release',description:'Curate, version and deliver the dataset.'},
      ],review:{stage:2,title:'Flagged recordings',description:'Review, correct and reprocess before release.'}},
      heading('Cloud systems and C++'),
      paragraph('Cloud storage, orchestration and distributed processing become important as collections grow. FieldAI lists cloud and workflow tools; Toyota Research Institute’s role includes large-scale data processing and metadata infrastructure.'),
      paragraph('C++ is especially useful when the job reaches into sensor parsers, recording systems or performance-sensitive tooling. Nuro’s perception data infrastructure position emphasizes C++ alongside Python. Other roles lean more heavily on backend development.'),
    ]},
    {id:'education',heading:'What education and experience do you need?',navLabel:'Education',paragraphs:[],sourceIds:['agile','figure','gram','dyna','fieldai','skydio','pi'],blocks:[
      paragraph('Computer science, software engineering, robotics and related engineering degrees provide common foundations. Employers also consider equivalent experience in some roles.'),
      comparison('Qualifications in reviewed employer advertisements',['Employer','Qualification emphasis'],[
        ['Agile Robots','Relevant degree or equivalent qualification, plus experience building comparable data or robotics software'],
        ['GRAM','Relevant bachelor’s degree or equivalent practical experience'],
        ['Figure','Bachelor’s or master’s degree and at least four years of backend experience'],
        ['Dyna Robotics','At least five years of professional software experience, with data-intensive platforms relevant'],
      ]),
      paragraph('These are experienced-role examples. They show the capabilities teams value; they do not establish a universal entry requirement.'),
      heading('What should you study?'),
      list(['Programming, data structures and software engineering.','Databases, data modeling and distributed systems.','Probability and basic machine learning, especially training and evaluation.','Robotics data: sensors, timestamps, coordinate frames and recorded trajectories.']),
      paragraph('A portfolio should show that you can turn an imperfect collection into a reproducible dataset and explain how you checked it. A certificate alone does not demonstrate that work.'),
    ]},
    {id:'salary',heading:'How much does a robotics data engineer earn?',navLabel:'Compensation',paragraphs:[],sourceIds:['compensation','fieldai','gram','figure'],blocks:[
      paragraph(`Black Scarab estimates annual compensation at ${salary}, using reviewed U.S. employer advertisements.`),
      {type:'compensation',caption:'Employer salary examples',note:'Annual advertised salary · collected November 2, 2026',examples:evidence.roles['robotics-data-engineer'].compensation},
      paragraph('The work spans backend infrastructure, sensor-data systems and research tooling. Compare the responsibilities and experience level alongside the salary range.'),
    ]},
    {id:'employers',heading:'Where do robotics data engineers work?',navLabel:'Employers & titles',paragraphs:[],sourceIds:['agile','figure','gram','dyna','fieldai','nuro','skydio','tri','pi'],blocks:[
      summaries([
        {title:'Robot learning and manipulation',text:'Agile Robots and GRAM advertise capture, synchronization and dataset infrastructure work. Figure and Dyna describe systems that help researchers store, access and work with robot data.'},
        {title:'Autonomous vehicles, drones and field robots',text:'Nuro’s role covers vehicle sensor data and annotation tooling. Skydio focuses on curating drone data. FieldAI builds production pipelines for robot telemetry and sensor recordings.'},
        {title:'Research and data quality',text:'Toyota Research Institute’s reviewed role covers autonomous-driving fleet and simulation data. Physical Intelligence’s data-quality role builds tools for evaluating collected data and improving collection workflows.'},
      ]),
      heading('Related job titles'),
      paragraph('Search for Robotics Data Engineer, Robot Data Infrastructure Engineer, Software Engineer — Data Infrastructure, Perception Data Infrastructure Engineer and Data Curation Engineer. The responsibilities tell you whether the position works directly with robot recordings.'),
      heading('How does this differ from nearby careers?'),
      comparison('Where the work centers',['Profession','Primary focus'],[
        ['Robotics Data Engineer','Reliable recordings, pipelines and reusable datasets'],
        ['Robot Learning Engineer','Models and learned robot behavior'],
        ['Perception Engineer','Interpreting images and other sensor observations'],
        ['Machine Learning Infrastructure Engineer','Systems that run training and model-development workloads'],
      ]),
      paragraph('Teams often share these responsibilities. Data collection operators produce demonstrations; data engineers typically build the recording, validation and delivery systems around them.'),
    ]},
    {id:'transition',heading:'How to transition into robotics data engineering',navLabel:'Career transitions',paragraphs:[],sourceIds:['agile','gram','dyna','fieldai','nuro','skydio'],blocks:[
      summaries([
        {title:'From data or backend engineering',text:'Build on your experience with pipelines, schemas and production systems. Add sensor timing, episode-based data and the relationship between observations and robot actions.'},
        {title:'From robotics engineering',text:'Your knowledge of sensors and robot software transfers directly. Develop stronger storage, orchestration, schema-evolution and dataset-versioning skills.'},
        {title:'From machine learning',text:'Move beyond preparing data for one experiment. Build tools that produce repeatable datasets, track provenance and serve multiple researchers.'},
        {title:'From another field',text:'Start with Python, SQL, Linux and a small data pipeline. Then work with a public robotics dataset to learn the sensor and timing concepts. You can build the first project on an ordinary computer.'},
      ]),
      heading('What matters in an interview?'),
      paragraph('Be ready to explain how a dataset was created, what could go wrong and how you would detect it. Useful examples include recovering an interrupted upload, changing a schema, investigating a timestamp mismatch or reproducing an earlier dataset release.'),
      paragraph('Show the checks and design decisions behind your project, including one failure you investigated. A clear explanation of a small working system is more useful than a long list of tools.'),
    ]},
    {id:'portfolio',heading:'Build your first robotics data project',navLabel:'Portfolio project',paragraphs:[],sourceIds:['lerobot','mcap','parquet'],blocks:[
      heading('Create an episode-quality pipeline'),
      paragraph('Use a small public robotics dataset to build a reader, quality checks and a reproducible dataset release. Choose data with documented observations, actions and episode boundaries. No robot hardware is required.'),
      list([
        'Pin the input. Record the dataset name, revision, license and schema. Select a small set of episodes that fits your computer.',
        'Catalog the episodes. List identifiers, tasks, available streams, durations and source files. Keep units and timestamp definitions alongside the fields.',
        'Validate the data. Check required fields, referenced files, timestamp order, gaps and invalid numeric values. Set tolerances from the dataset’s documented recording rates.',
        'Test your checks. Make separate test copies with a missing stream, duplicate episode identifier or shifted timestamp. Confirm that your report flags the faults you introduced.',
        'Create a repeatable split. Assign whole episodes to training and evaluation. Keep related episodes from the same collection session together when session identifiers are available.',
        'Publish a versioned manifest. Record the selected episode IDs, split assignments, input revision and processing-code version. Replay a few aligned samples and verify that rerunning the pipeline produces the same selection.',
      ],true),
      heading('What to include in your portfolio'),
      list(['A dataset reader and instructions for reproducing the pipeline.','A concise quality report with examples of passing and failing checks.','A versioned manifest and a record of the source data and processing steps.','A short replay showing how observations and actions align.','One investigated failure and the change that corrected it.']),
      paragraph('Keep intentionally damaged test copies separate from the original recordings. Their purpose is to prove that the checks work.'),
      heading('An advanced extension'),
      paragraph('Add an incremental ingestion job that handles retries without duplicating episodes. Then introduce a schema change and demonstrate how an older dataset release remains reproducible.'),
    ]},
  ],
  nextSteps:{id:'next-steps',heading:'Where to go next',paragraphs:[],sourceIds:['lerobot','mcap','parquet'],blocks:[
    {type:'resources',items:[
      {title:'LeRobotDataset — Data Format',href:lerobot,description:'Explore how sensorimotor data, video and episode metadata fit together in a robotics dataset.'},
      {title:'MCAP — Format Specification',href:mcap,description:'Understand the structure of a container for timestamped robotics messages.'},
      {title:'Apache Parquet — Overview',href:parquet,description:'Learn where column-oriented storage fits into an analytical data pipeline.'},
    ]},
  ]},
  researchNotes:[
    `Black Scarab’s November 2, 2026 broad cohort contains ${role.postingCount} advertisements across ${role.employerCount} selected employers. Nine stored full sources were reviewed for this guide. The cohort also includes enterprise analytics, fleet diagnostics and mixed collection-management work; skills are presented contextually, without profession-specific frequency or live-opening claims. Original classifications remain unchanged.`,
    `The Black Scarab estimate is the median annual salary-range midpoint from ${compensation.postingCount} eligible U.S. advertisements across ${compensation.employerCount} employers, rounded to the nearest $1,000. The exact median midpoint is $${compensation.exactMedianMidpoint.toLocaleString('en-US')}. The selected sample spans experienced roles, including senior positions; it is not an entry-level salary estimate. Structured advertised salary fields do not consistently identify base pay. Bonus and equity are excluded.`,
    'The linked derivation preserves the annual-period evidence, source clauses, hashes and exclusions. Enterprise analytics, primarily fleet diagnostics/analysis, mixed people-management operations and salaries without a verified annual period are excluded. Distinct requisitions count separately. Coverage is purposive and uneven; the estimate is not a representative industry median.',
    'Employer examples describe advertisements collected November 2, 2026, not necessarily current vacancies. The timing-mismatch scenario and portfolio pipeline are educational examples. The hero is a conceptual illustration. The workflow diagram is an editorial synthesis of recording, alignment, quality and dataset delivery in the reviewed Agile Robots and GRAM sources. Flagged recordings may be corrected or excluded according to the task. The MCAP, Parquet and LeRobot documentation supports the format explanations; tools and architectures vary by employer. Editorial review: November 9, 2026.',
  ],
  citations:[
    source('study','Black Scarab: November 2 employer research','/research/physical-ai-careers-2026-11-02.json','Pinned selected-employer aggregate and taxonomy.'),
    source('evidence','Robotics data engineering: reviewed employer evidence',evidencePath,'Full-source contextual reviews, qualifications and source hashes.'),
    source('compensation','Black Scarab: robotics data engineering compensation estimate',compensationPath,'Eligible annual USD observations, median calculation, exclusions and provenance.'),
    posting('agile','agile-robots:greenhouse:5006103101'),posting('figure','figure:greenhouse:4345915006'),
    posting('gram','gram:greenhouse:4377781009'),posting('dyna','dyna:ashby:43dcc186-62b1-4641-9365-3cb9767fc653'),
    posting('fieldai','fieldai:lever:e3b7bac7-5410-44bb-964c-02815fbd0c97'),posting('nuro','nuro:greenhouse:7736012'),
    posting('skydio','skydio:ashby:134f29cc-da9f-4214-9d9c-d044f93af39e'),posting('tri','tri:lever:5b1a4365-272b-4541-8f7d-46f0bf0d3e4f'),
    posting('pi','physical-intelligence:ashby:c01b0e18-5eb8-4255-a10a-7e9a171676b7'),
    source('lerobot','Hugging Face: LeRobotDataset v3',lerobot,'Official documentation for sensorimotor data, video and episode metadata. Portfolio workflow is an editorial adaptation.'),
    source('mcap','MCAP: Format Specification',mcap,'Official timestamped-message container specification; recording time and sensor acquisition time must be distinguished.'),
    source('parquet','Apache Parquet: Overview',parquet,'Official overview of column-oriented storage.'),
  ],
};
