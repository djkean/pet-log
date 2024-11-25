require('dotenv').config();
// node --env-file .env .\server.js
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const chalk = require('chalk');
const path = require('path');
const cors = require('cors');
const connectToSchema = require('./connect');
const router = express.Router();
const port = process.env.PL_PORT;

app.use(cors({ origin: process.env.PL_FRONT }));
app.use(express.json());
app.use('/api', routes)

const static_dir = path.resolve(path.join(__dirname, '../build'));
console.log(chalk.bgGreen('BUILD SUCCESSFUL'));

app.use('/', express.static(static_dir));
app.get('/*', (req, res, next) => {
  console.log(req.url)
  if (req.url.startsWith('/api/')) {

    return next();
  }
  res.sendFile(path.join(static_dir, 'index.html'));
});

app.listen(port);

console.log(chalk.cyan(`pet-log running on ${port}`));
