// One Letter For Your Day — entry program.
//
// The entry is exactly one letter, A-Z, standing for the word that
// describes the day. My day: grinding — a full day of grinding bounties,
// mints and code, from the first check in the morning to the last
// submission at night. The letter G carries that whole day.
//
// The program writes the single letter "G" to /output/entry.txt
// and nothing else: no word, no gloss, no punctuation, no newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "G"; // G for grinding

// Validation guard: the entry must be exactly one letter, A-Z.
// Anything else (a word, punctuation, whitespace, an empty string)
// is rejected before anything is written.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`Invalid entry: expected exactly one A-Z letter, got ${JSON.stringify(LETTER)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Verify what was written, so a bad write can never pass silently.
import { readFileSync } from "node:fs";
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LETTER) {
  throw new Error(`Write verification failed: expected ${JSON.stringify(LETTER)}, got ${JSON.stringify(written)}`);
}
