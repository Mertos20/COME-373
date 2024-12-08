const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

const app = express();
const port = 5001;

app.use(cors());

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'COME381',
  password: '3652',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => {
    console.error('Connection error', err.stack);
    process.exit(1); 
  });

app.get('/api/data', async (req, res) => {
  const { category } = req.query;

  try {
    let query = `
      SELECT p.pname AS product_name, p.price, p.stockquantity, p.ImageURL, p.Description, c.cname  AS category_name
      FROM product p 
      JOIN categories c ON c.categoryid = p.cid
    `;
    const queryParams = [];

    if (category) {
      query += ' WHERE c.cname = $1'; 
      queryParams.push(category);
    }

    const result = await client.query(query, queryParams);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ message: 'Failed to fetch product data', error: error.message });
  }
});

app.get('/api/categories', async (req, res) => {
  try {
    const result = await client.query('SELECT cname FROM categories');
    res.json(result.rows.map(row => row.cname)); // Doğru sütun adı kullanıldı
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    res.status(500).json({ message: 'Failed to fetch categories', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
