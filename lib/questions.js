const inquirer = require('inquirer');
const fs = require('fs');

class CLI {
    constructor() {
    }
    run() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Enter up to 3 characters for your logo',
                    name: 'text',
                },
                {
                    type: 'input',
                    message: 'Which color would you like the text? (enter color keyword or hexadecimal number)',
                    name: 'textColor',
                },
                {
                    type: 'list',
                    message: 'Which background shape would you prefer?',
                    choices: ['Circle', 'Triangle', 'Square'],
                    name: 'shape',
                },
                {
                    type: 'input',
                    message: 'Which color would you like the shape to be? (enter color keyword or hexadecimal number)',
                    name: 'shapeColor',
                }
            ])
            .then((answers) => {

                let shape = '';
                if (`${answers.shape}` === 'Circle') {
                    shape = `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />`
                } else if (`${answers.shape}` === 'Triangle') {
                    shape = `<polygon points="150, 20 250, 160 50, 160" fill="${answers.shapeColor}" />`
                } else if (`${answers.shape}` === 'Square') {
                    shape = `<rect x="75" y="25" width="150" height="150" fill="${answers.shapeColor}" />`
                }

                let data = `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                   
                <rect width="100%" height="100%" fill="white" />
                   
                ${shape}
                   
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
                   
                </svg>`

                fs.writeFile('./examples/logo.svg', data, (err) => {
                    if (err) throw err;
                    console.log('Generated logo.svg');
                });

            })
            .catch((err) => {
                console.log(err);
                console.log('Something went wrong');
            });
    };
};

module.exports = CLI;