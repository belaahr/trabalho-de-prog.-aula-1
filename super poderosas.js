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
const tempoObjetivo2 = new Date('2024-12-25T00:00:00');
const tempoObjetivo3 = new Date('2024-10-28T00:00:00');
const tempoObjetivo4 = new Date('2025-04-16T00:00:00');

let TempoAtual = new Date ();
let tempoFinal = tempoObjetivo1 - TempoAtual;
let segundos = Math.floor (tempoFinal/1000);
let minutos = Math.floor (segundos/60);
let horas = Math.floor (minutos/60);
let dias = Math.floor (horas/24);

segundos %= 60;
minutos %=60;
horas %=24;

contadores[0].textContent = dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos" ;
