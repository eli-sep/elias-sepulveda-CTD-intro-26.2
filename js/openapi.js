const comicVineKey = "fbebff44ba811d5fbb0594fad0bc9cb50ee12b60";
const corsURL = "https://cors-anywhere.herokuapp.com/";
const corURLdemo = "https://cors-anywhere.herokuapp.com/corsdemo";

const spiderManURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-1443/`;
const wolverineURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-1440/`;
const captainAmericaURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-1442/`;
const ironManURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-1455/`;
const scarletWitchURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-1466/`;
const blackPantherURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-1477/`;
const ironFistURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-1492/`;
const hulkURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-2267/`;
const thorURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-2268/`;
const blackWidowURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-3200/`;
const starLordURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-10957/`;

function domRender(data) {
  //data extraction
  const name = data.name.toUpperCase();
  const realName = data.real_name;
  const birthdate = data.birth;
  const bio = data.deck;
  const powers = data.powers;
  const image = data.image.medium_url;

  //document data
  const charName = document.querySelector("#marvel-title");
  const charImage = document.querySelector(".char-image");
  const charRealName = document.querySelector(".char-name");
  const charBirth = document.querySelector(".char-birth");
  const charBio = document.querySelector(".char-bio");
  const charPowers = document.querySelector(".char-powers");

  //DOM maniplation
  charImage.src = image;
  charName.innerText = name;
  charRealName.innerHTML = `<strong>Real Name: </strong>${realName}`;
  charBirth.innerHTML = `<strong>Birthdate: </strong>${birthdate}`;
  charBio.innerHTML = `<strong>Bio: </strong>${bio}`;
  const power = powers.map((power) => power.name);
  charPowers.innerHTML = `<strong>Powers: </strong>${power.join(", ")}`;
}

async function getSpiderMan() {
  //api data
  const response = await fetch(`${spiderManURL}?api_key=${comicVineKey}&format=json`);
  const object = await response.json();
  const data = object.results;
  domRender(data);
}

async function getBlackWidow() {
  //api data
  const response = await fetch(`${blackWidowURL}?api_key=${comicVineKey}&format=json`);
  const object = await response.json();
  const data = object.results;
  domRender(data);
}

async function getStarLord() {
  //api data
  const response = await fetch(`${starLordURL}?api_key=${comicVineKey}&format=json`);
  const object = await response.json();
  const data = object.results;
  domRender(data);
}

const spiderMan = document.querySelector("#spider-man");
const blackWidow = document.querySelector("#black-widow");
const starLord = document.querySelector("#star-lord");
const batman = document.querySelector("#spider-man");
const wonderWoman = document.querySelector("#spider-man");
const theFlash = document.querySelector("#spider-man");

spiderMan.addEventListener("click", (event) => {
  getSpiderMan();
});
blackWidow.addEventListener("click", (event) => {
  getBlackWidow();
});
starLord.addEventListener("click", (event) => {
  getStarLord();
});

// getSpiderMan();

// const apiBaseURL = window.location.hostname === "127.0.0.1" ? "http://localhost:3000" : "https://api-backend-dw3n.onrender.com";
// const marvelSelName = ["Spider-Man", "Wolverine", "Captain America", "Iron Man", "Black Widow", "Iron Fist", "Scarlet Witch", "Black Panther", "Hulk", "Thor", "Star-Lord", "Logan"];
// const marvelChars = {};

// async function getMarvelCharacters() {
//   const response = await fetch(`${apiBaseURL}/api/marvel`);
//   const data = await response.json();

//   const marvelSelChars = data.filter((object) => marvelSelName.includes(object.name) && object.id < 15000);
//   const marvelCharApi = marvelSelChars.map(({ name, api_detail_url }) => ({ name, api_detail_url }));
//   console.log(marvelCharApi);

//   for (const character of marvelCharApi) {
//     const response = await fetch(`${apiBaseURL}/api/marvel-character`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(character),
//     });
//     const charData = await response.json();
//     marvelChars[charData.name] = charData;
//   }
//   console.log(marvelChars);
//   console.log("This is the end!");
// }

// async () => {
//   await getMarvelCharacters();
// };

// getMarvelCharacters()

// async function getSpiderMan() {
//   const response = await fetch("https://comicvine.gamespot.com/api/character/4005-1440/")
//   const data = await response.json()

// }

/*
{name: 'Spider-Man', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1443/'}
{name: 'Wolverine', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1440/'}
{name: 'Captain America', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1442/'}
{name: 'Iron Man', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1455/'}
{name: 'Scarlet Witch', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1466/'}
{name: 'Black Panther', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1477/'}
{name: 'Iron Fist', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1492/'}
{name: 'Hulk', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-2267/'}
{name: 'Thor', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-2268/'}
{name: 'Black Widow', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-3200/'}
{name: 'Star-Lord', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-10957/'}

(16) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0
: 
1
: 
: 
2
3
: 
4
: 
5
: 
6
: 
8
7
: 
: 
9
: 
10
: 
11
: 
{name: 'Wolverine', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-76835/'}
{name: 'Wolverine', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-86165/'}
{name: 'Thor', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-97484/'}
{name: 'Wolverine', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-181781/'}: 
{name: 'Iron Man', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-196208/'}


*/
// console.log(marvelChars)
