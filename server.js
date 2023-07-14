const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'employees_db'
    },
    console.log(`Connected to employees_db`)
);

inquirer
.prompt(
    {
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee',  'Update an employee role']
    },
)
.then((answers) => {
    if (answers.action == 'View all departments') {
        db.query('SELECT * FROM department', function (err, results) {
            console.log(results);
        });
    }
    if (answers.action == 'View all employees') {
        db.query('SELECT * FROM employee', function (err, results) {
            console.log(results);
        });
    }
    if (answers.action == 'View all roles') {
        db.query('SELECT * FROM role', function (err, results) {
            console.log(results);
        });
    }
})

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});