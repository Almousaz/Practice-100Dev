//  Examle fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  //   console.log(choice);
  const url = `"yourAPI"${choice}`;

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok " + res.statusText);
      }
      return res.json();
    })

    .then((data) => {
      console.log(data);

    //   hiding image
    //   document.getElementById("photo").style.display = "none";
    //   document.getElementById("videoFrame").style.display = "none";

      if (data.media_type === "image") {
        document.getElementById("photo").src = data.hdurl;
        document.getElementById("photo").style.display = "block"; // Show the image
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
        document.getElementById("videoFrame").style.display = "block"; // Show the video
      }
      document.getElementById("textNasa").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
