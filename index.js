const inquirer = require("inquirer");
const fs = require("fs");


const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamArr = [];

const managerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who will be the manager for this team?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter an ID number for the employee:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter an email address for the employee:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What office number will the employee have?",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArr.push(manager);
    });
};

const employeePrompt = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Who do you want to add?",
      choices: ["Intern", "Engineer"],
    },
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter an ID number for the employee:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter an email address for the employee:",
    },
    {
      type: "input",
      name: "github",
      message: "What is the GitHub username for the employee?",
      when: (input) => input.role === "Engineer",
    },
    {
      type: "input",
      name: "school",
      message: "What school is the intern attending?",
      when: (input) => input.role === "Intern",
    },
    {
        type: "confirm",
        name: "confirmAddMore",
        message: "Would you like to add any more members?"
    }
  ])
  .then(employeeInput => {
    let {role, name, id, email, github, school, confirmAddMore} = employeeInput;
    let employee;

    if(role === "Engineer") {
        employee = new Engineer (name, id, email, github);
    } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
    }

    teamArr.push(employee);

    if(confirmAddMore) {
        return employeePrompt(teamArr);
    }
    return teamArr;
    
  })

};


managerPrompt()
.then(employeePrompt)
.then(data => {
    console.log(teamArr)
})
.catch(err => {
    console.log(err);
});

