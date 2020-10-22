// This function calls three separate functions to get three main and separate parts of the readme (title, TOC, sections)
function generateMarkdown(responses){
    const title = generateTitle(responses);
    const tableOfContents = generateTOC();
    const sections = generateSections(responses);
    
    return `${title} \n${tableOfContents} \n${sections}`;
}

// Takes in the responses from the user and gets the title and description and returns them
function generateTitle(data){
    const { title, description } = data;
    return `# ${title} \n${description} \n`;
}

// Generates a table of contents part of the readme, with clickable links to take you to the respective section
function generateTOC(){
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

// Takes in user responses and gets the info for each main section and concatenates it with a heading
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


module.exports = generateMarkdown;