//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function adicionarAmigo() {
  let nome = document.querySelector("input").value;
  if (nome != "") {
    nomes.push(nome);

    console.log(nomes);
  } else {
    alert("Campo vazio! Por favor insira algum nome válido");
  }
  exibirAmigos();
  limparCampo();
}
function limparCampo() {
  let limpar = document.querySelector("input");
  limpar.value = "";
}

function exibirAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  let listaNome = document.createElement('li')
  let nome = document.querySelector("input").value;
  for (let i = 0; i <= nomes.length; i++) {
    listaNome.innerText = nome;
    listaAmigos.appendChild(listaNome);
  }
}

function sortearAmigo() {
  if (nomes.length > 1) {
    let sorteio = Math.floor(Math.random() * nomes.length );
    let nomeSorteado = nomes[sorteio];
    console.log(nomeSorteado)
    let resultado = document.getElementById("resultado");
    let listaResultado = document.createElement("li");
    listaResultado.innerText = nomeSorteado;
    resultado.appendChild(listaResultado);
    nomes = [];
    limparTela()
  } else {
    alert("A lista está vazia")
  }
}
function limparTela() {
    const limparListaAmigos = document.getElementById("listaAmigos");
    limparListaAmigos.innerHTML = '';
}