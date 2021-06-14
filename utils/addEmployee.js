const db = require("../db/connection");
const inquirer = require("inquirer");

//Adds New Employee 
module.exports = async () => {
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
        message: "What is the Employee's role ID?"
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
        message: "What is the employee's Manager's ID?"
      }
    ])
    let addedEmployee = await db.query("INSERT INTO employee SET ?", {
      first_name: pick.firstName,
      last_name: pick.lastName,
      role_id: (pick.roleId),
      manager: (pick.employeeManager)
    });
    console.log(`${pick.firstName} ${pick.lastName} is now under the Watchful Eye.`)
  };