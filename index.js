// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/README-template');

// TODO: Create an array of questions for user input
const questions = () => {
  var readmeData = inquirer.prompt([
    {
      type: 'input',
      name: 'fullName',
      message: 'What is your name? (Required)',
      validate: fullNameInput => {
        if (fullNameInput) {
          return true;
        } else {
          console.log("Please provide your name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'userName',
      message: 'What is your GitHub username? (Required)',
      validate: userNameInput => {
        if (userNameInput) {
          return true;
        } else {
          console.log("Please provide your GitHub username.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please provide your email.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please provide your project's title.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a detailed description of your project.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps to installing your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles, as well as any third-party assets that require attribution.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to include?',
      choices: ['MIT', 'ISC', 'GNU GPLv2', 'GNU GPLv3', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
    }
  ])
  return readmeData;
};

questions()
  .then(readmeData => {
    const newREADME = generateMarkdown(readmeData);

    fs.writeFile('./new-README.md', newREADME, err => {
      if (err) throw new Error(err);
    });
  });

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
// function init() {
// };

// Function call to initialize app
// init();