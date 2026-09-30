import manifest from "./insight-social-images.json";

const images: Record<string, { path: string; width: number; height: number }> = manifest;

export function getInsightSocialImage(imagePath: string, alt: string) {
  const image = images[imagePath];
  if (!image) {
    throw new Error(`Missing Insights share image: ${imagePath}. Run npm run build:insight-social-images.`);
  }
  const url = `https://www.blackscarab.ai${image.path}`;
  return {
    url,
    secureUrl: url,
    type: "image/jpeg",
    width: image.width,
    height: image.height,
    alt,
  };
}
