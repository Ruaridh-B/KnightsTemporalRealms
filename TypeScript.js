const textToType = document.getElementById("TextTyping").textContent.trim();
const typingSpeed = 60;
const typedTextElement = document.getElementById("typed-text");

let index = 0;
function typeText() {
    if (index < textToType.length) {
        typedTextElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}
document.getElementById("TextTyping").textContent = '';
window.onload = typeText;
