const db = require("../db/connection");
const inquirer = require("inquirer");

module.exports = async () => {
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
};
