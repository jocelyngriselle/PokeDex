let pokemonId = 1;
/*let apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;


/*const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '25',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`*/

/*const colors = {
  fire:'#FDDFDF',
  grass:'#DEFDE0',
  electric:'#FCF7DE',
  water:'#DEF3FD',
  ground:'#f4e7da',
  rock:'#d5d5d4',
  fairy:'#fceaff',
  poison :'#98d7a5',
  bug:'#f8d5a3',
  dragon:'#97b3e6',
  psychic:'#eaeda1',
  flying:'#F5F5F5',
  fighting:'#E6E0D4',
  normal:'#F5F5F5'
};
const main_types = Object.keys(colors);
console.log(main_types);*/


function getData(id) {
  let apiURL = `https://pokeapi.co/api/v2/pokemon/${id}`
  fetch(apiURL)
    .then( (data) => data.json())
    .then ( (pokemon) => generateHtml(pokemon))
}

/*fetch(apiUrl)
    .then( (data) => data.json())
    .then ( (pokemon) => generateHtml(pokemon))*/

getData(pokemonId);

function pokeSlideRight() {
  pokemonId ++;
  getData(pokemonId);
}

function pokeSlideLeft() {
  pokemonId --;
  getData(pokemonId);
}

const generateHtml = (data) => {
  console.log(data)
  const html = `
  <div class = "content">
  <div class = "name">
      ${data.name}
  </div>
  <div class = "id">
      ID : ${data.id.toString().padStart(3,'0')}
  </div>
  <img src=${data.sprites.front_default}>
  <img src=${data.sprites.back_default}>
</div>
<div class="details">
  <div class = "type">
      Type: ${data.types[0].type.name}
  </div>
         <div class = "info">
  <p>
      <span> ${data.abilities[0].ability.name}</span>
      <span> ${data.abilities[1].ability.name}</span>
  </p>

  <div class="vie"><img src="https://zupimages.net/up/20/44/g7hu.png"> <span> ${data.stats[0].base_stat}</span></div>

  <div class="vie"><img src="https://zupimages.net/up/20/44/2jiv.png"> <span> ${data.stats[1].base_stat}</span>
  <div class="vie"><img src="https://zupimages.net/up/20/44/owwp.png"> <span>  ${data.stats[2].base_stat}</span>
        </div>
</div>


`
  
  const pokemonDiv = document.querySelector('.pokemon')
  pokemonDiv.innerHTML = html
 
}

var audioElement = new Audio('test.wav');
audioElement.play();



