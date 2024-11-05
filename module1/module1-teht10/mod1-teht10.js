'use strict';

let numberDice = prompt("Enter number of dice:")
const expectedSum = prompt("Enter expected sum of the dices:")

let timesObtained = 0;
let sumOfDices = 0;


for (let i = 0; i<10000; i++){

    for(let i=0; i<numberDice; i++){
        const result = Math.floor(Math.random()*6) +1;
        sumOfDices = sumOfDices + result
    }
    
    if(expectedSum == sumOfDices){
        timesObtained +=1
        sumOfDices = 0
        console.log("You got one")
    }else{
        sumOfDices = 0
    }
}

const p = document.getElementById("result")
p.innerHTML =`Probability to get sum ${expectedSum} with ${numberDice} dice is ${(timesObtained/10000 * 100).toFixed(2)}%`