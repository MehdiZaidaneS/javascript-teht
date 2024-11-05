'use strict';


const startYear = prompt("Enter start year:")
const endYear = prompt("Enter end year:")

const lu = document.getElementById('list')


for (let i = startYear; i <= endYear; i++ ){
    if (i%4 == 0){
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(`${i}`))
        lu.appendChild(li)
    }      
    else{
        console.log(i + " is not a leap year")
    }
}