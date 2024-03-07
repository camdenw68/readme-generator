const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");
// questions and input
const questions = [
    // title
    {
        type: "input",
        name: "title",
        message: "Please add your Title",
    },
    // description
    {
        type: "input",
        name: "description",
        message: "Please add your description of the functionality of this repository",
    },
    // table of contents
    {
        type: "input",
        name: "tableofcontents",
        message: "Please add the table of contents",
    },
    // installation
    {
        type: "input",
        name: "installation",
        message: "How will this repository be installed",
    },
    // usage
    {
        type: "input",
        name: "usage",
        message: "Please state what this repository will be used for",
    },
    // License
    {
        type: "list",
        name: "license",
        message: "Please select a license",
        choices: ["MIT", "GPLv2", "Apache", "none"]
    },
    // Contributing
    {
        type: "input",
        name: "contributors",
        message: "Please list all contributors if any",
    },
    // tests
    {
        type: "input",
        name: "tests",
        message: "Please list any tests or testing used",
    },
    // Questions
    {
        type: "input",
        name: "github",
        message: "Please state your github username and a link",
    },
    {
        type: "input",
        name: "question",
        message: "Please State your email or any way to contact you",
    },
]

// write readme
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
writeToFile("./ans/Readme.md", generateMarkdown((response))
     )}
)}

// Function call to initialize app
init();
