

document.querySelector('button').addEventListener('click' , getDrink)


function getDrink() {

    let drink = document.querySelector('input').value 

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks
        );
        createCards(data.drinks);
        // document.querySelector('h2').innerText = data.drinks.strDrink
        // document.querySelector('img').src = data.drinks.strDrinkThumb
        // document.querySelector('h3').innerText = data.drinks.strInstructions

        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })



}


function createCards(drinks) {
    const container = document.getElementById('card-container');
    container.innerHTML = ''; // Clear previous content

    if (!drinks) {
        container.innerHTML = '<p>No drinks found.</p>';
        return;
    }

    drinks.forEach(drink => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'card';

        // Create image element
        const img = document.createElement('img');
        img.src = drink.strDrinkThumb;
        img.alt = drink.strDrink;

        // Create name element
        const name = document.createElement('h3');
        name.textContent = drink.strDrink;

        // Create instruction element
        const instruction = document.createElement('p');
        instruction.textContent = drink.strInstructions;

        // Append elements to card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(instruction);

        // Append card to container
        container.appendChild(card);
    });
}

