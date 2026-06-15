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
const batmanURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-1699/`;
const wonderWomanURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-2048/`;
const theFlashURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-22804/`;
const supermanURL = `${corsURL}https://comicvine.gamespot.com/api/character/4005-1807/`;

function domRender(data, style, err = 0) {
  //data extraction
  if (err === 1) {
    const title = document.querySelector(".char-name");
    title.innerHTML = `<a href=${corURLdemo}>Click here to enable CORS.</a>`;
  } else if (err === 2) {
    const title = document.querySelector(".char-name");
    title.innerHTML = `Something went wrong please try again later.`;
  } else {
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
    charImage.src = image;
    charName.innerText = name;
    charName.id = style;
    charRealName.innerHTML = `<strong>Real Name: </strong>${realName}`;
    charBirth.innerHTML = `<strong>Birthdate: </strong>${birthdate}`;
    charBio.innerHTML = `<strong>Bio: </strong>${bio}`;
    const power = powers.map((power) => power.name);
    charPowers.innerHTML = `<strong>Powers: </strong>${power.join(", ")}`;
  }
}

async function getCharacter(url, style) {
  //api data
  try {
    const response = await fetch(`${url}?api_key=${comicVineKey}&format=json`);
    if (!response.ok) {
      const errorMessage = await response.text();
      if (errorMessage.includes("corsdemo")) {
        throw new Error(`Heroku CORS not enabled.  Click Link to enable CORS. ${corURLdemo}`, { cause: "CORS" });
      } else {
        throw new Error(`${response.status} - ${response.statusText}. Something went wrong please try again later.`);
      }
    }
    const object = await response.json();
    const data = object.results;
    const titleStyle = style;
    domRender(data, titleStyle);
  } catch (error) {
    if (error.cause === "CORS") {
      console.error(`${error}`);
      domRender(null, null, 1);
    } else {
      console.error(`${error}`);
      domRender(null, null, 2);
    }
  }
}

const spiderMan = document.querySelector("#spider-man");
const blackWidow = document.querySelector("#black-widow");
const starLord = document.querySelector("#star-lord");
const batman = document.querySelector("#batman");
const wonderWoman = document.querySelector("#wonder-woman");
const theFlash = document.querySelector("#the-flash");
const superman = document.querySelector("#superman");

spiderMan.addEventListener("click", (event) => {
  getCharacter(spiderManURL, "marvel-title");
});
blackWidow.addEventListener("click", (event) => {
  getCharacter(blackWidowURL, "marvel-title");
});
starLord.addEventListener("click", (event) => {
  getCharacter(starLordURL, "marvel-title");
});

batman.addEventListener("click", (event) => {
  getCharacter(batmanURL, "dc-title");
});
wonderWoman.addEventListener("click", (event) => {
  getCharacter(wonderWomanURL, "dc-title");
});
superman.addEventListener("click", (event) => {
  getCharacter(supermanURL, "dc-title");
});
