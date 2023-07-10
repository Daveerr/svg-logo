// importing the requires
const inquirer = require("inquirer");
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

      // make the SVG
      const svgMarkup = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <rect x="0" y="0" width="200" height="200" fill="${answers.color}" />
          ${shape.render()}
          <text x="100" y="100" fill="#ffffff" text-anchor="middle" alignment-baseline="central">${
            answers.text
          }</text>
        </svg>
      `;

      // Saves SVG to a file
      const filename = `${answers.filename}.svg`;
      fs.writeFileSync(filename, svgMarkup);
      console.log(`Logo saved to ${filename}`);
    })
    .catch((error) => {
      console.error("An error occurred while saving the logo:", error);
    });
}
generateLogo();
