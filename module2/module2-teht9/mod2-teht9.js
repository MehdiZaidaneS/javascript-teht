'use strict';


const numbers = [2,4,7,8,9,10,20]

function even(array){
    const newArray = []

    for (let i = 0; i<array.length; i++)
        if(array[i] %2 == 0){
           newArray.push(array[i])
        }

    console.log("Old array " + numbers)
    console.log("New array: " + newArray)

}


even(numbers)
