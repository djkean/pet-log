require("dotenv").config({ path: __dirname + "/.env" });
const mysql2 = require("mysql2");

//connects to pet_log schema
const connectToSchema = mysql2.createConnection({
  host: process.env.PL_HOST,
  user: process.env.PL_USER,
  password: process.env.PL_PASS,
  database: process.env.PL_DATABASE,
});

module.exports = connectToSchema;