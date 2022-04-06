"use strict";

// const todosPokemon = async () => {
//     const url = `https://pokeapi.co/api/v2/pokemon`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data
//   };

//   const numeroPokemons = todosPokemon()
const container = document.querySelector('#cards-container')
let index = 1;
const pokemons = [];


const pesquisarPokemon = async (index) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
    const response = await fetch(url);
    const data = await response.json();
    return data
  };

// const criarCard = async (index) => {
    const criarCard = async (pokemon) => {

    // const pokemon = await pesquisarPokemon(index)

    // let pokemonTipoTamanho = pokemon.tipo.length;

    let card = document.createElement("div");
    let cardImage = document.createElement("div");
    let imagemFundo = document.createElement("img");
    let imagemPokemon = document.createElement("img");
    let cardConteudo = document.createElement("div");
    let cardConteudoNumero = document.createElement("div");
    let cardConteudoInformacao = document.createElement("div");
    let cardConteudoNome = document.createElement("div");
    let cardConteudoInformacaoElementos = document.createElement("div");

    card.setAttribute("class", "card");
    cardImage.setAttribute("class", "card-imagem");
    imagemFundo.setAttribute("src", "img/fundo-pokebola.png");
    imagemPokemon.setAttribute("src", `${pokemon.sprites.front_default}`);
    cardConteudo.setAttribute("class", "conteudo");
    cardConteudoNumero.setAttribute("class", "numero");
    cardConteudoNumero.textContent = `${pokemon.id}`;
    cardConteudoNome.setAttribute("class", "nome");
    cardConteudoNome.textContent = `${pokemon.name}`;
    cardConteudoInformacao.setAttribute("class", "card-informacoes");
    cardConteudoInformacaoElementos.setAttribute("class", "card-elementos");

        let cardConteudoInformacaoElemento = document.createElement("div");
        let elemento = document.createElement("div").textContent = `${pokemon.types[0].type.name}`
        cardConteudoInformacaoElemento.setAttribute("class", `elemento-${pokemon.types[0].type.name}`);
        cardConteudoInformacaoElemento.textContent = elemento;
        cardConteudoInformacaoElementos.appendChild(cardConteudoInformacaoElemento);

        if (pokemon.types.length == 2){

            let cardConteudoInformacaoElemento2 = document.createElement("div");
            let elemento2 = document.createElement("div").textContent = `${pokemon.types[1].type.name}`
            cardConteudoInformacaoElemento2.setAttribute("class", `elemento-${pokemon.types[1].type.name}`);
            cardConteudoInformacaoElemento2.textContent = elemento2;
            cardConteudoInformacaoElementos.appendChild(cardConteudoInformacaoElemento2);

        }

    cardConteudoInformacao.appendChild(cardConteudoNome);
    cardConteudoInformacao.appendChild(cardConteudoInformacaoElementos);

    cardConteudo.appendChild(cardConteudoNumero);
    cardConteudo.appendChild(cardConteudoInformacao);

    cardImage.appendChild(imagemFundo);
    cardImage.appendChild(imagemPokemon);

    card.appendChild(cardImage);
    card.appendChild(cardConteudo);

    // pokemons.push(card)
    return card

    // if(pokemons.length == 51) {
    //     container.setAttribute("class", "cards");
    //     container.replaceChildren(...pokemons)
    // }

};

const gerarCars = async () => {

    while ( index <= 151 ){
        const pokemon = await pesquisarPokemon(index)
        pokemons.push(await criarCard(pokemon))
        index++

    } 

    container.setAttribute("class", "cards");
    container.replaceChildren(...pokemons)

}

gerarCars()

export {pesquisarPokemon,criarCard}





