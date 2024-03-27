alert('Olá, seja muito bem vindo');

let nomeUsuario ='';

let texto = document.querySelector('span');

while (nomeUsuario ==''){ 

    nomeUsuario = prompt('cuidado com o 🐋 qual seu nome?');
}

texto.textContent = nomeUsuario; 