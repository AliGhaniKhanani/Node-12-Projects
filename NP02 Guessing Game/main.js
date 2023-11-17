#!/usr/bin/env node
import inquirer from "inquirer";
// Producing Random Number
let ran_num = (Math.random() * 10);
let randomNumberGen = Math.floor(ran_num);
let numberChoices = 3;
while (numberChoices >= 1) {
    let user_guess = await inquirer.prompt({
        message: "Enter Your Guess Number",
        type: "number",
        name: "userguess"
    });
    if (randomNumberGen == user_guess.userguess) {
        console.log("   You Guessed It Right");
        break;
    }
    else {
        numberChoices--;
        console.log(`   Wrong Guess Try Again\n   Now You Have ${numberChoices} Chance To Make`);
    }
}
console.log("Computer Choice", randomNumberGen);
