#!/usr/bin/env node

const { prompt } = require("inquirer");
const slug = require("slug");
const upperCamelCase = require("uppercamelcase");
const { mkdir, ShellString, cp } = require("shelljs");

const packageContents = require("./templates/package");
const readmeContents = require("./templates/readme");
const indexContents = require("./templates/index");
const componentContents = require("./templates/component");

const questions = [
  {
    type: "input",
    name: "fullName",
    default: "My Component",
    message: "Component’s name"
  },
  {
    type: "input",
    name: "shortName",
    default: ({ fullName }) => slug(fullName, { lower: true }),
    message: "Component’s short name"
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description"
  },
  {
    type: "input",
    name: "keywords",
    default: "farmblocks, react",
    filter: value => value.split(",").map(value => value.trim()),
    message: "Keywords"
  }
];

prompt(questions)
  .then(answers => {
    const packageJSON = packageContents(answers);
    const readme = readmeContents(answers);
    const { fullName, shortName } = answers;
    const componentName = upperCamelCase(fullName);
    const index = indexContents(componentName);
    const component = componentContents(componentName);
    const dirName = `packages/${shortName}`;
    mkdir("-p", `${dirName}/src`);
    ShellString(packageJSON).to(`${dirName}/package.json`);
    ShellString(readme).to(`${dirName}/README.md`);
    ShellString(index).to(`${dirName}/src/index.js`);
    ShellString(component).to(`${dirName}/src/${componentName}.js`);
    cp(["AUTHORS", "LICENSE"], `${dirName}/.`);
  })
  .catch(console.error); // eslint-disable-line no-console
