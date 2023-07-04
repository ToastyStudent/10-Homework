// This is the constructor function for the SVG element, which the logo text and shape are used to compile after its creation.
class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  // These methods are necessary to be defined in order to render the SVG element via being called in the cli.js file where variables from
  // the user's input are passed in.
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }

  setText(message, color) {
    if (message.length > 3) {
      throw new Error("Sorry, but your logo's text must not exceed 3 characters.");
    }
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
  }

  setShape(shape) {
    this.shapeElement = shape.render();
  }
}

module.exports = SVG;
