'use strict';

let rolls = prompt('Enter roll amount.');
let sum = 0;


while (rolls != 0){
    const diceRoll = Math.floor( Math.random() * 6 ) +1;
    console.log("Dice roll is " + diceRoll)
    sum = sum + diceRoll
    rolls -=1;
}
 
console.log("Sum is " + sum)
