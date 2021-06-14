const db = require("../db/connection");
const cTable = require("console.table");
const startTracker = require("./startTracker");

//Searches for all roles.
module.exports = async () => {
    let query = `SELECT * FROM roles`;
    db.query(query, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      let rolesArray = [];
      res.forEach((role) => rolesArray.push(role));
      console.table(rolesArray);
      startTracker();
    });
};
