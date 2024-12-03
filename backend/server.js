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

client.connect();

// API Endpoint with category filter
app.get('/api/data', async (req, res) => {
  const { category } = req.query;  // Kategori parametresini al

  try {
    let query = 'SELECT p.name AS product_name, p.price, p.ImageURL, p.Description, c.name AS category_name FROM products p JOIN categories c ON c.categoryid = p.categoryid';
    const queryParams = [];

    if (category) {
      query += ' WHERE c.name = $1';  // Kategori varsa, sorguyu filtrele
      queryParams.push(category);
    }

    const result = await client.query(query, queryParams);  // Kategori varsa, parametreyi ekle
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data', error);
    res.status(500).send('Internal Server Error');
  }
});

// Kategorileri listeleyen endpoint
app.get('/api/categories', async (req, res) => {
  try {
    const result = await client.query('SELECT name FROM categories');
    res.json(result.rows.map(row => row.name));  // Sadece kategori isimlerini gönder
  } catch (error) {
    console.error('Error fetching categories', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
