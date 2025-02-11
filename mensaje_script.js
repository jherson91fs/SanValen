// Animación de escritura
const message = "Eres la persona más especial para mí 💕";
let index = 0;
function typeMessage() {
    if (index < message.length) {
        document.getElementById("typed-message").textContent += message.charAt(index);
        index++;
        setTimeout(typeMessage, 100);
    }
}
typeMessage();

// Corazones flotantes
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.querySelector(".hearts-container").appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);
