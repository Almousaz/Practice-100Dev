//  Examle fetch using pokemonapi.co
document.querySelector('button').addEventListener('click' , getFetch)

require('dotenv').config();


function getFetch() {
    const choice = document.querySelector('input').value.toLocaleLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

//  http://api.nasa.gov/planetary/apod?api_key=Mr6Afkj52trzOfoiQVunA0RA48C3XAcsMoRygIxe