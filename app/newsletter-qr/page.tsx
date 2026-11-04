import type { Metadata, Viewport } from "next";
import Image from "next/image";
import NewsletterLanding, {
  newsletterDescription,
} from "@/components/newsletter-landing";
import styles from "@/components/newsletter-landing.module.css";
import { newsletterSignupUrl } from "@/lib/newsletter";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "The Physical AI Weekly QR",
  description: newsletterDescription,
  robots: { index: false, follow: false },
};

export default function NewsletterQrPage() {
  return (
    <NewsletterLanding qr>
      <p className={styles.description}>{newsletterDescription}</p>
      <a
        href={newsletterSignupUrl}
        className={styles.qrLink}
        aria-label="Subscribe to The Physical AI Weekly"
      >
        <Image
          src="/newsletter-subscribe-qr.svg"
          alt={`QR code to subscribe at ${newsletterSignupUrl}`}
          width={328}
          height={328}
          className={styles.qrImage}
          priority
          unoptimized
        />
      </a>
      <p className={styles.scan}>Scan to subscribe</p>
    </NewsletterLanding>
  );
}
