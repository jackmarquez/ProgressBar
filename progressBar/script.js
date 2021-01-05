/* Función que permite mostrar una barra de progreso hasta que 
la información de la página este completamente cargada */

let percent = document.querySelector('.percent');
let progress = document.querySelector('.progress');
let principal = document.querySelector('#principal');
let loader = document.querySelector('#loader');
let count = 4;

function progressBar(){
    if (count < 96) {
        count = count + 3;
        progress.style.width = count + '%';
        percent.textContent = count + '%';
    }
}

if (document.readyState == 'loading') {
    setInterval(progressBar, 30);
}

window.onload = function() {
    count = 100;
    progress.style.width = count + '%';
    percent.textContent = count + '%';
    loader.classList.add('fade-out');
    setTimeout(() => {
        loader.classList.add('d-none');
        clearInterval(progressBar);
    }, 1000);
}