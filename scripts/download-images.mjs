#!/usr/bin/env node
// downloads all images referenced in data/events.ts and data/wikipedia-excerpts.ts
// to public/images/, skipping files that already exist.
// Run from the project root: node scripts/download-images.mjs

import { execSync } from 'child_process';
import { existsSync, readFileSync, mkdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

const eventsContent = readFileSync(join(projectRoot, 'data/events.ts'), 'utf8');
const wikiContent = readFileSync(join(projectRoot, 'data/wikipedia-excerpts.ts'), 'utf8');

/** @param {string} url */
function urlToFilename(url) {
  return url.split('/').pop();
}

const urls = new Set();

// Extract era image URLs from events.ts
for (const match of eventsContent.matchAll(/image:\s*"(https?:\/\/[^"]+)"/g)) {
  urls.add(match[1]);
}

// Extract overrideImage URLs from events.ts
for (const match of eventsContent.matchAll(/overrideImage:\s*"(https?:\/\/[^"]+)"/g)) {
  urls.add(match[1]);
}

// Extract thumbnail URLs from wikipedia-excerpts.ts
for (const match of wikiContent.matchAll(/thumbnail:\s*`(https?:\/\/[^`]+)`/g)) {
  urls.add(match[1]);
}

const destDir = join(projectRoot, 'public/images');
mkdirSync(destDir, { recursive: true });

let downloaded = 0;
let skipped = 0;
let errors = 0;

for (const url of urls) {
  const filename = urlToFilename(url);
  const destPath = join(destDir, filename);

  if (existsSync(destPath)) {
    console.log(`SKIP (exists): ${filename}`);
    skipped++;
    continue;
  }

  console.log(`Downloading: ${filename}`);
  console.log(`  from: ${url}`);

  try {
    execSync(
      `curl -s -L -A "ai-vs-humans-timeline/1.0 (educational)" -o "${destPath}" "${url}"`,
      { stdio: 'inherit' }
    );

    const stat = statSync(destPath);
    if (stat.size < 100) {
      console.warn(`  WARNING: file is very small (${stat.size} bytes), may have failed`);
      errors++;
    } else {
      console.log(`  OK (${stat.size} bytes)`);
      downloaded++;
    }
  } catch (e) {
    console.error(`  ERROR: ${e.message}`);
    errors++;
  }

  // Avoid rate-limiting
  execSync('sleep 0.5');
}

console.log('');
console.log(`Summary: downloaded=${downloaded} skipped=${skipped} errors=${errors}`);
