// These are a series of tests to check the functionality of the shapes.js file
const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("This test should render a svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("This test should accept a fillColor parameter, specifically 'blue'", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("This test should render a svg for a bisque polygon element that has the appearance of a triangle", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
    const triangle = new Triangle();
    triangle.setColor("bisque");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("This test should accept a fillColor parameter, specifically 'puprle'", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
    const triangle = new Triangle();
    triangle.setColor("purple");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("This test should render a svg for a dodgerblue rect element that has the apearance of a square", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
    const square = new Square();
    square.setColor("dodgerblue");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("This test should accept a fillColor parameter, specifically 'red'", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
