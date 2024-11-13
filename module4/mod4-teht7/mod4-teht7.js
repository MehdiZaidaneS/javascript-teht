'use strict';

const form = document.querySelector('form')

form.addEventListener('submit', async function(evt) {
    evt.preventDefault()

    const data = {
        body: JSON.stringify({
            "name": document.querySelector('input[name=address]')
        }),
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
        },
    }
    
})