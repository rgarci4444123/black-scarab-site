import { readFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";

// Build tooling only: evaluate local content modules without a browser or app server.
export function createContentLoader(root = process.cwd()) {
  const cache = new Map();
  function load(filename) {
    const file = resolve(filename);
    if (cache.has(file)) return cache.get(file).exports;
    const contentModule = { exports: {} };
    cache.set(file, contentModule);
    if (file.endsWith(".json")) {
      contentModule.exports = JSON.parse(readFileSync(file, "utf8"));
      return contentModule.exports;
    }
    const code = ts.transpileModule(readFileSync(file, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    }).outputText;
    const require = createRequire(file);
    const localRequire = (id) => id.startsWith("@/")
      ? load(join(root, `${id.slice(2)}.ts`))
      : require(id);
    new Function("require", "module", "exports", code)(localRequire, contentModule, contentModule.exports);
    return contentModule.exports;
  }
  return load;
}
