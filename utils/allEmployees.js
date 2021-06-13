const db = require("../db/connection");
const cTable = require("console.table");

//searches for all employees and lists employee ids, first names, last names, job titles, departments, salaries, and managers
module.exports = async () => {
//   let query = `SELECT * FROM employee`;
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
    // startTracker();
  });
};
