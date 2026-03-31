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
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((article) => article.slug === slug);
}
