import inquirer from "inquirer";
import { type } from "os";

let user_login = await inquirer.prompt({
    message: "Please Enter Username",
    type :"input",
    name:"username"
})
let user_pass = await inquirer.prompt({
    message: "Please Enter Password",
    type : "number",
    name:"userpass"
})

// export{}

let i = 1
while (i>=1)
if (user_login.username == "ali", "Ali","ALI" && user_pass.userpass == "123456"){
    i--
    console.log("You Are Signed In")
    
    let atm_interface = await inquirer.prompt({
        message: "\n\nPlease Select The Following Options",
        type: "list",
        choices: ["Instant Withdrawal","Balance Inquiry","Cash Deposit"],
        name:"atminterface"
        })

    let init_bal = 5000
    let ending_balance = 0
    
    if(atm_interface.atminterface === "Balance Inquiry"){
        console.log(`Your Current Account Balance Is Rs ${init_bal}`)
    }
    else if(atm_interface.atminterface === "Instant Withdrawal"){
        {
            console.log(`Your Current Balance is ${init_bal}`)
        }
        let ins_with = await inquirer.prompt({
            message:"Please Enter Withdrawal Amount",
            name:"withdrawalamount",
            type:"number"         
        })
        let ending_balance = (init_bal - ins_with.withdrawalamount)
        console.log(`Your Withdrawal Amount is ${ins_with.withdrawalamount}`)
        console.log("Your New Balance Is ", ending_balance)
    }

    else if(atm_interface.atminterface === "Cash Deposit"){
        {
            console.log(`Your Current Balance is ${init_bal}`)
        }
        let cashDeposit = await inquirer.prompt({
            message:"Please Enter Deposit Amount",
            name:"cashdeposit",
            type:"number"         
        })
        let ending_balance = (init_bal + cashDeposit.cashdeposit)
        console.log(`Your Depositing Amount is ${cashDeposit.cashdeposit}`)
        console.log("Your New Balance Is ", ending_balance)
    }
       
}
else{
    console.log("Username Or Password Is Not Correct")
    break
}
    
    // let promptQuestion = await inquirer.prompt({
    //     message:"Do You Want To Continue",
    //     type:"confirm",
    //     name:"promptques"
    // })