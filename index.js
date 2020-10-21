const inquirer = require("inquirer");
const fs = require("fs");
const prompts = require("./promptsList");


inquirer.prompt(prompts)
.then(function(res) {
    const title = generateTitle(res);
    const tableOfContents = generateTableOfContents();
    const answers = generateSections(res);
    
    const markdown = title + '\n' + tableOfContents + '\n' + answers;

    fs.appendFile("README2.md", markdown, (err) => {
        if(err) throw err;
        console.log("Your README file was created successfully!")
    })
    console.log(res);
});


function generateTitle(data){
    return `# ${data.title} \n`;
}

function generateTableOfContents(){
    const toc = "## Table of Contents \n" + 
                "* [Installation](#Installation) \n" +
                "* [Usage](#Usage) \n" +
                "* [License](#License) \n" +
                "* [Contributions](#Contributions) \n" +
                "* [Tests](#Tests) \n" +
                "* [Questions](#Questions) \n";
    return toc;
}

function generateSections(data) {
    const { github, email } = data;
    const questionsHeader = `## Questions \n`;
    const userInfo = "* Username: " + github + "\n" + "* Email: " + email;

    return questionsHeader + userInfo;
}

