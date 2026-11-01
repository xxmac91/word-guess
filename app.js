const keyboardContainer = document.querySelector('.keyboard')
console.log('Game Loaded!');

function generateKeyboard() {
for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
const button = document.createElement("button");
button.innerText = String.fromCharCode(i);
keyboardContainer.appendChild(button);
button.addEventListener("click", (e) => handleGuess(e.target.innerText));
}
}

generateKeyboard()
