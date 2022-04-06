import {pesquisarPokemon,criarCard} from "./components/card.js";
const container = document.querySelector('#cards-container')

const pokemonsPesquisa = [];
 
 const pesquisarTipos = async () => {
    const url = "https://pokeapi.co/api/v2/type/";
    const response = await fetch(url);
    const data = await response.json();
    return data.results

  };

  const CarregarTipo = async() => {
    const tipos = await pesquisarTipos()
    const lista = document.querySelector('#tipo')

    for(let index = 0;index < tipos.length; index++) {
        const tipo = tipos[index].name
        let option = document.createElement("option")
        option.textContent = `${tipo}`
        lista.appendChild(option);
    }
  }
  CarregarTipo();

  const pesquisar = document.querySelector('#btnPesquisar')
  const pokemonsNome = document.querySelector('#pokemonsNome')
  const pesquisaTipoUm = document.querySelector('.pesquisa-tipo-um')
  const pesquisaTipoDois = document.querySelector('.pesquisa-tipo-dois')

  // const filtrarPokemon = async (index) => {
  //   const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data
  // }

  const gerarNomePokemons = async () => {

    for(let index = 1;index < 151; index++) {
      const pokemon = await pesquisarPokemon(index)
      console.log(pokemon)

      let option = document.createElement("option")
      option.textContent = `${pokemon.name}`
      pokemonsNome.appendChild(option);
    }
  }

  gerarNomePokemons()



  const PesquisarPokemonTipo = async () => {

    container.innerHTML = "";
    // container.setAttribute("class", "cards-loading");

    for (let index = 1; index <= 151;index++) {

      

      const pokemon = await pesquisarPokemon(index)

      if (pokemon.types[0].type.name == pesquisaTipoUm.value) {
        container.appendChild(await criarCard(pokemon))
        
      } else {

        if (pokemon.types.length == 2) {

          if (pokemon.types[1].type.name == pesquisaTipoUm.value) {
            container.appendChild( await criarCard(pokemon))
          }
        }
      }
    }


    }

  const pesquisarPorTipo = async () =>{

    if (pesquisaTipoUm.value != "" || pesquisaTipoDois.value != "") {
         PesquisarPokemonTipo()
    }else {
      console.log("erro")
    }


  }

  pesquisar.addEventListener("click",PesquisarPokemonTipo)


