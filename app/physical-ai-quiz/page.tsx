import type { Metadata } from "next";
import Link from "next/link";
import PhysicalAiQuiz from "@/components/physical-ai-quiz";
import SiteHeader from "@/components/site-header";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "Physical AI Quiz: Test Your Robotics and AI Knowledge",
  description:
    "Take the Black Scarab Physical AI Quiz covering sensors, AI models, processors, actuators, robot software, navigation, and global robot deployment.",
  alternates: {
    canonical: "/physical-ai-quiz",
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/physical-ai-quiz`,
    title: "Physical AI Quiz: Do You Know What Makes AI Move?",
    description:
      "Answer 10 physical AI questions and see where your robotics knowledge stands.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BlackScarabAI",
    title: "The Black Scarab Physical AI Quiz",
    description:
      "Test your knowledge of sensors, models, compute, motion, software, and robot deployment.",
  },
};

export default function PhysicalAiQuizPage() {
  return (
    <main className="min-h-screen bg-[#f4f2ec] px-3 py-3 text-[#101410] sm:px-5 sm:py-5 lg:px-7">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[24px] border border-[#dfded7] bg-[#fbfaf6] shadow-[0_24px_70px_rgba(15,23,42,0.055)] sm:rounded-[30px]">
        <SiteHeader
          homeHref="/"
          ctaLabel="Explore the glossary"
          ctaHref="/resources/physical-ai-glossary"
        />

        <article className="relative overflow-hidden px-6 py-14 md:px-10 md:py-20 lg:px-16 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute right-[-10rem] top-[-11rem] h-[32rem] w-[32rem] rounded-full border-[76px] border-[#dfe5da]/55"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[-10rem] left-[-8rem] h-[22rem] w-[22rem] rounded-full border-[54px] border-[#eee9de]/80"
          />
          <div className="relative mx-auto max-w-6xl">
            <PhysicalAiQuiz />
          </div>
        </article>

        <aside className="border-t border-[#e8e4dc] bg-[#f7f5ef] px-6 py-10 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl md:flex md:items-center md:justify-between md:gap-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#172019]">
                Learn the complete physical AI stack
              </h2>
              <p className="mt-3 text-base leading-7 text-[#667067]">
                The quiz draws from Black Scarab&apos;s 444 term guide to physical AI, robotics, chips, memory, sensors, navigation, control, simulation, software, and industrial deployment.
              </p>
            </div>
            <Link
              href="/resources/physical-ai-glossary"
              className="mt-6 inline-flex shrink-0 rounded-full border border-[#cfd8ca] bg-white px-6 py-3 text-sm font-semibold text-[#1d3228] transition hover:border-[#718069] md:mt-0"
            >
              Open the Physical AI Glossary
            </Link>
          </div>
        </aside>

        <footer className="border-t border-[#e8e4dc] px-6 py-7 text-sm text-[#6b716a] md:px-10 lg:px-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>Black Scarab research for the physical AI economy.</p>
            <div className="flex gap-5">
              <Link href="/privacy" className="transition hover:text-[#1d3228]">
                Privacy
              </Link>
              <Link href="/terms" className="transition hover:text-[#1d3228]">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
