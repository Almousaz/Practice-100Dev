
// Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click' , getFetch)
document.getElementById('resetButton').addEventListener('click', resetList);


function getFetch() {

    const choice = document.querySelector('input').value
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

    fetch(url)
    //  parse response as JSON
    .then(res => res.json())
    .then(data => {
        console.log(data.subclasses);
        data.subclasses.forEach(obj => {
            console.log(obj.name)
            // create an li
            const li = document.createElement('li')
            // add text to li
            li.textContent = obj.name
            // append the li to the ul
            document.querySelector('ul').appendChild(li)
            li.style.backgroundColor = 'orange'

            
        });
        
    })
    .catch(err => {
        console.log(`error ${err}`);
    })
}

function resetList() {
    // Clear the ul by removing all child elements
    const ul = document.querySelector('ul');
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}