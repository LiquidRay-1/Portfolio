const words = ["Android", "iOS", "Web"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let speed = 200; // Velocidad de escritura y borrado

const platformElement = document.getElementById('platform');

function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting && letterIndex <= currentWord.length) {
        platformElement.textContent = currentWord.substring(0, letterIndex);
        letterIndex++;
        speed = 200; // Velocidad de escritura
    } else if (isDeleting && letterIndex >= 0) {
        platformElement.textContent = currentWord.substring(0, letterIndex);
        letterIndex--;
        speed = 100; // Velocidad de borrado
    }

    if (letterIndex === currentWord.length + 1) {
        isDeleting = true;
        speed = 1000; // Tiempo de pausa antes de iniciar la siguiente palabra
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500; // Tiempo de pausa entre palabras
    }

    setTimeout(type, speed);
}

type();
