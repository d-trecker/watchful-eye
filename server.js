const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./db/connection");
const cTable = require("console.table");
const inquirer = require("inquirer");
const allDeparments = require("./utils/allDepartments");

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// For not found request.
app.use((req, res) => {
  res.status(404).end();
});

db.connect((err) => {
  if (err) throw err;
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
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

// View all department
// View all roles
// View all employees --DONE.
// Add a department
// Add a role
// Add an employee
// Update an employee role
