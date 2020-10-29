const fila = document.querySelector('.container-carrosel');
const carrosel = document.querySelector('.carrosel');

const flechaEsquerda = document.getElementById('flecha-esquerda')
const flechaDireita = document.getElementById('flecha-direita')

flechaDireita.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

flechaEsquerda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});