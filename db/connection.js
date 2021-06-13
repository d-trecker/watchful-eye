const mysql = require('mysql2');
require('dotenv').config();

//connect to database
const db = mysql.createConnection(
    {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: "the_eye_db",
    },
  );

  module.exports = db;