const pesquisarTipo = async (index) => {
    const url = "https://pokeapi.co/api/v2/type/";
    const response = await fetch(url);
    const data = await response.json();

    return data.results[index].name

  };

  const pesquisarTiposTamanho = async () => {
    const url = "https://pokeapi.co/api/v2/type/";
    const response = await fetch(url);
    const data = await response.json();
    return data.results.length

  };

  const CarregarTipoo = async() => {
    const tipos = await pesquisarTiposTamanho()
    const lista = document.querySelector('#tipo')

    for(let index = 0;index <= tipos; index++) {
        const tipo = await pesquisarTipo(index)
        let option = document.createElement("option")
        option.textContent = `${tipo}`
        lista.appendChild(option);
    }
  }
  
  CarregarTipoo();

//   const listaTipos = pesquisarTipo();

  const gerarLista = async (tipo) => {

     let option = document.createElement("option")
     option.setAttribute("class", "teste");
    return option    

    // let pokemonTipoTamanho = pokemon.tipo.length;               .textContent = `${tipo}`

    // let card = document.createElement("div");
    // imagemFundo.setAttribute("src", "img/fundo-pokebola.png");
    // imagemPokemon.setAttribute("src", `${pokemon.sprites.front_default}`);
    //     let elemento = document.createElement("div").textContent = `${pokemon.types[0].type.name}`
    //     cardConteudoInformacaoElemento.setAttribute("class", `elemento-${pokemon.types[0].type.name}`);
    //     cardConteudoInformacaoElemento.textContent = elemento;
    // card.appendChild(cardImage);
    //     container.replaceChildren(...pokemons)

};

// let optionsLista = listaTipos.map(gerarLista)

// lista.replaceChildren(...optionsLista)