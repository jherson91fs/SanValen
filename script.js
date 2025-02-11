// document.getElementById("yesButton").addEventListener("click", function() {
//     window.open("mensaje.html", "_blank");
// });

// const noButton = document.getElementById("noButton");
// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// if (!isMobile) {
//     noButton.addEventListener("mouseover", function() {
//         let button = this;
//         let container = document.querySelector(".container");
        
//         // Obtener el tamaño del contenedor y el botón
//         let containerRect = container.getBoundingClientRect();
//         let buttonRect = button.getBoundingClientRect();
        
//         // Limites para que el botón no salga del contenedor
//         let maxX = containerRect.width - buttonRect.width;
//         let maxY = containerRect.height - buttonRect.height;
        
//         // Generar nuevas posiciones dentro de los límites
//         let newX = Math.random() * maxX;
//         let newY = Math.random() * maxY;
        
//         // Aplicar la nueva posición
//         button.style.position = "absolute";
//         button.style.left = `${newX}px`;
//         button.style.top = `${newY}px`;
//     });
// }

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const gifImage = document.getElementById("gifImage");

const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm9xbTF0cXl3MzljNTk2Z2xjb3E5cnlzbDV5ZXU2cXJqMWJ2b2FreiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Y2pSc6cEsuslW/giphy.gif",
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media.giphy.com/media/3ohs4vYFQwDd2PsOPY/giphy.gif",
    "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif"
];

let clickCount = 0;

noButton.addEventListener("click", function () {
    clickCount++;
    
    // Cambia el GIF cada vez que se presiona "No"
    gifImage.src = gifs[clickCount % gifs.length];
    
    // Mueve el botón a una nueva posición aleatoria
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener("click", function () {
    window.location.href = "mensaje.html";
});
