import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin
import time

# URL of the website
url = "https://silvia-morelli.wixsite.com/mr-blob/walls"

# Create directory for images if it doesn't exist
os.makedirs('images', exist_ok=True)

# Send request to website
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
response = requests.get(url, headers=headers)

# Parse HTML content
soup = BeautifulSoup(response.content, 'html.parser')

# Find all image tags
images = soup.find_all('img')

# Download each image
for img in images:
    try:
        # Get image source URL
        img_url = img.get('src')
        if not img_url:
            continue
            
        # Handle relative URLs
        if not img_url.startswith('http'):
            img_url = urljoin(url, img_url)
            
        # Get image name
        img_name = os.path.basename(img_url)
        
        # Download the image
        img_response = requests.get(img_url, headers=headers)
        
        # Save the image
        with open(os.path.join('images', img_name), 'wb') as f:
            f.write(img_response.content)
            print(f"Downloaded: {img_name}")
            
        # Add a small delay to be polite
        time.sleep(1)
        
    except Exception as e:
        print(f"Error downloading {img_url}: {str(e)}")

print("\nDownload complete!")
