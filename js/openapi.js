

async function getMarvelCharacters() {
  const response = await fetch(`${apiBaseURL}/api/marvel`);
  const data = await response.json();

  const marvelSelChars = data.filter((object) => marvelSelName.includes(object.name) && object.id < 15000);
  const marvelCharApi = marvelSelChars.map(({ name, api_detail_url }) => ({ name, api_detail_url }));
  console.log(marvelCharApi);

  for (const character of marvelCharApi) {
    const response = await fetch(`${apiBaseURL}/api/marvel-character`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });
    const charData = await response.json();
    marvelChars[charData.name] = charData;
  }
  console.log(marvelChars);
  console.log("This is the end!");
}

async () => {
  await getMarvelCharacters();
};

getMarvelCharacters()

// async function getSpiderMan() {
//   const response = await fetch("https://comicvine.gamespot.com/api/character/4005-1440/")
//   const data = await response.json()
  
// }



/*

(16) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0
: 
{name: 'Wolverine', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1440/'}
1
: 
{name: 'Captain America', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1442/'}
2
: 
{name: 'Spider-Man', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1443/'}
3
: 
{name: 'Iron Man', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1455/'}
4
: 
{name: 'Scarlet Witch', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1466/'}
5
: 
{name: 'Black Panther', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1477/'}
6
: 
{name: 'Iron Fist', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-1492/'}
7
: 
{name: 'Hulk', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-2267/'}
8
: 
{name: 'Thor', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-2268/'}
9
: 
{name: 'Black Widow', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-3200/'}
10
: 
{name: 'Star-Lord', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-10957/'}
11
: 
{name: 'Wolverine', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-76835/'}
{name: 'Wolverine', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-86165/'}
{name: 'Thor', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-97484/'}
{name: 'Wolverine', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-181781/'}: 
{name: 'Iron Man', api_detail_url: 'https://comicvine.gamespot.com/api/character/4005-196208/'}


*/


// console.log(marvelChars)
console.log("test");
