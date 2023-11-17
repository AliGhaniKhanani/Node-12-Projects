import inquirer from "inquirer";
let inputArray = [];
let loop = true;
while (loop) {
    let userInput = await inquirer.prompt([
        {
            message: "What Do You Like To Add In A TODO List",
            type: "input",
            name: "userinput"
        },
        {
            message: "Do You Want To Continue",
            type: "confirm",
            name: "addmore",
            default: false
        }
    ]);
    const { addmore, userinput } = userInput;
    loop = addmore;
    if (inputArray) {
        inputArray.push(userInput.userinput);
    }
    else {
        console.log("Your TODO List Is Empty");
    }
}
console.log(`Your TODO List Includes [${inputArray}]`);
