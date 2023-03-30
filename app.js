"use strict";

window.addEventListener("load", start);

async function start() {
  const character = await getData();
  character.forEach(loadChar);
}

async function getData(url) {
  const response = await fetch(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
  const data = await response.json();
  return data;
}

function loadChar(char) {
  const characterAddHTML = `<article class = "grid-item">
    <img src="${char.image}">
    <h1>${char.name}</h1>
    </article>
    `;
  document
    .querySelector("#characters")
    .insertAdjacentHTML("beforeend", characterAddHTML);
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", () => displayCharDetails(char));
  displayCharDetails(char);
}
function displayCharDetails(char) {
  const dialog = document.querySelector("#dialog");
  document.querySelector("#dialog-name").textContent = `Name: ${char.name}`;
  document.querySelector(
    "#dialog-nickName"
  ).textContent = `Nickname: ${char.nickName}`;
  document.querySelector("#dialog-img").src = char.image;
  document.querySelector(
    "#dialog-occupation"
  ).textContent = `Occupation: ${char.occupation}`;
  document.querySelector("#dialog-age").textContent = `Age: ${char.age}`;
  document.querySelector(
    "#dialog-voicedBy"
  ).textContent = `Voiced By: ${char.voicedBy}`;
  document.querySelector(
    "#dialog-gender"
  ).textContent = `Gender: ${char.gender}`;
  document.querySelector(
    "#dialog-religion"
  ).textContent = `Religion: ${char.religion}`;
  document.querySelector(
    "#dialog-catchPhrase"
  ).textContent = `Catchphrase: ${char.catchPhrase}`;
  document.querySelector(
    "#dialog-hairColor"
  ).textContent = `Hair color: ${char.hairColor}`;
  document.querySelector(
    "#dialog-schoolGrade"
  ).textContent = `School grade: ${char.schoolGrade}`;
  document.querySelector(
    "#dialog-episodes"
  ).textContent = `Episodes: ${char.episodes}`;
  document.querySelector(
    "#dialog-appearances"
  ).textContent = `Appearances: ${char.appearances}`;
  document.querySelector(
    "#dialog-firstAppearance"
  ).textContent = `First Appearance: ${char.firstAppearance}`;
  dialog.removeAttribute("open");
  dialog.showModal();
  console.log(char);
}
