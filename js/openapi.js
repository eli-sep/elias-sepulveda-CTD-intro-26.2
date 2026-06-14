const comicVineKey = "fbebff44ba811d5fbb0594fad0bc9cb50ee12b60";
const corsURL = "https://cors-anywhere.herokuapp.com/";
const corURLdemo = "https://cors-anywhere.herokuapp.com/corsdemo";


const spiderManURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-1443a/`;
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

const batmanURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-1699/`
const wonderWomanURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-2048/`
const theFlashURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-22804/`
const supermanURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-1807/`

function domRender(data, style) {
  //data extraction
  const name = data.name.toUpperCase();
  const realName = data.real_name;
  const birthdate = data.birth;
  const bio = data.deck;
  const powers = data.powers;
  const image = data.image.medium_url;

  //document data
  const charName = document.querySelector(".char-name");
  const charImage = document.querySelector(".char-image");
  const charRealName = document.querySelector(".char-real-name");
  const charBirth = document.querySelector(".char-birth");
  const charBio = document.querySelector(".char-bio");
  const charPowers = document.querySelector(".char-powers");

  //DOM maniplation
  charImage.src = image;;
  charName.innerText = name;
  charName.id = style;
  charRealName.innerHTML = `<strong>Real Name: </strong>${realName}`;
  charBirth.innerHTML = `<strong>Birthdate: </strong>${birthdate}`;
  charBio.innerHTML = `<strong>Bio: </strong>${bio}`;
  const power = powers.map((power) => power.name);
  charPowers.innerHTML = `<strong>Powers: </strong>${power.join(", ")}`;
}

async function getSpiderMan() {
  //api data
  try {
    const response = await fetch(`${spiderManURL}?api_key=${comicVineKey}&format=json`);
    console.log("Status", response.status)
    console.log("Response", response)
    if(!response.ok){
      throw new Error(`HTTP`)
    }
    const object = await response.json();
    const data = object.results;
    const titleStyle = "marvel-title";
    console.log("Object", object)
    console.log("Data", data)
    domRender(data, titleStyle);
  } catch (error) {
    console.log("This is the log", error + status)
    console.error("This is the error", error)
  }
}

async function getBlackWidow() {
  //api data
  try{
    const response = await fetch(`${blackWidowURL}?api_key=${comicVineKey}&format=json`);
    console.log("Status", response.status)
    console.log("Response", response)
    if(!response.ok){
      throw new Error(`HTTP`)
    }
    const object = await response.json();
    const data = object.results;
    const titleStyle = "marvel-title";
    domRender(data, titleStyle);
  } catch (error) {
    console.log("This is the log", error + status)
    console.error("This is the error", error)
  }
}
    

async function getStarLord() {
  //api data
  const response = await fetch(`${starLordURL}?api_key=${comicVineKey}&format=json`);
  const object = await response.json();
  const data = object.results;
  const titleStyle = "marvel-title";
  domRender(data, titleStyle);
}

async function getBatman() {
  //api data
  const response = await fetch(`${batmanURL}?api_key=${comicVineKey}&format=json`);
  const object = await response.json();
  const data = object.results;
  const titleStyle = "dc-title";
  domRender(data, titleStyle);
}

async function getWonderWoman() {
  //api data
  const response = await fetch(`${wonderWomanURL}?api_key=${comicVineKey}&format=json`);
  const object = await response.json();
  const data = object.results;
  const titleStyle = "dc-title";
  domRender(data, titleStyle);
}

async function getTheFlash() {
  //api data
  const response = await fetch(`${theFlashURL}?api_key=${comicVineKey}&format=json`);
  const object = await response.json();
  const data = object.results;
  const titleStyle = "dc-title";
  domRender(data, titleStyle);
}

async function getSuperman() {
  //api data
  const response = await fetch(`${supermanURL}?api_key=${comicVineKey}&format=json`);
  const object = await response.json();
  const data = object.results;
  const titleStyle = "dc-title";
  domRender(data, titleStyle);
}

const spiderMan = document.querySelector("#spider-man");
const blackWidow = document.querySelector("#black-widow");
const starLord = document.querySelector("#star-lord");
const batman = document.querySelector("#batman");
const wonderWoman = document.querySelector("#wonder-woman");
const theFlash = document.querySelector("#the-flash");
const superman = document.querySelector("#superman");

spiderMan.addEventListener("click", (event) => {
  getSpiderMan();
});
blackWidow.addEventListener("click", (event) => {
  getBlackWidow();
});
starLord.addEventListener("click", (event) => {
  getStarLord();
});

batman.addEventListener("click", (event) => {
  getBatman();
});
wonderWoman.addEventListener("click", (event) => {
  getWonderWoman();
});
superman.addEventListener("click", (event) => {
  getSuperman();
});
