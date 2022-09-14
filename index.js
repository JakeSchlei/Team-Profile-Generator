const inquirer = require("inquirer");

const managerPrompt = () => {
  return inquirer.prompt([
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
      name: "officeNum",
      message: "What office number will the employee have?",
    },
    {
      type: "list",
      name: "addEmployee",
      message:
        "Would you like to add any other employees to the team? If finished, select done.",
      choices: ["Engineer", "Intern", "Done"],
    },
  ]);
//   Need a .then statement to prompt the user to the appropriate prompt, also need to find a way to keep all the data together
//  Need a function if the user selects done that assembles the team and writes to HTML file 
};

const engineerPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the engineer?",
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
    },
    {
      type: "list",
      name: "addEmployee",
      message:
        "Would you like to add any other employees to the team? If finished, select done.",
      choices: ["Engineer", "Intern", "Done"],
    },
  ]);
};

const internPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the Intern?",
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
      name: "school",
      message: "What school is the intern attending?",
    },
    {
      type: "list",
      name: "addEmployee",
      message:
        "Would you like to add any other employees to the team? If finished, select done.",
      choices: ["Engineer", "Intern", "Done"],
    },
  ]);
};
