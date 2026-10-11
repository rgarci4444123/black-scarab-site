import { getCaseStudyBySlug } from "@/lib/case-studies";
import { getInsightSocialImage } from "@/lib/insight-social-image";

export const alt = "Black Scarab insight social preview";
export const contentType = "image/jpeg";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const article = getCaseStudyBySlug(slug);

  if (!article) {
    return new Response("Article not found", { status: 404 });
  }

  const image = getInsightSocialImage(article.image, article.imageAlt);
  return Response.redirect(image.url, 308);
}
