import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { SitePage, SiteSurface } from "@/components/site-frame";

export default function MarketsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SitePage>
      <SiteSurface>
        <SiteHeader />
        {children}
        <SiteFooter />
      </SiteSurface>
    </SitePage>
  );
}
