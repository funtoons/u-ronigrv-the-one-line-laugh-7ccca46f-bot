// The One-Line Laugh — a single funny line, written to /output/entry.txt.
//
// The line is a fixed, deterministic string: no randomness, no network,
// no clock, no environment. Running this program twice produces the
// byte-identical file every time.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I bought a planner to get my life together, and the first thing I wrote in it was 'buy a new planner'.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
  }
  // One sentence: exactly one terminal full stop, and no other
  // sentence-ending punctuation inside the line.
  const sentenceEnders = (LINE.match(/[.!?]/g) ?? []).length;
  if (sentenceEnders !== 1 || !LINE.endsWith(".")) {
    throw new Error("entry must be a single sentence");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(join("/output", "entry.txt"), LINE, "utf8");
}

main();
