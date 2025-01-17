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
  if (nomes.length > 0) { 
    let sorteio = Math.floor(Math.random() * nomes.length);
    let nomeSorteado = nomes[sorteio];
    console.log(nomeSorteado);

    let resultado = document.getElementById("resultado");
    let listaResultado = document.createElement("li");
    listaResultado.innerText = nomeSorteado;
    resultado.appendChild(listaResultado);
  
    nomes.splice(sorteio, 1);

    if (nomes.length === 0) {
      alert("Todos os nomes foram sorteados!");
      limparTela();
    }
  } else {
    alert("Todos os nomes já foram sorteados ou a lista está vazia!");
  }
}
function limparTela() {
  nomes = []; 
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = ""; 
}