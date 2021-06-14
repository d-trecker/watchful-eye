// const db = require("../db/connection");
// const inquirer = require("inquirer");

//Adds New Role
// module.exports =  async () => {
//     let departments = await db.query("SELECT * FROM department")
  
//     let pick = await inquirer.prompt([
//       {
//         name: 'title',
//         type: 'input',
//         message: 'What is your new role?'
//       },
//       {
//         name: 'salary',
//         type: 'input',
//         message: 'What will be this roles salary?'
//       },
//       {
//         name: 'departmentId',
//         type: 'list',
//         choices: departments.map((departmentId) => {
//           return {
//             name: departmentId.department_name,
//             value: departmentId.id
//           }
//         }),
//         message: 'What role has this Department ID?'
//       }
//     ]);
//     let chosenDepartment; 
//     for (let i = 0; i < departments.length; i++) {
//       if(departments[i].department_id === pick.choice) {
//        chosenDepartment = departments[i];
//       };
//     }
//     let addedRole = await db.query("INSERT INTO roles SET ?", {
//       title: pick.title,
//       salary: pick.salary,
//       department_id: pick.departmentId
//     })
//     console.log(`${pick.title} role added.`)
//   };