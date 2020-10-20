const inquirer = require("inquirer");
const fs = require("fs");
const prompts = require("./promptsList");

// maybe include a default value if nothing is entered
inquirer.prompt(prompts)
.then(function(res) {
    const title = generateTitle(res);
    const answers = generateContent(res);
    const markdown = title + '\n' + answers;

    fs.appendFile("README2.md", markdown, (err) => {
        if(err) throw err;
        console.log("Your README file was created successfully!")
    })
    console.log(res);
});

function generateTitle(data){
    return `# ${data.title} \n`;
}

function generateContent(data) {
    const { github, email } = data;
    const questionsHeader = "## Questions" + "\n";
    const userInfo = "* Username: " + github + "\n" + "* Email: " + email;

    return questionsHeader + userInfo;
}

