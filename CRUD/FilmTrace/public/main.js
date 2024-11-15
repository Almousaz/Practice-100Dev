const deleteText = document.querySelectorAll('.fa-trash');
const thumbText = document.querySelectorAll('.fa-thumbs-up');

Array.from(deleteText).forEach((element) => {
    element.addEventListener('click', deleteMovie);
});

Array.from(thumbText).forEach((element) => {
    element.addEventListener('click', addLike);
});

async function deleteMovie() { // Updated function name
    const title = this.parentNode.childNodes[1].innerText; // Updated variable name
    const director = this.parentNode.childNodes[3].innerText; // Updated variable name
    try {
        const response = await fetch('deleteMovie', { // Updated endpoint
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'titleS': title, // Updated field
                'directorS': director // Updated field
            })
        });
        const data = await response.json();
        console.log(data);
        location.reload();
    } catch (err) {
        console.log(err);
    }
}

async function addLike() {
    const title = this.parentNode.childNodes[1].innerText; // Updated variable name
    const director = this.parentNode.childNodes[3].innerText; // Updated variable name
    const tLikes = Number(this.parentNode.childNodes[5].innerText);
    try {
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'titleS': title, // Updated field
                'directorS': director, // Updated field
                'likesS': tLikes
            })
        });
        const data = await response.json();
        console.log(data);
        location.reload();
    } catch (err) {
        console.log(err);
    }
}