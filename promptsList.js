const prompts = [
    {
        type: "input",
        message: "Enter your github username: ",
        name: "github"
    },
    {
        type: "input",
        message: "Enter your email address: ",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your README?",
        name: "title"
    },
    {
        type: "input",
        message: "Give this readme a description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Include installation instructions for how users can install your app: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Include usage information for how users can use it: ",
        name: "usage"
    },
    {
        type: "list",
        message: "Include the appropriate license for your repo: ",
        name: "license",
        choices: ["Apache 2.0", "GNU AGPL v3", "IBM Public License Version 1.0", "The MIT License", "Mozilla Public License 2.0"]
    },
    {
        type: "input",
        message: "Include contributing guidelines for other interested developers: ",
        name: "contributing"
    },
    {
        type: "input",
        message: "Include test instructions: ",
        name: "test"
    }
];

module.exports = prompts;