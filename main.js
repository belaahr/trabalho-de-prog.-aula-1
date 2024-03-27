alert('Olá, seja muito bem vindo');

let nomeUsuario ='';

let texto = document.querySelector('span');

while (nomeUsuario ==''){ 

    nomeUsuario = prompt('cuidado com o 🐋 qual seu nome?');
}

if (nomeUsuario == '') {
    texto.textContent = 'Usuario'; 
} 

else {
texto.textContent = nomeUsuario; }