const deleteText = document.querySelectorAll('.fa-trash');
const thumbText = document.querySelectorAll('.fa-thumbs-up');

Array.from(deleteText).forEach((element) => {
    element.addEventListener('click', deleteMovie);
});

Array.from(thumbText).forEach((element) => {
    element.addEventListener('click', addLike);
});

// async function deleteMovie() { // Updated function name
//     const title = this.parentNode.childNodes[1].innerText; // Updated variable name
//     const director = this.parentNode.childNodes[3].innerText; // Updated variable name
//     try {
//         const response = await fetch('deleteMovie', { // Updated endpoint
//             method: 'delete',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 'titleS': title, // Updated field
//                 'directorS': director // Updated field
//             })
//         });
//         const data = await response.json();
//         console.log(data);
//         location.reload();
//     } catch (err) {
//         console.log(err);
//     }
// }

async function deleteMovie() {
    const title = this.parentNode.querySelector('.movie-title').innerText; // Updated to use querySelector
    const director = this.parentNode.querySelector('.movie-director').innerText; // Updated to use querySelector
    console.log(`Deleting movie: ${title}, Director: ${director}`); // Debugging log
    try {
        const response = await fetch('deleteMovie', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'titleS': title,
                'directorS': director
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

// async function addLike() {
//     const title = this.parentNode.childNodes[1].innerText; // Movie title
//     const director = this.parentNode.childNodes[3].innerText; // Movie director
//     const tLikes = Number(this.parentNode.childNodes[5].innerText); // Current likes

//     // Disable the like button to prevent multiple clicks
//     this.disabled = true;

//     try {
//         const response = await fetch('addOneLike', {
//             method: 'put',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 'titleS': title,
//                 'directorS': director,
//                 'likesS': tLikes
//             })
//         });

//         const data = await response.json();
//         console.log(data);

//         // Update the like count in the UI without reloading
//         this.parentNode.childNodes[5].innerText = tLikes + 1;

//         // Optionally, you can re-enable the button after a short delay
//         setTimeout(() => {
//             this.disabled = false;
//         }, 1000); // Re-enable after 1 second

//     } catch (err) {
//         console.log(err);
//         // Re-enable the button in case of an error
//         this.disabled = false;
//     }
// }