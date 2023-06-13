// importing the requires
const inquirer = require("inquirer");
const fs = require("fs");
const { createSVG } = require("svg-builder");

// promts for logo details
function generateLogo() {
  inquirer.prompt([
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
  ]);
}
