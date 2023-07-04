const SVG = require("./svg");
const { Square } = require("./shapes");

test("This test should render a 300 x 200 svg element", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
  const svg = new SVG();
  expect(svg.render()).toEqual(expectedSvg);
});

test("This test should append text element to the SVG", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
  const svg = new SVG();
  svg.setText("A", "white");
  expect(svg.render()).toEqual(expectedSvg);
});

test("This test should set the text message and color of the SVG", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "#333");
  expect(svg.render()).toEqual(expectedSvg);
});

test("This test should include a shape in the rendered SVG", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "#333");
  const square = new Square();
  square.setColor("dodgerblue");
  svg.setShape(square);
  expect(svg.render()).toEqual(expectedSvg);
});


// As opposed to the previous tests, this exception test is testing for the error to be thrown, 
// as opposed to the expected output.
test("This test should throw an error since the text exceeds 3 characters", () => {
  const expectedError = new Error("Text must not exceed 3 characters.");
  const svg = new SVG();
  expect(() => svg.setText("HELLO", "#333")).toThrow(expectedError);
});

