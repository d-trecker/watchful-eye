const mysql = require("mysql2");
require('dotenv').config();

//connect to database
const db = mysql.createConnection(
    {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: "the_eye_db",
    },
    console.log("Connected to the Watchful Eye database.")
  );

  module.exports = db;