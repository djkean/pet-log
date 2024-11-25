require('dotenv').config();
const express = require('express');
const router = express.Router();
const connectToSchema = require('../connect');

// get pets
router.get("/pets", (req, res) => {
  console.log(req.body)
  connectToSchema.query(`SELECT * FROM pets LEFT JOIN mypets ON pets.id = mypets.id`, [], (err, results) => {
    if (err) throw err;
    res.json({status: 200, error: null, response: results});
    console.log(res.status, res.reponse)
  })
})

// update pets

module.exports = router;