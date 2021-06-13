const mysql = require("mysql2");
const db = require("./db/connection");
const inquirer = require("inquirer");
const allDeparments = require("./utils/allDepartments");
const allRoles = require("./utils/allRoles");
const allEmployees = require("./utils/allEmployees");

db.connect((err) => {
  if (err) throw err;
  console.log(`Connected to Watchful Eye`);
  startTracker();
});

//Inquirer start
function startTracker() {
  inquirer
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
    .then(function ({ choices }) {
      switch (choices) {
        case "View all departments":
          allDeparments();
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
          quitApp();
          break;
      }
    }); 
}

// View all department -- DONE. 
// View all roles
// View all employees 
// Add a department
// Add a role
// Add an employee
// Update an employee role
