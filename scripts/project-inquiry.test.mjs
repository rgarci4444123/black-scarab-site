import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

function load(path, dependencies = {}, globals = {}) {
  const testModule = { exports: {} };
  const code = ts.transpileModule(readFileSync(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  runInNewContext(code, {
    module: testModule, exports: testModule.exports, Object, Date, Number, AbortSignal, URL, URLSearchParams,
    require(id) { assert.ok(id in dependencies, `Unexpected dependency: ${id}`); return dependencies[id]; },
    ...globals,
  });
  return testModule.exports;
}
const types = load("lib/robotics-partner.ts");
const leads = load("lib/local-ai-deployment.ts", { "@/lib/robotics-partner": types });
const article = "how-to-build-a-robot-with-nvidia";
const canonical = `https://www.blackscarab.ai/insights/${article}`;
const fixture = () => ({ ...leads.initialLocalAiDeploymentForm, name: " Test Builder ", email: "TEST@example.com", company: " Test Robotics ", phone: "+1 555 0100", message: "Prototype a robot for inspection.\nNeed simulation support.", formStartedAt: Date.now() - 5000, sourceArticle: article, sourceUrl: "https://spoofed.example", ctaPlacement: "end_of_article", utmSource: "newsletter" });

function harness({ env = {}, airtableStatus = 200, fetchError = false, mailError = false } = {}) {
  const stored = [], mails = [], logs = [], transports = [];
  const handler = load("lib/project-inquiry-handler.ts", {
    "@/lib/local-ai-deployment": leads,
    "next/server": { NextResponse: { json: Response.json } },
    nodemailer: { createTransport(options) { transports.push(options); return { async sendMail(mail) { mails.push(mail); if (mailError) throw new Error("SMTP unavailable"); } }; } },
  }, {
    process: { env: { AIRTABLE_TOKEN: "test-token", AIRTABLE_BASE_ID: "test-base", AIRTABLE_TABLE_NAME: "Intake Submissions", PORKBUN_SMTP_PASSWORD: "test-password", ...env } },
    console: { error: (...args) => logs.push(args), info: () => {} },
    fetch: async (url, options) => { stored.push({ url, ...JSON.parse(options.body) }); if (fetchError) throw new Error("Network unavailable"); return new Response("{}", { status: airtableStatus }); },
  }).createProjectInquiryHandler;
  return { stored, mails, logs, transports, post: (form = fixture(), { type = "robotics_partner_inquiry", headers = {} } = {}) => handler(type)(new Request("https://www.blackscarab.ai/api/robotics/partner", { method: "POST", headers: { origin: "https://www.blackscarab.ai", ...headers }, body: typeof form === "string" ? form : JSON.stringify(form) })) };
}

test("robotics leads retain all five fields, category, canonical source and campaign in existing Airtable columns", async () => {
  const h = harness(); const response = await h.post();
  assert.equal(response.status, 200); assert.equal(h.stored.length, 1);
  const fields = h.stored[0].records[0].fields;
  assert.equal(h.stored[0].url, "https://api.airtable.com/v0/test-base/Intake%20Submissions");
  assert.equal(fields["Full Name"], "Test Builder"); assert.equal(fields.Email, "test@example.com");
  assert.equal(fields["Company Name"], "Test Robotics"); assert.equal(fields["Phone / WhatsApp"], "+1 555 0100");
  assert.equal(fields["Primary Use Case"], fixture().message);
  assert.match(fields["Additional Context"], /Lead type: robotics_partner_inquiry/);
  assert.ok(fields["Additional Context"].includes(canonical));
  assert.match(fields["Additional Context"], /UTM source: newsletter/);
  assert.ok(!fields["Additional Context"].includes("spoofed.example"));
  assert.equal(Object.keys(fields).length, 7);
  assert.equal(h.mails.length, 1); assert.equal(h.mails[0].to, "rodolfo@blackscarab.ai");
  assert.equal(h.mails[0].replyTo, "test@example.com");
  assert.equal(h.mails[0].subject, "Robotics partner project from Test Builder");
  assert.ok(h.mails[0].text.includes(canonical)); assert.ok(h.mails[0].text.includes(fixture().message));
  assert.equal(h.transports[0].requireTLS, true);
});

test("Local AI retains its category, event-independent payload and notification configuration", async () => {
  const h = harness({ env: { PORKBUN_SMTP_EMAIL: "intake@example.com", LOCAL_AI_LEAD_NOTIFICATION_EMAIL: "admin@example.com" } });
  const form = { ...fixture(), sourceArticle: "local-ai-server-guide" };
  assert.equal((await h.post(form, { type: "local_ai_implementation" })).status, 200);
  assert.match(h.stored[0].records[0].fields["Additional Context"], /Lead type: Local AI implementation/);
  assert.match(h.mails[0].text, /New Local AI implementation inquiry/);
  assert.equal(h.mails[0].to, "admin@example.com");
  assert.equal(h.mails[0].from, "Black Scarab <intake@example.com>");
  assert.equal(h.mails[0].subject, "Local AI project from Test Builder");
});

test("optional company and phone can be blank", async () => {
  const h = harness(); assert.equal((await h.post({ ...fixture(), company: "", phone: "" })).status, 200);
});

test("required and malformed fields are rejected server side before storage or notification", async () => {
  for (const patch of [{ name: " " }, { email: "invalid" }, { message: "" }, { message: "a".repeat(4001) }, { phone: 42 }, { formStartedAt: "invalid" }]) {
    const h = harness(); assert.equal((await h.post({ ...fixture(), ...patch })).status, 400);
    assert.equal(h.stored.length, 0); assert.equal(h.mails.length, 0);
  }
});

test("malformed JSON, null and foreign origins fail without side effects", async () => {
  for (const [form, options, status] of [["{", {}, 400], ["null", {}, 400], [fixture(), { headers: { origin: "https://foreign.example" } }, 403], [fixture(), { headers: { "content-length": "16001" } }, 413]]) {
    const h = harness(); assert.equal((await h.post(form, options)).status, status); assert.equal(h.stored.length, 0); assert.equal(h.mails.length, 0);
  }
});

test("honeypot, implausibly fast and expired submissions silently drop", async () => {
  for (const patch of [{ website: "spam.example" }, { formStartedAt: Date.now() }, { formStartedAt: Date.now() - 86_401_000 }]) {
    const h = harness(); assert.equal((await h.post({ ...fixture(), ...patch })).status, 200); assert.equal(h.stored.length, 0); assert.equal(h.mails.length, 0);
  }
});

test("unknown source articles and placements cannot inject canonical attribution", () => {
  const result = leads.normalizeLocalAiAttribution({ ...fixture(), sourceArticle: "unrecognized", ctaPlacement: "arbitrary" }, "robotics_partner_inquiry");
  assert.equal(result.sourceArticle, ""); assert.equal(result.sourceUrl, ""); assert.equal(result.ctaPlacement, "");
  assert.equal(leads.normalizeLocalAiAttribution(fixture()).sourceArticle, "");
});

test("missing Airtable or SMTP configuration reports temporary unavailability", async () => {
  for (const env of [{ AIRTABLE_TOKEN: "" }, { PORKBUN_SMTP_PASSWORD: "" }]) {
    const h = harness({ env }); assert.equal((await h.post()).status, 503); assert.equal(h.stored.length, 0); assert.equal(h.mails.length, 0);
  }
});

test("storage failures return a retryable error and never send a notification", async () => {
  for (const options of [{ airtableStatus: 422 }, { fetchError: true }]) {
    const h = harness(options); assert.equal((await h.post()).status, 502); assert.equal(h.mails.length, 0);
  }
});

test("SMTP failures preserve a saved lead and the established success response", async () => {
  const h = harness({ mailError: true }); assert.equal((await h.post()).status, 200); assert.equal(h.stored.length, 1); assert.equal(h.logs.length, 1);
});

// Render the shared form with controlled hooks to verify the user-facing lifecycle.
function formHarness(robotics, responses = [200]) {
  const state = [], refs = [], effects = [], events = [], requests = [];
  let index = 0, refIndex = 0, mounted = false;
  const component = load("components/local-ai-deployment-form.tsx", {
    "@/lib/local-ai-deployment": leads,
    "@vercel/analytics/react": { track: (name, properties) => events.push({ name, properties }) },
    "react/jsx-runtime": { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) },
    react: {
      useState(initial) { const i = index++; if (!(i in state)) state[i] = initial; return [state[i], value => { state[i] = typeof value === "function" ? value(state[i]) : value; }]; },
      useRef(initial) { const i = refIndex++; return refs[i] ??= { current: initial }; },
      useEffect(fn) { if (!mounted) effects.push(fn); },
    },
  }, {
    window: { location: { search: `?source_article=${article}&source_url=${encodeURIComponent(canonical)}&cta_placement=end_of_article` } },
    document: { referrer: canonical },
    fetch: async (url, options) => { requests.push({ url, body: JSON.parse(options.body) }); const status = responses.shift() ?? 200; return { ok: status === 200, json: async () => status === 200 ? { ok: true } : { error: "Please try again." } }; },
  }).default;
  const render = () => { index = 0; refIndex = 0; const tree = component(robotics ? { inquiryType: "robotics_partner_inquiry" } : {}); for (const fn of effects.splice(0)) fn(); mounted = true; return tree; };
  render();
  const nodes = (tree, type) => [tree?.type === type ? tree : null, ...[tree?.props?.children].flat(Infinity).flatMap(child => typeof child === "object" && child ? nodes(child, type) : [])].filter(Boolean);
  return { render, nodes, events, requests };
}

test("robotics form exposes exactly five visible fields, emits start once, submits and confirms success", async () => {
  const h = formHarness(true); let tree = h.render();
  const inputs = h.nodes(tree, "input"); assert.equal(inputs.length, 5); // Four visible inputs plus existing hidden honeypot.
  assert.deepEqual(inputs.map(n => Boolean(n.props.required)), [true, false, true, false, false]);
  const textarea = h.nodes(tree, "textarea")[0]; assert.equal(textarea.props.required, true);
  assert.equal(textarea.props.placeholder, "What are you building or looking to accomplish? Tell us a little about your project and where you could use help.");
  assert.equal(h.nodes(tree, "select").length, 0);
  tree.props.onFocusCapture(); tree.props.onFocusCapture();
  inputs[0].props.onChange({ target: { value: "Builder" } }); inputs[2].props.onChange({ target: { value: "builder@example.com" } }); textarea.props.onChange({ target: { value: "Robot project" } });
  tree = h.render(); tree.props.onSubmit({ preventDefault() {} }); await new Promise(resolve => setImmediate(resolve));
  assert.equal(h.requests[0].url, "/api/robotics/partner"); assert.equal(h.requests[0].body.message, "Robot project");
  assert.deepEqual(h.events.map(e => e.name), ["robotics_partner_form_start", "robotics_partner_form_submit", "robotics_partner_form_success"]);
  assert.ok(h.events.every(e => e.properties.article_url === canonical));
  assert.ok(!JSON.stringify(h.events).includes("builder@example.com"));
  assert.equal(h.render().props.role, "status");
});

test("failed robotics submission preserves values and allows a successful retry", async () => {
  const h = formHarness(true, [502, 200]); let tree = h.render();
  h.nodes(tree, "textarea")[0].props.onChange({ target: { value: "Keep my project" } });
  h.render().props.onSubmit({ preventDefault() {} }); await new Promise(resolve => setImmediate(resolve));
  tree = h.render(); assert.equal(h.nodes(tree, "textarea")[0].props.value, "Keep my project");
  assert.ok(h.nodes(tree, "p").some(n => n.props.children === "Please try again."));
  assert.equal(h.nodes(tree, "button")[0].props.disabled, false);
  assert.equal(h.events.filter(e => e.name === "robotics_partner_form_success").length, 0);
  tree.props.onSubmit({ preventDefault() {} }); await new Promise(resolve => setImmediate(resolve));
  assert.equal(h.render().props.role, "status");
});

test("Local AI form retains its original endpoint, analytics and copy", async () => {
  const h = formHarness(false); const tree = h.render(); tree.props.onFocusCapture();
  assert.match(h.nodes(tree, "textarea")[0].props.placeholder, /What are you trying to accomplish/);
  tree.props.onSubmit({ preventDefault() {} }); await new Promise(resolve => setImmediate(resolve));
  assert.equal(h.requests[0].url, "/api/local-ai/deployment");
  assert.deepEqual(h.events.map(e => e.name), ["local_ai_deployment_form_start", "local_ai_deployment_form_submit"]);
});

function ctaHarness() {
  const events = [], observers = [], listeners = new Map(), effects = [];
  class Element {
    constructor(dataset = {}) { this.dataset = dataset; }
    closest(selector) { return selector === "a[href]" ? this : this.cta ?? null; }
    hasAttribute(attribute) { return attribute === "data-robotics-partner-cta" && this.robotics; }
  }
  class Observer {
    constructor(callback) { this.callback = callback; this.targets = new Set(); observers.push(this); }
    observe(target) { this.targets.add(target); }
    unobserve(target) { this.targets.delete(target); }
    disconnect() { this.targets.clear(); }
  }
  const robotics = new Element({ articleIdentifier: article, articleUrl: canonical, ctaPlacement: "end_of_article" }); robotics.robotics = true;
  const local = new Element({ articleIdentifier: "local-ai-server-guide", articleUrl: "https://www.blackscarab.ai/insights/local-ai-server-guide", ctaPlacement: "end_of_article" });
  const document = {
    addEventListener(type, fn) { listeners.set(type, fn); },
    removeEventListener(type) { listeners.delete(type); },
    querySelectorAll(selector) { return selector.includes("data-local-ai-cta") ? [robotics, local] : []; },
  };
  const analytics = load("components/engagement-analytics.tsx", {
    "@vercel/analytics/react": { track: (name, properties) => events.push({ name, properties }) },
    "next/navigation": { usePathname: () => `/insights/${article}` },
    react: { useEffect: fn => effects.push(fn), useRef: value => ({ current: value }) },
  }, { document, window: { location: { href: canonical, search: "?utm_source=briefing&utm_campaign=robotics" } }, Element, HTMLFormElement: class {}, IntersectionObserver: Observer });
  analytics.EngagementAnalytics(); const cleanup = effects[0]();
  const link = new Element({ analyticsEvent: "robotics-partner-cta" }); link.cta = robotics; link.href = `https://www.blackscarab.ai/robotics/partner?source_article=${article}`;
  return { events, robotics, local, link, listeners, cleanup,
    intersect(target, ratio) { const observer = observers.find(o => o.targets.has(target)); observer?.callback([{ target, isIntersecting: true, intersectionRatio: ratio }]); },
  };
}

test("robotics CTA views require 35 percent visibility, fire once, and stay separate from Local AI", () => {
  const h = ctaHarness(); h.intersect(h.robotics, 0.1); assert.equal(h.events.length, 0);
  h.intersect(h.robotics, 0.35); h.intersect(h.robotics, 1); h.intersect(h.local, 0.5);
  assert.deepEqual(h.events.map(e => e.name), ["robotics_partner_cta_view", "local_ai_cta_view"]);
  assert.equal(h.events[0].properties.article_url, canonical);
  h.cleanup(); assert.equal(h.listeners.size, 0);
});

test("robotics CTA click and middle click retain campaign and article attribution", () => {
  const h = ctaHarness(); h.listeners.get("click")({ target: h.link });
  h.listeners.get("auxclick")({ target: h.link, button: 1 });
  h.listeners.get("auxclick")({ target: h.link, button: 2 });
  assert.deepEqual(h.events.map(e => e.name), ["robotics_partner_cta_click", "robotics_partner_cta_click"]);
  assert.equal(new URL(h.link.href).searchParams.get("source_article"), article);
  assert.equal(new URL(h.link.href).searchParams.get("utm_source"), "briefing");
  assert.equal(new URL(h.link.href).searchParams.get("utm_campaign"), "robotics");
  h.cleanup();
});
