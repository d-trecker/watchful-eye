const db = require("./db/connection");
const inquirer = require("inquirer");
const util = require("util");


db.connect((err) => {
  if (err) throw err;
  console.log(`Connected to The Watchful Eye`);
  startTracker();
});

db.query = util.promisify(db.query);

// Inquirer start
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
//--- Shows All Departments ---
const allDepartments = async () => {
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

//--- Shows All Roles ---
const allRoles = async () => {
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

//--- Shows All Employees ---
const allEmployees = async () => {
      let query = `SELECT employee.id,
      employee.first_name,
      employee.last_name, 
      roles.title, 
      department.department_name AS 'department',
      roles.salary,
      employee.manager
      FROM employee, roles, department
      WHERE department.id = roles.department_id
      AND roles.id = employee.role_id
      ORDER BY employee.id ASC`;
    db.query(query, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      let employeeArray = [];
      res.forEach((employee) => employeeArray.push(employee));
      console.table(employeeArray);
      startTracker();
    });
  };

//--- Adds a Department
const addDepartment = async () => {
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
  startTracker();
};  


//---Adds a New Role---
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

//--- Adds a Employee --- 
const addEmployee = async () => {
  let roles = await db.query("SELECT * FROM roles");

  let managers = await db.query("SELECT * FROM employee");

  let pick = await inquirer.prompt([
    {
      name: 'firstName',
      type: 'input',
      message: 'What is the employees first name?'
    },
    {
      name: 'lastName',
      type: 'input',
      message: 'What is the employees last name?'
    },
    {
      name: 'roleId',
      type: 'list',
      choices: roles.map((role) => {
        return {
          name: role.title,
          value: role.id
        }
      }),
      message: "What is the employee's role?"
    },
    {
      name: 'employeeManager',
      type: 'list',
      choices: managers.map((manager) => {
        return {
          name: manager.first_name + " " + manager.last_name,
          value: manager.id
        }
      }),
      message: "What is the employee's manager?"
    }
  ])
  let addedEmployee = await db.query("INSERT INTO employee SET ?", {
    first_name: pick.firstName,
    last_name: pick.lastName,
    role_id: (pick.roleId),
    manager: (pick.employeeManager)
  });
  console.log(`${pick.firstName} ${pick.lastName} is now under the Watchful Eye.`);
  startTracker();
};

//--- Updates Employee Role ---
const updateEmployee = async () => {
  let employees = await db.query("SELECT * FROM employee");

  let employeeSelected = await inquirer.prompt([
    {
      name: "employee",
      type: "list",
      choices: employees.map((employeeName) => {
        return {
          name: employeeName.first_name + " " + employeeName.last_name,
          value: employeeName.id,
        };
      }),
      message: "What employee should endure a greater burdan?",
    },
  ]);
  let roles = await db.query("SELECT * FROM roles");

  let roleSelected = await inquirer.prompt([
    {
      name: "role",
      type: "list",
      choices: roles.map((roleName) => {
        return {
          name: roleName.title,
          value: roleName.id,
        };
      }),
      message: "Select the burdan you wish to bestow upon the employee.",
    },
  ]);
  let result = await db.query("UPDATE employee SET ? WHERE ?", [
    { role_id: roleSelected.role },
    { id: employeeSelected.employee },
  ]);
  console.log(`Their fate has been sealed.`);
  startTracker();
};
