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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
