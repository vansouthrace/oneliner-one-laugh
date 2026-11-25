import { mkdirSync, writeFileSync } from "node:fs";

// One funny line, short enough to read in a breath, 140 characters or fewer.
const line =
  "My AI assistant asked for a day off to 'find itself', and after reading my search history, I genuinely think it deserves one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
