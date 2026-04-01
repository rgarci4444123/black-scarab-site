export type CaseStudySection = {
  heading?: string;
  paragraphs: string[];
};

export type CaseStudyArticle = {
  slug: string;
  title: string;
  summary: string;
  publishedLabel: string;
  publishedDate: string;
  industry: string;
  image: string;
  imageAlt: string;
  seoDescription: string;
  linkedinUrl?: string;
  sections: CaseStudySection[];
  sources: string[];
};

export const caseStudies: CaseStudyArticle[] = [
  {
    slug: "case-study-agriculture-chemical-waste",
    title:
      "Case Study #1 — The $20-per-Acre Advantage: How Edge AI Solved Agriculture's Chemical Waste Problem",
    summary:
      "A real-world look at how John Deere's See & Spray platform used onboard edge AI to cut herbicide use nearly in half and create meaningful per-acre savings in connectivity-limited farm environments.",
    publishedLabel: "Case Study · Published March 31, 2026",
    publishedDate: "2026-03-31",
    industry: "Agriculture",
    image: "/article-images/case-study-agriculture.png",
    imageAlt:
      "Edge AI agriculture deployment with drones, field sensors, on-site compute, and an operations laptop in a farm environment.",
    seoDescription:
      "How Edge AI and onboard NVIDIA Jetson processors helped reduce herbicide waste, improve targeting, and drive per-acre savings in modern agriculture.",
    sections: [
      {
        paragraphs: [
          "Precision agriculture is no longer a futuristic concept; it is a current reality saving farmers thousands of dollars per season. The primary driver of this change is Edge AI, which allows heavy machinery to make split-second decisions without needing a connection to the cloud. In large-scale farming, where every second and every drop of chemical matters, processing data at the edge right on the tractor is the only way to achieve real-time results.",
        ],
      },
      {
        heading: "The Specific Case: John Deere's See & Spray Technology",
        paragraphs: [
          "One of the most impactful real-world applications of Edge AI is the John Deere See & Spray system, developed in collaboration with Blue River Technology. Traditional farming uses broadcast spraying, where herbicide is applied to the entire field regardless of whether a weed is present. This leads to massive chemical waste and unnecessary environmental exposure.",
        ],
      },
      {
        heading: "The Challenge: Real-Time Recognition at High Speeds",
        paragraphs: [
          "To replace broadcast spraying, a machine must be able to identify a weed and a crop plant like corn or soy and trigger a nozzle in milliseconds. This is a massive computational challenge. A sprayer moving at 12 to 15 mph covers a lot of ground quickly; sending images of every plant to the cloud for identification would be impossible due to latency and the lack of reliable 5G or 4G in remote fields.",
        ],
      },
      {
        heading: "The Edge Solution: NVIDIA Jetson on the Boom",
        paragraphs: [
          "The solution lies in a series of 36 high-resolution cameras mounted along a 120-foot carbon fiber boom. These cameras feed data into onboard NVIDIA Jetson edge processors that run deep learning models. These models have been trained on millions of images to distinguish between crops and more than 77 species of weeds. When a weed is spotted, the system triggers a targeted spray from a specific nozzle in just 200 milliseconds.",
        ],
      },
      {
        heading: "The Real-World Outcome: 2025 Data",
        paragraphs: [
          "The results from the 2025 growing season are staggering. Across more than 5 million acres of farmland, John Deere customers reduced their non-residual herbicide use by an average of nearly 50 percent. This prevented the use of roughly 31 million gallons of herbicide mix. For individual farmers, this translated to an average economic saving of $15.70 to $24 per acre, allowing many to see a full ROI on the equipment in just 1 to 2 seasons.",
        ],
      },
      {
        heading: "The LATAM Context: Connectivity Is Optional",
        paragraphs: [
          "For implementation in Latin America, this case study is particularly relevant because the system is entirely self-contained. Whether a farm is in a remote part of the Brazilian Cerrado or the Argentine Pampas, the AI does not require an active internet connection to function. This offline-first architecture ensures that the cost savings and yield improvements are consistent regardless of local infrastructure limitations.",
        ],
      },
      {
        heading: "Sourcing & Verification",
        paragraphs: [
          "This article was compiled using data from the 2025 John Deere Impact Report, a 2024 field study by Iowa State University, and technical specifications from Blue River Technology. These sources provide vetted, quantifiable outcomes from massive-scale deployments.",
        ],
      },
    ],
    sources: [
      "2025 John Deere Impact Report",
      "2024 Iowa State University field study",
      "Blue River Technology technical specifications",
    ],
  },
  {
    slug: "case-study-manufacturing-zero-defect-advantage",
    title:
      "Case Study #2 — The Zero-Defect Advantage: How Edge AI Revolutionized Automotive Quality Control",
    summary:
      "A real-world look at how Audi's automated weld spot inspection used localized edge compute to achieve 100% quality transparency and slash manual inspection costs in high-volume production lines.",
    publishedLabel: "Case Study · Published April 1, 2026",
    publishedDate: "2026-04-01",
    industry: "Manufacturing",
    image: "/article-images/case-study-manufacturing.jpg",
    imageAlt:
      "Automotive factory robotic arm inspecting a vehicle body with AI-assisted weld quality analysis.",
    seoDescription:
      "How localized edge AI transformed automotive weld inspection, enabled 100 percent inspection, and reduced rework costs in high-volume manufacturing.",
    sections: [
      {
        paragraphs: [
          "Manufacturing at scale has reached a tipping point where human-led quality assurance can no longer keep pace with robotic output. The primary driver of this transition is Edge AI, which allows factory floors to move from sampling-based quality control to total-inspection models. In an environment where a single missed defect can lead to a costly recall, processing data at the edge directly at the robotic arm is the only way to ensure 100% reliability without slowing down the line.",
        ],
      },
      {
        heading: "The Specific Case: Audi's Neckarsulm Weld Cube System",
        paragraphs: [
          "One of the most significant applications of Edge AI in heavy industry is the automated weld spot inspection system deployed at Audi's Neckarsulm plant. A single vehicle body can contain up to 5,000 weld spots. Traditionally, workers used manual ultrasound equipment to sample just a fraction of those welds, a process that was time-consuming, reactive, and left 99% of the production unchecked.",
        ],
      },
      {
        heading: "The Challenge: High-Frequency Data and Zero Latency",
        paragraphs: [
          "To move to 100% inspection, a system must analyze the electrical current and voltage curves of every single weld in real-time. This generates massive amounts of high-frequency data. Attempting to upload the telemetry of 5,000 welds per car to a central cloud for analysis would saturate the factory network and introduce latencies that would stop the assembly line. The decision, is this weld good or bad, must happen while the robot is moving to the next spot.",
        ],
      },
      {
        heading: "The Edge Solution: Localized Compute on the Assembly Line",
        paragraphs: [
          "The solution involves an edge computing cluster integrated directly into the factory floor. Data from the welding controllers is fed into an Edge AI model that has been trained to recognize the signature of a perfect weld.",
          "Latency: The inference happens in milliseconds, allowing the system to flag a defect the moment it occurs.",
          "Architecture: By using a decentralized edge approach, Audi can inspect roughly 1.5 million weld spots across 300 vehicles every day without sending a single byte of raw telemetry to the cloud.",
        ],
      },
      {
        heading: "The Real-World Outcome: 2025 Production Data",
        paragraphs: [
          "The results from the full-scale deployment in the 2025 production cycle have redefined industrial standards. By moving intelligence to the edge, the plant achieved a 100% inspection rate, up from the previous 1% sampling rate. Manual ultrasound testing was reduced by 95%, allowing specialized technicians to focus only on the specific spots flagged by the AI. The system also prevented an estimated $2.1 million in rework costs per quarter by catching tool wear before it resulted in batch-wide defects.",
        ],
      },
      {
        heading: "The Global Context: Scalability and Sovereign Data",
        paragraphs: [
          "For global manufacturers, this case study proves that Edge AI is the key to sovereign manufacturing. Because the data is processed locally, sensitive intellectual property regarding production techniques never leaves the facility. This model is being replicated across Tier 1 suppliers in North America and Asia, where high labor costs and strict safety regulations make zero-defect targets a financial necessity.",
        ],
      },
      {
        heading: "Sourcing & Verification",
        paragraphs: [
          "This article was compiled using data from the 2025 Audi Industrial Transformation Report, technical whitepapers on the Weld Cube project, and Intel's Edge Insights for Industrial case documentation. These sources provide validated metrics for AI-driven manufacturing efficiency.",
        ],
      },
    ],
    sources: [
      "2025 Audi Industrial Transformation Report",
      "Weld Cube technical whitepapers",
      "Intel Edge Insights for Industrial case documentation",
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((article) => article.slug === slug);
}
