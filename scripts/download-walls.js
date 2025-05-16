import { createWriteStream, existsSync, mkdirSync, unlink } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create walls directory if it doesn't exist
const wallsDir = join(__dirname, '../public/images/walls');
if (!existsSync(wallsDir)) {
  mkdirSync(wallsDir, { recursive: true });
  console.log('Created walls directory');
}

// Sample wall images (replace with actual Mr. Blob's mural images)
const wallImages = [
  {
    url: 'https://images.unsplash.com/photo-1547891654-66a20d603fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    filename: 'wall1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    filename: 'wall2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    filename: 'wall3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519885277439-f987cc5d0d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    filename: 'wall4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1497752531616-c622afabc8d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    filename: 'wall5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1580130732478-4e339fb33746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    filename: 'wall6.jpg'
  }
];

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(join(wallsDir, filename));
    
    https.get(url, (response) => {
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
      unlink(join(wallsDir, filename), () => {});
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  for (const image of wallImages) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error.message);
    }
  }
  
  console.log('All downloads completed!');
}

// Run the download
downloadAllImages().catch(console.error);
