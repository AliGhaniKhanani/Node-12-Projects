#!/usr/bin/env node

import { Console, log } from "console";
import inquirer from "inquirer";

console.log("   Welcome TO Panacloud Foreign Exchange");
console.log("   Check Live Currency Exchange Rates\n");

let conversionRate = {
    "PKR" : {
        "USD":0.0003,
        "CAD":0.004,
        "PKR":1
    },
    "USD" : {
        "USD":1,
        "CAD":1.35,
        "PKR":305
    },
    "CAD" : {
        "USD":0.72,
        "CAD":1,
        "PKR":220
    },
}

let userInput: {convertfrom:"PKR"|"USD"|"CAD", convertto : "PKR"|"USD"|"CAD", insertamount:number}= await inquirer.prompt([
{
    message:"Which Currency Would You Like To Convert From?",
    name: "convertfrom",
    type:"list",
    choices:["PKR","USD","CAD"]
},
{
    message:"Which Currency Would You Like To Convert To?",
    name: "convertto",
    type:"list",
    choices:["PKR","USD","CAD"]
},
{
    message:"Enter Amount",
    type:"number",
    name:"insertamount"
}
])

const {convertfrom, convertto, insertamount} = userInput

if (convertfrom && convertto && insertamount){
    let conversion = conversionRate[convertfrom][convertto] * insertamount
    
    console.log(`YOUR AMOUNT AFTER CONVERSION IS ${conversion}`);
}










