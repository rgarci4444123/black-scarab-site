import type { CaseStudyArticle } from "@/lib/case-studies";

export const foxgloveDeepDive = (): CaseStudyArticle => ({
  slug: "foxglove-robotics-data-platform-deep-dive",
  title: "Foxglove Deep Dive: The Data Stack Behind Physical AI",
  seoTitle: "Foxglove: Robotics Data Platform, MCAP, Pricing, and Alternatives",
  summary:
    "A complete analysis of Foxglove's robotics data platform, MCAP, visualization, edge architecture, fleet access, agentic tools, customers, pricing, alternatives, and buyer risks.",
  publishedLabel: "Deep Dive · Published September 18, 2026",
  publishedDate: "2026-09-18",
  publishedAt: "2026-09-18T21:28:43-04:00",
  typeLabel: "Deep Dive",
  formatLabel: "Data architecture, pricing, and commercial analysis",
  industry: "Cross Industry",
  image: "/article-images/foxglove-robotics-data-platform-deep-dive.png",
  imageAlt:
    "Editorial illustration of industrial robots, an autonomous vehicle, and synchronized sensor data flowing into one observability platform",
  imageCaption:
    "Original Black Scarab editorial illustration of a generic robotics data platform. The machines and interface elements are conceptual and do not depict a Foxglove customer deployment or official product interface.",
  seoDescription:
    "Foxglove deep dive covering its robotics data platform, MCAP, visualization, edge and cloud architecture, remote access, agents, customers, pricing, competitors, and buyer risks.",
  tags: [
    "Foxglove",
    "robotics data platform",
    "MCAP",
    "robot observability",
    "physical AI infrastructure",
    "robot fleet management",
  ],
  author: {
    name: "Rodolfo Garcia Calderoni, CFA",
    href: "/about",
  },
  sections: [
    {
      paragraphs: [
        "A robot failure rarely arrives as one neat error message. A camera sees an obstacle, a lidar records a different geometry, localization drifts, a planner chooses a path, a controller issues motion, and the machine behaves incorrectly a fraction of a second later. Understanding what happened requires those signals to be replayed together at the same moment.",
        "Foxglove is building the infrastructure for that investigation. Its platform collects, indexes, searches, visualizes, and shares the multimodal data produced by robots and other autonomous machines. It also provides live access to deployed devices, tools for curating useful events, and agentic workflows that can inspect data or configure the visual workspace through natural language.",
        "The investment firm Felicis recently described a broader category problem in direct terms: the physical world has no data stack. That is an investor thesis, not neutral proof that Foxglove will win. It does capture the commercial opening. Robotics teams are generating synchronized video, point clouds, audio, location, joint state, diagnostics, and model outputs at a scale that conventional application monitoring and data warehouse tools were not designed to handle.",
        "Foxglove is not a robot manufacturer and does not supply the autonomy model that decides how a machine should act. It is the data and observability layer around those systems. The buying question is whether that layer saves enough engineering time, improves fleet reliability, and accelerates model development to justify another critical platform in the robotics stack.",
      ],
    },
    {
      heading: "Executive View",
      paragraphs: [
        "Foxglove has developed a credible position at the intersection of robot logging, data management, visualization, fleet access, and engineering collaboration. Its strongest strategic asset is MCAP, an open source container format for timestamped multimodal data that became the default recording format in ROS 2 beginning with the Iron release. A widely adopted format gives Foxglove an entry point into robot data before a customer purchases its commercial platform.",
        "The product has expanded well beyond a desktop visualizer. Foxglove now supports cloud managed storage, customer owned cloud storage, customer operated data infrastructure, edge staging, indexed search, session and event organization, live remote access, teleoperation, shared layouts, programmable extensions, notebook access, Grafana integration, semantic visual search, and agents that can work with robot data.",
        "The evidence is meaningful but must be read correctly. Foxglove publishes a long customer list and detailed case studies from companies such as ANYbotics, Dexterity, Shield AI, Wayve, Simbe Robotics, Saronic, and Slip Robotics. Reported benefits include faster debugging, lower engineering effort, and better fleet uptime. Those figures come from Foxglove and participating customers rather than independent audits.",
        "The central risk is that an open file format does not automatically create a defensible commercial platform. Customers can use MCAP with other visualizers and analysis tools. Large robotics companies can maintain internal systems. Cloud providers can add more robotics features. Foxglove must therefore keep turning an open standard into a workflow advantage that is difficult to reproduce and worth paying for at fleet scale.",
      ],
      tables: [
        {
          title: "Foxglove at a Glance",
          columns: ["Dimension", "Current Position", "Buyer Implication"],
          rows: [
            [
              "Company",
              "Founded in 2021 by former Cruise engineers Adrian Macneil and Roman Shtylman.",
              "The founders encountered the data and tooling problem inside a large autonomous vehicle program before selling a broader platform.",
            ],
            [
              "Core product",
              "A commercial data and observability platform for robot development, testing, and operations.",
              "The purchase should be evaluated as infrastructure across teams, not as one debugging application.",
            ],
            [
              "Open foundation",
              "MCAP is an open source container format under the MIT license.",
              "Customers can keep data in a portable format even if they change analysis platforms.",
            ],
            [
              "Deployment",
              "Foxglove Cloud, customer owned cloud storage, customer operated data plane, edge sites, and a custom fully offline option.",
              "Data location and operating responsibility can be matched to security and infrastructure requirements.",
            ],
            [
              "Commercial model",
              "Free, Pro, Academic, and custom Enterprise plans with usage based charges.",
              "A small team can start inexpensively, but fleet, data, query, egress, and seat costs must be modeled together.",
            ],
            [
              "Funding",
              "$40 million Series B announced in November 2025 after a $15 million Series A in 2022.",
              "The company has capital to expand, but it does not disclose audited revenue, retention, margin, or profitability.",
            ],
          ],
        },
      ],
    },
    {
      heading: "The Company and the Problem It Saw at Cruise",
      paragraphs: [
        "Adrian Macneil and Roman Shtylman worked together at Cruise before founding Foxglove in 2021. Macneil previously led infrastructure and developer productivity there. The company says the founders watched autonomous vehicle teams build large internal systems for logging, replay, visualization, fleet management, simulation, machine learning, and quality assurance because suitable commercial tools did not exist.",
        "That experience shaped Foxglove's horizontal strategy. The company does not want every drone, mobile robot, humanoid, industrial arm, or autonomous vehicle maker to rebuild the same data plumbing. It wants to sell a common layer that works across robot forms, middleware, message encodings, storage systems, and engineering disciplines.",
        "Foxglove announced a $15 million Series A led by Eclipse Ventures in October 2022. In November 2025, it announced a $40 million Series B led by Bessemer Venture Partners, with participation from Eclipse, Amplify Partners, and Icehouse Ventures. Foxglove said the round would support an expanded platform for the complete data lifecycle of physical AI.",
        "Funding validates investor interest, not commercial performance. Foxglove is privately held and does not publish recognized revenue, annual recurring revenue, gross margin, customer concentration, renewal rates, cash burn, or profitability. Its current customer references and product depth are stronger evidence than the financing alone, but they still do not provide a complete financial picture.",
      ],
    },
    {
      heading: "Why Robot Data Needs a Different Stack",
      paragraphs: [
        "Traditional application observability begins with logs, metrics, and traces. Robot observability must add time synchronized camera streams, lidar point clouds, audio, maps, location, transforms, joint positions, force, torque, battery state, planning output, control commands, and model results. The useful question is often not what one signal said, but what every relevant signal said at the same physical moment.",
        "The data is also created at the edge. A robot may operate over cellular service, intermittent wireless networks, or no external connection at all. Moving every byte to a central cloud can be slow, expensive, or prohibited. The system needs policies for what to record, what to retain locally, what to upload, and what to retrieve only when an event makes it valuable.",
        "The final complication is geometry. An engineer needs to relate sensor observations to a moving machine and its environment. A raw database query can return a number, but it may not show whether the point belongs to a wall, a person, a pallet, or a bad coordinate transform. Three dimensional replay and synchronized context are part of the analysis rather than an optional presentation layer.",
      ],
      tables: [
        {
          title: "How Physical World Data Differs",
          columns: ["Requirement", "Conventional Software Data", "Robot Data"],
          rows: [
            [
              "Primary signals",
              "Text logs, metrics, traces, transactions, and events.",
              "Video, point clouds, audio, maps, location, state, model output, diagnostics, and control messages.",
            ],
            [
              "Timing",
              "A timestamp may be enough for broad correlation.",
              "Small timing differences can change the physical interpretation of a failure.",
            ],
            [
              "Location of creation",
              "Usually inside a connected server or cloud environment.",
              "On a moving machine with limited compute, storage, power, and connectivity.",
            ],
            [
              "Human interpretation",
              "Tables, charts, and log search often explain the issue.",
              "Engineers may need spatial replay, images, maps, transforms, and machine state together.",
            ],
            [
              "Value density",
              "Many records can be queried cheaply and repeatedly.",
              "A few rare moments may be valuable while most routine sensor data is expensive to move.",
            ],
          ],
        },
      ],
    },
    {
      heading: "The Architecture from Robot to Investigation",
      paragraphs: [
        "Foxglove's published architecture can be understood as five connected layers. The robot records or streams data. A local process manages recordings and connectivity. Edge infrastructure can stage data when networks are constrained. A Primary Site stores and indexes the corpus. Engineers then search, visualize, compare, export, or access the data through applications and APIs.",
        "The robot side can use the Foxglove SDK, native ROS recording tools, or Foxglove Bridge. Foxlet, formerly called Foxglove Agent, watches a recording directory, reports metadata, and imports selected files. The device can also expose live data through a remote access gateway.",
        "A Primary Site is the main indexed data location. Foxglove can operate both the control and data planes, read from a customer's cloud bucket without duplicating message contents, or coordinate a data plane running in the customer's Kubernetes environment. A separate custom agreement is required for a fully offline deployment.",
      ],
      tables: [
        {
          title: "The Foxglove Data Path",
          columns: ["Layer", "Function", "Buyer Decision"],
          rows: [
            [
              "Robot and simulator",
              "Produce live topics and recordings through ROS, MCAP, the SDK, or custom messages.",
              "Choose what to record and preserve enough context to explain behavior.",
            ],
            [
              "Device process",
              "Foxlet discovers recordings while Bridge or the SDK supports live access.",
              "Validate processor load, disk policy, restart behavior, credentials, and software updates.",
            ],
            [
              "Edge Site",
              "Stages and indexes recordings near machines before selected import.",
              "Define retention, upload priority, bandwidth limits, and recovery when connectivity fails.",
            ],
            [
              "Primary Site",
              "Stores or indexes the searchable data corpus.",
              "Select Foxglove managed, customer owned storage, or customer operated infrastructure.",
            ],
            [
              "Access layer",
              "Visualization, search, agents, notebooks, Grafana, CLI, API, and exports turn data into engineering work.",
              "Decide which teams need developer access, view access, automation, or external integration.",
            ],
          ],
          note:
            "Functional interpretation of Foxglove documentation. This is not a proprietary infrastructure diagram or a guaranteed deployment design.",
        },
      ],
    },
    {
      heading: "MCAP Is the Strategic Entry Point",
      paragraphs: [
        "MCAP is a container format and logging library for timestamped messages. It is serialization agnostic, which means it can carry data encoded with different message systems rather than forcing every robot into one schema. The format can store message data, indexes, metadata, schemas, and attachments such as calibration or configuration files.",
        "The strategic value is adoption outside Foxglove's paid product. ROS 2 changed the default rosbag2 storage format to MCAP in the Iron release after its developers found that the previous SQLite default lacked desired performance and offline processing features. A robot team can therefore begin producing MCAP files through standard ROS workflows before it evaluates Foxglove.",
        "MCAP is currently published under the MIT license. This matters because an open format reduces fear that historical robot data will become unreadable if a commercial relationship changes. Foxglove also provides libraries in C++, Go, Python, JavaScript, Swift, and Rust, plus a command line tool.",
        "Open adoption is also a competitive risk. Other visualizers, cloud products, and internal systems can read the same files. MCAP can widen Foxglove's funnel, but the commercial moat must come from indexed access, workflow, collaboration, fleet integration, and execution rather than exclusive control of the bytes.",
      ],
    },
    {
      heading: "Visualization Is the Daily Interface",
      paragraphs: [
        "Foxglove Visualization runs as a desktop application on Linux, Windows, and macOS or in a Chrome browser. Engineers can arrange panels for three dimensional scenes, images, plots, maps, raw messages, logs, state transitions, diagnostics, and other views, then save the complete workspace as a layout.",
        "Layouts matter because the useful view differs by task. A perception engineer may need cameras, point clouds, detections, and transforms. A controls engineer may need commanded motion, measured state, and timing. A support engineer may need system status, logs, location, and video around a customer incident. Shared organization layouts turn that expertise into a repeatable investigation process.",
        "The platform can be extended with custom panels, message converters, topic aliases, and reusable utilities. User scripts written in TypeScript can transform incoming data into new topics inside a layout. Extensions can be packaged and distributed within an organization when the workflow should apply across many layouts.",
        "Foxglove stopped developing the open source Studio application after version 1.87.0 in February 2024. The current commercial product continues to read local MCAP and ROS bag files, but teams that require a current open source visualizer must use the frozen Studio release, a community fork, or another product. That licensing transition is a legitimate procurement consideration for teams that originally adopted Foxglove because the visualizer was open source.",
      ],
    },
    {
      heading: "Data Management Turns Logs into a Corpus",
      paragraphs: [
        "A folder full of recordings is not a usable fleet dataset. Foxglove associates recordings with devices, indexes them by time and topic, and adds higher level structures for sessions and events. A session groups files that belong to one mission, drive, test, or operating period. An event marks a meaningful time range such as a collision, intervention, failed grasp, sensor fault, or unusual scene.",
        "Those structures connect operations to model development. A support engineer can mark an event in a customer incident. An autonomy engineer can find similar events across devices. A machine learning team can export selected ranges and topics for evaluation or training. The value comes from shortening the loop between physical behavior and the software or data change that follows.",
        "Search can filter recordings through device properties, times, topics, metadata, and supported message fields. FoxQL lets users select and transform data across several visualization panels. The platform also supports webhooks, command line workflows, and a REST API so events and recordings can participate in automated quality and training pipelines.",
        "Search still has boundaries. Some nested structures, maps, and complex message types cannot be queried directly as complete objects. Query performance depends on the amount of data scanned. A useful implementation therefore needs consistent schemas, device identity, metadata, and event definitions rather than expecting the platform to repair an undisciplined logging strategy automatically.",
      ],
    },
    {
      heading: "Edge and Fleet Operations",
      paragraphs: [
        "Foxglove addresses the connection problem in two ways. Edge Sites stage recordings near the machines and forward selected data to a Primary Site. Remote Access creates a live path from a device to authorized users for visualization and teleoperation even when the robot sits behind a firewall or cellular connection.",
        "Remote Access uses WebRTC. The device connects outward, while Foxglove provides connection negotiation and relay infrastructure. A selective forwarding unit can distribute one uploaded stream to several viewers. Video quality adapts to network conditions, and point clouds can be compressed before transmission.",
        "The design has practical tradeoffs. Most messages use lossy delivery to reduce latency, so large messages may fail when fragmented across an unreliable network. Topics that require exact delivery can use a reliable mode. Buyers must decide which telemetry is safe to sample or compress and which command or state data requires stronger guarantees.",
        "The streams are encrypted in transit, but Foxglove states that remote access is not end to end encrypted because its managed forwarding infrastructure can see the data it relays. Defense, critical infrastructure, and sensitive industrial buyers should evaluate that design against their own threat model and ask whether a custom deployment changes the exposure.",
      ],
    },
    {
      heading: "The New Agentic Layer",
      paragraphs: [
        "In August 2026, Foxglove added an agent sidebar, a local Model Context Protocol server for external agents, and a Slack interface. The agents can inspect topics and schemas, control playback, build layouts, create user scripts, annotate events, search recordings, and navigate platform resources through natural language.",
        "This can reduce the interface tax for people who understand a robot problem but do not remember every topic name, query rule, or panel setting. An engineer can ask for wheel speed signals, a plot of timing delay, or the latest recording from a named robot. The system translates that intent into actions within Foxglove.",
        "The guardrails differ by interface. Foxglove says its built in sidebar asks before changes. The local MCP server relies on the external client to manage approvals and acts with the permissions of the signed in Foxglove user. The connection is local, but the external agent may send prompts and tool results to its own model provider.",
        "Foxglove says it does not use customer chat data to train AI models. Buyers should still document which data can enter a prompt, which model provider processes it, how long it is retained, and whether an agent can create or modify shared artifacts. Natural language convenience does not remove access control or change management obligations.",
      ],
    },
    {
      heading: "Semantic Search and the Training Data Loop",
      paragraphs: [
        "Foxglove's semantic visual search addresses a difficult robotics problem: finding a scene that was never labeled in advance. The beta feature samples image or video frames, generates embeddings, and lets a user search with descriptions such as an object, scene, or action.",
        "According to Foxglove, visual indexing samples one frame per topic per second. Object and scene search evaluates individual frames, while action search uses NVIDIA Cosmos models to reason across sequences. The feature is initially available for Foxglove hosted sites and certain customer owned storage configurations, with format and cloud limitations documented by the company.",
        "The capability can accelerate data curation, but it is not a ground truth labeler. Sampling can miss a brief event. Embedding similarity can return a visually related but operationally different scene. Action classification can be wrong. Teams should use semantic search to find candidates, then validate the underlying synchronized data before using a result in safety analysis, model evaluation, or a production decision.",
      ],
    },
    {
      heading: "Integrations, Compute, and Hardware Boundaries",
      paragraphs: [
        "Foxglove does not sell a robot, sensor, edge computer, or controller. There is no Foxglove bill of materials comparable with a robot manufacturer. Its hardware support is defined by software interfaces, processor architecture, data formats, network behavior, and deployment infrastructure.",
        "Foxlet is available for AMD64 and ARM64 Linux systems as a Debian package, static executable, or container. Edge Sites and customer operated Primary Sites use Kubernetes and Helm. Storage can run through Foxglove, Amazon Web Services, Google Cloud, Microsoft Azure, or compatible object storage depending on the selected deployment.",
        "The software can work with ROS 1, ROS 2, MCAP, Protobuf, JSON, FlatBuffers, and other data through supported connections and schemas. The SDK gives non ROS systems a direct path to live streams and MCAP recording. Bridge provides a simpler integration for existing ROS deployments.",
        "Compatibility is not the same as operational readiness. Buyers must benchmark processor and memory load on the actual robot, disk write behavior, file rotation, recovery after power loss, upload resumption, cellular consumption, and the effect of visualization traffic on control networks. The observability layer should never compromise the system it is observing.",
      ],
      tables: [
        {
          title: "Supported Infrastructure and What to Validate",
          columns: ["Area", "Published Support", "Deployment Check"],
          rows: [
            [
              "Robot compute",
              "AMD64 and ARM64 Linux support for Foxlet, plus SDK and Bridge options.",
              "Measure resource use and restart behavior on the production device.",
            ],
            [
              "Robot middleware",
              "ROS 1, ROS 2, Foxglove SDK, WebSocket, and custom message paths.",
              "Confirm services, parameters, topic rates, encodings, and required write access.",
            ],
            [
              "File formats",
              "MCAP and ROS 1 bag import, with MCAP carrying several serialization formats.",
              "Define schemas, compression, metadata, attachments, chunk size, and repair procedures.",
            ],
            [
              "Cloud storage",
              "Foxglove managed storage or customer storage on major cloud providers.",
              "Confirm region, identity, encryption keys, lifecycle rules, egress, and deletion behavior.",
            ],
            [
              "Customer infrastructure",
              "Kubernetes and Helm for customer operated data plane deployments.",
              "Assign monitoring, upgrades, capacity, backup, and incident ownership.",
            ],
            [
              "Engineering tools",
              "Browser and desktop visualization, notebooks, Grafana, API, CLI, webhooks, extensions, agents, and MCP.",
              "Map seat requirements, credentials, audit needs, and support boundaries for every integration.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Customers and Commercial Evidence",
      paragraphs: [
        "Foxglove lists customers across autonomous vehicles, defense, logistics, agriculture, marine systems, inspection, health, manufacturing, construction, and research. Named organizations include Anduril, Caterpillar, Dexterity, Gatik, iRobot, NVIDIA, Ocado, Shield AI, Simbe Robotics, Volvo, Waabi, Wayve, and many smaller robotics companies.",
        "The list shows breadth, but a logo does not reveal contract size, deployment scope, paid status, renewal, or production dependence. The detailed customer stories are more useful because they describe a workflow and a result. They remain jointly presented marketing evidence rather than independent measurement.",
        "Slip Robotics says Foxglove reduced debugging time by 90 percent, increased fleet uptime by 30 percent, and made issue resolution five times faster. AIM says it saved more than $200,000 in engineering time annually and redirected three engineers toward autonomy development. Aescape says debugging moved from days to minutes. These are substantial claims that prospective buyers should test through reference calls and a pilot using their own data.",
        "The customer set also demonstrates that Foxglove is not limited to ROS research projects. It appears in production oriented companies running retail robots, autonomous freight systems, marine vehicles, construction machines, defense platforms, medical manufacturing systems, and learned autonomy programs. The common thread is not the robot shape. It is the need to understand complex synchronized behavior across many runs and machines.",
      ],
      tables: [
        {
          title: "Selected Customer Evidence",
          columns: ["Customer", "Reported Use", "Evidence Limit"],
          rows: [
            [
              "Slip Robotics",
              "Debugging, field support, alert links, and fleet reliability across autonomous freight robots.",
              "Performance improvements are customer claims published by Foxglove.",
            ],
            [
              "AIM",
              "Data infrastructure and analysis for automated earthmoving systems.",
              "The reported annual engineering savings are not independently audited.",
            ],
            [
              "ANYbotics",
              "Root cause analysis for complex field events and lower support and maintenance effort.",
              "No complete fleet economics or contract value is public.",
            ],
            [
              "Scout AI",
              "Live missions, debugging, operations, and training data work for a defense robot foundation model.",
              "The story does not disclose classified performance or production volume.",
            ],
            [
              "Multiply Labs",
              "Inspection of robotic state, logs, sensors, and three dimensional behavior in biomanufacturing.",
              "Clinical manufacturing validation and customer economics are outside the published case study.",
            ],
          ],
        },
      ],
    },
    {
      heading: "Pricing and the Commercial Model",
      paragraphs: [
        "Foxglove publishes more pricing detail than many enterprise robotics software companies. The Free plan costs nothing and includes limited storage, users, devices, and platform usage. The Pro plan starts at $20 per month and adds usage based charges. Enterprise pricing is custom and can include customer controlled data deployments, dedicated support, annual commitments, and forward deployed engineers.",
        "The Pro plan includes three developer seats, five active devices, 1 terabyte of storage, 1 terabyte of monthly indexing, one query hour, and 100 gigabytes of bandwidth. Additional developer seats are listed at $42 per user each month. Additional active devices are $20 each month. Each device includes 300 remote access minutes, with extra minutes listed at five cents each.",
        "Data charges are marginal. Current documentation lists storage above the included terabyte from $50 per terabyte each month, declining at higher volumes. Indexing begins at $35 per additional terabyte. Query time begins at $3.65 per hour. Egress after the included 100 gigabytes begins at $150 per terabyte. Rates decline across larger tiers.",
        "The price card makes early evaluation accessible, but the variables interact. A fleet can create far more data than it is economical to retain. Engineers can increase query and egress by repeatedly opening large recordings. Remote access costs are calculated per device and the included minutes are not pooled. Enterprise discounts, support, data residency, and fully offline requirements require a quotation.",
      ],
      tables: [
        {
          title: "Public Pricing Snapshot",
          columns: ["Cost Driver", "Included in Pro", "Published Additional Rate"],
          rows: [
            ["Base plan", "$20 each month.", "Custom annual commitments are available for larger enterprise use."],
            ["Developer seats", "Three.", "$42 per additional developer each month."],
            ["Active devices", "Five.", "$20 per additional active device each month."],
            ["Storage", "1 terabyte.", "$50 per terabyte each month for the next tier, with volume reductions."],
            ["Indexing", "1 terabyte each month.", "$35 per additional terabyte in the next tier, with volume reductions."],
            ["Query", "One hour each month.", "$3.65 per hour in the next tier, with volume reductions."],
            ["Bandwidth", "100 gigabytes of egress each month.", "$150 per terabyte in the next tier, with volume reductions."],
            ["Remote access", "300 minutes for each active device.", "$0.05 per additional minute for that device."],
            ["AI agents", "$5 of provider usage for each user each month.", "Provider cost plus $1 per million tokens after the allowance."],
          ],
          note:
            "Published self service rates reviewed September 18, 2026. Taxes, enterprise commitments, support, implementation, customer cloud costs, and internal labor are not included.",
        },
      ],
    },
    {
      heading: "A Hypothetical Monthly Cost Example",
      paragraphs: [
        "Consider a fictional robotics company with eight developer seats, 20 active robots, 5 terabytes of average storage, 8 terabytes indexed during the month, 60 query hours, and 2 terabytes of egress. Assume every robot uses 600 minutes of remote access. This is an illustration of the public Pro rate card, not a Foxglove quotation or a typical customer bill.",
        "The base plan is $20. Five additional developer seats cost $210. Fifteen additional devices cost $300. Four additional terabytes of storage cost $200. Seven additional terabytes of indexing cost $245. Query charges are about $170.35 under the published marginal tiers. Egress is about $285 after the first 100 gigabytes. Remote access overage is $300 because every device uses 300 minutes beyond its individual allowance.",
        "The illustrated total is about $1,730.35 for the month before AI usage, taxes, implementation, internal cloud charges, or enterprise services. The important lesson is not the exact total. It is that a buyer needs a logging and retention policy. The easiest cost to avoid is data that should never have been uploaded, indexed, or repeatedly exported.",
      ],
      tables: [
        {
          title: "Illustrative Pro Cost Build",
          columns: ["Item", "Assumption", "Illustrative Monthly Cost"],
          rows: [
            ["Base", "Pro plan.", "$20.00"],
            ["Seats", "Five beyond the three included.", "$210.00"],
            ["Devices", "Fifteen beyond the five included.", "$300.00"],
            ["Storage", "Four terabytes beyond the first terabyte.", "$200.00"],
            ["Indexing", "Seven terabytes beyond the first terabyte.", "$245.00"],
            ["Query", "Sixty total hours under marginal tiers.", "$170.35"],
            ["Egress", "Two terabytes total with 100 gigabytes included.", "$285.00"],
            ["Remote access", "Six thousand total overage minutes across 20 devices.", "$300.00"],
            ["Total", "Before variable AI usage and other costs.", "$1,730.35"],
          ],
          note:
            "Black Scarab hypothetical based on public self service rates. Actual billing depends on measured usage, decimal storage units, contract terms, and Foxglove's billing calculation.",
        },
      ],
    },
    {
      heading: "Alternatives and the Build Decision",
      paragraphs: [
        "Foxglove competes with several categories rather than one identical product. A team can use native ROS tools and PlotJuggler for local debugging, Rerun for open source multimodal visualization and a developing data platform, Roboto for robot data search and analysis, Formant or InOrbit for robot fleet operations, a cloud provider for storage and processing, or an internal platform built around MCAP and general infrastructure.",
        "The strongest open alternative depends on the workflow. Rerun is compelling for developers who want an open source visualization SDK embedded closely in their application. PlotJuggler is effective for time series analysis in ROS. RViz remains familiar for three dimensional ROS visualization. None should be dismissed merely because Foxglove offers a broader commercial stack.",
        "Fleet operations platforms may offer stronger workflows for alerts, health, remote intervention, and customer site operations. General cloud services may offer lower level control and negotiated storage economics. Internal systems can be designed precisely around a company's data, security model, and autonomy stack.",
        "The build decision should include maintenance, not only cloud cost. A custom visualizer, indexing service, access system, device agent, event model, and collaboration layer can consume senior engineering time for years. Conversely, a large company with unusual scale or strict isolation may rationally keep critical infrastructure in house. The right comparison is complete cost and control, not subscription price against free source code.",
      ],
      tables: [
        {
          title: "Alternative Paths",
          columns: ["Approach", "Strength", "Tradeoff"],
          rows: [
            [
              "Foxglove",
              "Integrated format, data, visualization, fleet access, collaboration, and agent workflows.",
              "Commercial dependency and usage based cost across several dimensions.",
            ],
            [
              "Rerun",
              "Open source, code centered multimodal visualization with strong spatial tooling.",
              "The complete enterprise data and fleet platform may differ from Foxglove's current scope.",
            ],
            [
              "ROS tools",
              "Familiar, open, and effective for local engineering tasks.",
              "Teams assemble multiple tools and build more collaboration and fleet infrastructure themselves.",
            ],
            [
              "Fleet operations platform",
              "Operational monitoring, incident response, and remote support for deployed robots.",
              "May not offer the same depth for synchronized engineering replay and training data workflows.",
            ],
            [
              "Cloud plus internal platform",
              "Maximum architectural control and direct use of existing infrastructure contracts.",
              "High engineering, security, maintenance, and opportunity cost.",
            ],
          ],
        },
      ],
    },
    {
      heading: "A Practical Buyer Example",
      paragraphs: [
        "Imagine a manufacturer operating 60 autonomous mobile robots across three factories. The fleet occasionally stops near reflective loading doors. The existing support process depends on a technician downloading several log files, sending them to an autonomy engineer, and manually aligning camera, lidar, localization, and planner data.",
        "A Foxglove pilot could begin with ten robots at one site. Each robot would record a defined MCAP profile, rotate files at a controlled size, attach software and calibration metadata, and mark every safety stop through an event API. Foxlet would import only the event window and a short context period rather than every minute of routine operation.",
        "A shared layout would place camera images, point clouds, robot pose, route, safety state, and planner output on one timeline. Support could open the event without transferring files manually. Engineering could search for the same diagnostics or scene across the pilot fleet, compare runs before and after a fix, and export the selected cases for regression testing.",
        "The pilot should not be approved because the interface looks better. It should pass only if investigation time falls, incidents are classified more consistently, uploaded data stays inside the budget, the system preserves required evidence, and the next software release reduces recurrence without introducing a new failure.",
      ],
      tables: [
        {
          title: "Pilot Scorecard",
          columns: ["Measure", "Baseline", "Decision Test"],
          rows: [
            ["Time to find incident data", "Manual retrieval and transfer time.", "Relevant data opens from the incident record within the agreed target."],
            ["Time to root cause", "Engineer hours from report to classified cause.", "Median and difficult case investigation time improve materially."],
            ["Data coverage", "Share of incidents with complete synchronized evidence.", "Coverage improves without uncontrolled upload volume."],
            ["Regression quality", "Repeat incidents after a software fix.", "Curated cases become repeatable tests and recurrence declines."],
            ["Cost", "Current storage, transfer, tooling, and labor.", "Complete monthly cost is lower than the verified operating value."],
            ["Security", "Current access and data handling controls.", "The pilot meets identity, encryption, retention, audit, and incident requirements."],
          ],
        },
      ],
    },
    {
      heading: "Security, Privacy, and Data Governance",
      paragraphs: [
        "Robot data can reveal people, facilities, customer products, production rates, routes, security posture, and proprietary machine behavior. The data platform therefore belongs inside the same security review as the robot fleet and the autonomy software.",
        "Foxglove says recordings use HTTPS connections, TLS in transit, AES 256 encryption at rest, single sign on options, and SOC 2 Type II controls. Enterprise customers can keep message contents in their own cloud storage or operate the data plane in their own infrastructure. Even in those configurations, buyers should map which metadata reaches the Foxglove control plane.",
        "Project boundaries, roles, seat types, device tokens, API keys, audit logs, and storage identities should follow least privilege. A shared layout can contain topic and field names. A device token can support data ingestion or remote access. An external MCP client can act through a signed in user's session. Each asset needs a named owner, rotation process, and removal procedure.",
        "Retention should begin with purpose. Safety evidence may require a longer period than routine sensor streams. Training examples may need consent, redaction, or customer restrictions. Deleted cloud indexes must be considered separately from copies at an Edge Site or in customer storage. A contract should define data ownership, model training rights, deletion, export, incident notification, subprocessors, and transition support.",
      ],
    },
    {
      heading: "Limitations and Commercial Risks",
      paragraphs: [
        "Foxglove makes difficult data easier to work with, but it does not guarantee that the robot logs the right signal. Missing calibration, unsynchronized clocks, dropped messages, corrupted storage, an incorrect schema, or a disabled camera can leave an investigation without the evidence it needs. Observability quality begins on the machine.",
        "The platform also does not validate autonomy or safety. A clear replay can help explain a hazardous decision, but the robot still needs an independent safety architecture, controlled release process, operating envelope, hazard analysis, and verification program. Teleoperation through a convenient interface does not by itself make remote control safe.",
        "Usage based pricing can become unpredictable when logging rules, fleet size, query behavior, and egress are not governed. Customer owned storage reduces duplication but does not eliminate indexing, processing, query, or cloud charges. Fully offline deployment is custom, and standard customer operated deployments still require an internet connection for the control plane.",
        "The commercial product is closed source. MCAP remains portable, but layouts, searches, events, integrations, and operating habits can still create switching cost. Buyers should regularly export critical configurations, document schemas, and test whether important recordings can be opened with an independent tool.",
        "Finally, the category may not consolidate around one horizontal platform. Large robot companies can keep internal systems. Application vendors can bundle vertical data stacks. Cloud and chip companies can move upward. Foxglove's independence is valuable only if customers continue to prefer a neutral layer over tightly integrated alternatives.",
      ],
      tables: [
        {
          title: "Risk Register",
          columns: ["Risk", "Failure Mode", "Control"],
          rows: [
            ["Logging", "The incident occurs but critical topics or context were not recorded.", "Define profiles, health checks, clock monitoring, and representative failure tests."],
            ["Cost", "Fleet growth multiplies storage, indexing, query, egress, and access charges.", "Set budgets, sampling, retention, event uploads, quotas, and cost dashboards."],
            ["Security", "Sensitive streams or control paths are exposed to the wrong user or service.", "Use least privilege, project isolation, credential rotation, audit review, and network controls."],
            ["Agent use", "An agent changes a shared artifact or exposes data through an external model provider.", "Restrict permissions, require approvals, define allowed providers, and review audit records."],
            ["Lock in", "Teams depend on commercial workflows even though raw MCAP remains portable.", "Export layouts and data, preserve schemas, and test independent recovery and replay."],
            ["Vendor continuity", "Pricing, product scope, support, or ownership changes.", "Negotiate export, transition, support, renewal, and termination terms."],
          ],
        },
      ],
    },
    {
      heading: "The Buyer Diligence Checklist",
      paragraphs: [
        "The strongest evaluation begins with a painful workflow, not a platform demonstration. Choose incidents, test runs, or training data tasks that consume measurable engineering time. Use representative file sizes, network conditions, schemas, access restrictions, and failure cases.",
        "A buyer should also separate product fit from data discipline. Foxglove can expose a fragmented logging system more clearly, but it cannot invent consistent device identity, timestamps, metadata, or acceptance criteria. Those are operating practices that the customer must own.",
      ],
      tables: [
        {
          title: "Questions Before Contracting",
          columns: ["Area", "Evidence to Request"],
          rows: [
            ["Workflow", "Current investigation steps, time, users, delays, errors, and business consequence."],
            ["Data", "Topics, schemas, rates, file sizes, compression, clock sources, metadata, attachments, and retention."],
            ["Scale", "Robot count, active hours, monthly recordings, event frequency, expected fleet growth, and query patterns."],
            ["Architecture", "Robot integration, Edge Site need, Primary Site model, storage location, control plane path, and offline requirement."],
            ["Security", "Assurance reports, encryption, identities, roles, logs, subprocessors, remote access design, and incident obligations."],
            ["Operations", "Service levels, status history, support hours, escalation, upgrades, backups, recovery, and ownership matrix."],
            ["Commercial", "Complete rate card, committed use discounts, billing measurements, implementation, support, renewals, and price protection."],
            ["Portability", "MCAP export, layout export, API access, deletion, transition assistance, and independent replay test."],
            ["References", "Customers with similar robot types, data volumes, security constraints, and production scale."],
          ],
        },
      ],
    },
    {
      heading: "Who Should Buy Foxglove",
      paragraphs: [
        "Foxglove is a strong fit for teams whose robots already generate enough complex data that finding, replaying, and sharing the right moment has become an engineering bottleneck. The value rises when several disciplines need the same evidence, when robots operate away from the lab, and when incidents must feed testing or model improvement.",
        "It is especially relevant for a growing company that would otherwise assign senior engineers to build visualization, indexing, access, and fleet data plumbing. The public pricing also makes it practical to test before negotiating an enterprise deployment.",
        "Foxglove is a weaker fit for a solo developer satisfied with local files and an existing open source visualizer, a fixed automation cell with simple signals and established industrial monitoring, or an organization that cannot allow the required control plane connection and does not want a custom fully offline agreement.",
        "It is also a poor fit when the team has no logging strategy. More storage and a polished interface will not convert incomplete or inconsistent recordings into reliable engineering evidence.",
      ],
    },
    {
      heading: "Black Scarab Verdict",
      paragraphs: [
        "Felicis argues that someone will build the equivalent of a modern cloud data platform for the physical world and identifies Foxglove as the clearest category leader. The comparison is directionally useful, but it can overstate how settled the market is. Robot fleets are still young, data practices remain fragmented, and many of the largest potential customers have strong reasons to build internally.",
        "Foxglove nevertheless has a rare combination. It helped create an open format that entered mainstream ROS workflows, built a visual tool that engineers can adopt from a local file, and expanded into data management, edge movement, fleet access, collaboration, search, and agents. Standard, product, and workflow reinforce one another.",
        "The most important product decision was keeping MCAP open while monetizing the work around it. That reduces data captivity and gives Foxglove a distribution channel. The most important commercial test is whether the paid platform becomes more valuable as fleets grow without becoming too expensive or too replaceable.",
        "Black Scarab's view is that Foxglove belongs on the evaluation list for any serious robot company moving from prototypes to deployed fleets. Buyers should start with one measurable incident or data curation loop, model every usage dimension, validate security, and preserve an exit path. If the platform returns senior engineering time to autonomy and operations, it can become foundational. If it merely replaces one visualizer with another, the case is much weaker.",
      ],
    },
    {
      heading: "Research Method",
      paragraphs: [
        "This report was prepared from Foxglove product documentation, pricing, architecture, security, customer stories, company announcements, public source repositories, ROS documentation, independent financing reporting, and the September 2026 Felicis market thesis supplied by the reader.",
        "Company supplied customer outcomes are identified as reported claims and were not independently audited by Black Scarab. Foxglove is privately held and does not publish audited financial statements, complete contract values, revenue, gross margin, renewal, customer concentration, or profitability. Product capabilities and self service prices can change, so buyers should confirm the current documentation and a written quotation before making a decision.",
      ],
    },
  ],
  sources: [
    "Foxglove official product, documentation, pricing, and security materials",
    "Foxglove customer case studies and financing announcements",
    "MCAP source repository and ROS 2 documentation",
    "Independent reporting and the Felicis physical world data stack thesis",
  ],
  sourceLinks: [
    { label: "Foxglove platform", url: "https://foxglove.dev/" },
    { label: "Foxglove company and founders", url: "https://www.foxglove.dev/about" },
    { label: "Foxglove pricing", url: "https://foxglove.dev/pricing" },
    { label: "Foxglove detailed pricing documentation", url: "https://docs.foxglove.dev/docs/pricing" },
    { label: "Foxglove data platform documentation", url: "https://docs.foxglove.dev/docs/data" },
    { label: "Foxglove visualization documentation", url: "https://docs.foxglove.dev/docs/visualization" },
    { label: "Foxglove Primary Site deployment models", url: "https://docs.foxglove.dev/docs/data/primary-sites" },
    { label: "Foxglove Edge Sites", url: "https://docs.foxglove.dev/docs/data/edge-sites" },
    { label: "Foxlet device process", url: "https://docs.foxglove.dev/docs/fleet/foxlet" },
    { label: "Foxglove Remote Access", url: "https://docs.foxglove.dev/docs/fleet/remote-access" },
    { label: "Foxglove live connections", url: "https://docs.foxglove.dev/docs/visualization/connecting/live" },
    { label: "Foxglove layouts", url: "https://docs.foxglove.dev/docs/visualization/layouts" },
    { label: "Foxglove extensions", url: "https://docs.foxglove.dev/docs/extensions" },
    { label: "Foxglove search", url: "https://docs.foxglove.dev/docs/data/search" },
    { label: "Foxglove agents", url: "https://docs.foxglove.dev/docs/agents" },
    { label: "Foxglove MCP server", url: "https://docs.foxglove.dev/docs/agents/mcp-server" },
    { label: "Foxglove semantic search announcement", url: "https://www.foxglove.dev/blog/introducing-semantic-search" },
    { label: "Foxglove Series B announcement", url: "https://foxglove.dev/blog/foxglove-series-b" },
    { label: "Foxglove Series A announcement", url: "https://foxglove.dev/blog/foxgloves-15m-series-a-and-the-missing-data-stack-for-robotics" },
    { label: "Foxglove Studio product transition", url: "https://foxglove.dev/blog/foxglove-2-0-unifying-robotics-observability" },
    { label: "Foxglove and Studio comparison", url: "https://www.foxglove.dev/blog/foxglove-vs-foxglove-studio-two-years-on" },
    { label: "Foxglove customer stories", url: "https://www.foxglove.dev/customers" },
    { label: "Slip Robotics customer story", url: "https://foxglove.dev/customers/slip-robotics" },
    { label: "AIM customer story", url: "https://www.foxglove.dev/customers/aim" },
    { label: "Aescape customer story", url: "https://www.foxglove.dev/customers/aescape" },
    { label: "ANYbotics customer story", url: "https://www.foxglove.dev/customers/anybotics" },
    { label: "Multiply Labs customer story", url: "https://www.foxglove.dev/customers/multiply-labs" },
    { label: "Scout AI customer story", url: "https://foxglove.dev/customers/scout-ai" },
    { label: "MCAP source repository", url: "https://github.com/foxglove/mcap" },
    { label: "ROS 2 Iron release and MCAP default", url: "https://docs.ros.org/en/humble/Releases/Release-Iron-Irwini.html" },
    { label: "TechCrunch report on the Series A", url: "https://techcrunch.com/2022/10/11/foxglove-raises-16m-to-build-dev-infrastructure-for-robots/" },
    { label: "Felicis physical world data stack thesis", url: "https://www.felicis.com/blog/the-physical-world-has-no-data-stack" },
  ],
});
