const Inquirer = require("inquirer");
const Employee = require('./Employee.js');
const Intern = require('./Intern.js');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');

function getManager() {
    return Inquirer.prompt([
        {
            message: "What is your name?",
            type: "input",
            name: "name",
        }, {
            message: "What is your ID number?",
            type: "input",
            name: "id",
        }, {
            message: "What is your email?",
            type: "input",
            name: "email",
        }, {
            message: "What is your office number?",
            type: "input",
            name: "officeNumber",
        }
    ])
}

function getEngineer() {
    return Inquirer.prompt([
        {
            message: "What is your name?",
            type: "input",
            name: "name",
        }, {
            message: "What is your ID number?",
            type: "input",
            name: "id",
        }, {
            message: "What is your email?",
            type: "input",
            name: "email",
        }, {
            message: "What is your github profile?",
            type: "input",
            name: "github",
        }
    ])
}

function getIntern() {
    return Inquirer.prompt([
        {
            message: "What is your name?",
            type: "input",
            name: "name",
        }, {
            message: "What is your ID number?",
            type: "input",
            name: "id",
        }, {
            message: "What is your email?",
            type: "input",
            name: "email",
        }, {
            message: "What school do yout attend?",
            type: "input",
            name: "school",
        }
    ])
}

function anotherEmployee() {
    return Inquirer.prompt([

        {
            message: "Would you like to add another employee?",
            type: "confirm",
            name: "anotherEmployee",
        }
    ])
}

function typeOfEmployee() {
    return Inquirer.prompt([

        {
            message: "Are they an Engineer or an Intern?",
            type: "list",
            name: "typeOfEmployee",
            choices: ['Engineer', 'Intern']
        }
    ])
}

function nextEmployee() {
    anotherEmployee().then(function (value) {
        if(value.anotherEmployee){
            typeOfEmployee().then(function (value) {
                if(value.typeOfEmployee === 'Engineer') {
                    getEngineer().then(function (value) {
                        let engineer = new Engineer(value.name, value.id, value.email, value.github);
                        console.log(engineer);
                        nextEmployee();
                    })
                } else {
                    getIntern().then(function (value) {
                        let intern = new Intern(value.name, value.id, value.email, value.school);
                        console.log(intern);
                        nextEmployee();
                    })
                }
                
            })
        }
    })
}

getManager().then(function (value) {
    let e = new Manager(value.name, value.id, value.email, value.officeNumber);
    console.log(e);
    nextEmployee();
})









