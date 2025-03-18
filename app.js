//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//array para armazenar os participantes 

let amigos = [];

function adicionarAmigo() {
    let inputElement = document.getElementById('amigo');
    let nome = inputElement.value.trim();

    if (!nome) {
        alert('Erro, insira um nome');
        return;
    }

    if (amigos.includes(nome)) {
        alert('O nome já está na lista, por favor digite outro');
        return;
    }

    amigos.push(nome);
    console.log(amigos);
    atualizarAmigos();
    limparCampo();
}


function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

// atualizar lista 

function atualizarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li')
        li.textContent = amigos[i]
        lista.appendChild(li)
    }
}

// sortear amigo

function sortearAmigo() {
    if (amigos == [] || amigos.length == 0) {
        alert('Adicione um nome para sortear')
    } else {
        const index = Math.floor(Math.random() * amigos.length)
        const amigoSecreto = amigos[index]

        const ul = document.getElementById('resultado')
        ul.innerHTML = ''

        const li = document.createElement('li')
        li.textContent = `Seu amigo secreto é: ${amigoSecreto}`
        ul.appendChild(li)
        dispararConfete();
        amigos = [];
        atualizarAmigos();
    }
}