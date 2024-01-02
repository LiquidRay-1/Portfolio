const words = ["Android", "iOS", "Web"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let speed = 200; // Velocidad de escritura y borrado

const platformElement = document.getElementById('platform');
const constantChar = "#";

function type() {
    const currentWord = words[wordIndex];

    let displayedText = constantChar + currentWord.substring(0, letterIndex);

    if (isDeleting) {
        displayedText = constantChar + currentWord.substring(0, letterIndex);
        letterIndex--;
    } else {
        letterIndex++;
    }

    if (letterIndex > currentWord.length) {
        isDeleting = true;
        speed = 1000; // Tiempo de pausa antes de iniciar la siguiente palabra
    }

    if (letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500; // Tiempo de pausa entre palabras
    }

    platformElement.textContent = displayedText;
    setTimeout(type, speed);
}

type();
