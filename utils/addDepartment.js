const db = require("../db/connection");
const inquirer = require("inquirer");

//adds a department
module.exports = async () => {
    console.log("Add a new department");
    let newDept = await inquirer.prompt([
      {
        name: "deptName",
        type: "input",
        message: "Please name your new department",
      },
    ]);
    let addedDept = await db.query("INSERT INTO department SET ?", {
      department_name: newDept.deptName,
    });
    console.log(`${newDept.deptName} is now a department.`);

};
