INSERT INTO department(department_name)
VALUES("Deck"), ("Engine"), ("Electro-Tech"), ("Stewards");

INSERT INTO roles(title, salary, department_id)
VALUES("Deck Officer", 75000, 1), ("Engineer Officer", 65000, 2), ("Electro Tech Officer", 70000, 3), ("Chefs Steward", 60000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager)
VALUES('Sid', 'Vicous', 1, 1), ('Frank', 'Sinatra', 2, 2), ('Jeanne', 'dArc', 3, 3), ('Captain', 'Crunch', 4, 4), ('Alice', 'Quinn', 3, 3);