import type { CaseStudyArticle } from "@/lib/case-studies";
import content from "./physical-ai-workforce-content.json";
import tables from "./physical-ai-workforce-tables.json";

export const workforceSlug = "physical-ai-workforce-hiring-compensation-careers";
export const workforceSections = content.blocks.filter(block => /^# /.test(block.markdown));
export const workforceSectionId = (heading: string) => heading.replace(/^#+ /, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");

export const physicalAiWorkforceDeepDive = (): CaseStudyArticle => ({
  slug: workforceSlug,
  taxonomy: { primaryIndustry: "cross-industry", relevantIndustries: ["manufacturing"], technologies: ["industrial-robotics", "embodied-ai", "simulation"], applications: [] },
  background: "white",
  title: content.title,
  seoTitle: "Physical AI Careers: Robotics Jobs, Salaries and Skills",
  summary: "What 1,000+ job advertisements reveal about the skills, salaries and industrial expertise behind robotics.",
  seoDescription: "Black Scarab analyzes 1,000+ advertised roles across 40+ employers and twenty career paths, with a separate Tesla Optimus hiring study.",
  publishedLabel: "Deep Dive · November 24, 2026",
  publishedDate: "2026-11-24",
  typeLabel: "Deep Dive",
  industry: "Physical AI",
  readingMinutes: 12,
  image: "/article-images/physical-ai-workforce-robot.webp",
  imageAlt: "A giant white and silver robot with an open head receives a mechanical brain from a crane while tiny workers repair its shoulder, arm and knee, on a white background with small teal accents.",
  imageCaption: "Editorial illustration by Black Scarab.",
  author: { name: "Rodolfo Garcia Calderoni, CFA", href: "/about" },
  tags: ["Physical AI careers", "Robotics workforce", "Engineering", "Compensation"],
  sections: workforceSections.map(block => ({ id: workforceSectionId(block.markdown), heading: block.markdown.slice(2), paragraphs: [] })),
  sources: ["Black Scarab Intelligence", "Twenty Black Scarab career guides"],
  sourceLinksPlacement: "bottom",
  sourceLinks: [...new Map([...content.blocks.map(block => block.markdown), ...Object.values(tables).flatMap(table => table.rows.flat())].flatMap(text => [...text.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)].map(match => [match[2], { label: match[1], url: match[2] }]))).values()],
});
