import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "My smart fridge emailed me a grocery list and cc'd my therapist.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY);
