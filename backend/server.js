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


app.get('/api/data', async (req, res) => {
  const { category } = req.query; 

  try {
    let query = 'SELECT p.name AS product_name, p.price,p.stockquantity, p.ImageURL, p.Description, c.name AS category_name FROM product p JOIN categories c ON c.categoryid = p.categoryid';
    const queryParams = [];

    if (category) {
      query += ' WHERE c.name = $1';  
      queryParams.push(category);
    }

    const result = await client.query(query, queryParams);  
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data', error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/api/categories', async (req, res) => {
  try {
    const result = await client.query('SELECT name FROM categories');
    res.json(result.rows.map(row => row.name)); 
  } catch (error) {
    console.error('Error fetching categories', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
