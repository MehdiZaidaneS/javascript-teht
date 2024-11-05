'use strict';


const int = prompt("Enter an intenger:")
const divisible = []

for (let i = 1; i<int; i++){
    if(int%i == 0){
      divisible.push(i)
    }
}

if(divisible.length === 2){
    const p = document.getElementById("result")
    p.innerHTML = `${int} is prime number.`
}else{
    const p = document.getElementById("result")
    p.innerHTML = `${int} is NOT prime number.`
}