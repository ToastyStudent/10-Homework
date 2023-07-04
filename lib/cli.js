// Packages Needed for Application
const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

// Using Inquirer, this CLI class will prompt the user for 
// the up-to 3 letter long text, color of said text, shape type,
//  and shape color of the logo they will generate via questions.
class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "textContent",
          type: "input",
          message:
            "What text you would like your logo to have? (It must not exceed 3 characters in length.)",
          validate: (text) =>
            text.length <= 3 ||
            "Sorry, but your logo text cannot exceed 3 characters!",
        },
        {
          name: "logoTextColor",
          type: "input",
          message: "What color would you like your logo text to be?",
        },
        {
          name: "logoShapeType",
          type: "list",
          message: "Of the following three options, what shape would you like your logo to be?",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "logoShapeColor",
          type: "input",
          message: "What color would you like your logo shape to be? (Note: For Best Results, It should Probably be a different color than your text!)",
        },
      ])
      // This Section of the Code Takes the Answers given by the User to the Inquierer Prompts Prompts, and
      // uses them to generate the logo.svg file.

      // The logic for the creation of the following shapes is defined in the svg.js and shapes.js files, respectively
      .then(({ textContent, logoTextColor, logoShapeType, logoShapeColor }) => {
        let logoShape;
        switch (logoShapeType) {
          case "circle":
            logoShape = new Circle();
            break;

          case "square":
            logoShape = new Square();
            break;

          default:
            logoShape = new Triangle();
            break;
        }
        logoShape.setColor(logoShapeColor);

        const logoSvg = new SVG();
        logoSvg.setText(textContent, logoTextColor);
        logoSvg.setShape(logoShape);
        return writeFile("logo.svg", logoSvg.render());
      })
      .then(() => {
        console.log("Succesfully enerated your unique logo.svg!");
      })
      .catch((error) => {
        console.log(error);
        console.log("Something went wrong!");
      });
  }
}

module.exports = CLI;
