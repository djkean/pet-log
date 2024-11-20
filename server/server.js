require("dotenv").config();
//node --env-file .env .\server.js
const express = require("express");
const app = express();
const chalk = require("chalk");
const path = require("path");
const cors = require("cors");
const connectToSchema = require("./connect");
const port = process.env.PL_PORT;

app.use(cors({ origin: process.env.PL_FRONT }));
app.use(express.json());
app.listen(port);

console.log(chalk.cyan(`pet-log running on ${port}`));
