const API_KEY = "fbebff44ba811d5fbb0594fad0bc9cb50ee12b60";

async function getSuperHero() {
  const response = await fetch(`https://comicvine.gamespot.com/api/characters/?api_key=${API_KEY}&format=json`);
  console.log(response);
  const data = await response.json();
  console.log(data);
}

getSuperHero();

console.log("test");
