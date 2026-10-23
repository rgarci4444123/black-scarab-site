import type { CaseStudyArticle } from "@/lib/case-studies";
import article from "@/data/nvidia-robot-guide/article.json";

export const robotGuideSlug = "how-to-build-a-robot-with-nvidia";

export function nvidiaRobotGuideDeepDive(): CaseStudyArticle {
  return { ...article, image: "/article-images/nvidia-robot-guide/cover-cropped.png" } as CaseStudyArticle;
}
