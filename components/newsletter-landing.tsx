import Image from "next/image";
import styles from "./newsletter-landing.module.css";

export const newsletterDescription =
  "Robotics, autonomy, and Physical AI. Delivered weekly.";

export default function NewsletterLanding({
  children,
  qr = false,
}: {
  children: React.ReactNode;
  qr?: boolean;
}) {
  return (
    <main className={`${styles.page} ${qr ? styles.qrPage : ""}`}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <Image
            src="/black-scarab-mark.png"
            alt="Black Scarab logo"
            width={36}
            height={36}
            priority
          />
          <span>BLACK SCARAB</span>
        </div>
        <h1 className={styles.title}>The Physical AI Weekly</h1>
        {children}
      </div>
    </main>
  );
}
