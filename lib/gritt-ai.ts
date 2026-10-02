import type { CaseStudyArticle } from "@/lib/case-studies";

const home = "https://www.gritt.ai/";
const solar = "https://www.gritt.ai/solar";
const technology = "https://www.gritt.ai/news/how-gritt-works-practical-intelligence";
const launch = "https://www.gritt.ai/news/gritt-launches-physical-ai";
const burns = "https://www.burnsmcd.com/news/partnership-advances-solar-construction";
const usv = "https://www.usv.com/writing/gritt";
const safety = "https://www.gritt.ai/news/the-safety-case-lives-in-the-tail";
const paper = "https://arxiv.org/html/2609.31896v1";
const terafab = "https://www.terabase.energy/products-services/construction/terafab";
const piling = "https://www.builtrobotics.com/solutions/solar-piling";
const reporting = "https://thenextweb.com/news/gritt-32m-physical-ai-construction-solar";

export const grittAiDeepDive = (): CaseStudyArticle => ({
  slug: "gritt-ai-construction-robotics-solar-foundation-model-deep-dive",
  title: "Gritt AI Deep Dive: Teaching Construction Equipment to Build Solar Farms",
  seoTitle: "Gritt AI: Construction Robotics, Solar and Foundation Models",
  summary: "Inside Gritt's construction foundation model, solar installation systems and field learning loop, with analysis of hardware integration, worker detection, deployment evidence and contractor economics.",
  publishedLabel: "Deep Dive · Published October 1, 2026",
  publishedDate: "2026-10-01",
  publishedAt: "2026-10-01T23:22:40-04:00",
  typeLabel: "Deep Dive",
  formatLabel: "Technology, deployment and commercial analysis",
  industry: "Construction Robotics",
  image: "/article-images/gritt-ai-construction-robotics-deep-dive.png",
  imageAlt: "Editorial illustration of a clay terrain model with blue solar panel rows, empty mounting supports and a small generic lifting machine",
  imageCaption: "Original Black Scarab editorial illustration of a solar construction workflow.",
  seoDescription: "A Gritt AI deep dive on construction robotics, Gritt Foundation Model, solar installation, Burns & McDonnell, hardware integration, safety research and contractor economics.",
  tags: ["Gritt AI", "Gritt Foundation Model", "construction robotics", "solar installation", "robot learning", "Physical AI"],
  author: { name: "Rodolfo Garcia Calderoni, CFA", href: "/about" },
  sections: [
    {
      paragraphs: [
        "Installing a solar farm means repeating a delicate physical operation across a large, untidy landscape. Panels must reach the right row, arrive undamaged and sit correctly on their supports while crews move around them. The work repeats. The ground, light and surrounding activity keep changing.",
        ["Gritt's proposition is to put intelligence on equipment contractors already use. Its ", { text: "construction platform", href: home }, " combines robotics and AI, beginning with solar module handling. Black Scarab sees the larger opportunity as turning repeatable field work into a foundation for reusable construction intelligence."],
        "The commercial test has two parts. Can the system produce more accepted installation work with the same crew? And can Gritt repeat that result on the next project without rebuilding the solution around a new site?",
      ],
    },
    {
      heading: "The Company and Its Starting Point",
      paragraphs: [
        ["Cofounders Puneet Puri, CEO, and Vishal Dugar, CTO, introduced Gritt publicly on July 21, 2026. The ", { text: "launch announcement", href: launch }, " disclosed $32.4 million across pre seed and Series A funding. Obvious Ventures led the $26 million Series A, with Union Square Ventures and Active Impact Investments participating. Earlier investors included First Round Capital, Climactic, Congruent Ventures and VSC Ventures."],
        ["Union Square Ventures separately ", { text: "confirmed its investment", href: usv }, ". Its July announcement described robot deployment on projects totaling tens of megawatts and a contracted pipeline of 2.8 gigawatts. That is an investor's account of commercial progress; the pipeline measures prospective project work rather than completed installations or recognized revenue."],
        "Solar is a sensible opening for a broader construction platform. Large sites provide many repetitions of similar handling tasks, creating opportunities to refine both machine behavior and the surrounding crew workflow. A contractor can compare completed work before considering a more ambitious range of applications.",
        ["The Next Web's ", { text: "launch coverage", href: reporting }, " emphasized the gap between early deployment and the planned fleet expansion. That remains a useful scaling question: growth requires machines, commissioning capacity and field support alongside improved models."],
      ],
    },
    {
      heading: "What Gritt Automates Today",
      paragraphs: [
        ["Gritt's ", { text: "solar product page", href: solar }, " identifies panel pick and place as its current workflow. It presents purlin assembly, component transport and oversight and verification as expansion areas. The distinction matters when defining a project: moving a panel into position is one part of completing a solar installation."],
        "A module handling deployment must connect material delivery, access to the work area, placement and the crew's next operation. A fast robot can spend much of a shift waiting if the next pallet is late or completed rows block its route. A placement count becomes useful only when the work advances to the agreed acceptance point.",
        "Black Scarab's assessment is that the first customer should buy a bounded improvement in that sequence. A contract should name the module and tracker configuration, the robot's handoff to people, and what counts as accepted work. That creates a testable proposition even as Gritt develops a broader platform.",
      ],
    },
    {
      heading: "The Construction Foundation Model",
      paragraphs: [
        ["Dugar's ", { text: "September technical overview", href: technology }, " describes the Gritt Foundation Model, or GFM, as a representation backbone trained on labeled and unlabeled images and video. Gritt adapts it into task policies and perception models, including segmentation and six degree of freedom pose estimation, while updating the shared weights."],
        "A representation model learns features that make a scene useful to downstream tasks. Segmentation separates regions or objects in an image. Pose estimation describes an object's position and orientation. A policy uses observations to choose actions. These functions solve related problems, but success at one does not establish success at the others.",
        "Consider a hypothetical panel pickup. The system might recognize a panel correctly while estimating its edge position poorly. It might estimate the geometry correctly while choosing a motion that brings the tool too close to a support. The complete task needs perception, motion and physical handling to agree.",
        "The strategic attraction of a shared backbone is reuse. If experience handling one construction component improves understanding of another, Gritt can reduce the data and engineering required for the next task. Black Scarab would assess that advantage through the effort needed to introduce a new configuration and the performance retained on previous work.",
        "That also creates a change management problem. Updating shared weights can affect several tasks at once. A release that improves a difficult pickup should be checked against known working configurations before it reaches the fleet. Reuse makes validation more valuable because a common improvement or regression can travel widely.",
      ],
    },
    {
      heading: "Learning from the Worksite",
      paragraphs: [
        ["Gritt describes ", { text: "a field learning loop", href: technology }, " with action checks, human takeover and recovery, and shadow evaluation before model changes take control. Its simulation pipeline reconstructs scenes from deployment imagery, uses CAD and reconstructed objects, and varies episodes for training. Gritt reports thousands of hours of field data and transfer from solar into rebar tying and block placement."],
        "The important opportunity is learning from the situations that interrupt useful work. A routine successful pickup adds another familiar example. An unusual obstruction, unstable presentation or difficult lighting condition can reveal a specific weakness. Reconstructing that episode creates a way to test several remedies against the same problem.",
        "Black Scarab would distinguish three outcomes in that process: a model recognizing the scene better, a proposed action becoming more appropriate, and the complete machine finishing the work. Improvements at the first two levels are valuable when they survive the third.",
        "Shadow evaluation allows a proposed model to produce outputs without commanding the machine. It can expose disagreement with the working system, but it does not reproduce every consequence of physical contact. A model can predict a plausible grip while a real tool slips, flexes or damages the panel. Controlled physical validation still matters.",
        "The long term advantage would be a lower cost of resolving the next unfamiliar event. That depends on selecting informative episodes, reconstructing them faithfully and preserving a useful regression test set. Data volume alone is a weak measure of that capability.",
      ],
    },
    {
      heading: "The Hardware and Control Architecture",
      paragraphs: [
        ["Gritt's launch materials describe arms connected to existing skid steers and forklifts. The ", { text: "technical overview", href: technology }, " describes commercially available industrial arms mounted on construction vehicles and reports 900 kilogram robots handling 50 kilogram payloads. Those figures describe company reported operation; they are not a universal equipment specification."],
        "Black Scarab's functional interpretation separates the vehicle, arm, tool, sensing and task software. The vehicle brings the system to the work. The arm moves the tool through its reachable workspace. The tool holds or manipulates the component. Sensing relates the component and surroundings to the machine. Task software coordinates the intended operation.",
        "A mounting interface is therefore part of the control problem. If the vehicle settles into soft ground or tilts on a slope, the relationship between the arm and the work changes. Calibration, structural stiffness and load stability influence whether a commanded pose produces the intended placement.",
        "Payload qualification should cover the module, tool, mounting arrangement and motion together. A payload mass by itself does not capture reach, wind loading or forces generated during acceleration. Cable routing, connector protection, service access and tool retention also influence sustained operation.",
        "For an engineering review, the useful edge architecture question is where each time sensitive decision executes and what happens when a connection fails. Sensor processing, task planning, motion execution and protective stopping have different timing needs. The supplier should demonstrate the behavior of the complete configured machine under lost communications and degraded sensing.",
        "Model performance should be assessed alongside sustained compute performance in the enclosure. Heat, dust and vibration can affect the machine during a long shift. Logging and diagnostics need enough capacity to preserve the episode that explains a failure while the system continues useful work.",
      ],
      callouts: [
        { title: "Qualify the complete configuration", body: "Specify the host vehicle, arm and controller, tool, sensing arrangement, compute enclosure and interfaces in the project acceptance plan." },
      ],
    },
    {
      heading: "Worker Detection and the Data That Gets Lost",
      paragraphs: [
        ["Gritt researchers Rishav Agarwal, Nirshal Chandra Sekar and Anirudh Vemula published ", { text: "a paper on worker data curation", href: paper }, " in September 2026. They examined how automatic person detection and pose labeling can discard examples of kneeling, squatting or deeply bent workers. Their filter audit covers people already detected, so it cannot count workers missed at the first stage."],
        "That is a consequential methodological distinction. A dataset can appear clean because the difficult examples were removed. Evaluating a detector against only those retained examples risks overlooking the people most difficult to identify during ordinary work.",
        ["The ", { text: "supporting company article", href: safety }, " reports 84 low posture instances in a retained library of 3,762 people. It also reports detection recall rising from 84.1 percent to 85.7 percent for low postures on real site footage after adding simulated examples. That is a 1.6 percentage point improvement on the described evaluation."],
        ["The paper's ", { text: "controlled simulation experiment", href: paper }, " held scene conditions fixed while changing human models and poses. Matching person box height reduced, but did not eliminate, the detection gap. The analysis points to posture and visibility as important evaluation dimensions beyond apparent image size."],
        "Black Scarab regards this research as a useful sign of attention to deployment detail. The result concerns a perception component. A site acceptance test must connect detection to the machine's response, including stopping behavior, load retention and recovery around workers.",
        "Practical testing should include ordinary work postures in the actual camera views: a person kneeling at a tracker, bending behind a panel or partly hidden by materials. Aggregate detection accuracy can conceal poor performance in one of these consequential situations.",
      ],
    },
    {
      heading: "The Burns & McDonnell Evidence",
      paragraphs: [
        ["Burns & McDonnell's ", { text: "August 25 announcement", href: burns }, " confirms a strategic partnership to evaluate and deploy Gritt on utility scale solar projects. The contractor says the companies tested the technology at multiple sites over the preceding year and describes current deployment in solar construction."],
        "That provides stronger evidence of field engagement than an isolated demonstration. The contractor brings experience with construction sequencing, installation acceptance and crew management. Repeated testing also gives Gritt access to the differences between projects that a laboratory setup can miss.",
        "The relationship is important commercially because introducing a robot changes responsibilities around the work. Someone has to prepare material, clear access, supervise operation, handle exceptions and verify the result. An experienced construction partner can help make those responsibilities repeatable.",
        "Black Scarab would use the next deployment to assess how much transfers: commissioning effort, training time, intervention frequency and accepted output. A repeat project that requires less engineering would provide evidence that Gritt is building a scalable delivery system alongside its models.",
      ],
    },
    {
      heading: "Reading the Commercial Numbers",
      paragraphs: [
        ["As reviewed on October 1, Gritt's ", { text: "solar page", href: solar }, " reports more than 35,000 installed panels, more than 18 megawatts installed and 2.8 gigawatts of solar construction contracted. It also reports fourfold productivity, installation cost 50 percent below manual work, an 80 percent reduction in heavy load injuries and deployment in one to four weeks. These are company reported figures."],
        "The installed figures and contracted capacity measure different things. Installed work indicates execution; contracted work indicates a delivery opportunity and obligation. Converting the latter into a business requires available systems, commissioning, support and customer acceptance.",
        "The productivity claim needs a defined operation and denominator. Panels placed per shift, accepted modules per labor hour and completed installation output each answer a different question. A contractor should use the one that corresponds to its actual bottleneck and record the remaining labor around it.",
        "The injury claim also needs an exposure basis. Removing repeated heavy lifts is a plausible benefit, but comparing injury counts without hours worked and task exposure can mislead. The evaluation should measure the lifting work displaced alongside the hazards introduced by moving equipment and suspended loads.",
        "For the deployment window, the practical question is when the clock starts and when acceptance ends. Equipment arrival, configured operation and a full accepted shift are distinct milestones. Defining them before mobilization makes schedule claims comparable with project experience.",
      ],
    },
    {
      heading: "The Commercial Proposition and Project Economics",
      paragraphs: [
        "Gritt's proposition is additional installation capacity using a contractor's familiar equipment and workflow. Black Scarab would evaluate the purchase around the complete delivery package: robotics, software, commissioning, supervision and support. Reusing a host vehicle can reduce the need for new machinery while still consuming equipment capacity that has another use.",
        "The quote should allocate the cost of mobilization, the host machine, tooling, configuration, training and ongoing support. It should also define charges during weather delays, material shortages and system downtime. These terms can change the economics as much as the headline throughput.",
        "A useful decision measure is total cost per accepted module. Count retained crew labor, supervision, equipment, vendor charges, mobilization, downtime and rework, then divide by accepted output. That gives the contractor a comparison with its own manual baseline.",
        "A faster placement operation creates additional value when it brings a project milestone forward or relieves a real labor constraint. If another operation limits completion, the direct benefit may instead be fewer lifting hours or more flexible crew allocation. The project schedule determines which benefit is available.",
        "Fleet economics also matter to Gritt. A system must move between projects, remain serviceable and earn enough productive time to cover field operations. Construction demand can be large while utilization remains uneven because weather, access and material readiness dictate when work can happen.",
      ],
    },
    {
      heading: "A Practical Contractor Trial",
      paragraphs: [
        "Consider a hypothetical contractor with several large solar sites and limited module handling labor. Its first trial should select a representative work block with confirmed components, access routes and material delivery. The comparison should include ordinary interruptions so that the result reflects the work the contractor needs to finish.",
        "Measure accepted modules per crew hour, productive machine time, interventions, component damage and rework. Keep a separate record of waiting caused by materials, access, weather and machine faults. These causes point to different remedies and different parties responsible for making them.",
        "Test the handoff between placement and the crew's next operation. If the robot advances faster than people can secure or inspect modules, it may shift the bottleneck. The successful configuration is the one that improves accepted work across the sequence.",
        "Before expansion, repeat the configuration on a second work block or site. Compare commissioning effort and support needs as well as output. That provides a practical test of the reuse advantage Gritt is trying to build.",
      ],
    },
    {
      heading: "Alternatives Depend on the Bottleneck",
      paragraphs: [
        "Improving material staging, lifting assistance or crew sequencing is the most immediate alternative. A contractor should establish whether panel handling is the limiting operation before introducing more autonomous capacity. Better logistics can also make a robotics deployment more productive.",
        ["Terabase Energy's ", { text: "Terafab", href: terafab }, " takes a different approach: an automated field factory for solar construction. Terabase reports more than 100 megawatts installed across commercial US projects. Black Scarab's comparison is architectural: a field factory organizes repeatable assembly around a production system, while Gritt adds adaptive handling to mobile construction equipment."],
        ["Built Robotics' ", { text: "RPD 35", href: piling }, " automates solar piling, combining surveying, pile distribution, driving and data collection. Its published commercial model uses a project specific per pile rate. Piling is a different operation from module placement, so this is an alternative use of automation budget and potentially a complementary system."],
        "The right choice follows the site constraint. A project slowed by foundations needs a different intervention from one slowed by module handling. Comparing vendor speed multipliers without matching the underlying task would obscure that decision.",
      ],
    },
    {
      heading: "What Could Limit the Platform",
      paragraphs: [
        "The first risk is engineering effort that remains specific to each configuration. Different modules, trackers, vehicles, mounting arrangements and ground conditions can create new qualification work. A common model adds commercial value when it reduces the effort needed to deliver reliable output across those changes.",
        "The second is operational reliability. Occasional recovery may be manageable in a trial and expensive across a fleet. Interventions should be measured by frequency, duration, skill required and effect on nearby work. A short remote correction and a technician traveling to the site have very different costs.",
        "The third is expansion before the delivery process is repeatable. Rebar, concrete and block work introduce different tooling, contact conditions and acceptance requirements. Demonstrated transfer can support the research case while commercial delivery still requires a complete qualified workflow.",
        "A broader planning layer brings another challenge. Observing work can support progress records, but recommending the next operation also needs dependable information about materials, access, weather and project dependencies. Contractors need recommendations that fit the schedule and the authority of the people running the site.",
      ],
    },
    {
      heading: "Black Scarab Verdict",
      paragraphs: [
        "Gritt has chosen a credible route into construction robotics. Solar module handling provides repeated valuable work, and Burns & McDonnell confirms testing and deployment across real projects. The use of familiar construction equipment gives the company a practical starting point for adoption.",
        "Its most interesting asset may become the relationship between field episodes, shared representations and repeatable deployment. If the next configuration takes less data, engineering and supervision to become useful, Gritt can build an intelligence business that extends beyond one installation task.",
        "Black Scarab would judge that progression through accepted output, intervention burden, delivery cost and the effort required for a second site. The platform thesis becomes stronger as those measures improve together. For a contractor, the near term proposition is concrete: complete more solar installation work with the crew and equipment available.",
      ],
    },
    {
      heading: "Research Basis",
      paragraphs: [
        "Analysis current as of October 1, 2026. Sources include Gritt's product and technical materials, its worker detection research, Burns & McDonnell's deployment announcement, Union Square Ventures' investment confirmation and independent launch reporting. Engineering interpretations, the contractor trial and the verdict are Black Scarab analysis. The trial is hypothetical.",
      ],
    },
  ],
  sources: ["Gritt product, technical and financing materials", "Burns & McDonnell and Union Square Ventures confirmations", "Gritt worker detection research and supporting analysis", "Official alternative product documentation and independent launch reporting"],
  sourceLinks: [
    { label: "Gritt construction platform", url: home },
    { label: "Gritt solar installation", url: solar },
    { label: "Gritt Foundation Model and field learning", url: technology },
    { label: "Gritt July 2026 funding announcement", url: launch },
    { label: "Burns & McDonnell partnership and deployments", url: burns },
    { label: "Union Square Ventures investment confirmation", url: usv },
    { label: "Gritt worker detection analysis", url: safety },
    { label: "Worker data curation paper, September 2026", url: paper },
    { label: "The Next Web launch reporting", url: reporting },
    { label: "Terabase Terafab", url: terafab },
    { label: "Built Robotics solar piling", url: piling },
  ],
});
