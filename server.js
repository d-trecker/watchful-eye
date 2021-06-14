const util = require("util");
const db = require("./db/connection");
const inquirer = require("inquirer");
const allDepartments = require("./utils/allDepartments");
const allRoles = require("./utils/allRoles");
const allEmployees = require("./utils/allEmployees");
const addDepartment = require("./utils/addDepartment");
// const addRole = require("./utils/addRole");
const addEmployee = require("./utils/addEmployee");

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

//Adds New Role
const addRole =  async () => {
  let departments = await db.query("SELECT * FROM department")

  let pick = await inquirer.prompt([
    {
      name: 'title',
      type: 'input',
      message: 'What is your new role?'
    },
    {
      name: 'salary',
      type: 'input',
      message: 'What will be this roles salary?'
    },
    {
      name: 'departmentId',
      type: 'list',
      choices: departments.map((departmentId) => {
        return {
          name: departmentId.department_name,
          value: departmentId.id
        }
      }),
      message: 'What role has this Department ID?'
    }
  ]);
  let chosenDepartment; 
  for (let i = 0; i < departments.length; i++) {
    if(departments[i].department_id === pick.choice) {
     chosenDepartment = departments[i];
    };
  }
  let addedRole = await db.query("INSERT INTO roles SET ?", {
    title: pick.title,
    salary: pick.salary,
    department_id: pick.departmentId
  })
  console.log(`${pick.title} role added.`)
  startTracker();
};

// View all department -- DONE.
// View all roles -- DONE.
// View all employees  -- DONE.
// Add a department --DONE.
// Add a role -- DONE.
// Add an employee -- DONE.
// Update an employee role
