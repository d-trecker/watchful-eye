const util = require("util");
const db = require("./db/connection");
const inquirer = require("inquirer");
const allDepartments = require("./utils/allDepartments");
const allRoles = require("./utils/allRoles");
const allEmployees = require("./utils/allEmployees");
const addDepartment = require("./utils/addDepartment");

db.connect((err) => {
  if (err) throw err;
  console.log(`Connected to The Watchful Eye`);
  startTracker();
});

db.query = util.promisify(db.query);

//Inquirer start
const startTracker = async () => {
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


// View all department -- DONE.
// View all roles -- DONE.
// View all employees  -- DONE.
// Add a department --DONE.
// Add a role
// Add an employee
// Update an employee role
