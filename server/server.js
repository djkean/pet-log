require("dotenv").config();
//node --env-file .env .\server.js
const express = require("express");
const app = express();
const chalk = require("chalk");
const path = require("path");
const cors = require("cors");
const connectToSchema = require("./connect");
const router = express.Router();
const port = process.env.PL_PORT;

app.use(cors({ origin: process.env.PL_FRONT }));
app.use(express.json());

router.get("/pets", (req, res) => {
  connectToSchema.query(`SELECT * FROM pets LEFT JOIN mypets ON pets.id = mypets.id`, [], (err, results) => {
    if (err) throw err;
    res.json({status: 200, error: null, response: results});
  })
})

app.listen(port);

console.log(chalk.cyan(`pet-log running on ${port}`));
