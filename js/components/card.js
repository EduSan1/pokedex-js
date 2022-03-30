"use strict";

// let nav = document.createElement("nav");
// nav.setAttribute("class","menu");

// let ul = document.createElement("ul");
// nav.appendChild(ul);
const db = [
    {
        id: '1',
        nome: 'Bulbassauro',
        sprite: '../../img/pokemon/bulbassauro.png',
        tipo: {
            tipo1: "Planta",
            tipo2: "Veneno"
        }
    },
    {
        id: '2',
        nome: 'Charmander',
        sprite: '../../img/pokemon/charmander.png',
        tipo: {
            tipo1: "fogo",
        }
    },
    {
        id: '3',
        nome: 'Tartaruga de água',
        sprite: '../../img/pokemon/tartaruga.png',
        tipo: {
            tipo1: "Água",
            tipo2: "Veneno",
            tipo3: "Gangue"
        }
    },
]
const criarCard = (pokemon) => {

    let pokemonTipoTamanho = pokemon.tipo.length;

    let card = document.createElement("div");
    let cardImage = document.createElement("div");
    let imagemFundo = document.createElement("img");
    let imagemPokemon = document.createElement("img");
    let cardConteudo = document.createElement("div");
    let cardConteudoNumero = document.createElement("div");
    let textoNumero = document.createElement("p");
    let cardConteudoInformacao = document.createElement("div");
    let textoNome = document.createElement("p");
    let cardConteudoInformacaoElementos = document.createElement("div");

    card.setAttribute("class", "card");
    cardImage.setAttribute("class", "card-imagem");
    imagemFundo.setAttribute("src", "../../img/fundo-pokebola.png");
    imagemPokemon.setAttribute("src", `${pokemon.sprite}`);
    textoNumero.setAttribute("value", `${pokemon.id}`);
    textoNome.setAttribute("value", `${pokemon.nome}`);
    cardConteudo.setAttribute("class", "conteudo");
    cardConteudoNumero.setAttribute("class", "numero");
    cardConteudoInformacao.setAttribute("class", "card-informacoes");
    cardConteudoInformacaoElementos.setAttribute("class", "card-elementos");

    for (let index = 0; index < pokemonTipoTamanho; index++) {
        let cardConteudoInformacaoElemento = document.createElement("div");
        cardConteudoInformacaoElemento.setAttribute("class", `elemento-${index}`);
        cardConteudoInformacaoElemento.appendChild(pokemon.tipo[index]);
        cardConteudoInformacaoElementos.appendChild(cardConteudoInformacaoElemento);
    }

    cardConteudoInformacao.appendChild(textoNome);
    cardConteudoInformacao.appendChild(cardConteudoInformacaoElementos);

    cardConteudoNumero.appendChild(textoNumero);

    cardConteudo.appendChild(cardConteudoNumero);
    cardConteudo.appendChild(cardConteudoInformacao);

    cardImage.appendChild(imagemFundo);
    cardImage.appendChild(imagemPokemon);

    card.appendChild(cardImage);
    card.appendChild(cardConteudo);


    //contentText
    console.log(card)
    return card;
    {/* <div class="card" >
    <div class="card-imagem">
        <img src="./img/fundo-pokebola.png" alt="" />
        <img src="./img/pokemon.png" alt="" />
    </div>
    <div class="conteudo">
        <div class="numero">
            <p>#001</p>
        </div>
        <div class="card-informacoes">
            <p>Bulbassalto</p>
            <div class="card-elementos">
                <div class="elemento-um">Planta</div>
                <div class="elemento-dois">Veneno</div>
                <div class="elemento-dois">teste</div>
            </div>
        </div>
    </div>
</div> */}

}

const pokemons = db.map(criarCard)

// console.log(pokemons)
const container = document.querySelector('#cards-container')
console.log(container)
container.replaceChildren(...pokemons)