#!/usr/bin/env node

import inquirer from "inquirer";

let userInput: { myinput: string } = await inquirer.prompt({
  message: "Please Enter Your Message Here:",
  type: "input",
  name: "myinput",
});

const { myinput } = userInput;
let trimmed = myinput.replace(/ /g, "");

let characCount = myinput.split(" ");
console.log("Total Character Count is ", characCount.length);
let wordCount = trimmed.split("");
console.log("Total Word Count is ", wordCount.length);
