# watchful-eye

Title: Watchful-Eye</br>
Student: Dylan Trecker</br>
Description: A command-line application that tracks your employees with the ever so looming watchful eye..</br>
Full Repository: https://github.com/d-trecker/watchful-eye.git</br>
Get the repository by: $ git clone git@github.com:d-trecker/watchful-eye.git </br>
Video Link: https://drive.google.com/file/d/1OopntxvY1LyeYyTyvI6sXgTCgXCBJY1W/view?usp=sharing </br>

User Story</br>
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

Acceptance Criteria</br>
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

- When application is started, listed options above are shown.

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

- When you choose to view 'all departments', listed requirements are shown. 

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

- When you choose 'all roles', listed requirements are shown. 

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

- When you choose 'all employees', listed requirements are shown. 

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

- When you choose 'add a department', then you are prompted to enter the name of the department and that department is added to the database. 

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

- When you choose 'add a role', you are prompted to enter role name, salary, and department for the role and that role is added to the database. 

WHEN I choose to add an employee
THEN I am prompted to enter the employee???s first name, last name, role, and manager and that employee is added to the database

- When you choose 'add an employee', you are prompted to enter the employee's first name, last name, role, and manager and that employee is added to the database.

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

- When you choose 'update an employee role', you are prompted to select a employee and update their new role. The updated information is added to the database. 