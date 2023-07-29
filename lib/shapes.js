// parent class
class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}
// 3 child classes that inherit from the parent
class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}
class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 20 250, 160 50, 160" fill="${this.shapeColor}" />`;
    }
}
class Square extends Shapes {
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />`;
    }
}

// exporting for use
module.exports = { Shapes, Circle, Triangle, Square };



