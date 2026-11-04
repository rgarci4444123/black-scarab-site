import type { Metadata, Viewport } from "next";
import NewsletterLanding, {
  newsletterDescription,
} from "@/components/newsletter-landing";
import styles from "@/components/newsletter-landing.module.css";
import NewsletterSignupForm from "@/components/newsletter-signup-form";
import { newsletterSignupUrl } from "@/lib/newsletter";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "The Physical AI Weekly",
  description: newsletterDescription,
  alternates: { canonical: newsletterSignupUrl },
  openGraph: {
    title: "The Physical AI Weekly | Black Scarab",
    description: newsletterDescription,
    url: newsletterSignupUrl,
  },
  twitter: {
    card: "summary",
    title: "The Physical AI Weekly | Black Scarab",
    description: newsletterDescription,
  },
};

export default function SubscribePage() {
  return (
    <NewsletterLanding>
      <p className={styles.description}>{newsletterDescription}</p>
      <div className={styles.form}>
        <NewsletterSignupForm
          source="subscribe"
          inputId="subscribe-email"
          buttonLabel="Subscribe"
          appearance="standalone"
        />
      </div>
    </NewsletterLanding>
  );
}
