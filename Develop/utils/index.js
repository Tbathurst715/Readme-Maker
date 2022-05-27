const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input


inquirer
  .prompt([
    {
      type: 'input',
      message: "What is the application/project called?",
      name: 'name',
    },
    {
      type: 'input',
      message: "Give a description of the application/project.",
      name: 'description',
    },
    {
      type: 'input',
      message: "What does the application/project achieve?",
      name: 'achieve',
    },
    {
      type: 'checkbox',
      name: 'licenses',
      message: "What licenses do you want to include?",
      choices: [""],
    },
    {
      type: 'input',
      message: "How can you be contacted for questions/concerns?",
      name: 'contact',
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();