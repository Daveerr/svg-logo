// importing the requires
const inquirer = import("inquirer");
const fs = require("fs");
const { createSVG } = require("svg-builder");
const { triangle, circle, square } = require("./shapes");
const shape = require("./shapes");

// promts for logo details
function generateLogo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter the text for your logo:",
      },

      {
        type: "list",
        name: "shape",
        message: "select a shape for your logo",
        choices: ["square", "triangle", "circle"],
      },

      {
        type: "input",
        name: "color",
        message: "Color for your logo",
      },

      {
        type: "input",
        name: "filename",
        message: "filname to save the SVG",
      },
    ])
    .then((answers) => {
      let shape;
      const shapeColor = answers.color;

      if (answers.shape === "circle") {
        shape = new circle(shapeColor);
      } else if (answers.shape === "triangle") {
        shape = new triangle(shapeColor);
      } else if (answers.shape === "square") {
        shape = new square(shapeColor);
      }
      // Generate the SVG logo
      const svgLogo = createSVG()
        .size(200, 200)
        .rect(0, 0, 200, 200)
        .fill(answers.color)
        .element(answers.shape.toLowerCase(), { cx: 100, cy: 100, r: 50 })
        .text(answers.text, {
          x: 100,
          y: 100,
          fill: "#ffffff",
          "text-anchor": "middle",
          "alignment-baseline": "central",
        })
        .end();
      // Save the SVG to a file
      const filename = `${answers.filename}.svg`;
      fs.writeFileSync(filename, svgLogo);
      console.log(`Logo saved to ${filename}`);
    })
    .catch((error) => {
      console.error("An error occurred to save logo:", error);
    });
}
