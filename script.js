document.getElementById("yesButton").addEventListener("click", function() {
    window.open("mensaje.html", "_blank");
});

document.getElementById("noButton").addEventListener("mouseover", function(event) {
    if (window.innerWidth > 768) { // Solo se mueve en pantallas grandes
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
        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
    }
});
