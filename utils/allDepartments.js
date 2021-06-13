const db = require("../db/connection");
const express = require("express");
const cTable = require("console.table");

//Searches for all departments. 
module.exports = async () => {
  let query = `SELECT * FROM department`;
  db.query(query, function (err, res) {
    if (err) {
      console.log(err);
      throw err;
    }
    let departmentArray = [];
    res.forEach((department) => departmentArray.push(department));
    console.table(departmentArray);
  });
};
