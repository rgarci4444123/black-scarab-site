"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function MarketNavigation() {
  const [active, setActive] = useState("index");

  useEffect(() => {
    const updateActive = () => {
      setActive(window.location.hash === "#commentary" ? "commentary" : "index");
    };
    updateActive();
    window.addEventListener("hashchange", updateActive);
    return () => window.removeEventListener("hashchange", updateActive);
  }, []);

  return (
    <nav className="market-nav" aria-label="Markets sections">
      <a href="#index-title" aria-current={active === "index" ? "location" : undefined} onClick={() => setActive("index")}>Index</a>
      <a href="#commentary" aria-current={active === "commentary" ? "location" : undefined} onClick={() => setActive("commentary")}>Commentary</a>
      <Link href="/markets/earnings-calendar">Earnings calendar</Link>
    </nav>
  );
}
