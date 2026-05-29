// One-shot image optimization: PNG → WebP (quality 85).
// Säilitab PNG-d backupiks; uued WebP-failid kõrvuti.
// Käivitamine: node convert-images.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'images');
const QUALITY = 85;
const EFFORT = 6; // 0-6, 6 = best compression (slower)

async function convertAll() {
  const files = fs.readdirSync(IMAGES_DIR).filter(f => f.toLowerCase().endsWith('.png'));
  console.log(`Found ${files.length} PNG files to convert`);

  let totalPngBytes = 0;
  let totalWebpBytes = 0;
  const results = [];

  for (const file of files) {
    const pngPath = path.join(IMAGES_DIR, file);
    const webpPath = path.join(IMAGES_DIR, file.replace(/\.png$/i, '.webp'));
    const pngSize = fs.statSync(pngPath).size;
    totalPngBytes += pngSize;

    try {
      await sharp(pngPath)
        .webp({ quality: QUALITY, effort: EFFORT })
        .toFile(webpPath);
      const webpSize = fs.statSync(webpPath).size;
      totalWebpBytes += webpSize;
      const reduction = ((1 - webpSize / pngSize) * 100).toFixed(1);
      results.push({ file, pngKb: (pngSize/1024).toFixed(0), webpKb: (webpSize/1024).toFixed(0), reduction: reduction + '%' });
    } catch (err) {
      console.error(`  FAIL ${file}: ${err.message}`);
    }
  }

  console.log('\nPer-file results:');
  console.table(results);
  console.log(`\nTotal: ${(totalPngBytes/1024/1024).toFixed(1)} MB → ${(totalWebpBytes/1024/1024).toFixed(1)} MB`);
  console.log(`Reduction: ${((1 - totalWebpBytes/totalPngBytes)*100).toFixed(1)}%`);
  console.log(`Saved: ${((totalPngBytes - totalWebpBytes)/1024/1024).toFixed(1)} MB`);
}

convertAll().catch(err => { console.error(err); process.exit(1); });
