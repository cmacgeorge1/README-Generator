// Require dependancies
const fs = require("fs");
const inquirer = require("inquirer");

// Create an Array of questions
const questions = [
    {
        message: "What is your github username?",
        name: "username",
        type: "input"
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "input"
    },
    {
        message: "What would you like to title this project?",
        name: "title",
        type: "input"
    },
    {
        message: "Please provide a brief description",
        name: "description",
        type: "input"
    },
    {
        message: "Are there any notes for installation of this project?",
        name: "installation",
        type: "input"
    },
    {
        message: "how does the user run this program?",
        name: "usage",
        type: "input"
    },
    {
        message: "are there any licenses for this project?",
        name: "license",
        type: "list",
        choices: ["MIT", "ISC", "APACHE 2.O", "NONE"]
    },
    {
        message: "Would you like to contribute to this project?",
        name: "contribute",
        type: "input"
    },
    {
        message: "Is there a testing requirement for this app?",
        name: "test",
        type: "input"
    }
]

// Write a README in a markdown file as a template


// Function that will generate my README template


// Use inquirer to prompt users with questions
function userChoice () {
    inquirer.prompt(questions)
    .then(function(userInput){
        console.log(userInput)
    })
} 
userChoice()