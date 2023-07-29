const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes.js');


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
                    shape = new Circle(answers.shapeColor).render();

                } else if (`${answers.shape}` === 'Triangle') {
                    shape = new Triangle(answers.shapeColor).render();

                } else {
                    shape = new Square(answers.shapeColor).render();
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