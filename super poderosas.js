const botoes= document.querySelectorAll('.objetivos');
// botoes.length
const texto= document.querySelectorAll('.aba-conteudo');

for (let i = 0; i < botoes.length; i++) {
    console.log(i);
    botoes[i].onclick = function(){
    for(let j = 0; j < botoes.length; j++){
        botoes[j].classList.remove('ativo');
        texto[j].classList.remove('ativa');
    }
    botoes[i].classList.add('ativo'); 
    texto[i].classList.add('ativa'); }
    
    //botoes[i].classList.remove('ativo');

}

const contadores = document.querySelectorAll('.contador');
const tempoObjetivo1 = new Date('2025-03-16T00:00:00');

let TempoAtual = new Date ();
let tempo = tempoObjetivo1 - TempoAtual;
let segundos = Math.floor (tempoFinal/1000);
let minutos = Math.floor (tempoFinal/60);
let horas = Math.floor (minutos/60);
let dias = Math.floor (horas/24);

contadores[0].textContent = dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos" ;
