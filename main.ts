// A working ai-joke-03 entry (Node 22, standard library only): it writes one
// original one-liner about AI coding agents to /output/entry.txt. The joke is
// about the agent that over-engineers a trivial task and still ships it broken:
// a plugin system and a config file for a button that does not work.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "I asked my coding agent to add a button. It built a plugin system, a config file, and a button that doesn't work."
);
