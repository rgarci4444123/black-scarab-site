import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import ts from "typescript";
import { createContentLoader } from "./content-source-loader.mjs";
const load = createContentLoader();
const { glossarySearchProperties, glossaryTermProperties } = load("lib/glossary-analytics.ts");
const article = load("lib/glossary.ts").glossaryArticles.find((article) => article.id === "BSG-317");
const repeatability = { id: article.id, name: article.displayName, category: article.category, aliases: article.aliases,
  href: "/resources/physical-ai-glossary/repeatability" };

test("search analytics identify actual inventory terms and preserve distinct outcomes", () => {
  const exact = glossarySearchProperties("REPEATABILITY", "All categories", [repeatability]);
  assert.equal(exact.match_type,"exact");
  assert.equal(exact.matched_term,"Repeatability");
  assert.equal(exact.matched_slug,"repeatability");
  const partial = glossarySearchProperties("rep", "All categories", [repeatability]);
  assert.equal(partial.match_type,"partial");
  assert.equal(partial.matched_term,null);
  const unmatched = glossarySearchProperties("person@example.com", "All categories", []);
  assert.equal(unmatched.match_type,"no_results");
  assert.ok(!JSON.stringify(unmatched).includes("person@example.com"));
  const ambiguous = glossarySearchProperties("Encoder", "All categories", [
    { ...repeatability, name:"Encoder", href:"/encoder-robotics" },
    { ...repeatability, name:"Encoder", href:"/encoder-machine-learning" },
  ]);
  assert.equal(ambiguous.match_type,"ambiguous");
  assert.equal(ambiguous.matched_slug,null);
  assert.deepEqual(glossaryTermProperties(repeatability),{term:"Repeatability",slug:"repeatability",category:article.category});
});

// Execute the real popup's effects with an isolated browser environment. No
// actual visitor storage, subscriptions or newsletter requests are changed.
function popupHarness({ desktop = true, stored = {}, pathname = "/resources/physical-ai-glossary/repeatability" } = {}) {
  let now = 10_000;
  const effects = [], opened = [], events = [];
  const documentListeners = new Map(), windowListeners = new Map();
  const storage = new Map(Object.entries(stored));
  const window = {
    localStorage: { getItem: (key) => storage.get(key) ?? null, setItem: (key,value) => storage.set(key,value) },
    matchMedia: () => ({matches:desktop}),
    addEventListener: (type,fn) => windowListeners.set(type,fn), removeEventListener: () => {},
    setTimeout: () => 1, clearTimeout: () => {}, innerHeight: 100, scrollY: 0,
  };
  const document = {
    addEventListener: (type,fn) => documentListeners.set(type,fn), removeEventListener: () => {},
    documentElement: { scrollHeight: 1100 },
  };
  const filename = "components/newsletter-capture.tsx";
  const code = ts.transpileModule(readFileSync(filename,"utf8"), {compilerOptions:{
    module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,
  }}).outputText;
  const require = createRequire(new URL("../components/newsletter-capture.tsx",import.meta.url));
  const mockedRequire = (id) => {
    if (id === "react") return {useEffect:(fn)=>effects.push(fn),useRef:(current)=>({current}),useState:(initial)=>[initial,(value)=>opened.push(value)]};
    if (id === "next/navigation") return {usePathname:()=>pathname};
    if (id === "@vercel/analytics/react") return {track:(name,properties)=>events.push({name,properties})};
    if (id === "@/components/newsletter-signup-form") return {__esModule:true,default:()=>null};
    return require(id);
  };
  const contentModule = {exports:{}};
  new Function("require","module","exports","window","document","Date",code)(mockedRequire,contentModule,contentModule.exports,window,document,{now:()=>now});
  contentModule.exports.default();
  effects.forEach((effect)=>effect());
  return { opened,events,storage,window, advance:(milliseconds)=>{now+=milliseconds;},
    exit:()=>documentListeners.get("mouseout")?.({clientY:0,relatedTarget:null}),
    scroll:()=>windowListeners.get("scroll")?.() };
}

test("glossary visitors receive the existing delayed desktop popup, once", () => {
  const h = popupHarness();
  assert.deepEqual(h.opened,[]);
  h.exit(); assert.deepEqual(h.opened,[]);
  h.advance(5001); h.exit();
  assert.deepEqual(h.opened,[true]);
  assert.equal(h.events[0].name,"Newsletter Prompt Shown");
  assert.equal(h.events[0].properties.path,"/resources/physical-ai-glossary/repeatability");
  assert.equal(h.events[0].properties.trigger,"exit");
  h.exit(); assert.equal(h.opened.length,1);
});

test("newsletter subscriber and weekly cooldown preferences still suppress the popup", () => {
  for (const stored of [{"black-scarab-newsletter-subscribed":"true"},{"black-scarab-newsletter-prompted-at":"5000"}]) {
    const h = popupHarness({stored});h.advance(50_000);h.exit();assert.deepEqual(h.opened,[]);
  }
  const excluded = popupHarness({pathname:"/career-paths"});excluded.advance(50_000);excluded.exit();assert.deepEqual(excluded.opened,[]);
});

test("mobile glossary popup waits for both engagement time and reading depth", () => {
  const h = popupHarness({desktop:false});
  h.window.scrollY=700;h.scroll();assert.deepEqual(h.opened,[]);
  h.advance(45_001);h.window.scrollY=590;h.scroll();assert.deepEqual(h.opened,[]);
  h.window.scrollY=600;h.scroll();assert.deepEqual(h.opened,[true]);
  assert.equal(h.events[0].properties.trigger,"engaged-mobile");
});
