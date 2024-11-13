'use strict';

const form = document.querySelector('form')
const div = document.getElementById('results')

function createArticle(data){
   
    const h2 = document.createElement('h2')
    
    h2.innerHTML = data.name;

    const a = document.createElement('a')
    
    a.innerHTML = data.url;
    a.href= data.url;
    a.target = "_blank";

    const img = document.createElement('img')
    img.alt = data.name;
    img.src = data.image?.medium;

    const summary = document.createElement('div')
    
    summary.innerHTML = data.summary;
    const article = document.createElement('article')

    article.appendChild(h2)
    article.appendChild(img)
    article.appendChild(a)
    article.appendChild(summary)
    

    div.appendChild(article)
}


form.addEventListener('submit', async function (evt) {
    evt.preventDefault();

    const input = document.querySelector('input[name=q]').value;

    try{
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        const jsonData = await response.json()

        console.log(jsonData)
         
        div.innerHTML = ''
        
        for (let i = 0; i<jsonData.length; i++){
            createArticle(jsonData[i].show)
        }


    } catch (error){
        console.log(error.message)
    }
    
})