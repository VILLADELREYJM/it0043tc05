const text = "Mobile Legends: Bang Bang (MLBB)";
let index = 0;
let isDeleting = false;
const speed = 100;
const delay = 2000;

function typeWriter() {
    const typedTextSpan = document.getElementById("typed-text");

    if (isDeleting) {
        typedTextSpan.textContent = text.substring(0, index - 1);
        index--;
    } else {
        typedTextSpan.textContent = text.substring(0, index + 1);
        index++;
    }

    if (!isDeleting && index === text.length) {
        setTimeout(() => {
            isDeleting = true;
        }, delay);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        setTimeout(() => {
            index = 0;
        }, delay);
    }

    const typingSpeed = isDeleting ? speed / 2 : speed;
    setTimeout(typeWriter, typingSpeed);
}

document.addEventListener("DOMContentLoaded", function () {
    typeWriter();
});
