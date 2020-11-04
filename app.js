let pokemonId = 1;

function getData(id, error) {
  if(!error){
    let apiURL = `https://pokeapi.co/api/v2/pokemon/${id}`
    fetch(apiURL)
      .then( (data) => data.json())
      .then ( (pokemon) => generateHtml(pokemon))
  }
  else {
    let apiURL = `https://pokeapi.co/api/v2/pokemon/bug`
    fetch(apiURL)
      .then( (data) => data.json())
      .then ( (pokemon) => generateHtml(pokemon))
  }
}


getData(pokemonId, false);

function pokeSlideRight() {
  pokemonId ++;
  getData(pokemonId, false);
}

function pokeSlideLeft() {
  pokemonId --;
  getData(pokemonId, true);
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

  <div class="vie"><img src="img/cardiogram.png" alt="points de vie"> <span> ${data.stats[0].base_stat}</span></div>

  <div class="vie"><img src="img/sword.png" alt="points attaque"> <span> ${data.stats[1].base_stat}</span>
  <div class="vie"><img src="img/shield.png" alt="points defense"> <span>  ${data.stats[2].base_stat}</span>
        </div>
</div>


`
  
  const pokemonDiv = document.querySelector('.pokemon')
  pokemonDiv.innerHTML = html
 
}

var audioElement = new Audio('test.wav');
audioElement.play();



