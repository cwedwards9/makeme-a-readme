const inquirer = require("inquirer");
const fs = require("fs");
const promptList = require("./promptsList");
const generateMarkdown = require("./utils/generateMarkdown");

// Use the prompt list from promptList.js to gather user input for readme file
function init() {
    inquirer.prompt(promptList)
    .then(function(res) {
        console.log(res);
        // Call function from utils/generateMarkdown.js to convert responses into a markdown format
        const markdownResponses = generateMarkdown(res);

        // Call writeToFile function to pass in string in markdown format
        writeToFile(markdownResponses);
    });
}

// Takes in string and appends it to a readme file
function writeToFile(markdown){
    fs.appendFile("README2.md", markdown, (err) => {
        if(err) throw err;
        console.log("Your README file was created successfully!")
    })
}

// Initialize the program to prompt the user
init();


module.exports = generateMarkdown;