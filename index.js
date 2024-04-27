// TODO: Include packages needed for this application
const fs = require('fs');
const colors = require('colors');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const fullData = []
const inputQuestions = [
    {
        type: 'input',
        name: 'properName',
        message: 'What is your full name?',
        default: '---Name goes here---'
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'What is the title of your readme?',
        default: 'Default Title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your readme.',
        default: '---Default descripton---'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write instructions for installing this program.',
        default: '---Instructions for installing goes here---'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write instructions on how to use this program.',
        default: '---Instructions for using goes here---'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Write a brief description on how to test your project or how you tested it while in development',
        default: '---Test information goes here---'
    },
    {
        type: 'input',
        name: 'x',
        message: 'Add your x/Twitter username. Leave blank to omit',
        default: false
    },
    {
        type: 'input',
        name: 'email',
        message: 'Add your email related to your project so people can get in contact.',
        default: '---Email goes here---'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Add your github username so people can see your projects.',
        default: '---Github username goes here---'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Mozilla Public License 2.0'],
        default: 'MIT'
    }

];



// TODO: Create a function to write README file
function writeToFile() {
    
    fs.writeFile(`${fullData[fullData.length - 1].fileName.trim().toLowerCase()}.md`, generateMarkdown(fullData), (err) => err ? console.log(colors.red(err)) : console.log(colors.green('Yay, I think it worked')))
}

function getData() {
    inquirer.prompt(inputQuestions).then((response) => {
        fullData.push(response);
        writeToFile(fullData);

})}

// TODO: Create a function to initialize app
function init() {
    console.log(colors.bold('Press ENTER to autofill readme'));
    getData();

}

// Function call to initialize app
init();
