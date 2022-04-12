"use strict";


    const criarModal = async (pokemon) => {

    let card = document.createElement("div");
    let cardImage = document.createElement("div");
    let imagemFundo = document.createElement("img");
    let imagemPokemon = document.createElement("img");
    let cardConteudo = document.createElement("div");
    let cardConteudoNumero = document.createElement("div");
    let cardConteudoInformacao = document.createElement("div");
    let cardConteudoNome = document.createElement("div");
    let cardConteudoInformacaoElementos = document.createElement("div");

    card.setAttribute("class", "modal");
    cardImage.setAttribute("class", "modal-imagem");
    imagemFundo.setAttribute("src", "img/fundo-pokebola.png");
    imagemPokemon.setAttribute("src", `${pokemon.sprites.front_default}`);
    cardConteudo.setAttribute("class", "modal-conteudo");
    cardConteudoNumero.setAttribute("class", "modal-numero");
    cardConteudoNumero.textContent = `${pokemon.id}`;
    cardConteudoNome.setAttribute("class", "modal-nome");
    cardConteudoNome.textContent = `${pokemon.name}`;
    cardConteudoInformacao.setAttribute("class", "modal-informacoes");
    cardConteudoInformacaoElementos.setAttribute("class", "modal-elementos");

        let cardConteudoInformacaoElemento = document.createElement("div");
        let elemento = document.createElement("div").textContent = `${pokemon.types[0].type.name}`
        cardConteudoInformacaoElemento.setAttribute("class", `modal-elemento-${pokemon.types[0].type.name}`);
        cardConteudoInformacaoElemento.textContent = elemento;
        cardConteudoInformacaoElementos.appendChild(cardConteudoInformacaoElemento);

        if (pokemon.types.length == 2){
            let cardConteudoInformacaoElemento2 = document.createElement("div");
            let elemento2 = document.createElement("div").textContent = `${pokemon.types[1].type.name}`
            cardConteudoInformacaoElemento2.setAttribute("class", `modal-elemento-${pokemon.types[1].type.name}`);
            cardConteudoInformacaoElemento2.textContent = elemento2;
            cardConteudoInformacaoElementos.appendChild(cardConteudoInformacaoElemento2);
        }

    cardConteudoInformacao.appendChild(cardConteudoNome);
    cardConteudoInformacao.appendChild(cardConteudoInformacaoElementos);

    cardConteudo.appendChild(cardConteudoNumero);
    cardConteudo.appendChild(cardConteudoInformacao);

    cardImage.appendChild(imagemPokemon);
    cardImage.appendChild(imagemFundo);


    card.appendChild(cardImage);
    card.appendChild(cardConteudo);

    return card

};

export {criarModal}
