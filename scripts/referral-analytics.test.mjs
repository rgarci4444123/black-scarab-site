import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const code = ts.transpileModule(readFileSync("components/engagement-analytics.tsx", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const slug = "sell-company-data-ai-micro1-data-partnerships-referrals";
const referralUrl = "https://refer.micro1.ai/referral/company-vetting/jobs?referralCode=preserve-me&linkId=selected&utm_source=referral";

function harness() {
  const events = [], effects = [], observers = [], listeners = new Map();
  let path = `/insights/${slug}`;
  class Element {
    constructor(link = null) { this.link = link; }
    closest(selector) {
      if (selector === "a[href]") return this.link;
      return selector === "a[data-analytics-event='referral-cta']" && this.link?.dataset.analyticsEvent === "referral-cta" ? this.link : null;
    }
  }
  class Anchor extends Element {
    constructor(placement = "article_top", linkId = "primary") {
      super(); this.link = this; this.href = referralUrl;
      this.dataset = { analyticsEvent: "referral-cta", analyticsLabel: "Get paid for your company’s data", referralArticle: slug, referralPlacement: placement === "article_end" ? `article_end_${linkId}` : placement, referralVersion: "micro1-data-revenue-v1", referralLink: linkId };
      this.textContent = "Get paid for your company’s data";
    }
    get hostname() { return new URL(this.href).hostname; }
    get pathname() { return new URL(this.href).pathname; }
    get origin() { return new URL(this.href).origin; }
  }
  class Observer {
    constructor(callback, options) { this.callback = callback; this.options = options; this.targets = new Set(); this.disconnected = false; observers.push(this); }
    observe(target) { this.targets.add(target); }
    unobserve(target) { this.targets.delete(target); }
    disconnect() { this.disconnected = true; this.targets.clear(); }
  }
  const top = new Anchor(), endPrimary = new Anchor("article_end"), endAdditional = new Anchor("article_end", "additional");
  const links = [top, endPrimary, endAdditional];
  const document = {
    addEventListener(name, fn) { if (!listeners.has(name)) listeners.set(name, new Set()); listeners.get(name).add(fn); },
    removeEventListener(name, fn) { listeners.get(name)?.delete(fn); },
    querySelectorAll(selector) { return selector === "a[data-analytics-event='referral-cta']" && path === `/insights/${slug}` ? links : []; },
  };
  const window = { location: { pathname: path, href: `https://www.blackscarab.ai${path}`, origin: "https://www.blackscarab.ai", search: "" } };
  const mod = { exports: {} };
  runInNewContext(code, {
    exports: mod.exports, module: mod, document, window, Element, HTMLFormElement: class {}, IntersectionObserver: Observer, URL, URLSearchParams,
    require(id) {
      if (id === "@vercel/analytics/react") return { track: (name, properties) => events.push({ name, properties: { ...properties } }) };
      if (id === "next/navigation") return { usePathname: () => path };
      if (id === "react") return { useEffect: fn => effects.push(fn), useRef: value => ({ current: value }) };
      throw new Error(id);
    },
  });
  let cleanup;
  const mount = () => { mod.exports.EngagementAnalytics(); cleanup = effects.pop()(); };
  mount();
  return { top, endPrimary, endAdditional, events, observers, listeners, Element, Anchor,
    fire(type, target, button = 0) { const event = { target, button }; for (const fn of listeners.get(type) ?? []) fn(event); },
    intersect(target, ratio = 0.5, isIntersecting = true) { observers.find(o => !o.disconnected && o.targets.has(target))?.callback([{ target, intersectionRatio: ratio, isIntersecting }]); },
    cleanup: () => cleanup(),
    navigate(newPath) { cleanup(); path = newPath; window.location.pathname = path; window.location.href = `https://www.blackscarab.ai${path}`; mount(); },
  };
}

test("primary and nested-link activations record placement without changing referral attribution", () => {
  const h = harness();
  h.fire("click", new h.Element(h.top));
  h.fire("click", h.endAdditional);
  assert.equal(h.events.length, 2);
  assert.deepEqual(h.events[0], { name: "Referral CTA Click", properties: { placement: "article_top", cta_version: "micro1-data-revenue-v1" } });
  assert.equal(h.events[1].properties.placement, "article_end_additional");
  assert.ok(h.events.every(e => Object.keys(e.properties).length === 2));
  assert.equal(h.top.href, referralUrl);
  assert.ok(!JSON.stringify(h.events).includes("preserve-me"));
});

test("views require half the link in the viewport and fire once per link per article visit", () => {
  const h = harness();
  h.intersect(h.top, 0.49); h.intersect(h.top, 0, false);
  assert.equal(h.events.length, 0);
  h.intersect(h.top); h.intersect(h.top);
  h.intersect(h.endPrimary); h.intersect(h.endAdditional);
  assert.equal(h.events.length, 3);
  assert.ok(h.events.every(e => e.name === "Referral CTA View"));
  assert.deepEqual(h.events.map(e => e.properties.placement), ["article_top", "article_end_primary", "article_end_additional"]);
});

test("middle click is captured once; right click and unrelated links do not count as referral clicks", () => {
  const h = harness();
  h.fire("auxclick", h.top, 2);
  h.fire("auxclick", h.top, 1);
  const ordinary = new h.Anchor(); ordinary.dataset = {};
  h.fire("click", ordinary); h.fire("auxclick", ordinary, 1);
  assert.equal(h.events.length, 1);
  assert.equal(h.events[0].name, "Referral CTA Click");
});

test("existing source events remain separate and do not become referral conversions", () => {
  const h = harness(); const source = new h.Anchor();
  source.dataset = { analyticsEvent: "source-link", analyticsLabel: "micro1 data partnerships" };
  h.fire("click", source);
  assert.deepEqual(h.events, [{ name: "Source Link Click", properties: { path: `/insights/${slug}`, source: "micro1 data partnerships" } }]);
});

test("route cleanup removes listeners and observers; returning to the article can record a new view", () => {
  const h = harness(); h.intersect(h.top);
  const priorObservers = [...h.observers];
  h.navigate("/news");
  assert.ok(priorObservers.every(o => o.disconnected));
  assert.equal(h.listeners.get("click").size, 1);
  assert.equal(h.listeners.get("auxclick").size, 1);
  h.intersect(h.top);
  assert.equal(h.events.length, 1);
  h.navigate(`/insights/${slug}`);
  h.intersect(h.top);
  assert.equal(h.events.length, 2);
  h.cleanup();
  assert.equal(h.listeners.get("click").size, 0);
  assert.equal(h.listeners.get("auxclick").size, 0);
  assert.ok(h.observers.every(o => o.disconnected));
});
