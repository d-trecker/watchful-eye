const db = require("../db/connection");
const startTracker = require("./startTracker");

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
    startTracker();
  });
};
