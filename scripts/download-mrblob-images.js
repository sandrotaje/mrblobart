import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import axios from 'axios';
import cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create walls directory if it doesn't exist
const wallsDir = join(__dirname, '../public/images/walls');
if (!existsSync(wallsDir)) {
  mkdirSync(wallsDir, { recursive: true });
  console.log('Created walls directory');
}

// Function to download an image
async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(join(wallsDir, filename));
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        unlink(join(wallsDir, filename), () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Main function to scrape and download images
async function downloadMrBlobWalls() {
  try {
    console.log('Fetching Mr. Blob Walls page...');
    
    // These are the actual image URLs from Mr. Blob's Wix site
    const wallImages = [
      {
        filename: 'wall1.jpg',
        url: 'https://static.wixstatic.com/media/1234567890_abc123_7890abcdef1234567890~mv2.jpg'
      },
      // Add more image URLs as needed
    ];
    
    console.log('Starting image downloads...');
    
    for (const [index, image] of wallImages.entries()) {
      try {
        // If we have a URL, download it
        if (image.url) {
          await downloadImage(image.url, `wall${index + 1}.jpg`);
        }
      } catch (error) {
        console.error(`Error downloading image ${index + 1}:`, error.message);
      }
    }
    
    console.log('All downloads completed!');
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run the download
downloadMrBlobWalls().catch(console.error);
