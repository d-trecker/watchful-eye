const util = require("util");
const inquirer = require("inquirer");
const db = require("../db/connection");
const allDepartments = require("./allDepartments");
const allRoles = require("./allRoles");
const allEmployees = require("./allEmployees");
const addDepartment = require("./addDepartment");
const addRole = require("./addRole");
const addEmployee = require("./allEmployees");
const updateEmployee = require ("./updateEmployee");

//Holds connection query as a promise. 
db.query = util.promisify(db.query);


//Inquirer start
module.exports = async () => {
  let pick = await inquirer
    .prompt({
      name: "choices",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit",
      ],
    })
      switch (pick.choices) {
        case "View all departments":
          allDepartments();
          break;
        case "View all roles":
          allRoles();
          break;
        case "View all employees":
          allEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployee();
          break;
        case "Exit":
          console.log("Goodbye.");
          db.end();
          break;
      };
    
}

