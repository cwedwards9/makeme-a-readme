// This function calls three separate functions to get three main and separate parts of the readme (title, TOC, sections)
function generateMarkdown(responses){
    const title = generateTitle(responses);
    const tableOfContents = generateTOC();
    const sections = generateSections(responses);
    
    return `${title} \n${tableOfContents} \n${sections}`;
}

// Takes in the responses from the user and gets the title and description and returns them
function generateTitle(res){
    const { title, description, license } = res;
    // Replace any spaces in the license name with %20 for the shield.io url
    const licenseNoSpace = license.replace(/ /g, "%20");
    const badge = "[![License](https://img.shields.io/badge/license-" + licenseNoSpace + "-success.svg)](https://shields.io/)";

    return `# ${title} \n${badge} \n\n## Description \n${description} \n`;
}

// Generates a table of contents part of the readme, with clickable links to take you to the respective section
function generateTOC(){
    const toc = [
        "## Table of Contents",
        "* [Installation](#installation)",
        "* [Usage](#usage)",
        "* [License](#license)",
        "* [Contributing](#contributing)",
        "* [Tests](#tests)",
        "* [Questions](#questions) \n"
    ].join("\n");
    return toc;
}

// Takes in user responses and gets the info for each main section and concatenates it with a heading
function generateSections(res) {
    const { installation, usage, name, license, contributing, tests, github, email } = res;

    const sections = [
        "## Installation \n" + installation,
        "## Usage \n" + usage,
        "## License \n" + "Copyright (c) " + name + "  \n" + "Licensed under the " + license + " license.",
        "## Contributing \n" + contributing,
        "## Tests \n" + tests,
        "## Questions \n" + "* GitHub: [" + github + "](https://github.com/" + github + ")" + "\n* Email: " + email
    ].join("\n\n");
    return sections;
}


module.exports = generateMarkdown;