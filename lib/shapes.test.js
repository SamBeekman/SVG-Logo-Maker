const { Circle, Triangle, Square } = require('./shapes.js');

// tests to run to make sure the render methods are executing correctly
describe('Shapes', () => {
    describe('Circle', () => {
        it('should output code in svg syntax for the shape of a circle', () => {
            const testCircle = new Circle();
            testCircle.shapeColor = '';
            expect(testCircle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${testCircle.shapeColor}" />`);
        })
    })
    describe('Triangle', () => {
        it('should output code in svg syntax for the shape of a triangle', () => {
            const testTriangle = new Triangle();
            testTriangle.shapeColor = '';
            expect(testTriangle.render()).toEqual(`<polygon points="150, 20 250, 160 50, 160" fill="${testTriangle.shapeColor}" />`);
        })
    })
    describe('Square', () => {
        it('should output code in svg syntax for the shape of a Square', () => {
            const testSquare = new Square();
            testSquare.shapeColor = '';
            expect(testSquare.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="${testSquare.shapeColor}" />`);
        })
    })
});