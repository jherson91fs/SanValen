document.getElementById("yesButton").addEventListener("click", function() {
    window.open("mensaje.html", "_blank");
});

const noButton = document.getElementById("noButton");
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (!isMobile) {
    noButton.addEventListener("mouseover", function() {
        let button = this;
        let container = document.querySelector(".container");
        
        // Obtener el tamaño del contenedor y el botón
        let containerRect = container.getBoundingClientRect();
        let buttonRect = button.getBoundingClientRect();
        
        // Limites para que el botón no salga del contenedor
        let maxX = containerRect.width - buttonRect.width;
        let maxY = containerRect.height - buttonRect.height;
        
        // Generar nuevas posiciones dentro de los límites
        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;
        
        // Aplicar la nueva posición
        button.style.position = "absolute";
        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
    });
}