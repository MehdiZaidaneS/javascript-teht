'use strict';


const form = document.querySelector('form')

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const input = document.querySelector('input[name=p]').value;
    const div = document.getElementById('jokes')


    try{
        
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${input}`)
        const jsonData = await response.json()
        
        for(let i = 0; i<jsonData.total; i++){
            const p = document.createElement('p')
            p.innerHTML = jsonData.result[i].value

            const article = document.createElement('article')
            article.appendChild(p)
            div.appendChild(article)

        }
         
    }catch(error){
        console.log(error.message)

    }
    
})