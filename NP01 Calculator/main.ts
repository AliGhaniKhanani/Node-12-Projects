#!/usr/bin/env node

import inquirer from "inquirer"
import { sum } from "./add.js";
import { subtract } from "./subtraction.js";
import { division } from "./division.js";
import { multi } from "./multiply.js";


let user_input = await inquirer.prompt ([
    {
        message:"Enter Your First Number",
        type: "number",
        name: "num1"
    },
    {
        message:"Enter Your Second Number",
        type: "number",
        name: "num2"
    },
    {
        message:"Select Operator",
        type: "list",
        choices : ["Addition","Subtraction", "Multiplication", "Division"],
        name: "operator"
    }
])

if (user_input.operator === "Addition"){

    let add_result = sum(user_input.num1, user_input.num2)
    console.log(add_result)
}
else if (user_input.operator === "Subtraction"){

    let sub_result = subtract(user_input.num1, user_input.num2)
    console.log(sub_result)
}
else if (user_input.operator === "Multiplication"){

    let multi_result = multi(user_input.num1, user_input.num2)
    console.log(multi_result)
}
else if (user_input.operator === "Division"){

    let division_result = division(user_input.num1, user_input.num2)
    Math.round(division_result)
    console.log(division_result)
}