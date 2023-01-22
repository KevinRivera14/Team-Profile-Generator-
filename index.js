// here i am going to declare my constants 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(
  __dirname,
  "dist"
);
const outputPath = path.join(
  OUTPUT_DIR,
  "team.html"
);
const generateTeam = require("./src/template.js");

const teamArray = [];

function activeApp() {
  function makeTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message:
            "What type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more team members are needed.",
          ],
        },
      ])
      .then(function (userInput) {
        switch (
        userInput.addEmployeePrompt
        ) {
          case "Manager":
            attachManager();
            break;
          case "Engineer":
            attachEngineer();
            break;
          case "Intern":
            attachIntern();
            break;

          default:
            htmlConstructor();
        }
      });
  }

  // in this part of my code i am adding a manager 
  function attachManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message:
            "What is the person's name?",
        },

        {
          type: "input",
          name: "managerId",
          message:
            "What is the person's employee ID number?",
        },

        {
          type: "input",
          name: "managerEmail",
          message:
            "What is the person's email address?",
        },

        {
          type: "input",
          name: "managerOfficeNumber",
          message:
            "What is the person's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        makeTeam();
      });
  }

  // in this part of the code i am adding a engineer 
  function attachEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message:
            "What is the person's name?",
        },

        {
          type: "input",
          name: "engineerId",
          message:
            "What is the person's employee ID number?",
        },

        {
          type: "input",
          name: "engineerEmail",
          message:
            "What is the person's email address?",
        },

        {
          type: "input",
          name: "engineerGithub",
          message:
            "What is the person's GitHub username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        makeTeam();
      });
  }

  // this part of my code i am adding an intern 
  function attachIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message:
            "What is this person's name?",
        },

        {
          type: "input",
          name: "internId",
          message:
            "What is this person's employee ID number?",
        },

        {
          type: "input",
          name: "internEmail",
          message:
            "What is this  person's email address?",
        },

        {
          type: "input",
          name: "internSchool",
          message:
            "What school did this person attend?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        makeTeam();
      });
  }

  // in this portion of my code i am adding HTML
  // also i am adding the make team fuction at the end
  function htmlConstructor() {
    console.log("Team created!");

    fs.writeFileSync(
      outputPath,
      generateTeam(teamArray),
      "UTF-8"
    );
  }

  makeTeam();
}

activeApp();