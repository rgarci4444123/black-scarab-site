import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import styles from "./markets.module.css";

export default function MarketsLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.scope}><div className="shell"><SiteHeader />{children}<SiteFooter /></div></div>;
}
