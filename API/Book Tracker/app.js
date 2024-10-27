// Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);
document.querySelector("#resetButton").addEventListener("click", resetStorage);
document.querySelector("h4").innerText = localStorage.getItem("books");

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://openlibrary.org/isbn/${choice}.json`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.title);
      if (!choice) {
        alert("Please enter a valid ISBN.");
        return;
      }
      if (!localStorage.getItem("books")) {
        localStorage.setItem("books", data.title);
      } else {
        let books = localStorage.getItem("books") + " ; " + data.title;
        localStorage.setItem("books", books);
      }
      //  put title into localStorage
      // let books = localStorage.getItem('books') + " ; " + data.title
      // localStorage.setItem('books' , data.title )

      document.querySelector("h4").innerText = localStorage.getItem("books");
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function resetStorage() {
  localStorage.removeItem("books");
  document.querySelector("h4").innerText = "";
}
