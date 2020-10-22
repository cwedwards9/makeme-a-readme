const inquirer = require("inquirer");
const fs = require("fs");
const prompts = require("./promptsList");


inquirer.prompt(prompts)
    .then(function(res) {
        const title = generateTitle(res);
        const tableOfContents = generateTableOfContents();
        const sections = generateSections(res);
        
        const markdown = `${title} \n${tableOfContents} \n${sections}`;

        fs.appendFile("README2.md", markdown, (err) => {
            if(err) throw err;
            console.log("Your README file was created successfully!")
        })
        console.log(res);
    });


function generateTitle(data){
    const { title, description } = data;
    return `# ${title} \n${description} \n`;
}

function generateTableOfContents(){
    const toc = [
        "## Table of Contents",
        "* [Installation](#Installation)",
        "* [Usage](#Usage)",
        "* [License](#License)",
        "* [Contributing](#Contributing)",
        "* [Tests](#Tests)",
        "* [Questions](#Questions) \n"
    ].join("\n");
    return toc;
}

function generateSections(data) {
    const { installation, usage, license, contributing, tests, github, email } = data;

    const sections = [
        "## Installation \n" + installation,
        "## Usage \n" + usage,
        "## License \n" + license,
        "## Contributing \n" + contributing,
        "## Tests \n" + tests,
        "## Questions \n" + "* Username: " + github + "\n*Email: " + email
    ].join("\n\n");
    return sections;
}
