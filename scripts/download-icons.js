const https = require('https');
const fs = require('fs');
const path = require('path');

const iconUrls = {
    'brazil': 'https://img.icons8.com/stickers/100/brazil.png',
    'hamburger': 'https://img.icons8.com/stickers/100/hamburger.png',
    'pizza': 'https://img.icons8.com/stickers/100/pizza.png',
    'spaghetti': 'https://img.icons8.com/stickers/100/spaghetti.png',
    'sushi': 'https://img.icons8.com/stickers/100/sushi.png',
    'noodles': 'https://img.icons8.com/stickers/100/noodles.png',
    'kebab': 'https://img.icons8.com/stickers/100/kebab.png',
    'taco': 'https://img.icons8.com/stickers/100/taco.png',
    'lunch-box': 'https://img.icons8.com/stickers/100/lunch-box.png',
    'vegetarian-food': 'https://img.icons8.com/stickers/100/vegetarian-food.png',
    'healthy-food': 'https://img.icons8.com/stickers/100/healthy-food.png',
    'acai': 'https://img.icons8.com/stickers/100/acai.png',
    'bread': 'https://img.icons8.com/stickers/100/bread.png',
    'french-fries': 'https://img.icons8.com/stickers/100/french-fries.png',
    'ice-cream-cone': 'https://img.icons8.com/stickers/100/ice-cream-cone.png',
    'cocktail': 'https://img.icons8.com/stickers/100/cocktail.png',
    'combo-chart': 'https://img.icons8.com/stickers/100/combo-chart.png',
    'more': 'https://img.icons8.com/stickers/100/more.png'
};

const iconsDir = path.join(__dirname, '..', 'public', 'images', 'icons');

// Create directory if it doesn't exist
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

// Download function
const downloadIcon = (filename, url) => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(iconsDir, `${filename}.png`);
        const file = fs.createWriteStream(filePath);

        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${filename}.png`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => {});
            reject(err);
        });
    });
};

// Download all icons
async function downloadAllIcons() {
    try {
        for (const [name, url] of Object.entries(iconUrls)) {
            await downloadIcon(name, url);
        }
        console.log('All icons downloaded successfully!');
    } catch (error) {
        console.error('Error downloading icons:', error);
    }
}

downloadAllIcons();