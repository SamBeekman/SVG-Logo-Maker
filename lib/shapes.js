const inquirer = require('inquirer');
const fs = require('fs');

class CLI {
    constructor() {
        // add stuff here
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
                    name: 'text-color',
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
                    name: 'shape-color',
                }
            ])
            .then((answers) => {
                fs.writeFile('./examples/logo.svg', JSON.stringify(answers), (err) => {
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