const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes.js');
const colorList = require('color-name-list')
const validColorKeywords = colorList.map((colorObj) => colorObj.name.toLowerCase());
const validColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;


class CLI {
    constructor() {
    }
    run() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Enter up to 3 characters for your logo.',
                    name: 'text',
                    validate: function (input) {
                        if (input.length <= 3) {
                            return true;
                        } else {
                            return 'Please enter only up to 3 characters.';
                        }
                    }
                },
                {
                    type: 'input',
                    message: 'Which color would you like the text?',
                    name: 'textColor',
                    validate: function (input) {
                        if (validColorRegex.test(input) || validColorKeywords.includes(input.toLowerCase())) {
                            return true;
                        } else {
                            return 'Please enter a valid color keyword or hexadecimal number.';
                        }
                    }
                },
                {
                    type: 'list',
                    message: 'Which background shape would you like?',
                    choices: ['Circle', 'Triangle', 'Square'],
                    name: 'shape',
                },
                {
                    type: 'input',
                    message: 'Which color would you like the shape to be?',
                    name: 'shapeColor',
                    validate: function (input) {
                        if (validColorRegex.test(input) || validColorKeywords.includes(input.toLowerCase())) {
                            return true;
                        } else {
                            return 'Please enter a valid color keyword or hexadecimal number.';
                        }
                    }
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