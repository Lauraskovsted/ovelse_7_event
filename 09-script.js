const array = [
  {
    billede:
      "https://odense-film-festival.s3.eu-central-1.amazonaws.com/media/W6dOqabNhHKBPXxxKKEZRA84-360.jpg",
    titel: "A calling",
    instruktør: "Christian Bengtson",
    land: "Danmark",
  },
  {
    billede:
      "https://odense-film-festival.s3.eu-central-1.amazonaws.com/media/SuXss4xXhsIZW4gP6OyLsW1E-360.jpg",
    titel: "A Day's Work",
    instruktør: "Max Kerkhoff",
    land: "Tyskland",
  },
  {
    billede:
      "https://odense-film-festival.s3.eu-central-1.amazonaws.com/media/Q8K1pZrOs03Q0IrDkBwGVu5r-360.jpg",
    titel: "A Hole In My Heart",
    instruktør: "Mees Peijnenburg",
    land: "Holland",
  },
  {
    billede:
      "https://odense-film-festival.s3.eu-central-1.amazonaws.com/media/CWo9EH0A97Tut0vizEv13EFq-360.jpg",
    titel: "A Man In Chain",
    instruktør: "Alireza Mirasadollah",
    land: "Ghana, Storbritannien",
  },
  {
    billede:
      "https://odense-film-festival.s3.eu-central-1.amazonaws.com/media/hUd4SdGQ8I23ovxWnGtBz4Ck-360.jpg",
    titel: "A Place In The Sun - 110 years after the genocide",
    instruktør: "Christian Zipfel",
    land: "Tyskland",
  },
];

console.log(array);

document.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
  console.log("loaded Igen");

  const listevisning = document.querySelector("#liste");
  const Template = document.querySelector("template");
  // Indsætter liste med anonym funktion
  array.forEach((array) => {
    let klon = Template.cloneNode(true).content;
    klon.querySelector("img").src = array.billede;
    klon.querySelector("h1").textContent = array.titel;
    klon.querySelector("p").textContent = "Instruktør: " + array.instruktør;
    klon.querySelector("p:last-child").textContent = "Land: " + array.land;
    listevisning.appendChild(klon);
  });
}
