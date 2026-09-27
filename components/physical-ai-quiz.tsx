"use client";

import { track } from "@vercel/analytics/react";
import Link from "next/link";
import { useRef, useState } from "react";
import NewsletterSignupForm from "@/components/newsletter-signup-form";
import {
  getPhysicalAiQuizOutcome,
  physicalAiQuizQuestions,
} from "@/lib/physical-ai-quiz";

type QuizPhase = "intro" | "question" | "result";

const optionLetters = ["A", "B", "C", "D"];

function LoopGraphic() {
  return (
    <div
      className="grid grid-cols-2 gap-3 sm:grid-cols-4"
      aria-label="The physical AI loop: see, think, move, check"
    >
      {["See", "Think", "Move", "Check"].map((label, index) => (
        <div
          key={label}
          className="relative rounded-[22px] border border-[#cfd8ca] bg-[#f8faf5] px-4 py-5"
        >
          <p className="font-mono text-[11px] text-[#829078]">
            0{index + 1}
          </p>
          <p className="mt-3 text-lg font-semibold text-[#172019]">{label}</p>
          {index < 3 ? (
            <span
              aria-hidden="true"
              className="absolute right-[-11px] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-[#cfd8ca] bg-[#fbfaf6] text-xs text-[#718069] sm:flex"
            >
              ›
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function PhysicalAiQuiz() {
  const [phase, setPhase] = useState<QuizPhase>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [shareStatus, setShareStatus] = useState("");
  const quizRef = useRef<HTMLElement>(null);

  const score = answers.reduce(
    (total, answer, index) =>
      total + (answer === physicalAiQuizQuestions[index]?.correctIndex ? 1 : 0),
    0,
  );
  const outcome = getPhysicalAiQuizOutcome(score);
  const question = physicalAiQuizQuestions[questionIndex];

  function focusQuiz() {
    window.requestAnimationFrame(() => {
      quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function startQuiz() {
    setPhase("question");
    setQuestionIndex(0);
    setSelectedIndex(null);
    setRevealed(false);
    setAnswers([]);
    setShareStatus("");
    track("Physical AI Quiz Started");
    focusQuiz();
  }

  function checkAnswer() {
    if (selectedIndex === null) {
      return;
    }

    setAnswers((current) => {
      const next = [...current];
      next[questionIndex] = selectedIndex;
      return next;
    });
    setRevealed(true);
    track("Physical AI Quiz Answered", {
      question: question.id,
      correct: selectedIndex === question.correctIndex,
    });
  }

  function continueQuiz() {
    if (questionIndex === physicalAiQuizQuestions.length - 1) {
      const finalScore = answers.reduce(
        (total, answer, index) =>
          total +
          (answer === physicalAiQuizQuestions[index]?.correctIndex ? 1 : 0),
        0,
      );
      setPhase("result");
      track("Physical AI Quiz Completed", {
        score: finalScore,
        outcome: getPhysicalAiQuizOutcome(finalScore).slug,
      });
      focusQuiz();
      return;
    }

    setQuestionIndex((current) => current + 1);
    setSelectedIndex(null);
    setRevealed(false);
    focusQuiz();
  }

  async function shareResult() {
    const shareText = `I scored ${score}/${physicalAiQuizQuestions.length} on the Black Scarab Physical AI Quiz. My quiz rank: ${outcome.name}.`;
    const shareData = {
      title: "Black Scarab Physical AI Quiz",
      text: shareText,
      url: "https://www.blackscarab.ai/physical-ai-quiz",
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareStatus("Result shared.");
      } else {
        await navigator.clipboard.writeText(`${shareText} ${shareData.url}`);
        setShareStatus("Result copied.");
      }
      track("Physical AI Quiz Shared", { score, outcome: outcome.slug });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
      setShareStatus("Copy the page link to share your result.");
    }
  }

  return (
    <section ref={quizRef} className="scroll-mt-24" aria-live="polite">
      {phase === "intro" ? (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#718069]">
              Black Scarab Physical AI Quiz
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#121812] sm:text-6xl lg:text-7xl">
              You know AI. Do you know what makes it move?
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5e675f] md:text-xl md:leading-9">
              Read the machine from sensor to actuator, then see where your instincts hold up across the physical AI stack.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={startQuiz}
                className="rounded-full bg-[#1d3228] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#29463a] focus:outline-none focus:ring-2 focus:ring-[#718069] focus:ring-offset-2"
              >
                Start the quiz
              </button>
              <p className="text-sm text-[#747b73]">About three minutes</p>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#d7ddcf] bg-[#e9eee5]/80 p-5 shadow-[0_18px_48px_rgba(34,46,37,0.07)] sm:p-7">
            <p className="mb-5 text-sm leading-6 text-[#5d685b]">
              Every intelligent machine closes the same basic loop.
            </p>
            <LoopGraphic />
            <p className="mt-5 border-t border-[#cfd8ca] pt-5 text-sm leading-6 text-[#657062]">
              Built from the Black Scarab glossary of 444 physical AI terms.
            </p>
          </div>
        </div>
      ) : null}

      {phase === "question" ? (
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between gap-5">
            <p className="text-xs font-semibold uppercase tracking-[0.19em] text-[#718069]">
              {question.category}
            </p>
            <p className="font-mono text-sm text-[#7c8779]">
              {String(questionIndex + 1).padStart(2, "0")} / {physicalAiQuizQuestions.length}
            </p>
          </div>
          <div
            className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e5e8e1]"
            aria-hidden="true"
          >
            <div
              className="h-full rounded-full bg-[#718069] transition-[width] duration-300"
              style={{
                width: `${((questionIndex + 1) / physicalAiQuizQuestions.length) * 100}%`,
              }}
            />
          </div>

          <h2 className="mt-8 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#121812] sm:text-4xl md:text-[2.7rem]">
            {question.prompt}
          </h2>

          <div className="mt-8 grid gap-3">
            {question.options.map((option, index) => {
              const selected = selectedIndex === index;
              const correct = question.correctIndex === index;
              const resultClass = revealed
                ? correct
                  ? "border-[#718069] bg-[#e6eee2] text-[#1d3228]"
                  : selected
                    ? "border-[#c58e82] bg-[#f7e9e5] text-[#6f2f27]"
                    : "border-[#dddcd5] bg-[#fbfaf6] text-[#677068]"
                : selected
                  ? "border-[#718069] bg-[#eef3ea] text-[#1d3228] ring-2 ring-[#718069]/15"
                  : "border-[#dddcd5] bg-[#fffdfa] text-[#283029] hover:border-[#9da997] hover:bg-white";

              return (
                <button
                  key={option.label}
                  type="button"
                  disabled={revealed}
                  onClick={() => setSelectedIndex(index)}
                  aria-pressed={selected}
                  className={`flex min-h-16 items-center gap-4 rounded-[20px] border px-5 py-4 text-left text-base transition focus:outline-none focus:ring-2 focus:ring-[#718069] focus:ring-offset-2 disabled:cursor-default sm:text-lg ${resultClass}`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current/15 bg-white/55 font-mono text-sm font-semibold">
                    {optionLetters[index]}
                  </span>
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>

          {revealed ? (
            <div className="mt-6 rounded-[24px] border border-[#d2dbcd] bg-[#edf2e9] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#647456]">
                {selectedIndex === question.correctIndex
                  ? "Signal confirmed"
                  : "Signal corrected"}
              </p>
              <p className="mt-3 text-base leading-7 text-[#344038]">
                {question.explanation}
              </p>
              <Link
                href={question.glossaryHref}
                className="mt-3 inline-flex text-sm font-semibold text-[#3f5843] underline decoration-[#8fa084] underline-offset-4"
              >
                Read {question.glossaryLabel} in the glossary
              </Link>
            </div>
          ) : null}

          <div className="mt-7 flex justify-end">
            {revealed ? (
              <button
                type="button"
                onClick={continueQuiz}
                className="rounded-full bg-[#1d3228] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#29463a] focus:outline-none focus:ring-2 focus:ring-[#718069] focus:ring-offset-2"
              >
                {questionIndex === physicalAiQuizQuestions.length - 1
                  ? "See my quiz rank"
                  : "Next question"}
              </button>
            ) : (
              <button
                type="button"
                onClick={checkAnswer}
                disabled={selectedIndex === null}
                className="rounded-full bg-[#1d3228] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#29463a] focus:outline-none focus:ring-2 focus:ring-[#718069] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-35"
              >
                Check the signal
              </button>
            )}
          </div>
        </div>
      ) : null}

      {phase === "result" ? (
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)]">
            <div className="rounded-[30px] bg-[#1d3228] p-7 text-white sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7d5c1]">
                Your quiz rank
              </p>
              <div className="mt-8 flex items-baseline gap-3">
                <p className="font-mono text-7xl font-semibold tracking-[-0.08em] text-white sm:text-8xl">
                  {score}
                </p>
                <p className="font-mono text-2xl text-[#aabca5] sm:text-3xl">
                  / {physicalAiQuizQuestions.length}
                </p>
              </div>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em]">
                {outcome.name}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#d9e2d5]">
                {outcome.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-2" aria-label="Answer result pattern">
                {physicalAiQuizQuestions.map((item, index) => {
                  const correct = answers[index] === item.correctIndex;
                  return (
                    <span
                      key={item.id}
                      className={`h-6 w-6 rounded-[6px] ${correct ? "bg-[#b7c9ae]" : "bg-[#916b63]"}`}
                      title={`Question ${index + 1}: ${correct ? "correct" : "incorrect"}`}
                    />
                  );
                })}
              </div>
              <button
                type="button"
                onClick={shareResult}
                className="mt-8 rounded-full border border-white/25 bg-white px-6 py-3 text-sm font-semibold text-[#1d3228] transition hover:bg-[#edf2e9] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1d3228]"
              >
                Share my result
              </button>
              {shareStatus ? (
                <p className="mt-3 text-sm text-[#d9e2d5]" role="status">
                  {shareStatus}
                </p>
              ) : null}
            </div>

            <div className="rounded-[30px] border border-[#d7ddcf] bg-[#edf2e9] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#647456]">
                Black Scarab Weekly
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#152018] sm:text-4xl">
                Keep learning about physical AI
              </h2>
              <p className="mt-4 text-base leading-7 text-[#59645a]">
                Join Black Scarab Weekly for clear reporting and deep dives every Thursday.
              </p>
              <div className="mt-7 rounded-[24px] bg-[#fbfaf6] p-5 sm:p-6">
                <NewsletterSignupForm
                  source={`physical-ai-quiz:${outcome.slug}`}
                  compact
                  buttonLabel="Get the weekly newsletter"
                  inputId="physical-ai-quiz-email"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-[#e2dfd7] bg-white/70 px-6 py-5">
            <button
              type="button"
              onClick={startQuiz}
              className="text-sm font-semibold text-[#334838] underline decoration-[#9aaa91] underline-offset-4"
            >
              Take the quiz again
            </button>
            <Link
              href="/resources/physical-ai-glossary"
              className="text-sm font-semibold text-[#334838] underline decoration-[#9aaa91] underline-offset-4"
            >
              Explore all 444 terms
            </Link>
          </div>
        </div>
      ) : null}
    </section>
  );
}
