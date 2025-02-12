// Función para generar corazones flotantes
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    
    // Posición aleatoria en el ancho de la pantalla
    heart.style.left = Math.random() * 100 + "vw";
    
    // Tamaño aleatorio de los corazones
    heart.style.fontSize = Math.random() * (40 - 20) + 20 + "px";
    
    // Duración aleatoria de la animación
    const animationDuration = Math.random() * (5 - 3) + 3;
    heart.style.animation = `floatHeart ${animationDuration}s linear infinite`;
    
    document.querySelector(".hearts-container").appendChild(heart);
    
    // Eliminar el corazón después de que termine la animación
    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000);
}

// Generar corazones continuamente
setInterval(createHeart, 500);

// Efecto de máquina de escribir para el mensaje
const message = "Eres la persona más especial para mí. 💖 ¡Gracias por estar en mi vida!";
let i = 0;

function typeMessage() {
    if (i < message.length) {
        document.getElementById("typed-message").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeMessage, 100);
    }
}

typeMessage();

// Mostrar respuesta cuando se hace clic en un botón
function showResponse(text) {
    document.getElementById("response-message").innerText = text;
}


document.getElementById("submitMessage").addEventListener("click", function() {
    let message = document.getElementById("userMessage").value;
    
    if (message.trim() === "") {
        alert("Por favor, escribe un mensaje antes de enviarlo.");
        return;
    }

    let formURL = "https://docs.google.com/forms/d/e/1FAIpQLSerg2PqKnZ-EZHKytd92c3UirHqX07c_CF26gAMYekkxwXGiQ/formResponse";
    let formData = new FormData();
    formData.append("entry.1586503523", message);

    fetch(formURL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    }).then(() => {
        alert("Mensaje enviado correctamente 💖");
        document.getElementById("userMessage").value = "";
    }).catch((error) => {
        alert("Hubo un error al enviar el mensaje 😢");
        console.error("Error:", error);
    });
});
