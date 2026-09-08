export type NewsSource = {
  label: string;
  url: string;
};

export type NewsSection = {
  heading: string;
  paragraphs: string[];
};

export type NewsUpdate = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedDate: string;
  publishedLabel: string;
  author: {
    name: string;
    href: string;
  };
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  readingTime: string;
  keyPoints: string[];
  sections: NewsSection[];
  sources: NewsSource[];
};

export const newsUpdates: NewsUpdate[] = [
  {
    slug: "palladyne-ai-fanuc-industrial-robots-physical-ai",
    title:
      "Palladyne AI and FANUC pair adaptive software with industrial robots",
    summary:
      "Palladyne IQ will be optimized for FANUC robots as the companies pursue faster deployment, adaptive motion, teleoperation, simulation, and repeatable manufacturing workflows.",
    category: "Physical AI News",
    publishedDate: "2026-09-08",
    publishedLabel: "September 8, 2026",
    author: {
      name: "Rodolfo Garcia Calderoni, CFA",
      href: "/about",
    },
    image: "/images/news/palladyne-ai-fanuc-industrial-robots.png",
    imageAlt:
      "Editorial illustration of an adaptive industrial robot using machine vision to handle varied metal parts",
    imageCaption:
      "An original editorial interpretation of adaptive robot software guiding an industrial arm through a variable manufacturing task.",
    readingTime: "8 min read",
    keyPoints: [
      "Palladyne AI and FANUC America plan to optimize Palladyne IQ for FANUC robots and develop adaptive motion, teleoperation, simulation, training, and deployment tools.",
      "Palladyne previously demonstrated autonomous media blasting on a FANUC M710 robot for the United States Air Force, giving the collaboration a concrete technical starting point.",
      "The companies did not disclose financial terms, exclusivity, customer deployments, pricing, supported launch models, performance benchmarks, or a commercial release date.",
    ],
    sections: [
      {
        heading: "FANUC is adding another intelligence layer",
        paragraphs: [
          "Palladyne AI and FANUC America announced a strategic collaboration on September 8 to bring Palladyne IQ to FANUC industrial robots. The companies want to make robotic automation easier to deploy, more adaptable when conditions change, and practical for a wider range of manufacturing, warehouse, and logistics work.",
          "The factory robot is not getting a personality. It is getting a wider playbook. Traditional automation can be exceptionally fast and precise when the workpiece, fixture, path, and timing remain predictable. The cost and complexity rise when parts arrive in different positions, tasks change frequently, or a robot needs to respond to what its sensors are seeing in real time.",
          "Palladyne IQ is designed to sit above the robot controller and add perception, task learning, motion planning, and adaptive behavior. FANUC provides the proven mechanical platform, controls, service network, and enormous installed base. Palladyne provides software intended to reduce the amount of custom programming required for variable work.",
          "This is a development and commercialization agreement, not the launch of a finished FANUC product. Neither company identified the first customer, factory, robot model, commercial package, or deployment date.",
        ],
      },
      {
        heading: "What the two companies plan to build",
        paragraphs: [
          "The collaboration covers six practical areas. Palladyne IQ will be optimized for FANUC platforms. The companies will work on AI driven motion planning and adaptive behavior, teleoperation and learning from human demonstrations, simulation and model training, customer use case validation, and standardized deployment workflows for integrators and end users.",
          "Those workstreams address a familiar problem in industrial automation. Buying a robot is only the beginning. A complete cell may require fixtures, cameras, safety equipment, end effectors, controls, process knowledge, programming, testing, and integration with factory systems. Every unusual part or workflow can create more engineering work.",
          "A standardized workflow could make Palladyne IQ easier for FANUC integrators to quote, configure, validate, and support. That matters because most manufacturers do not want an AI experiment. They want a production system with a defined scope, an acceptance test, a service plan, and a credible payback period.",
          "The announcement says the companies will jointly validate customer applications across manufacturing, warehousing, and logistics. It does not name those applications. Surface finishing, material handling, inspection, machine tending, kitting, parts sequencing, and variable assembly are reasonable candidates based on Palladyne materials and earlier demonstrations, but the first commercial focus remains undisclosed.",
        ],
      },
      {
        heading: "How Palladyne IQ changes the programming model",
        paragraphs: [
          "A conventional robot generally executes paths and logic defined in advance. Sensors can add flexibility, but a systems integrator still has to specify how the machine should respond to expected conditions. Palladyne is trying to move more of that burden into a software layer that can observe a task, learn from demonstrations, plan motion, and adjust when the real scene differs from the training example.",
          "The company describes Palladyne IQ as edge based software. Autonomous operation does not require a cloud connection, according to its product brochure. Keeping the main control loop near the robot can reduce communications delay and may simplify deployments in factories where continuous external connectivity is undesirable.",
          "Training can combine human demonstrations, teleoperation, a task description language, simulation, and language model input. A worker or integrator could show the system how to perform a process, then use software tools to refine the task rather than writing every motion from scratch.",
          "That does not eliminate conventional controls. The FANUC controller still manages the robot hardware and certified motion environment. Palladyne lists FANUC motion streaming software and the R30iB family of controllers in its current technical materials. The value has to come from coordinating perception and behavior without compromising the reliability expected from the underlying robot.",
        ],
      },
      {
        heading: "There is already a FANUC proof point",
        paragraphs: [
          "Palladyne and FANUC are not starting with a blank workcell. In 2025, Palladyne reported an autonomous media blasting demonstration for the United States Air Force using its IQ software on a FANUC M710 robot mounted on a linear rail.",
          "The system controlled the robot across seven degrees of freedom and adjusted process variables including tool distance, path width, angle, and speed. The job is a useful test because aircraft components can have complex geometry and surface preparation requires the tool to maintain a controlled relationship with the material.",
          "Palladyne completed the work under a multi million dollar Air Force program focused on maintenance tasks at the Warner Robins Air Logistics Complex. The company also demonstrated automated sanding with a different commercial robot. Together, the projects show that its software has moved beyond a simulation and operated real equipment on variable surface work.",
          "The evidence is still limited. Palladyne did not publish cycle time comparisons, defect rates, labor savings, availability, intervention frequency, or a complete cost analysis for the FANUC demonstration. A successful milestone under a development contract is meaningful, but it is not the same as sustained production across many customer sites.",
        ],
      },
      {
        heading: "Why FANUC changes the size of the opportunity",
        paragraphs: [
          "FANUC says more than one million of its robots have been installed worldwide. Its current catalog spans collaborative arms, articulated robots, delta systems, SCARA machines, painting platforms, palletizing equipment, and other configurations. Payloads extend from small part handling to systems rated for as much as 2,300 kilograms.",
          "That breadth gives Palladyne something every robotics software company needs: access to machines customers already trust. A manufacturer may be more willing to add an intelligence layer to an established robot platform than adopt an entirely new machine with an unproven service model.",
          "FANUC also brings integrators, training programs, spare parts, application expertise, and long term customer relationships. If the two companies create a repeatable offering, Palladyne could reach buyers through an existing automation ecosystem instead of building every sales and support function on its own.",
          "The word if is doing important work. The announcement does not say that Palladyne IQ will be sold across the full FANUC catalog or through every FANUC channel. It says the companies will optimize the software, validate use cases, and develop deployment workflows. Distribution potential should not be mistaken for committed distribution.",
        ],
      },
      {
        heading: "FANUC is building a broader physical AI ecosystem",
        paragraphs: [
          "The Palladyne agreement fits into a much larger FANUC strategy. During 2026, FANUC announced physical AI work involving NVIDIA and Google, while also highlighting Amazon Web Services in its technology ecosystem. At IMTS, the company plans to show robots using multimodal reasoning, vision, force data, natural language programming, simulation, and autonomous recovery.",
          "NVIDIA supplies accelerated computing and simulation tools. Google is contributing AI agents and multimodal models. Other specialists bring tracking, perception, programming, and process software. Palladyne enters this picture as an autonomy and task learning layer focused on adapting commercial robots to variable work.",
          "That means the FANUC relationship does not appear exclusive. For customers, an open ecosystem can be useful because different jobs need different tools. For Palladyne, it creates a competitive test. Its software will have to earn a place beside larger AI platforms and specialized automation vendors on measurable deployment results.",
          "The strategic question is whether Palladyne can become a reusable layer across many FANUC cells or remains a specialist for difficult applications such as surface preparation. Either outcome could support a business, but the market size and sales model would look very different.",
        ],
      },
      {
        heading: "The commercial stakes for Palladyne",
        paragraphs: [
          "Palladyne entered 2026 as a broader defense and industrial technology company after acquisitions expanded it into avionics, precision manufacturing, aerospace engineering, and autonomous systems. Palladyne IQ remains the core industrial robot software product, but the company now reports results across several business lines.",
          "For 2025, Palladyne reported $5.2 million in revenue, an operating loss of $32.4 million, and $47 million in cash, cash equivalents, and marketable securities at year end. It guided to $24 million to $27 million in 2026 revenue and reported nearly $18 million in backlog by the middle of February.",
          "Those numbers should not be read as Palladyne IQ revenue. The guidance and backlog include the wider company, including acquired operations and defense programs. Palladyne said IQ 2.0 had reached commercial release and signed an initial customer, but it has not disclosed software revenue, pricing, customer concentration, or recurring revenue for the product.",
          "A formal FANUC collaboration can improve credibility with industrial buyers and integrators. The financial impact will depend on paid deployments, deployment time, gross margin, support requirements, and whether one trained task can be reproduced across multiple cells without extensive new engineering.",
        ],
      },
      {
        heading: "What still has to be proven",
        paragraphs: [
          "The most important missing detail is the first production use case. The partners have not announced a named customer, order, paid pilot, target industry, supported launch robot, or expected availability. Financial terms and exclusivity were also not disclosed.",
          "Performance evidence is equally important. Buyers will want to know how long training takes, how much variation the system tolerates, what happens when perception is uncertain, how often a person must intervene, and whether cycle time remains competitive with a conventional cell.",
          "Safety and responsibility will need clear boundaries. Adaptive software can propose or select actions, but industrial deployments still require risk assessment, operating limits, validated safety functions, cybersecurity controls, change management, and a defined process for approving updates.",
          "The signals to watch are concrete: a packaged FANUC and Palladyne offering, named integrator support, the first customer application, measured deployment savings, and evidence that a learned task can run reliably through production variation. The partnership joins serious robot hardware with software that has already controlled a FANUC system. The next step is proving that the combination can be purchased and repeated, not merely demonstrated.",
        ],
      },
    ],
    sources: [
      {
        label: "Palladyne AI and FANUC America collaboration announcement",
        url: "https://www.palladyneai.com/press-releases/palladyne-ai-and-fanuc-america-announce-strategic-collaboration-to-advance-intelligent-robotic-automation/",
      },
      {
        label: "Palladyne IQ product brochure and supported system information",
        url: "https://www.palladyneai.com/download/Palladyne_IQ_brochure.pdf",
      },
      {
        label: "Palladyne AI Air Force program and FANUC M710 demonstration",
        url: "https://investor.palladyneai.com/news-releases/news-release-details/palladyne-ai-corp-receives-additional-funding-us-air-force/",
      },
      {
        label: "Palladyne AI 2025 results and 2026 financial guidance",
        url: "https://investor.palladyneai.com/news-releases/news-release-details/palladyne-ai-reports-fourth-quarter-and-full-year-2025-results",
      },
      {
        label: "FANUC America industrial robot portfolio and installed base",
        url: "https://www.fanucamerica.com/products/robot",
      },
      {
        label: "FANUC America physical AI program at IMTS 2026",
        url: "https://www.fanucamerica.com/press-releases/fanuc-america-brings-robotics-automation-physical-ai-and-cnc-innovation-to-imts-2026",
      },
      {
        label: "FANUC and NVIDIA physical AI collaboration",
        url: "https://www.fanucamerica.com/press-releases/fanuc-accelerates-physical-ai-in-industrial-robotics-leveraging-nvidia-technologies",
      },
      {
        label: "FANUC and Google physical AI collaboration",
        url: "https://www.fanucamerica.com/press-releases/fanuc-accelerates-physical-ai-through-collaboration-with-google-ai-agent-powered-by-google-operates-robots",
      },
    ],
  },
  {
    slug: "tuya-smart-doova-ai-companion-robot-seniors",
    title:
      "Tuya Smart unveils Doova, an AI home companion robot for seniors",
    summary:
      "The mobile robot combines voice assistance, room navigation, family alerts, smart home control, and companionship for older adults living independently.",
    category: "Physical AI News",
    publishedDate: "2026-09-07",
    publishedLabel: "September 7, 2026",
    author: {
      name: "Rodolfo Garcia Calderoni, CFA",
      href: "/about",
    },
    image: "/images/news/tuya-doova-ai-companion-robot-seniors.png",
    imageAlt:
      "Editorial illustration of a mobile AI companion robot assisting an older adult at home",
    imageCaption:
      "An original editorial interpretation of a mobile home companion helping an older adult stay connected, informed, and supported.",
    readingTime: "7 min read",
    keyPoints: [
      "Doova can respond to a spoken request for help, move toward the user, and alert family through a live video call if the person does not respond within 60 seconds.",
      "Tuya designed the robot to combine companionship, reminders, home monitoring, and smart device control in one mobile system.",
      "Tuya has not disclosed pricing, availability, professional monitoring, medical certification, or detailed privacy controls for Doova.",
    ],
    sections: [
      {
        heading: "A robot designed around the first minute after a fall",
        paragraphs: [
          "Tuya Smart introduced Doova at IFA 2026 in Berlin as an AI home companion for older adults who want to continue living independently. The small mobile robot is designed to move through the home, hold conversations, manage connected devices, deliver reminders, and help family members stay informed.",
          "The most important part of the announcement is not the friendly face or the conversational AI. It is a proposed emergency workflow built around the moments after a person asks for help.",
          "When a user says, “Hey Tuya, help,” the robot is designed to determine where the voice came from, travel to the person, and use its cameras to assess the scene. If the user does not respond within 60 seconds, Doova can begin an emergency process and send a live two way video alert to family members.",
          "That could give relatives more context than a simple alarm. Instead of receiving only a notification, a family member may be able to see the room, speak with the person, and decide what to do next. Tuya has not said that the service connects directly to professional emergency dispatch, so the system currently appears centered on family response.",
        ],
      },
      {
        heading: "How Doova finds its way around the home",
        paragraphs: [
          "Doova combines laser based mapping, vision, microphones, and a mobile base. Tuya says the robot uses LDS LiDAR to understand the layout of a home and four microphones to identify the direction of a voice. Its cameras use skeletal recognition to interpret posture and movement.",
          "The robot moves on two powered wheels supported by caster wheels, a design intended to balance maneuverability and stability on ordinary indoor floors. It can return to its charging dock on its own when the battery runs low.",
          "Tuya also describes a room monitoring feature. Doova can travel to defined points near the center of rooms, rotate for a complete visual scan, and send a safety report to a phone. A family could use that view to check whether something appears unusual without placing fixed cameras in every corner of the home.",
          "The announcement does not establish that Doova can reliably detect a fall without hearing a request for help. Tuya says its vision system can assess posture, but it has not published detection accuracy, testing results, or details about how the robot performs when furniture blocks its view, rooms are dark, or the user cannot speak.",
        ],
      },
      {
        heading: "More than an alert device",
        paragraphs: [
          "Tuya is positioning Doova as a daily companion rather than a single purpose safety product. A multimodal language model supports conversations, questions, games, and suggestions related to meals, gardening, clothing, and other routines.",
          "The robot can provide medication, weather, and schedule reminders. It can also help interpret bills and letters, explain how to use connected appliances, and flag language that may indicate a scam. Tuya says a future service may help users locate misplaced items around the home.",
          "These functions address a wider reality of independent living. Safety is not limited to falls. Confusing documents, missed medication, social isolation, fraud, and difficulty managing a growing collection of connected devices can all make daily life harder.",
          "The National Institute on Aging notes that older adults face an elevated risk of loneliness and social isolation, conditions associated with depression, cognitive decline, and other health problems. The Federal Trade Commission reported that adults aged 60 and older lost $2.4 billion to fraud in 2024. A robot cannot replace family, community, or professional care, but a well designed assistant could make routine support easier to access.",
        ],
      },
      {
        heading: "A moving control center for the smart home",
        paragraphs: [
          "Doova also acts as a Tuya smart home hub. Users can ask it to control compatible lights, curtains, and devices in kitchens and bathrooms. Because the robot can move, the interface follows the person instead of remaining fixed to a wall, phone, or speaker.",
          "A 10.1 inch high definition display supports video calls, visual guidance, and animated facial expressions. The rounded body and simple face are intended to feel approachable inside a home rather than industrial or clinical.",
          "This is where Tuya has an advantage over a startup building a companion robot from scratch. The company already supplies a large software platform for connected products. Doova can become a physical interface for that network, while the network gives the robot useful things to control.",
          "The same connection creates new responsibilities. A mobile device with cameras and microphones can observe far more than a stationary speaker. Buyers will need clear answers about what data stays inside the home, what travels to the cloud, how long recordings are stored, who can access a live video session, and how permissions can be changed or revoked.",
        ],
      },
      {
        heading: "The business behind the robot",
        paragraphs: [
          "Doova arrives as Tuya expands beyond the software that connects smart devices. At IFA, the company placed the robot inside a broader portfolio spanning home automation, energy management, robotics, and the Matter standard for connected products.",
          "Tuya reported $92.9 million in revenue for the second quarter of 2026, an increase of 16 percent from the prior year. Its platform as a service business produced $67.9 million, while smart home and robot product revenue reached $13.5 million, up 23.2 percent.",
          "The company said it had more than 2.092 million registered AI developers as of June 30. That developer base could help Doova gain new skills and connect with more products, but the commercial model remains unclear.",
          "Tuya has discussed subscriptions and other paid services across energy, pet care, and video understanding. It has not said whether Doova will require a subscription, whether emergency alerts will be included with the hardware, or whether families will pay separately for monitoring and future features.",
        ],
      },
      {
        heading: "The questions families should ask",
        paragraphs: [
          "Doova is still an announced product, not a proven care system. Tuya has not disclosed its price, release date, first markets, battery life, warranty, repair plan, or expected service life. It has also not shared independent trials showing how reliably the robot reaches a person during an emergency.",
          "Families should ask what happens when internet service fails, the charging dock loses power, a door is closed, the robot is on another floor, or a user cannot say the activation phrase. They should also understand who receives an alert, how quickly that person is expected to respond, and whether a professional monitoring option exists.",
          "Tuya has not described Doova as a medical device or announced a medical certification. Its reminders, posture assessment, and family alerts should not be treated as a replacement for medical care or a dedicated emergency response service unless future evidence and regulatory approvals support that role.",
          "The best version of this product would make independence easier without making the home feel watched. Reaching that balance will depend as much on privacy controls, reliability, support, and thoughtful onboarding as it does on the quality of the AI model.",
        ],
      },
      {
        heading: "What comes next",
        paragraphs: [
          "Tuya has shown a coherent idea for a home robot. Mobility allows Doova to bring communication and smart home control to the user, while its sensors give family members more context when help may be needed.",
          "The next step is evidence. A launch price will show which households Tuya expects to reach. Availability details will reveal whether Doova is a showcase for the company platform or a product intended for broad adoption. Independent testing will determine whether the emergency workflow works consistently in real homes.",
          "If Tuya can answer those questions, Doova could occupy a useful space between a smart speaker, a mobile camera, and a personal emergency alert system. The company has assembled those functions into a friendly machine. Now it has to prove that families can trust it when the moment is not friendly at all.",
        ],
      },
    ],
    sources: [
      {
        label: "Tuya Smart announcement of Doova at IFA 2026",
        url: "https://www.tuya.com/news-details/Kfx9813ozlbff",
      },
      {
        label: "Tuya Smart overview of its IFA 2026 product showcase",
        url: "https://www.tuya.com/news-details/Kfxbtt88aw2t0",
      },
      {
        label: "Tuya Smart second quarter 2026 financial results",
        url: "https://ir.tuya.com/news-releases/news-release-details/tuya-reports-second-quarter-2026-unaudited-financial-results",
      },
      {
        label: "National Institute on Aging guidance on loneliness and social isolation",
        url: "https://www.nia.nih.gov/health/loneliness-and-social-isolation/loneliness-and-social-isolation-tips-staying-connected",
      },
      {
        label: "Federal Trade Commission report on fraud affecting older adults",
        url: "https://www.ftc.gov/news-events/news/press-releases/2025/12/ftc-issues-annual-report-congress-agencys-actions-protect-older-adults",
      },
    ],
  },
  {
    slug: "physical-superintelligence-raises-58-million-ai-physics-lab",
    title:
      "Physical Superintelligence raises $58 million to build an AI native physics lab",
    summary:
      "The new public benefit corporation is building virtual physicists to accelerate discovery, beginning with data center optimization and an ambitious mission to Alpha Centauri.",
    category: "Physical AI News",
    publishedDate: "2026-09-06",
    publishedLabel: "September 6, 2026",
    author: {
      name: "Rodolfo Garcia Calderoni, CFA",
      href: "/about",
    },
    image: "/images/news/physical-superintelligence-ai-physics-lab.png",
    imageAlt:
      "Editorial visualization of an AI physics laboratory studying data center cooling, materials, and orbital systems",
    imageCaption:
      "An editorial interpretation of virtual physicists coordinating simulations across energy, materials, computing infrastructure, and space systems.",
    readingTime: "7 min read",
    keyPoints: [
      "Physical Superintelligence launched with a $58 million seed round led by Breakthrough Energy Ventures.",
      "Its Emmy platform is designed to run autonomous research campaigns that connect hypotheses, simulations, verification, experiments, engineering, and deployment.",
      "The company is beginning with data center design and optimization while also supporting a privately funded mission concept to Alpha Centauri.",
    ],
    sections: [
      {
        heading: "A $58 million bet on faster physics",
        paragraphs: [
          "A new research company wants to give physics the same kind of industrial acceleration that artificial intelligence brought to software. Physical Superintelligence, known as PSI, launched this week with $58 million in seed funding to build an AI native laboratory staffed by what it calls virtual physicists.",
          "Breakthrough Energy Ventures led the round. Dragon Global, Solari Capital, Robot Ventures, Susa Ventures, Variant Fund, SV Angel, Valkyrie, 021T, Balaji Srinivasan, Anthony Scaramucci, and other investors participated.",
          "The company was founded by Matthew Pines, Alex Klokus, and physicist and computer scientist Alex Wissner Gross. PSI is organized as a public benefit corporation and says its charter prioritizes safety, independent verification, responsible development, and broad public benefit alongside commercial goals.",
          "That is an ambitious starting point. The important question is not whether AI can produce ideas about physics. Models already do that. The harder problem is whether a system can consistently turn an idea into a result that survives simulation, testing, engineering constraints, and skeptical review.",
        ],
      },
      {
        heading: "What PSI is actually building",
        paragraphs: [
          "PSI calls its core platform Emmy, after mathematician and physicist Amalie Emmy Noether. Emmy is intended to coordinate specialized AI agents that can work through a complete scientific campaign rather than answer a single prompt.",
          "A campaign starts with a problem defined by human researchers. Virtual physicists then generate hypotheses, test them in simulations, challenge the results, propose experiments, and translate promising findings into engineering and deployment plans. Human scientists direct the mission and decide what deserves further attention.",
          "The company says independent agents must converge on a result before it advances. In practical terms, one model is not supposed to grade its own homework. Different verification paths look for mathematical errors, physical inconsistencies, unrealistic assumptions, and conclusions that do not follow from the evidence.",
          "PSI describes the campaign, not the model response, as its basic unit of work. That distinction is central to the pitch. A useful scientific system needs memory, simulation tools, data pipelines, evaluation rules, and repeatable processes. A clever answer in a chat window is not enough.",
        ],
      },
      {
        heading: "Emmy starts with data centers",
        paragraphs: [
          "The first proving ground is the physical infrastructure behind AI itself. PSI says Emmy is being developed for terrestrial and orbital data center optimization, with early work focused on cooling, electrical systems, power flow, and facility design.",
          "Semafor reported that the company is beginning with a large data center site in Texas. Before construction, Emmy can explore combinations of cooling equipment, power delivery, building geometry, climate conditions, and operating loads. The goal is to identify designs that use less energy, cost less to operate, or support more compute within the same physical limits.",
          "This is a sensible place to begin because the problem is valuable and measurable. Data centers convert electricity into computation, heat, and eventually useful AI output. Small improvements in cooling efficiency, power distribution, or equipment layout can become meaningful when repeated across a large facility.",
          "It is also a difficult test. A simulated improvement has to survive real equipment tolerances, changing workloads, weather, maintenance schedules, construction constraints, and safety requirements. PSI will need to show that Emmy can produce recommendations engineers trust and that those recommendations improve operating results after deployment.",
        ],
      },
      {
        heading: "The verification problem",
        paragraphs: [
          "Scientific discovery has a higher bar than fluent writing. A model can produce a convincing explanation while quietly violating a conservation law, applying a formula outside its valid range, or assuming a material behaves differently than it does in the real world.",
          "PSI is responding with what it calls hard verifiers. These can include equations, numerical solvers, physics simulators, experimental measurements, and separate agents assigned to attack a proposed result. The company says important conclusions require multiple independent forms of support.",
          "That architecture is promising, but it is not automatic proof. Simulations inherit the limits of their inputs and models. Two agents can agree because they share the same blind spot. An automated audit can miss a flawed assumption that an experienced scientist would question immediately.",
          "The strongest evidence will come from reproducible results evaluated outside PSI. That means published methods, independent replication, real experiments, and engineering outcomes that can be measured against a clear baseline. The company has described its safeguards, but it has not yet published a broad record of peer reviewed discoveries produced by Emmy.",
        ],
      },
      {
        heading: "An early test beyond Earth",
        paragraphs: [
          "PSI is also a founding technical partner for the Fermi Explorer Mission, a privately funded concept for an AI planned journey toward Alpha Centauri. The company says Emmy assessed the mission physics and identified a more efficient trajectory under mass and budget constraints.",
          "The project is meant to test more than orbital mathematics. PSI says it will contribute scientific instruments and use AI across mission planning, spacecraft design, and research operations. A space mission forces every recommendation to contend with limited energy, limited mass, radiation, communications delay, and very little room for repair.",
          "The destination makes for a dramatic announcement, but the practical value may come from the engineering discipline. Systems built for extreme constraints can generate tools for power management, thermal control, materials, sensing, and autonomous operations closer to home.",
          "For now, the Fermi Explorer remains a mission concept rather than evidence that PSI has solved interstellar travel. The company has not published a launch date, final spacecraft design, complete budget, or independent technical validation of the proposed trajectory.",
        ],
      },
      {
        heading: "Who is building it",
        paragraphs: [
          "Matthew Pines serves as chief executive. Alex Wissner Gross is chief scientist and chief of strategy. Alex Klokus is president, and Alessandro Morari is chief technology officer. PSI says its team includes more than 25 researchers and engineers.",
          "Wissner Gross is a physicist, computer scientist, entrepreneur, and investor whose work has crossed artificial intelligence, information theory, and complex systems. Pines has worked at the intersection of emerging technology and national security. Klokus previously founded Futurism, and Morari has worked on machine learning systems and scientific computing.",
          "The funding syndicate gives PSI time to recruit expensive technical talent and build the simulation, data, and verification infrastructure required for its approach. It also creates expectations. A $58 million seed round is unusually large, and investors will eventually look for evidence that autonomous research campaigns can become a repeatable product rather than a collection of impressive demonstrations.",
        ],
      },
      {
        heading: "What still needs to be proven",
        paragraphs: [
          "PSI has presented a detailed vision, but many commercial details remain private. The company has not disclosed pricing, revenue, named customers beyond its reported early data center work, contract values, or the performance gains produced by Emmy.",
          "There is also a gap between optimizing a known system and discovering new physics. Improving a cooling design can be evaluated against engineering metrics. Finding a new law of nature requires evidence that holds up across experiments, institutions, and years of scrutiny. Success in the first category would not automatically prove success in the second.",
          "The next milestones should be concrete: a data center design that delivers measured savings, an independently reproduced scientific result, a published verification method, or an engineering system that performs better because Emmy found an approach humans had missed.",
          "PSI has assembled capital, technical talent, and a serious first market. It is now trying to prove that AI can move beyond assisting scientists and begin coordinating the machinery of discovery itself. The idea is bold. The results will have to be unusually solid.",
        ],
      },
    ],
    sources: [
      {
        label: "Physical Superintelligence company overview and research approach",
        url: "https://www.psi.inc/",
      },
      {
        label: "Physical Superintelligence launch and funding announcement",
        url: "https://www.prnewswire.com/news-releases/introducing-physical-superintelligence-the-worlds-most-advanced-physics-lab-staffed-by-virtual-physicists-to-discover-new-laws-of-the-universe-302865561.html",
      },
      {
        label: "Semafor coverage of PSI and its data center work",
        url: "https://www.semafor.com/article/09/02/2026/startup-launches-ai-physics-lab-to-maximize-data-center-efficiency",
      },
      {
        label: "HPCwire coverage of the $58 million seed round",
        url: "https://www.hpcwire.com/off-the-wire/physical-superintelligence-raises-58m-to-develop-ai-physics-platform/",
      },
      {
        label: "Alex Wissner Gross professional background",
        url: "https://www.alexwg.org/",
      },
    ],
  },
  {
    slug: "caterpillar-fieldai-industrial-ai-robots-digital-twins",
    title:
      "Caterpillar taps FieldAI to bring autonomous robots and digital twins to industrial sites",
    summary:
      "The heavy equipment leader is combining its industrial data and engineering expertise with FieldAI's robot foundation models and NVIDIA's simulation stack.",
    category: "Physical AI News",
    publishedDate: "2026-09-05",
    publishedLabel: "September 5, 2026",
    author: {
      name: "Rodolfo Garcia Calderoni, CFA",
      href: "/about",
    },
    image: "/images/news/caterpillar-fieldai-industrial-ai.png",
    imageAlt:
      "Editorial image of an autonomous inspection robot mapping a large yellow industrial machine",
    imageCaption:
      "An editorial interpretation of autonomous inspection and digital twin technology operating around heavy industrial equipment.",
    readingTime: "7 min read",
    keyPoints: [
      "Caterpillar and FieldAI will work on autonomous inspections, live digital twins, situational awareness, and operational optimization.",
      "FieldAI's software is designed to work across different robot bodies and make decisions at the edge in changing industrial environments.",
      "The companies did not name specific machines, deployment sites, customer programs, pricing, or a commercial rollout date.",
    ],
    sections: [
      {
        heading: "Industrial muscle is getting a robot brain",
        paragraphs: [
          "Caterpillar is bringing another artificial intelligence specialist onto the jobsite. The heavy equipment company announced a collaboration with FieldAI on September 2 to develop autonomous robots, digital twins, and operational intelligence for factories and industrial sites.",
          "The pairing is straightforward. Caterpillar brings more than a century of experience building equipment for construction, mining, energy, and manufacturing. It also brings engineering talent, operational data, customers, and a global dealer network. FieldAI brings software designed to help different kinds of robots understand and move through places that refuse to stay neat.",
          "Those places are the point. A traditional robot works best when the floor, task, and traffic pattern are predictable. A mine, construction site, or active factory can change by the hour. Materials move, surfaces get dirty, people cross paths with machines, and yesterday's map can become obsolete before lunch.",
          "Caterpillar says the collaboration is intended to improve safety, productivity, and operating efficiency. It is not announcing a finished product yet. The companies did not identify a specific Cat machine that will use FieldAI, a customer receiving the technology, or a date when it will become commercially available.",
        ],
      },
      {
        heading: "What the companies plan to build",
        paragraphs: [
          "The first area is autonomous inspection. A mobile robot could travel through a factory, equipment yard, construction site, or mine and collect visual, thermal, acoustic, depth, and other sensor data. That can give operators a more consistent view of equipment condition while reducing the need for people to enter hazardous or difficult areas.",
          "The second area is digital twins. Instead of treating a digital twin as a model created once during design, FieldAI wants robots to update the virtual copy while they perform ordinary missions. A robot moving through the site becomes a roaming sensor that records how equipment, infrastructure, inventory, and working conditions are changing.",
          "The third area is situational awareness. The companies want to turn those observations into warnings and useful context for human teams. Potential examples include identifying a blocked route, detecting an equipment anomaly, documenting construction progress, or noticing a developing safety risk sooner.",
          "The fourth area is operational optimization. Once a site has current data and a usable digital model, teams can test layouts, study traffic, simulate changes, and look for bottlenecks before interrupting the real operation. Caterpillar has not said which of these applications will reach customers first or how the work will be packaged and sold.",
        ],
      },
      {
        heading: "FieldAI brings the autonomy layer",
        paragraphs: [
          "FieldAI does not build its business around one robot. Its Field Foundation Models are intended to provide a common autonomy layer across quadrupeds, wheeled robots, humanoids, and other mobile machines. The company calls this approach robot agnostic because the same underlying intelligence can be adapted to more than one hardware platform.",
          "The models combine learned behavior with physics based reasoning and uncertainty awareness. In practical terms, FieldAI wants a robot to recognize when the environment does not match its expectations, estimate the risk, and choose a more conservative action. That might mean slowing down, finding another route, or stopping instead of confidently making the wrong move.",
          "FieldAI says its systems can navigate without prior maps, GPS, fixed routes, or a constant cloud connection, with decisions made on the robot at the edge. Those capabilities matter in underground mines, remote energy facilities, and unfinished buildings where connectivity and mapping cannot be taken for granted.",
          "The company announced $405 million across two funding rounds in August 2025. It also says its technology has been tested or deployed across hundreds of industrial environments on three continents. Those figures come from FieldAI, which does not publish a detailed site list, fleet count, or operating hour breakdown. Still, partnerships with Boston Dynamics, Big D Construction, DPR Construction, Certis, and now Caterpillar suggest the company is pushing beyond isolated demonstrations.",
        ],
      },
      {
        heading: "The digital twin is more than a polished rendering",
        paragraphs: [
          "A useful digital twin has to reflect the current site, not the version captured weeks ago. FieldAI says robots can gather vision, depth, LiDAR, and other sensor data during normal operations, then turn that information into a continuously evolving three dimensional record.",
          "That record can serve two jobs. Operators can use it to understand the site today. Engineers can also use it as a realistic environment for testing how robots might behave tomorrow. The same unusual surface, reflective object, narrow passage, or changing light condition seen in the field can become part of the simulation and validation process.",
          "FieldAI is using NVIDIA Omniverse technologies to support this loop. Omniverse NuRec helps reconstruct an environment from sensor data. Isaac Sim and Isaac Lab support simulation, testing, and robot learning. NVIDIA OSMO helps coordinate data processing and model development workflows.",
          "The result is a useful flywheel if it works as described. Robots collect real operating data. That data improves the digital environment used for testing. Better tests improve the autonomy software. The updated software returns to the field and encounters more situations. Caterpillar's industrial footprint could give that loop far more variety than a controlled robotics lab ever could.",
        ],
      },
      {
        heading: "NVIDIA is already underneath the stack",
        paragraphs: [
          "The FieldAI agreement fits into a larger Caterpillar technology plan. At CES in January, Caterpillar expanded its collaboration with NVIDIA across intelligent machines, factory systems, supply chain operations, and digital twins.",
          "Caterpillar is already using NVIDIA accelerated computing and Omniverse libraries to model factories and test operational changes. It has also introduced the Cat AI Assistant, which is designed to connect equipment knowledge, fleet information, service guidance, and future assistance inside the machine cab.",
          "FieldAI adds a mobile autonomy layer to that foundation. NVIDIA provides much of the compute, simulation, and development infrastructure. FieldAI provides models that decide how robots perceive risk and move through changing environments. Caterpillar supplies the industrial context, equipment knowledge, operating data, and path to customers.",
          "That division of labor is important. None of the three layers is enough by itself. A realistic simulation does not operate a robot. An autonomy model without industrial knowledge may miss what matters on a jobsite. A machine with excellent hardware still needs software that can understand the environment around it.",
        ],
      },
      {
        heading: "Inspection is the sensible place to start",
        paragraphs: [
          "The most practical early use case is inspection rather than fully autonomous heavy equipment. A robot that observes, maps, and reports can create value without immediately taking control of a machine that weighs tens or hundreds of tons.",
          "Factories need repeated checks of gauges, motors, electrical equipment, safety conditions, and material flow. Construction teams need current documentation of progress and changing site conditions. Mines and energy facilities need visibility in areas that can be remote, unstable, hot, dark, dusty, or dangerous.",
          "A mobile robot can perform the repetitive collection work while engineers, operators, and safety teams decide what action to take. The potential business case includes fewer manual rounds, more consistent documentation, earlier fault detection, better planning, and less exposure to hazardous areas.",
          "That business case still needs evidence from the Caterpillar collaboration. The announcement provides no measured savings, inspection accuracy, incident reduction, deployment cost, or customer return. Buyers should watch for results from actual operating sites rather than assuming every proposed benefit will appear automatically.",
        ],
      },
      {
        heading: "Caterpillar gives FieldAI a serious proving ground",
        paragraphs: [
          "Caterpillar reported $67.6 billion in sales and revenue for 2025. Its products operate across construction sites, mines, factories, energy projects, and transportation systems. That reach gives FieldAI access to a much wider set of machines and operating conditions than a robotics startup could reproduce on its own.",
          "The relationship can work in the other direction too. Caterpillar has decades of machine data and a long history with autonomy, particularly in mining. FieldAI may help the company apply that knowledge across more robot types and more flexible tasks without creating a separate autonomy stack for every machine.",
          "The global dealer network could eventually become part of deployment and support, although Caterpillar has not said that dealers will sell or service FieldAI products. That distinction matters. Industrial buyers care about installation, training, maintenance, cybersecurity, spare parts, and response time just as much as model performance.",
          "For now, the agreement should be read as a development and commercialization signal. Caterpillar believes FieldAI has performed well enough in complex environments to justify deeper work. FieldAI gains one of the strongest possible industrial partners. What neither company has provided is the operating plan that connects the announcement to a repeatable product.",
        ],
      },
      {
        heading: "What still needs to be answered",
        paragraphs: [
          "The biggest open question is scope. The release refers to jobsites, factories, autonomy, and robotics, but it does not say whether FieldAI will first run on inspection robots, Cat equipment, third party machines, or a combination of all three.",
          "The safety case is another unknown. Risk aware behavior is an important design goal, but an industrial deployment also needs validation procedures, operating limits, human oversight, cybersecurity controls, incident response, and clear responsibility when the system encounters something unexpected.",
          "Commercial details are missing as well. Caterpillar and FieldAI did not disclose investment terms, contract value, pricing, exclusivity, customer commitments, or revenue expectations. The announcement also provides no fleet target or implementation schedule.",
          "What comes next: named pilot sites, the first supported robot platforms, evidence from daily operations, and metrics that show whether the system improves inspection speed, safety, equipment availability, or project execution. The partnership has the right ingredients. The next test is whether those ingredients become a product customers can deploy repeatedly.",
        ],
      },
    ],
    sources: [
      {
        label: "Caterpillar announcement of its collaboration with FieldAI",
        url: "https://www.caterpillar.com/en/news/corporate-press-releases/h/caterpillar-and-fieldai-advance-ai-powered-industrial-innovation.html",
      },
      {
        label: "FieldAI news archive and Caterpillar announcement",
        url: "https://www.fieldai.com/news",
      },
      {
        label: "FieldAI overview of its industrial applications",
        url: "https://www.fieldai.com/solutions",
      },
      {
        label: "FieldAI explanation of its NVIDIA Omniverse workflow",
        url: "https://www.fieldai.com/news/fieldai-and-nvidia-omniverse-building-the-next-generation-of-industrial-ai",
      },
      {
        label: "FieldAI announcement of $405 million in funding",
        url: "https://www.fieldai.com/news/fieldai-announces-over-400m-in-funds-raised-to-advance-embodied-ai-at-scale",
      },
      {
        label: "Caterpillar and NVIDIA industrial AI collaboration",
        url: "https://www.caterpillar.com/en/news/corporate-press-releases/h/cat-nvidia-collab.html",
      },
      {
        label: "Construction Dive coverage of the Caterpillar and FieldAI collaboration",
        url: "https://www.constructiondive.com/news/caterpillar-partners-fieldai-equipment-automation/829708/",
      },
      {
        label: "FieldAI and Boston Dynamics construction robotics partnership",
        url: "https://www.fieldai.com/news/boston-dynamics-and-fieldai-partner-to-bring-robots-into-uncharted-and-dynamic-environments",
      },
    ],
  },
  {
    slug: "lyte-raises-165-million-physical-ai-perception",
    title:
      "Lyte raises $165 million at $1.6 billion valuation as investors pile into physical AI",
    summary:
      "The former Apple and PrimeSense team is moving its integrated robot perception platform into production with fresh capital for silicon, sensors, software, and commercial expansion.",
    category: "Physical AI News",
    publishedDate: "2026-09-04",
    publishedLabel: "September 4, 2026",
    author: {
      name: "Rodolfo Garcia Calderoni, CFA",
      href: "/about",
    },
    image: "/images/news/lyte-series-c-physical-ai-perception.png",
    imageAlt:
      "Editorial visualization of a mobile robot and robotic arm sharing an integrated spatial perception field",
    imageCaption:
      "An editorial interpretation of the integrated sensing, custom silicon, and spatial software at the center of Lyte's platform.",
    readingTime: "7 min read",
    keyPoints: [
      "Lyte raised a $165 million Series C led by Maverick Silicon at a $1.6 billion post money valuation.",
      "The financing brings total capital raised to $272 million and comes eight months after the company emerged from stealth.",
      "Lyte says it has entered production and is shipping its perception platform to robotics customers in inspection, logistics, and manufacturing.",
    ],
    sections: [
      {
        heading: "Lyte joins the unicorn club",
        paragraphs: [
          "Lyte just raised $165 million to solve a basic robotics problem: machines still struggle to see the world reliably.",
          "Maverick Silicon led the Series C, with Fidelity Management and Research Company, Atreides Management, Key1 Capital, Ora Global, and other investors joining the round. The deal values Lyte at $1.6 billion after the investment and brings its total capital raised to $272 million.",
          "Andrew Homan, managing partner at Maverick Silicon, is joining the board. Lyte says the money will help it produce more sensing silicon, expand its LyteVision platform, improve its perception software, and support more robotics customers.",
          "The speed is hard to miss. Lyte emerged from stealth in January with $107 million in aggregate funding. Eight months later, it has a unicorn valuation and a much larger manufacturing assignment.",
        ],
      },
      {
        heading: "From Face ID to factory floors",
        paragraphs: [
          "The founding team knows a few things about teaching machines to see. Alexander Shpunt cofounded PrimeSense, whose depth technology powered the original Microsoft Kinect. Apple acquired PrimeSense in 2013, and Lyte's founders later worked on sensing systems connected to Apple's depth platform and Face ID.",
          "Shpunt started Lyte with Arman Hajati and Yuval Gerson in 2021. Their bet is that the integrated approach used in consumer electronics can solve a growing headache for robot companies.",
          "A robot does not experience a camera as one neat stream of truth. It has to coordinate optics, depth, color, motion, timing, inertial data, calibration, compute, and software. If those layers disagree, the robot can misunderstand where an object is or where it is heading. That is inconvenient for a warehouse robot and potentially dangerous for a machine working beside people.",
        ],
      },
      {
        heading: "What Lyte actually sells",
        paragraphs: [
          "The core product is LyteVision. It combines 4D coherent vision, high resolution color imaging, and an inertial measurement unit in one sensing platform. Lyte's custom silicon synchronizes and fuses those inputs at the edge before sending the result into the robot's control stack.",
          "The fourth dimension is motion. Many perception systems estimate movement by comparing separate images after capture. Lyte says its system measures position and motion together, giving a robot a more immediate view of where something is and where it is going.",
          "The broader platform is called Lyte Galaxy. It connects the sensing modules, custom compute, spatial software, and algorithms. Lyte is pitching that stack to makers of autonomous mobile robots, robot arms, delivery vehicles, quadrupeds, robotaxis, and humanoid robots.",
          "In plain English, Lyte wants robot builders to spend less time getting sensors to agree and more time making the robot useful.",
        ],
      },
      {
        heading: "Why investors care",
        paragraphs: [
          "Robot perception is usually assembled from parts made by several suppliers. Each component can arrive with its own clock, coordinate system, interface, data format, and calibration routine. Engineers have to stitch everything together before they can tackle navigation, manipulation, or safety.",
          "Lyte argues that one synchronized platform can remove much of that work. The possible benefits are lower latency, less calibration drift, cleaner data, fewer cables, and a faster path from prototype to production.",
          "Owning the stack also gives Lyte more ways to build a durable business. Custom silicon can create technical differentiation. Software and developer tools can make the platform harder to replace. Production design wins can turn one customer relationship into years of repeat hardware shipments.",
          "There is a catch. Building chips and sensors is expensive. It requires specialized teams, manufacturing partners, quality control, supply planning, and enough unit volume to spread those costs. The new round gives Lyte more room to prove that the integrated model works commercially.",
        ],
      },
      {
        heading: "The real signal is production",
        paragraphs: [
          "The valuation makes the headline, but production is the part worth watching. Lyte says it is already shipping to robotics customers in inspection, logistics, and manufacturing. That suggests LyteVision has moved beyond laboratory evaluation.",
          "The company has not named those customers or disclosed shipment volumes, revenue, contract sizes, or how many production programs are active. So the claim is meaningful, but still difficult to measure from the outside.",
          "The target industries fit the product. Logistics robots must track pallets, forklifts, workers, and changing aisle conditions. Manufacturing systems need precise vision for inspection and manipulation. Field inspection robots have to perceive through difficult lighting, terrain, and weather.",
          "Lyte is also working with NVIDIA. Its platform can stream sensing data into GPU memory through NVIDIA Holoscan Sensor Bridge, creating a direct path from physical capture into simulation, training, and digital twins. It has also joined the NVIDIA Halos ecosystem, which focuses on safety systems for robots working around people.",
        ],
      },
      {
        heading: "What $165 million buys",
        paragraphs: [
          "First, manufacturing. Lyte plans to scale production of its sensing chips and complete LyteVision modules. That means more than ordering wafers. It includes assembly, calibration, testing, packaging, supply assurance, and field support.",
          "Second, software. Clean sensor data only becomes valuable when robot developers can integrate it, inspect it, and trust it. Lyte will keep investing in perception algorithms, artificial intelligence, developer tools, and the software that connects physical capture to robot decisions.",
          "Third, people. The company expects to hire across silicon, optics, software, manufacturing, operations, and commercial roles. This is what happens when your product spans everything from photons to a customer's factory floor.",
        ],
      },
      {
        heading: "Reality check",
        paragraphs: [
          "A $1.6 billion valuation shows that investors are confident. It does not show that Lyte has already won the market.",
          "The company has not published pricing, annual revenue, gross margins, production yield, customer concentration, or field reliability. It also does not provide detailed public data sheets for the current product. Buyers still need to validate range, accuracy, field of view, update rate, power use, environmental protection, interfaces, and failure behavior for the exact module they plan to deploy.",
          "Robot makers will also consider supplier dependence. One integrated module can save months of engineering, but it places sensing, processing, calibration, and software with a single company. Customers will want a stable product road map, dependable supply, safety evidence, strong support, clear data terms, and a credible service plan.",
        ],
      },
      {
        heading: "The bigger funding picture",
        paragraphs: [
          "Lyte is riding a much larger wave. Crunchbase reported that physical AI companies raised $47.4 billion across 521 deals during the first half of 2026. That was nearly four times the $12 billion raised during the second half of 2025. A few enormous rounds and a broad category definition can move those totals, but the direction is clear.",
          "Most robotics attention goes to complete machines and foundation models. Lyte offers investors a different route. Every robot needs reliable information about geometry, color, and motion before any model can make a useful decision. A perception supplier can sell across many kinds of machines without building every robot itself.",
          "What comes next: customer names, repeat orders, production volume, and evidence that LyteVision works outside controlled demonstrations. Lyte now has the capital. The harder job is turning perception into a standard component that robot makers keep buying.",
        ],
      },
    ],
    sources: [
      {
        label: "Lyte announcement of its $165 million Series C",
        url: "https://lyte.ai/news/series-c",
      },
      {
        label: "Lyte technology overview for LyteVision and Lyte Galaxy",
        url: "https://lyte.ai/technology",
      },
      {
        label: "Lyte announcement of its NVIDIA Halos participation",
        url: "https://lyte.ai/news/safer-robots",
      },
      {
        label: "Lyte news archive and emergence from stealth announcement",
        url: "https://lyte.ai/news",
      },
      {
        label: "Crunchbase News report on the funding round and physical AI investment",
        url: "https://news.crunchbase.com/venture/robotics-ai-startup-lyte-seriesc-raise-maverick/",
      },
      {
        label: "CTech report on Lyte's funding, founders, and perception platform",
        url: "https://www.calcalistech.com/ctechnews/article/4dsejsrni",
      },
    ],
  },
  {
    slug: "xynova-prima-1-direct-drive-robotic-hand",
    title:
      "Xynova introduces Prima 1, a direct drive robotic hand with 22 degrees of freedom",
    summary:
      "The human scale hand combines independent joint actuation, precise force control, and visual touch sensing for demanding manipulation tasks.",
    category: "Physical AI News",
    publishedDate: "2026-09-03",
    publishedLabel: "September 3, 2026",
    author: {
      name: "Rodolfo Garcia Calderoni, CFA",
      href: "/about",
    },
    image: "/images/news/xynova-prima-1-physical-ai.png",
    imageAlt:
      "Editorial illustration of a dexterous robotic hand drawing with a pencil",
    imageCaption:
      "An editorial interpretation of the precise drawing task Xynova demonstrated with Prima 1 at the World Robot Conference.",
    readingTime: "6 min read",
    keyPoints: [
      "Prima 1 has 22 independently driven degrees of freedom in a hand that weighs about 850 grams.",
      "Xynova reports a full open and close cycle of 0.08 seconds, force control accuracy of 0.5 newtons, and lifting capacity of up to 20 kilograms.",
      "Visual and touch sensors across all five fingers provide contact data for precise manipulation and robot learning.",
    ],
    sections: [
      {
        heading: "A new hand for precise manipulation",
        paragraphs: [
          "Xynova has introduced Prima 1, a dexterous robotic hand designed to combine human scale movement with the speed, strength, and sensing needed for advanced manipulation. The company first revealed the hand online before giving it a public debut at the 2026 World Robot Conference in Beijing.",
          "At the conference, a robot equipped with Prima 1 held a pen and drew an outline on paper. The demonstration looked simple, but it brought several difficult requirements together. The hand had to maintain a stable grip, control the pressure at the pen tip, and coordinate a continuous path without crushing the tool or losing contact with the page.",
          "Prima 1 has 22 active degrees of freedom, which means its fingers and joints can form a wide range of poses without depending on a small number of mechanically linked motions. The hand measures 190 millimeters in length and weighs about 850 grams, according to reporting from the conference. Its proportions are close to those of a human hand, making it easier to use tools and workspaces designed for people.",
        ],
      },
      {
        heading: "Direct drive puts the motors at the joints",
        paragraphs: [
          "The central design choice is a fully direct drive architecture. Each active joint is controlled by its own motor instead of relying on tendons or cables that pull the fingers from a distance. Xynova describes the mechanism as having zero backlash, meaning there should be very little unwanted movement when a motor changes direction.",
          "That arrangement can make force control more transparent because commands move through fewer flexible mechanical elements before reaching the joint. It can also make the hand easier to move backward when an outside force is applied. Prima 1 has a stated minimum backdrive torque of 0.04 newton meters, a feature intended to support compliant motion and safer contact.",
          "Direct drive is not a free advantage. Fitting motors, sensors, control electronics, and communications into a hand sized package creates challenges around heat, weight, power use, and durability. Prima 1 is Xynova's answer to that packaging problem. The company says the complete hand can open and close in 0.08 seconds while maintaining a control response bandwidth of 1 kilohertz.",
        ],
      },
      {
        heading: "Vision and touch meet at the fingertips",
        paragraphs: [
          "Movement alone does not tell a robot whether an object is secure. Prima 1 includes visual and touch sensing across all five fingers, allowing the control system to observe small changes at the points of contact. That feedback can help detect where an object is touching the hand, how pressure is distributed, and whether the object begins to slip.",
          "The company reports force control accuracy of 0.5 newtons and repeatability of 0.5 millimeters. Together, those figures describe a hand intended to do more than reach a commanded position. It is designed to adjust force while it moves, which is useful for tasks such as holding tools, handling delicate materials, and maintaining a stable grasp as an object changes orientation.",
          "Xynova calls the sensing system visual touch because it combines optical information inside the fingertips with tactile feedback. This type of sensor can produce richer data than a simple contact switch. The resulting streams can also be recorded for training and evaluating manipulation policies.",
        ],
      },
      {
        heading: "Strength in a human scale package",
        paragraphs: [
          "Xynova says each of four fingers can deliver at least 15 newtons of fingertip force and that the hand can lift objects weighing up to 20 kilograms. Those numbers describe different kinds of strength. Fingertip force matters during pinching and controlled contact, while the lifting figure reflects a broader grasp in a favorable configuration.",
          "A demonstration or maximum rating does not establish how a hand will perform through a full workday. Useful comparisons will depend on the object shape, wrist orientation, speed, thermal limits, safety settings, and how long the hand must hold the load. Still, the combination of an 850 gram hand and a stated 20 kilogram lifting capacity gives developers a sense of the operating range Xynova is targeting.",
          "The company showed that range by placing Prima 1 beside its Flex 2 hand at the conference. Prima 1 handled the drawing demonstration, while robots using Flex 2 performed tasks such as carrying a birdcage, moving a fan, and pouring liquids. The two products represent different mechanical approaches within Xynova's growing hand portfolio.",
        ],
      },
      {
        heading: "Built as a development platform",
        paragraphs: [
          "The World Robot Conference lists the Prima series as a research grade platform for embodied intelligence development. That positioning is important because dexterous hands are often evaluated as part of a larger system that includes cameras, robot arms, simulation, data collection, and learned control models.",
          "A hand with independently controlled joints creates a large action space. That gives a model more ways to approach an object, but it also increases the amount of data and control work required to produce reliable behavior. Fast sensing and force feedback can help close that loop by giving the system frequent information about what happened after each motion.",
          "Conference coverage reports support for CAN FD and EtherCAT communications, ROS 1 and ROS 2, and model formats for MuJoCo and Isaac Lab. Those integrations would let research teams connect the hand to common robot software and simulation tools. Xynova's public product page, however, does not yet provide detailed documentation for every interface, so buyers will need to confirm the available software package and integration support directly with the company.",
        ],
      },
      {
        heading: "What still needs to be proven",
        paragraphs: [
          "Prima 1 arrives with an ambitious specification sheet and a memorable public demonstration. The next evidence will come from sustained use outside Xynova's own booth. Developers will want to see grasp success across varied objects, resistance to impacts and dust, thermal behavior during repeated motion, calibration stability, repair procedures, and the quality of the software tools.",
          "Price and general availability will also shape adoption. Xynova invites customers to place orders through its product page, but it does not publish a price or delivery schedule. The company says it operates an integrated production line for motors, controllers, actuators, and hand assembly, which may give it more control over manufacturing as demand grows.",
          "For now, the performance figures in this report should be read as manufacturer claims unless otherwise noted. Prima 1 gives researchers and robot builders another technically distinct option in a rapidly expanding market for dexterous hands. Its real test will be whether the speed, sensing, and strength shown in controlled demonstrations remain dependable during long, unpredictable tasks.",
        ],
      },
    ],
    sources: [
      {
        label: "Xynova product specifications for Prima 1",
        url: "https://xynova.com.cn/en/xynova-prima-1",
      },
      {
        label: "World Robot Conference exhibitor profile for Xynova",
        url: "https://wrc.cie.org.cn/list_339/525.html",
      },
      {
        label: "NE Time report from the Prima 1 public debut",
        url: "https://www.ne-time.cn/web/article/39489",
      },
      {
        label: "Caijing report on dexterous hands at the 2026 conference",
        url: "https://m.caijing.com.cn/s/202608/5178196",
      },
    ],
  },
];

export function getNewsUpdateBySlug(slug: string) {
  return newsUpdates.find((update) => update.slug === slug);
}
