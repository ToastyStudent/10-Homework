// This is the base class for shapes, a constructor function.
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
// Each of the following shapes is a modification of the base class, extending from it, generated with different dimensions/methods to 
// create the specific appearance of a shape. Ex. Circle uses "circle," Triangle uses "polygon," and Square uses "rect."
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
