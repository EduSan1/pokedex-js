import { pesquisarPokemon, criarCard, gerarCars } from "./components/card.js";
const container = document.querySelector('#cards-container')

const pokemonsPesquisa = [];

const pesquisarTipos = async () => {
  const url = "https://pokeapi.co/api/v2/type/";
  const response = await fetch(url);
  const data = await response.json();
  return data.results

};

const CarregarTipo = async () => {
  const tipos = await pesquisarTipos()
  const lista = document.querySelector('#tipo')

  for (let index = 0; index < tipos.length; index++) {
    const tipo = tipos[index].name
    let option = document.createElement("option")
    option.textContent = `${tipo}`
    lista.appendChild(option);
  }
}
CarregarTipo();

const pesquisar = document.querySelector('#btnPesquisar')
const pokemonsNome = document.querySelector('#pokemonsNome')
const pesquisaNome = document.querySelector('.pesquisa-pokemon')
const pesquisaTipoUm = document.querySelector('.pesquisa-tipo-um')

const gerarNomePokemons = async () => {

  for (let index = 1; index <= 250; index++) {
    const pokemon = await pesquisarPokemon(index)

    let option = document.createElement("option")
    option.textContent = `${pokemon.name}`
    pokemonsNome.appendChild(option);
  }
}

gerarNomePokemons()



const PesquisarPokemonTipo = async () => {

  container.innerHTML = '<img class="loading" src="img/fundo-pokebola.png" alt="">';
  container.setAttribute("class", "cards-loading");
  const pokemonsFiltro = [];

  for (let index = 1; index <= 250; index++) {

    const pokemon = await pesquisarPokemon(index)

    if (pokemon.types[0].type.name == pesquisaTipoUm.value) {

      pokemonsFiltro.push(await criarCard(pokemon))
    } else {

      if (pokemon.types.length == 2) {

        if (pokemon.types[1].type.name == pesquisaTipoUm.value) {
          pokemonsFiltro.push(await criarCard(pokemon))
        }
      }
    }
  }
         container.innerHTML = '';
  container.setAttribute("class", "cards");
  container.replaceChildren(...pokemonsFiltro)

}

const PesquisarPokemonNome = async () => {

  container.innerHTML = '<img class="loading" src="img/fundo-pokebola.png" alt="">';
  container.setAttribute("class", "cards-loading");

  for (let index = 1; index <= 250; index++) {
    const pokemon = await pesquisarPokemon(index)
    if (pokemon.name == pesquisaNome.value) {
      container.innerHTML = '';
      container.setAttribute("class", "cards");
      container.appendChild(await criarCard(pokemon))
      index = 250;
    }
  }


}

const pesquisarPorTipo = async () => {
if (pesquisaNome.value != "") {
  PesquisarPokemonNome()
}else {
    if (pesquisaTipoUm.value != "") {
    PesquisarPokemonTipo()
    
  } else {
    gerarCars()
  }
}



}

pesquisar.addEventListener("click", pesquisarPorTipo)
pesquisaNome.addEventListener("click", () => {pesquisaTipoUm.value = ""})
pesquisaTipoUm.addEventListener("click", () => {pesquisaNome.value = "";pesquisaTipoUm.value = ""})


