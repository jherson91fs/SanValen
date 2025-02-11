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
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3p5djN6cnduNHRheHJoMjZhdWV2eHNha2J6OXExc3F1dHZidmc0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K6WIhJ07gwGkIAQfwN/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW14ZXo1czl6bTM1c2FodGlpbXRja2Q2YjN4cXVvbTJseml6eWg2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iFOxtmdDxbaoq60EUg/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXBmaXVxYTNzc2l6eXdvM2NyeHNmdWcybnlkdnNuYTViNHB0bGtodSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/THaoh0d7jN1pvXxouO/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTQ1MXdmbGtkamIwMXg1N3BvMXlrMDdkZ2psNm1hb3FiZHdlcmFzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GeJZGePN13KaeTmGa7/giphy.gif"
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
