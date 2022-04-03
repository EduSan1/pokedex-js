"use strict";

// const todosPokemon = async () => {
//     const url = `https://pokeapi.co/api/v2/pokemon`;
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data.count)
//     return data
//   };

//   const numeroPokemons = todosPokemon()
//   console.log(numeroPokemons)
const container = document.querySelector('#cards-container')
let index = 1;

const pesquisarPokemon = async (index) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    return data
  };

const criarCard = async (index) => {

    const pokemon = await pesquisarPokemon(index)
    console.log(pokemon.name)

    // let pokemonTipoTamanho = pokemon.tipo.length;
    // console.log(pokemonTipoTamanho)

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
    imagemFundo.setAttribute("src", "../../img/fundo-pokebola.png");
    imagemPokemon.setAttribute("src", `${pokemon.sprites.front_default}`);
    cardConteudo.setAttribute("class", "conteudo");
    cardConteudoNumero.setAttribute("class", "numero");
    cardConteudoNumero.textContent = `${pokemon.id}`;
    cardConteudoNome.setAttribute("class", "nome");
    cardConteudoNome.textContent = `${pokemon.name}`;
    cardConteudoInformacao.setAttribute("class", "card-informacoes");
    cardConteudoInformacaoElementos.setAttribute("class", "card-elementos");

    // for (let index = 0; index < pokemonTipoTamanho; index++) {
        // let cardConteudoInformacaoElemento = document.createElement("div");
        // // let elemento = document.createElement("div").textContent = `${pokemon.tipo.tipo1}`
        // console.log(elemento)
        // cardConteudoInformacaoElemento.setAttribute("class", "elemento-1");
        // cardConteudoInformacaoElemento.textContent = elemento;
        // console.log(cardConteudoInformacaoElemento);
        // cardConteudoInformacaoElementos.appendChild(cardConteudoInformacaoElemento);
    // }

    cardConteudoInformacao.appendChild(cardConteudoNome);
    // cardConteudoInformacao.appendChild(cardConteudoInformacaoElementos);

    cardConteudo.appendChild(cardConteudoNumero);
    cardConteudo.appendChild(cardConteudoInformacao);

    cardImage.appendChild(imagemFundo);
    cardImage.appendChild(imagemPokemon);

    card.appendChild(cardImage);
    card.appendChild(cardConteudo);

    console.log(card)
    container.appendChild(card);

};
// const pesquisar = document.getElementById("btnPesquisar");
// pesquisar.addEventListener("click",criarCard)
while ( index < 100 ){
    criarCard(index)
    index++
    
}
