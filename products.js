const express = require('express');
const router = express.Router();
const db = require('./db'); 



router.get('/avg-by-category', (req, res) => {
  try {
    const result = db.prepare(`
      SELECT TRIM("category.code") AS categoryCode,
             AVG(CAST(value AS REAL)) AS Promedio
      FROM products
      GROUP BY TRIM("category.code")
    `).all();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/max-min-by-type', (req, res) => {
  try {
    const result = db.prepare(`
      SELECT productType,
             MAX(CAST(value AS REAL)) AS ValorMaximo,
             MIN(CAST(value AS REAL)) AS ValorMinimo
      FROM products
      GROUP BY productType
    `).all();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/unique-count', (req, res) => {
  try {
    const result = db.prepare(`
      SELECT COUNT(DISTINCT partNumber) AS TotalUnicos
      FROM products
    `).get();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/total-by-brand', (req, res) => {
  try {
    const result = db.prepare(`
      SELECT TRIM("brand.code")       AS brandCode,
             SUM(CAST(value AS REAL)) AS ValorTotal
      FROM products
      GROUP BY TRIM("brand.code")
    `).all();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});