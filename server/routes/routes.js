require('dotenv').config();
const express = require('express');
const router = express.Router();
const connectToSchema = require('../connect');

// get pets
router.get('/pets', (req, res) => {
  connectToSchema.query(`SELECT * FROM pets LEFT JOIN mypets ON pets.id = mypets.id`, [], (err, results) => {
    if (err) throw err;
    res.json({status: 200, error: null, response: results});
  })
})

// update mypets page
router.get('/update', (req, res) => {
  connectToSchema.query(`SELECT pets.id, pets.name, pets.source, pets.source2 FROM pets ORDER BY pets.name ASC`, [], (err, results => {
    if (err) throw err;
    res.json({status: 200, error: null, response: results});
  }))
})

// commit update to mypets db
router.post('/commitupdate', (req, res) => {

})

module.exports = router;