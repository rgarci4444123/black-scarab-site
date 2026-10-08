import type { CaseStudyArticle } from "@/lib/case-studies";

export const robotPoliciesDeepDive = (): CaseStudyArticle => ({
  slug: "robot-policies-how-machines-learn-to-work",
  title: "Robot Policies: The Software That Makes Machines Useful",
  summary: "The next leap in robotics depends on how machines learn to act. Inside the models, companies and recent breakthroughs expanding what robots can do.",
  seoTitle: "Robot Policies: How Machines Learn to Work",
  seoDescription: "How robot policies work, why recent breakthroughs matter, who is building them, and how open models and new business opportunities are changing robotics.",
  typeLabel: "Deep Dive",
  formatLabel: "Robot learning and industry analysis",
  industry: "Robotics",
  image: "/article-images/robot-policies-cover.png",
  imageAlt: "Futuristic editorial interpretation of a robot arm moving an amber component, with translucent possible movements in a deep illuminated workcell.",
  imageCaption: "Editorial illustration by Black Scarab.",
  author: {
    name: "Rodolfo Garcia Calderoni, CFA",
    href: "/about"
  },
  tags: [
    "Robot policies",
    "Robot learning",
    "Vision language action",
    "Generalist robotics",
    "Physical Intelligence",
    "Skild AI"
  ],
  sections: [
    {
      paragraphs: [
        "A robot can have excellent cameras, strong motors and beautifully engineered hands, yet still struggle to clear a table. It has to recognize what is there, decide how to approach it, grip without breaking anything and adjust when an object slips. Then it has to do the next thing.",
        "The software responsible for choosing those actions is called a robot policy. The term sounds academic. The problem it addresses is wonderfully concrete: how do you turn a capable machine into one that knows what to do?",
        "That question has become one of the most consequential in robotics. Researchers are developing policies that draw on experience across tasks and machines. Companies are testing whether a robot can learn from a short demonstration or perform familiar work somewhere it has never been. Large financing rounds are supporting the collection of physical experience needed to make those ambitions practical.",
        "The opportunity is to make useful behavior easier to acquire, adapt and repeat. Understanding that shift gives us a much better way to follow the progress of robotics than judging the latest machine by how human it looks."
      ],
      visuals: [
        {
          afterParagraphIndex: 4,
          src: "/article-images/robot-policies-robot-intelligence-evolution-final.webp",
          alt: "The Evolution of Robot Intelligence: selected milestones from programmed control through learned and generalist robot policies.",
          caption: "Selected historical milestones.",
          width: 1663,
          height: 932,
          fullSizeLink: "/article-images/robot-policies-robot-intelligence-evolution-final-4x.png"
        }
      ]
    },
    {
      heading: "The step between understanding and action",
      paragraphs: [
        "Imagine asking a robot to put a mug on a shelf. Recognizing the mug and understanding the sentence are only the beginning. The machine must choose where to grip, how far to lift, which route to follow and when to release. As it moves, fresh observations may reveal that its original choice needs adjusting.",
        "A policy maps observations to actions. Its inputs might include camera images, joint positions, force measurements and a task instruction. Its outputs might specify a target position for the hand, a sequence of joint movements or motor torques. Different systems operate at different levels of that stack.",
        "A policy can be explicitly engineered. The current wave of research focuses on learning more of this behavior from data. In imitation learning, a person demonstrates useful actions and a model learns to reproduce them. In reinforcement learning, the system practices and receives feedback about outcomes. These approaches can be combined with conventional planning and control.",
        "A modern model may propose several movements at once, execute part of the sequence and then reconsider using new observations. That feedback is essential. The world changes as soon as the robot touches it.",
        "This is also why a robot policy is more than a chatbot with a mechanical arm attached. A language model can describe a successful grasp. An action policy must produce movements the particular machine can execute. Below it, controllers regulate the hardware; safety functions constrain operation. Above it, a planner may divide a complicated request into smaller tasks.",
        "Google's Gemini Robotics family makes the distinction especially clear. Its vision language action models produce robot actions, while Gemini Robotics ER 2 handles higher level reasoning and coordinates lower level systems. Thinking about what comes next and moving correctly are connected capabilities, each with its own demands."
      ],
      visuals: [
        {
          afterParagraphIndex: 4,
          src: "/article-images/robot-policies-01-policy-loop.webp",
          alt: "Simplified operating loop: observations inform policy actions, controllers move the machine, and fresh observations guide the next action.",
          caption: "Black Scarab functional illustration.",
          width: 1663,
          height: 932,
          mobileSrc: "/article-images/robot-policies-01-policy-loop-mobile.webp",
          mobileWidth: 820,
          mobileHeight: 1440,
          mobileBreakpoint: 1000
        }
      ]
    },
    {
      heading: "Why the timing matters",
      paragraphs: [
        "Robotics has always had a strong reason to become more adaptable. A production line benefits when it can handle more variation. A warehouse benefits when equipment can deal with changing objects. A household presents variation almost everywhere. The recent change is that several technical routes to that adaptability are becoming more credible at the same time.",
        "The first is the ability to reuse visual and language understanding learned outside robotics. Models trained on images and text can provide a starting point for recognizing objects and interpreting requests. Robot learning then has to connect that knowledge to physical actions. Google's RT 2 research in 2023 was an influential demonstration of that connection.",
        "The second is better access to shared physical experience. Open X Embodiment brought together more than one million robot trajectories across 22 robot embodiments. A trajectory is a record of observations and actions during an attempt. Pooling those records allowed researchers to test whether experience collected on different machines could help a shared model.",
        "The third is improvement in how models generate movement. Diffusion Policy, introduced in 2023, adapted a generative modeling approach to sequences of robot actions. Physical Intelligence's π0 later used flow matching to generate continuous actions. The important point for a general reader is that a model has to coordinate movement through time, rather than identify a single correct answer.",
        "Training tools are advancing alongside the models. Simulation allows machines to accumulate practice without wearing out a physical robot on every attempt. NVIDIA's GR00T program combines robot learning with a broader ecosystem of simulation and computing. Unitree publishes tools for training locomotion policies in simulation and transferring them to real machines.",
        "There is also a substantial population of machines to build on. The International Federation of Robotics reports roughly five million industrial robots operating worldwide in 2025. Annual installations reached about 603,000, up 11%. The industry is developing new intelligence alongside an established automation market.",
        "The IFR points to demographic change, labor shortages and the relocation of manufacturing as continuing sources of demand. Those pressures help explain the interest in equipment that can do a wider range of work with less programming and integration effort. They do not determine which technical approach succeeds. They give successful approaches somewhere to matter.",
        "Our reading of this moment is that robot learning is beginning to benefit from three things at once: reusable AI capabilities, broader physical data and better ways to practice. Each is useful on its own. Together, they make more ambitious policies worth testing."
      ],
      visuals: [
        {
          afterParagraphIndex: 5,
          src: "/article-images/robot-policies-02-learning-to-act.webp",
          alt: "Selected policy milestones from RT 1 in 2022 through recent adaptation research.",
          caption: "Selected milestones from original research and company releases.",
          width: 1663,
          height: 932,
          mobileSrc: "/article-images/robot-policies-02-learning-to-act-mobile.webp",
          mobileWidth: 820,
          mobileHeight: 1440,
          mobileBreakpoint: 1000
        },
        {
          afterParagraphIndex: 6,
          src: "/article-images/robot-policies-03-automation-at-scale.webp",
          alt: "Five million operational industrial robots in 2025; annual installations rose from 390,000 in 2020 to 603,000 in 2025.",
          caption: "Data: IFR, World Robotics 2026. Installations are annual additions; operating stock is the existing fleet.",
          width: 1663,
          height: 932,
          mobileSrc: "/article-images/robot-policies-03-automation-at-scale-mobile.webp",
          mobileWidth: 820,
          mobileHeight: 1440,
          mobileBreakpoint: 1000
        }
      ]
    },
    {
      heading: "The companies behind the behavior",
      paragraphs: [
        "The names in this field can be confusing because the businesses are building different parts of the problem. Some aim to supply intelligence across many robot types. Others design the body and the behavior together. Established automation companies provide the machines, controllers and software through which new capabilities can reach customers.",
        "Physical Intelligence is one of the clearest examples of the independent model approach. Its research asks whether broad experience can produce a policy that adapts to different tasks and robot platforms. Its π0 family has become an important reference in generalist manipulation, and the company releases selected code and checkpoints through OpenPI. The attraction is reuse: a foundation of learned behavior that can be adapted to particular work.",
        "Skild AI pursues a broad robot brain intended to work across different bodies. Its recent S1 research emphasizes teaching a policy through an example supplied at use time. Generalist is another important independent developer. Its GEN models explore how large amounts of physical experience can support rapid learning of new behavior. These companies share an ambition to make intelligence transferable, while their architectures and training methods differ.",
        "Google DeepMind brings a larger multimodal AI research program to robot reasoning and action. NVIDIA participates through GR00T models, simulation tools and the computing used to train and run robotics systems. Their importance extends beyond an individual policy: the surrounding tools influence what other developers can build.",
        "Figure takes a more integrated route. Its Helix models are developed around its humanoid hardware, sensors and data collection. Boston Dynamics combines its expertise in control and mechanical engineering with learning approaches for Atlas, including reinforcement learning and demonstrations. Tesla is developing Optimus with software for balance, navigation, perception and physical interaction. At 1X, the Redwood model and world model work are tied to the development of NEO. A world model predicts how a scene may change, helping researchers study the consequences of actions.",
        "The field is international. AgiBot's GO 1 research combines a large robot dataset with a generalist policy architecture. Unitree supplies robot platforms and publishes learning software, including manipulation and locomotion projects. These efforts matter because the robot body determines what can be sensed and physically attempted, as well as how much experience developers can collect.",
        "FieldAI offers a useful reminder that robot intelligence includes moving through uncertain environments. Its autonomy software targets mobile machines operating at industrial and construction sites. The challenges of navigating a changing job site differ from those of folding a towel, even when both involve learned behavior and adaptation.",
        "Then there are the incumbents: FANUC, ABB Robotics, Yaskawa, KUKA and Universal Robots. They bring established robot and controller platforms into the story. Yaskawa's MOTOMAN NEXT combines an autonomy computing unit with its motion control technology. Universal Robots provides software interfaces and an AI Accelerator for adding capabilities to its machines. ABB describes a progression toward more autonomous and versatile robotics.",
        "The software connecting these pieces also matters. Intrinsic's Flowstate helps developers compose and deploy robot skills. Hugging Face's LeRobot provides shared tools, datasets and pretrained policies. A useful model becomes more valuable when other people can train it, connect it to a machine and evaluate the result.",
        "Skild's March 2026 announcement of partnerships with ABB Robotics and Universal Robots makes the connection tangible. The aim is to integrate its learned intelligence into established robot portfolios. This gives model developers a route to machines already designed for work, while manufacturers gain another way to expand their capabilities.",
        "Black Scarab's view is that cooperation will be as consequential as competition here. A developer with a better policy may still need a manufacturer's interfaces, an integrator's process knowledge and a customer's operational experience to make it useful."
      ]
    },
    {
      heading: "Progress that is becoming tangible",
      paragraphs: [
        "One of the most interesting recent directions is teaching a robot through an example. The question is whether showing a task can become a practical way to specify behavior, reducing the amount of new training needed for each variation.",
        "In August 2026, Skild introduced S1, describing a policy that uses a demonstration video as context without changing its model weights. The company reports results on tasks lasting up to ten minutes. The distinction matters: supplying an example to a running model is a different workflow from collecting data and retraining it for every task.",
        "Generalist's GEN 1.5 announcement that same month explored a related idea using brief physical demonstrations. Across ten simple, short tasks, the company reported an average 59% success rate with in context prompting. With additional adaptation using five minutes of data per task, it reported 83%. Those are two different learning conditions. Together, they illustrate the effort to make acquiring a new skill faster.",
        "Physical Intelligence's April 2026 π0.7 paper studied how richer guidance, including language and visual subgoals, could help a generalist policy perform new work. Its researchers reported selected transfers across tasks and platforms. The practical idea is that the way we describe a job to a model may become almost as important as collecting more demonstrations.",
        "Figure's September 2026 Helix 2.5 evaluation provides a particularly understandable example of what broader experience might contribute. The company took policies for tidying, towel folding and bed making into 30 previously unseen homes. It compared training from scratch with pretraining on its Index human behavior dataset, holding the other experimental conditions fixed.",
        "Figure reported full task success of 56% with Index pretraining, compared with 9% from scratch. The tasks had been taught using data collected elsewhere; the unfamiliar elements were the homes and objects. The result illustrates transfer to new settings. It also shows how much room remains to improve dependable completion.",
        "Another route is practice through competition. In September, Skild described a soccer policy developed through physical self play, with training in simulation followed by a demonstration on a real robot. The value of that research direction is the possibility of generating challenging practice without a person specifying every successful movement.",
        "These examples address different questions, so their headline numbers should be read within their own experiments. Collectively, they point toward an exciting change: robots are being tested on how well they adapt, learn from guidance and carry skills into fresh situations."
      ],
      visuals: [
        {
          afterParagraphIndex: 6,
          src: "/article-images/robot-policies-04-experience-that-transfers.webp",
          alt: "Figure reports full task success of 9% from scratch and 56% with Index pretraining across 30 unseen homes.",
          caption: "Company reported evaluation. Familiar tasks were taught elsewhere; homes and objects were unfamiliar.",
          width: 1663,
          height: 932,
          mobileSrc: "/article-images/robot-policies-04-experience-that-transfers-mobile.webp",
          mobileWidth: 820,
          mobileHeight: 1440,
          mobileBreakpoint: 1000
        }
      ]
    },
    {
      heading: "A growing race to collect experience",
      paragraphs: [
        "The financing reflects how resource intensive this work can be. Skild announced a $1.4 billion Series C in January 2026, led by SoftBank. Generalist announced $400 million in June, led by Radical Ventures. Bloomberg and Axios reported a $600 million Physical Intelligence round in November 2025, led by CapitalG.",
        "The companies describe spending on model research, data collection, computing and deployment. Physical data is particularly demanding. Someone has to operate or supervise machines, preserve observations and actions, assess outcomes and represent the variation the policy will encounter. A camera recording a person moving a cup provides useful information, but it does not directly record the forces and robot commands required to reproduce the movement.",
        "Simulation can expand the practice available. Real experience tests whether the lesson survives contact with imperfect sensors, unfamiliar objects and physical materials. Better ways to combine the two could change the cost and pace of development.",
        "Our interpretation of the funding wave is that several teams now see a credible path toward broadly reusable behavior. The capital gives them resources to pursue it. The most informative next evidence will be what their machines learn to complete consistently."
      ],
      visuals: [
        {
          afterParagraphIndex: 1,
          src: "/article-images/robot-policies-05-funding-robot-intelligence.webp",
          alt: "Separate financing rounds: Skild AI $1.4 billion, Physical Intelligence reportedly $600 million and Generalist $400 million.",
          caption: "Sources: Skild AI and Generalist announcements; CapitalG and outside reporting for Physical Intelligence. Amounts in US dollars.",
          width: 1663,
          height: 932,
          mobileSrc: "/article-images/robot-policies-05-funding-robot-intelligence-mobile.webp",
          mobileWidth: 820,
          mobileHeight: 1440,
          mobileBreakpoint: 1000
        }
      ]
    },
    {
      heading: "Where the opportunity becomes a business",
      paragraphs: [
        "The immediate opportunity is easier adaptation. If a robot can handle a new object or process with less engineering, more applications may become economical. That could help existing industrial arms, mobile robots and new humanoid platforms in different ways.",
        "Consider an illustrative packing task. A company introduces another product shape. Today, the change may require new tooling, vision configuration and motion programming. A more capable policy could reduce part of that effort by adapting a demonstrated behavior to the new object. The rest of the system still has to deliver the right output. The commercial benefit comes from the work and time saved across the complete process.",
        "There are several ways to charge for that benefit. An independent developer could license intelligence per machine or workcell, sell adaptation and support, or provide a fleet contract. A manufacturer could include the policy with its hardware. A service operator could charge for a robot subscription or completed work. Computing and development tools create another market around training and deployment.",
        "There are signs of an operating business taking shape. In September 2026, Skild said it had exceeded $100 million in annual recurring revenue, with more than 60 paying customers. Its founders said roughly 90% of revenue came mainly from manipulation tasks. Those company reported figures suggest that learned robot intelligence can earn revenue in specific applications while broader research continues.",
        "Some adjacent models are already visible. Universal Robots includes PolyScope with its systems and offers additional software capabilities. Google makes Gemini Robotics ER 2 available through its API, providing access to the reasoning layer. These illustrate different routes to delivering robot software, with different responsibilities and pricing units.",
        "How large could the policy business become? A simple scale illustration helps: one million robots paying an assumed $1,000 annually for intelligence would generate $1 billion in annual revenue. That calculation is a hypothetical example. What matters is how many machines benefit enough to pay, what they pay for and how much service is required to keep them working.",
        "The IFR forecasts annual industrial robot installations reaching 806,000 in 2029. That is a forecast for machines, not a forecast for learned policy revenue. Better policies could serve part of that market and enable additional applications. The opportunity could become substantial through improving established automation as well as extending it."
      ]
    },
    {
      heading: "Open models and proprietary experience",
      paragraphs: [
        "The field already combines public research with proprietary development. OpenPI, OpenVLA and LeRobot give researchers and developers tools to build on. Figure describes Helix as proprietary. Intrinsic offers open foundational infrastructure alongside its broader development platform.",
        "Openness needs a little unpacking. Publishing code makes an implementation inspectable. Publishing weights makes a trained model available to run. Sharing training data allows others to study or repeat parts of the learning process. Permission to use an artifact commercially is a separate licensing question.",
        "OpenVLA, for example, uses an MIT license for its code while its pretrained models inherit Llama 2 license terms. OpenPI releases selected checkpoints under the terms applicable to those models. An available checkpoint should be assessed together with its license and dependencies.",
        "The practical opportunity is that more people can test ideas without building every layer themselves. Independent experiments can expose weaknesses, improve tools and discover useful applications. A company can still create value through task data, adaptation, integration, service and dependable deployment.",
        "Black Scarab's expectation is that openness and proprietary experience will coexist. Widely available foundations can lower the cost of experimentation. The work required to make a machine reliable in a particular setting can remain valuable, even when some of its underlying software is shared."
      ]
    },
    {
      heading: "The next leap is useful behavior that travels",
      paragraphs: [
        "The most compelling progress is behavior that survives a change: a different room, an unfamiliar object, a shifted camera or a longer sequence. That is where a reusable policy begins to separate itself from a carefully prepared demonstration.",
        "Independent researchers at Penn's GRASP Lab explored an older π0 FAST checkpoint adapted to the DROID robot setup in more than 300 improvised trials. They found encouraging behavior with unfamiliar scenes and objects, alongside sensitivity to instructions, freezing and collision problems. Their informal evaluation captured both the promise and the remaining difficulty of generalist policies.",
        "A useful robot also has to recognize when something went wrong. A slipped object, a failed grasp or an incomplete step can invalidate the next action. Recovery, timing and verification become increasingly important as tasks grow longer. A policy that completes more of the sequence but regularly needs a person to finish it has made progress, while leaving a real operational challenge.",
        "Hardware continues to matter throughout. Vision cannot supply every detail about contact. Hands, force sensing, control quality and computing latency affect what the policy can achieve. Intelligence and the physical system have to improve together.",
        "The Black Scarab view is that robot policies deserve close attention because they govern how experience becomes useful action. Better policies can expand the value of machines already built and make new robot designs more practical. The advances worth following are those that make behavior easier to teach, more adaptable and more dependable.",
        "A robot's appearance tells us something about where it might work. Its policy increasingly determines what it can accomplish when it gets there."
      ]
    }
  ],
  sources: [
    "Google Research: RT 1 and learning robot control at scale",
    "Google DeepMind: RT 2 connects visual and language knowledge to actions",
    "Google DeepMind: Learning across different robot types",
    "Diffusion Policy: Generating coordinated action sequences",
    "Physical Intelligence: The original π0 research paper",
    "Physical Intelligence: π0.7 and richer guidance for generalist policies",
    "Skild AI: S1 learns from demonstrations in context",
    "Generalist: GEN 1.5 and learning from brief demonstrations",
    "Figure: Helix 2.5 evaluation across 30 unfamiliar homes",
    "Skild AI: Physical self play and simulated practice",
    "Google DeepMind: Gemini Robotics 2",
    "Google: Gemini Robotics ER 2 and coordinating action systems",
    "NVIDIA: GR00T N1 research",
    "Unitree: Published robot learning projects",
    "Boston Dynamics: Atlas from research to industrial work",
    "1X: Redwood and world model research",
    "AgiBot: GO 1 research and dataset",
    "FieldAI: Mobile robot autonomy applications",
    "FANUC: Robot software and control applications",
    "ABB Robotics: Autonomous versatile robotics",
    "Yaskawa: How MOTOMAN NEXT combines AI and motion control",
    "KUKA: iiQKA software ecosystem",
    "Universal Robots: PolyScope and AI software platform",
    "Intrinsic: Flowstate robotics development platform",
    "Intrinsic: Open foundational runtime and control framework",
    "Hugging Face: LeRobot tools, datasets and policies",
    "OpenVLA: Models, code and licensing",
    "Physical Intelligence: OpenPI code and released checkpoints",
    "Figure: Helix and integrated hardware development",
    "Skild AI: January 2026 Series C announcement",
    "Generalist: June 2026 financing announcement",
    "Axios: Reported Physical Intelligence financing",
    "IFR: World Robotics 2026 industrial robot results",
    "IFR: Original 2026 market presentation and charts",
    "Penn GRASP Lab: Independent exploration of an older π0 checkpoint",
    "Skild AI: September 2026 commercial update",
    "Skild AI: Partnerships with established robot manufacturers",
    "CapitalG: Physical Intelligence investment and round leadership",
    "CapitalG: November 2025 financing summary",
    "Tesla: Optimus and the robotics software stack"
  ],
  sourceLinks: [
    {
      label: "Google Research: RT 1 and learning robot control at scale",
      url: "https://research.google/blog/rt-1-robotics-transformer-for-real-world-control-at-scale/"
    },
    {
      label: "Google DeepMind: RT 2 connects visual and language knowledge to actions",
      url: "https://blog.google/innovation-and-ai/products/google-deepmind-rt2-robotics-vla-model/"
    },
    {
      label: "Google DeepMind: Learning across different robot types",
      url: "https://deepmind.google/blog/scaling-up-learning-across-many-different-robot-types/"
    },
    {
      label: "Diffusion Policy: Generating coordinated action sequences",
      url: "https://diffusion-policy.cs.columbia.edu/"
    },
    {
      label: "Physical Intelligence: The original π0 research paper",
      url: "https://arxiv.org/abs/2410.24164"
    },
    {
      label: "Physical Intelligence: π0.7 and richer guidance for generalist policies",
      url: "https://arxiv.org/abs/2604.15483"
    },
    {
      label: "Skild AI: S1 learns from demonstrations in context",
      url: "https://www.skild.ai/blogs/s1"
    },
    {
      label: "Generalist: GEN 1.5 and learning from brief demonstrations",
      url: "https://generalistai.com/blog/gen-1.5"
    },
    {
      label: "Figure: Helix 2.5 evaluation across 30 unfamiliar homes",
      url: "https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization"
    },
    {
      label: "Skild AI: Physical self play and simulated practice",
      url: "https://www.skild.ai/blogs/physical-self-play"
    },
    {
      label: "Google DeepMind: Gemini Robotics 2",
      url: "https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/"
    },
    {
      label: "Google: Gemini Robotics ER 2 and coordinating action systems",
      url: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/"
    },
    {
      label: "NVIDIA: GR00T N1 research",
      url: "https://arxiv.org/abs/2503.14734"
    },
    {
      label: "Unitree: Published robot learning projects",
      url: "https://github.com/unitreerobotics"
    },
    {
      label: "Boston Dynamics: Atlas from research to industrial work",
      url: "https://bostondynamics.com/blog/atlas-evolution-from-research-robot-to-industrial-humanoid/"
    },
    {
      label: "1X: Redwood and world model research",
      url: "https://www-1x.tech/ai"
    },
    {
      label: "AgiBot: GO 1 research and dataset",
      url: "https://agibot-world.com/blog/agibot_go1.pdf"
    },
    {
      label: "FieldAI: Mobile robot autonomy applications",
      url: "https://www.fieldai.com/solutions"
    },
    {
      label: "FANUC: Robot software and control applications",
      url: "https://www.fanuc.eu/eu-en/robot-software"
    },
    {
      label: "ABB Robotics: Autonomous versatile robotics",
      url: "https://www.abb.com/global/en/areas/robotics/innovation/autonomous-versatile-robotics"
    },
    {
      label: "Yaskawa: How MOTOMAN NEXT combines AI and motion control",
      url: "https://www.yaskawa-global.com/motoman-next/ai-robot/"
    },
    {
      label: "KUKA: iiQKA software ecosystem",
      url: "https://www.kuka.com/en-de/future-production/iiqka-robots-for-the-people"
    },
    {
      label: "Universal Robots: PolyScope and AI software platform",
      url: "https://www.universal-robots.com/products/software/"
    },
    {
      label: "Intrinsic: Flowstate robotics development platform",
      url: "https://www.intrinsic.ai/flowstate"
    },
    {
      label: "Intrinsic: Open foundational runtime and control framework",
      url: "https://github.com/intrinsic-ai/intrinsic-core"
    },
    {
      label: "Hugging Face: LeRobot tools, datasets and policies",
      url: "https://github.com/huggingface/lerobot"
    },
    {
      label: "OpenVLA: Models, code and licensing",
      url: "https://github.com/openvla/openvla"
    },
    {
      label: "Physical Intelligence: OpenPI code and released checkpoints",
      url: "https://github.com/Physical-Intelligence/openpi"
    },
    {
      label: "Figure: Helix and integrated hardware development",
      url: "https://www.figure.ai/news/introducing-figure-03"
    },
    {
      label: "Skild AI: January 2026 Series C announcement",
      url: "https://www.skild.ai/blogs/series-c"
    },
    {
      label: "Generalist: June 2026 financing announcement",
      url: "https://generalistai.com/blog/accelerating-the-next-phase-of-physical-ai"
    },
    {
      label: "Axios: Reported Physical Intelligence financing",
      url: "https://www.axios.com/2025/11/21/robots-physical-intelligence-ai"
    },
    {
      label: "IFR: World Robotics 2026 industrial robot results",
      url: "https://ifr.org/ifr-press-releases/news/five-million-robots-now-operate-in-factories-globally"
    },
    {
      label: "IFR: Original 2026 market presentation and charts",
      url: "https://ifr.org/downloads/press_docs/Market_Presentation_WR_Press_Conference_2026.pdf"
    },
    {
      label: "Penn GRASP Lab: Independent exploration of an older π0 checkpoint",
      url: "https://penn-pal-lab.github.io/Pi0-Experiment-in-the-Wild/"
    },
    {
      label: "Skild AI: September 2026 commercial update",
      url: "https://www.skild.ai/blogs/skild-crosses-100m-arr"
    },
    {
      label: "Skild AI: Partnerships with established robot manufacturers",
      url: "https://www.skild.ai/blogs/reindustrial-revolution"
    },
    {
      label: "CapitalG: Physical Intelligence investment and round leadership",
      url: "https://capitalg.com/insights/physical-intelligence-bringing-general-purpose-ai-into-the-physical-world/"
    },
    {
      label: "CapitalG: November 2025 financing summary",
      url: "https://www.capitalg.com/insights/"
    },
    {
      label: "Tesla: Optimus and the robotics software stack",
      url: "https://www.tesla.com/AI"
    }
  ],
  readingMinutes: 14,
  reportingNotes: [
    "Research current through October 8, 2026. Performance results are attributed to their authors. Black Scarab interpretations and the revenue scale example are analysis."
  ],
  layout: "editorial",
  publishedDate: "2026-10-08",
  publishedLabel: "October 8, 2026",
  publishedAt: "2026-10-08T17:46:04.000Z",
  imageFit: "contain",
  taxonomy: {
    primaryIndustry: "cross-industry",
    relevantIndustries: [],
    technologies: [
      "embodied-ai",
      "foundation-models",
      "robot-software",
      "manipulation"
    ],
    applications: []
  }
});
