const generatePage = require('./src/page-template');
const inquirer = require("inquirer");
const fs = require("fs");


const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let internArr = [];
let engineerArr = [];
let manager;

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
      manager = new Manager(name, id, email, officeNumber);

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
        engineerArr.push(employee);
    } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        internArr.push(employee);
    }


    if(confirmAddMore) {
        return employeePrompt();
    }
    return;
    
  })

};

// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         let page = generatePage(manager, engineerArr, internArr);
//         fs.writeFile('./dist/index.html', fileContent, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }

//             resolve ({
//                 message: 'File Created! Check the HTML file for the results!'
//             });
//         });
//     });
// };

function writeFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}



managerPrompt()
.then(employeePrompt)
.then(() => {
    let page = generatePage(manager, engineerArr, internArr);
    writeFile('./dist/index.html', page);
})
.catch(err => {
    console.log(err);
});

