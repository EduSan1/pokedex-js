import { pesquisarPokemon, criarCard, gerarCars } from "./components/card.js";
import { criarModal } from "./components/modal.js";
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

const PesquisarPokemonNome = async (pokemon) => {

  container.innerHTML = '<img class="loading" src="img/fundo-pokebola.png" alt="">';
  container.setAttribute("class", "cards-loading");
  // const pokemon = await pesquisarPokemon(nome)
  container.innerHTML = '';
  container.setAttribute("class", "cards");
  container.appendChild(await criarModal(pokemon))
}

const verificarPesquisa = async () => {
  if (pesquisaNome.value != "") {
    const pokemon = await pesquisarPokemon(pesquisaNome.value)
    console.log(pokemon)
    if (pokemon) {
      console.log(pokemon)
      PesquisarPokemonNome(pokemon)
    }else {
      alert("insira um nome valido")
    }
    
  } else {
    if (pesquisaTipoUm.value != "") {
      PesquisarPokemonTipo()

    } else {
      alert("insira um tipo valido")
    }
  }



}

pesquisar.addEventListener("click", verificarPesquisa)
pesquisaNome.addEventListener("click", () => { pesquisaTipoUm.value = "" })
pesquisaTipoUm.addEventListener("click", () => { pesquisaNome.value = ""; pesquisaTipoUm.value = "" })


