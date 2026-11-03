import "@/components/career-discovery.css";
import "@/components/career-guide-editorial.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { SitePage, SiteSurface } from "@/components/site-frame";
export default function CareerPathsLayout({ children }: { children: React.ReactNode }) {
  return <SitePage><SiteSurface><SiteHeader />{children}<SiteFooter /></SiteSurface></SitePage>;
}
