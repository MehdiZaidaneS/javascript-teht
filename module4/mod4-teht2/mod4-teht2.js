'use strict';

const form = document.querySelector('form')

form.addEventListener('submit', async function (evt) {
    evt.preventDefault();

    const input = document.querySelector('input[name=q]').value;

    try{
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        const jsonData = await response.json()
        const p = document.querySelector('p')
        console.log(jsonData[0])
    } catch (error){
        console.log(error.message)
    }
    
})