const words = ["javascript", "developer", "programming", "coding", "challenge"];
let chosenWord = "";
let displayedWord = "";
let attemptsLeft = 10;
let guessedLetters = [];

const wordDisplayElement = document.getElementById('wordDisplay');
const guessInputElement = document.getElementById('guessInput');
const guessButtonElement = document.getElementById('guessButton');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const restartButtonElement = document.getElementById('restartButton');

const startGame = () => {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    displayedWord = "_ ".repeat(chosenWord.length).trim();
    attemptsLeft = 10;
    guessedLetters = [];
    wordDisplayElement.textContent = displayedWord;
    guessInputElement.value = "";
    messageElement.textContent = "";
    attemptsElement.textContent = attemptsLeft;
};

const updateDisplayedWord = () => {
    let updatedWord = "";
    for (let i = 0; i < chosenWord.length; i++) {
        if (guessedLetters.includes(chosenWord[i])) {
            updatedWord += chosenWord[i] + " ";
        } else {
            updatedWord += "_ ";
        }
    }
    displayedWord = updatedWord.trim();
    wordDisplayElement.textContent = displayedWord;
};

const checkGuess = () => {
    const guess = guessInputElement.value.toLowerCase();
    guessInputElement.value = "";
    if (guess.length !== 1) {
        messageElement.textContent = "Please enter a single letter.";
        return;
    }
    if (guessedLetters.includes(guess)) {
        messageElement.textContent = "You already guessed that letter.";
        return;
    }
    guessedLetters.push(guess);
    if (chosenWord.includes(guess)) {
        messageElement.textContent = "Good guess!";
        updateDisplayedWord();
        if (!displayedWord.includes("_")) {
            messageElement.textContent = "Congratulations! You guessed the word!";
            guessButtonElement.disabled = true;
        }
    } else {
        attemptsLeft--;
        attemptsElement.textContent = attemptsLeft;
        messageElement.textContent = "Incorrect guess.";
        if (attemptsLeft === 0) {
            messageElement.textContent = `Game over! The word was "${chosenWord}".`;
            guessButtonElement.disabled = true;
        }
    }
};

guessButtonElement.addEventListener('click', checkGuess);
guessInputElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

startGame();
