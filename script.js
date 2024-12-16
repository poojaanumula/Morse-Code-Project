
import { translateToMorse, translateToEnglish } from './functions.js';

// Button logic for translating English to Morse Code
document.getElementById('mybtn').addEventListener('click', function (e) {
    e.preventDefault();

    const typedInp = document.getElementById('text').value.trim();
    const showDiv = document.getElementById('show');

    try {
        // Validate and translate
        const morseResult = translateToMorse(typedInp);
        showDiv.textContent = morseResult;
        showDiv.style.color = "black"; // Reset text color for valid input
    } catch (error) {
        // Display error message in the 'show' div
        showDiv.textContent = error.message;
        showDiv.style.color = "red"; // Highlight error in red
    }
});

// Button logic for translating Morse Code to English
document.getElementById('mybtnTwo').addEventListener('click', function (e) {
    e.preventDefault();

    const typedMorse = document.getElementById('morseInp').value.trim();
    const shownew = document.getElementById('shownew');

    try {
        // Validate Morse code input
        if (!/^[.\-\/\s]*$/.test(typedMorse)) {
            throw new Error("Input contains unsupported characters. Only '.', '-', '/', and spaces are allowed.");
        }

        // Perform translation
        const translation = translateToEnglish(typedMorse);

        if (translation.trim() === "") {
            throw new Error("Invalid format, please enter valid Morse code.");
        }

        shownew.textContent = `Translation: ${translation}`;
        shownew.style.color = "black"; // Reset text color for valid input
    } catch (error) {
        // Display error message in the 'shownew' div
        shownew.textContent = error.message;
        shownew.style.color = "red"; // Highlight error in red
    }
});

// Clear other textarea and result when switching focus
document.getElementById('text').addEventListener('focus', function () {
    document.getElementById('morseInp').value = "";
    document.getElementById('shownew').textContent = "";
});

document.getElementById('morseInp').addEventListener('focus', function () {
    document.getElementById('text').value = "";
    document.getElementById('show').textContent = "";
});
