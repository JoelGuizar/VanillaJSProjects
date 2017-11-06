const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

const prom = fetch(endpoint)
  //you have to tell it what type of data it is getting
  //raw data -> JSON, returns promise
  .then(blob => blob.json)
  //spead operator auto-fills
  .then(data => cities.push(...data))

function findMathes(searchTerm, cities) {
  return cities.filter(place => {
    //new regex, with any searchTerm inputted, with a global (g) match and insensitive (i)
    const regex = new RegExp(wordToMath, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  })
}

function displayMatches(){
  const matchArray = findMatches(this.value.cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="h1"> ${this.value}</span>`)

    const 

    return `
      <li>
        <span class="name"> ${place.city}, ${place.state} </span>
        <span class="population"> ${place.population} </span>
      </li>
    `
  }).join('');

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
