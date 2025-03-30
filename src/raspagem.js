const puppeteer = require('puppeteer');
const fs = require('fs');
const { Pool } = require('pg');
const axios = require('axios');
const path = require('path');
const crypto = require('crypto');

// Configure PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cardap',
  password: '719732',
  port: 5432,
});

function determineCategory(title, description) {
  title = title.toLowerCase();
  description = description.toLowerCase();
  const text = `${title} ${description}`;

  // Define keywords for each category
  const categories = {
    'Lanches': ['hambúrguer', 'burger', 'lanche', 'sanduíche', 'sandwich', 'hot dog', 'cachorro quente'],
    'Pizzas': ['pizza', 'calzone'],
    'Brasileira': ['feijoada', 'arroz', 'feijão', 'farofa', 'tapioca', 'aipim', 'mandioca'],
    'Italiana': ['massa', 'macarrão', 'espaguete', 'lasanha', 'nhoque', 'gnocchi', 'risoto'],
    'Japonesa': ['sushi', 'sashimi', 'temaki', 'yakisoba', 'uramaki', 'niguiri'],
    'Chinesa': ['yakisoba', 'chop suey', 'rolinho primavera'],
    'Árabe': ['esfiha', 'quibe', 'kafta', 'shawarma', 'falafel', 'tabule'],
    'Mexicana': ['taco', 'burrito', 'nachos', 'guacamole', 'quesadilla'],
    'Marmitas': ['marmita', 'prato feito', 'pf', 'executivo'],
    'Vegetariana': ['vegetariano', 'vegano', 'sem carne'],
    'Fit': ['fit', 'light', 'zero', 'diet', 'proteína', 'protein'],
    'Açaí': ['açaí', 'acai', 'granola'],
    'Padaria': ['pão', 'croissant', 'sonho', 'bolo'],
    'Pastel': ['pastel'],
    'Sorvetes': ['sorvete', 'milk shake', 'sundae', 'açaí'],
    'Espetinhos': ['espeto', 'espetinho', 'churras'],
    'Bebidas': ['suco', 'refrigerante', 'água', 'cerveja', 'drink', 'bebida'],
    'Porções': ['porção', 'batata frita', 'fritas', 'nuggets', 'onion rings'],
    'Combos': ['combo', 'promoção', '+']
  };

  // Check each category's keywords
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return category;
    }
  }

  return 'Outros'; // Default category if no match is found
}

async function downloadImage(url) {
  try {
    const response = await axios({
      url,
      responseType: 'arraybuffer'
    });
    
    // Generate unique filename
    const fileName = crypto.randomBytes(16).toString('hex') + '.jpg';
    const filePath = path.join(__dirname, '..', 'public', 'uploads', fileName);
    
    // Ensure uploads directory exists
    const uploadsDir = path.join(__dirname, '..', 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    
    // Save the image
    fs.writeFileSync(filePath, response.data);
    console.log('Image saved:', fileName);
    
    return fileName;
  } catch (error) {
    console.error('Error downloading image:', error);
    return null;
  }
}

// In your scrape function, modify the database insertion part:
async function scrape() {
  try {
    const browser = await puppeteer.launch({ 
      headless: false,
      defaultViewport: null,
      args: ['--start-maximized']
    });
    const page = await browser.newPage();

    await page.goto('https://beta.livemenu.app/pt/menu/632092d04b00e300123a1595?v=0195d9da-d28e-773b-9491-89eca69042c0&menu=663cc33fe38bbd87ff4502fa&category=663cc343e38bbd87ff450353', {
      waitUntil: 'networkidle0',
      timeout: 60000
    });

    await page.waitForSelector('.text-card-foreground.px-4.bg-theme-background-color', { timeout: 60000 });

    const menuItems = await page.evaluate(() => {
      const items = [];
      const menuElements = document.querySelectorAll('.text-card-foreground.px-4.bg-theme-background-color');

      menuElements.forEach(item => {
        const titleElement = item.querySelector('h6');
        const descriptionElement = item.querySelector('.line-clamp-2.text-sm.text-slate-600');
        const priceElement = item.querySelector('.text-slate-900.no-underline.text-xs.leading-5');
        const imageElement = item.querySelector('img');

        if (titleElement && priceElement) {
          const title = titleElement.innerText.trim();
          const description = descriptionElement ? descriptionElement.innerText.trim() : '';
          const price = priceElement.innerText.trim().replace('R$', '').trim();
          const imageUrl = imageElement ? imageElement.getAttribute('src') : '';

          items.push({ 
            title,
            description,
            price: price.replace(',', '.'),
            imageUrl
          });
        }
      });
      return items;
    });

    // Process items and determine categories
    const processedItems = await Promise.all(menuItems.map(async item => {
      let imageFileName = null;
      if (item.imageUrl) {
        imageFileName = await downloadImage(item.imageUrl);
      }
      
      return {
        ...item,
        nome: item.title,
        descricao: item.description,
        categoria: determineCategory(item.title, item.description),
        preco_base: item.price,
        tempo_preparo: '30',
        imagem: imageFileName,
        disponivel: true
      };
    }));

    // Insert items into database
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      for (const item of processedItems) {
        await client.query(
          'INSERT INTO pratos (restaurante_id, categoria, nome, descricao, preco, imagem, tempo_preparo, disponivel) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
          [
            21, // Fixed restaurant_id
            item.categoria,
            item.nome,
            item.descricao,
            item.preco_base,
            item.imagem,
            item.tempo_preparo,
            item.disponivel
          ]
        );
      }

      await client.query('COMMIT');
      console.log(`Successfully inserted ${processedItems.length} items into the database`);
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }

    await browser.close();
  } catch (error) {
    console.error('Error during scraping or database insertion:', error.message);
  }
}

scrape();
