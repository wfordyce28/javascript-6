/*   Fordyce, William (wfordyce28@gmail.com)
 *   @version 0.0.1
 *   @summary Code demonstration:  :: created:
 */

"use strict";
const PROMPT = require('readline-sync');

let dieSideNumber, amountOfRolls;

/**
 * @method
 * @desc The main method of the program
 * @returns {null}
 */
function main(){
    displayWelcomeMessage();
    setDieSideNumber();
    setAmountOfRolls();
    CalculateRollTotal();
    displayEndMessage();
}

main();

/**
 * @method
 * @desc Welcomes the customer
 * @returns {null}
 */
function displayWelcomeMessage(){
    console.log(`\nWelcome to our die roller app!`)
}

/**
 * @method
 * @desc Sets the number of sides the die has
 * @returns {null}
 */
function setDieSideNumber(){
    dieSideNumber = Number (PROMPT.question(`\nHow many side would you like your die to have? `))
}

/**
 * @method
 * @desc Sets the amount of times the die is rolled
 * @returns {null}
 */
function setAmountOfRolls(){
    amountOfRolls = Number(PROMPT.question(`\nHow many times would you like to roll this die? `))
}

/**
 * @method
 * @desc Randomly generates numbers and adds them up
 * @returns {null}
 */
function CalculateRollTotal() {
    let totalNumber = 0, individualNumber = 0;
    let rolls = [];
    for (let i = 0; i < amountOfRolls; i++) {
        individualNumber = Math.floor((Math.random() * dieSideNumber) + 1);
        rolls[i] = individualNumber;
        totalNumber += individualNumber;
        console.log(`Roll Number  ${[i]}: ${rolls[i]}`);
        console.log(`All Roll Total: ${totalNumber}`)
    }
}

/**
 * @method
 * @desc Says goodbye to the customer
 * @returns {null}
 */
function displayEndMessage(){
    console.log(`\nThanks for using our die roller, have a nice day!`)
}
