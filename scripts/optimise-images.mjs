/**
 * Image optimisation script
 *
 * Reads all JPG/PNG files from public/images/
 * Resizes and converts them to WebP at sensible max widths
 * Outputs to public/images/optimised/
 *
 * Run manually:  node scripts/optimise-images.mjs
 * Runs automatically in GitHub Actions before `npm run build`
 */

import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import { join, basename, extname } from "path";

const INPUT_DIR = "public/images";
const OUTPUT_DIR = "public/images/optimised";
const QUALITY = 82; // WebP quality (0-100). 82 is a good balance of size vs quality.

// Max widths per filename keyword — portrait images don't need to be as wide
const SIZE_MAP = {
  portrait: 900,   // chef portraits
  feature:  1400,  // service card hero images
  editorial: 1200, // editorial / section images
  default:  1400,
};

function getMaxWidth(filename) {
  const lower = filename.toLowerCase();
  for (const [key, width] of Object.entries(SIZE_MAP)) {
    if (lower.includes(key)) return width;
  }
  return SIZE_MAP.default;
}

// Create output directory if it doesn't exist
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

const supportedExtensions = [".jpg", ".jpeg", ".png"];

const files = readdirSync(INPUT_DIR).filter((file) => {
  const ext = extname(file).toLowerCase();
  return supportedExtensions.includes(ext);
});

if (files.length === 0) {
  console.log("No images found in", INPUT_DIR);
  process.exit(0);
}

console.log(`\nOptimising ${files.length} image(s)...\n`);

let totalOriginal = 0;
let totalOptimised = 0;

for (const file of files) {
  const inputPath = join(INPUT_DIR, file);
  const outputName = basename(file, extname(file)) + ".webp";
  const outputPath = join(OUTPUT_DIR, outputName);
  const maxWidth = getMaxWidth(file);

  try {
    const inputStat = (await import("fs")).statSync(inputPath);
    const originalSize = inputStat.size;

    await sharp(inputPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const outputStat = (await import("fs")).statSync(outputPath);
    const optimisedSize = outputStat.size;
    const saving = (((originalSize - optimisedSize) / originalSize) * 100).toFixed(1);

    totalOriginal += originalSize;
    totalOptimised += optimisedSize;

    console.log(
      `  ✓ ${file.padEnd(35)} ${formatBytes(originalSize).padStart(8)} → ${formatBytes(optimisedSize).padStart(8)}  (${saving}% smaller)`
    );
  } catch (err) {
    console.error(`  ✗ Failed to process ${file}:`, err.message);
  }
}

const totalSaving = (((totalOriginal - totalOptimised) / totalOriginal) * 100).toFixed(1);
console.log(
  `\nTotal: ${formatBytes(totalOriginal)} → ${formatBytes(totalOptimised)} — ${totalSaving}% reduction\n`
);

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}
