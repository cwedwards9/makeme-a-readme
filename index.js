const inquirer = require("inquirer");
const fs = require("fs");
const prompts = require("./promptsList");


inquirer.prompt(prompts)
.then(function(res) {
    const title = generateTitle(res);
    const tableOfContents = generateTableOfContents();
    const sections = generateSections(res);
    
    const markdown = title + '\n' + tableOfContents + '\n' + sections;

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
    const { installation, usage, license, contributing, tests, github, email } = data;

    const installSect = `## Installation \n${installation} \n`;
    const useSect = `\n## Usage \n${usage} \n`;
    const licenseSect = `\n## License \n${license} \n`;
    const contributeSect = `\n## Contributing \n${contributing} \n`;
    const testsSect = `\n## Tests \n${tests} \n`;
    const questionsSect = "\n## Questions \n" + "* Username: " + github + "\n" + "* Email: " + email;

    return installSect + useSect + licenseSect + contributeSect + testsSect + questionsSect;

}

