'use strict';

function convertTemperature(tempInput, conversionType) {
    let result;
    if (conversionType === 'toFahrenheit') {
        result = (tempInput * 9 / 5) + 32;
        return `${tempInput}°C = ${result.toFixed(1)}°F`;
    } else {
        result = (tempInput - 32) * 5 / 9;
        return `${tempInput}°F = ${result.toFixed(1)}°C`;
    }
}

function displayResult(message) {
    const resultBox = document.querySelector('#result');
    resultBox.textContent = message;
}

function validateInput(tempInput) {
    if (isNaN(tempInput) || tempInput === '') {
        displayResult('Please enter a valid number');
        return false;
    }
    return true;
}

function handleFormSubmit(event) {
    event.preventDefault();

    const tempInput = document.querySelector('#temperature').value;
    const conversionType = document.querySelector('input[name="conversion"]:checked').value;

    if (validateInput(tempInput)) {
        const result = convertTemperature(tempInput, conversionType);
        displayResult(result);
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const themeSwitcher = document.querySelector('#theme-switcher');
    themeSwitcher.textContent = body.classList.contains('dark-mode') ? 'Light mode' : 'Dark mode';
}

document.querySelector('#converter-form').addEventListener('submit', handleFormSubmit);
document.querySelector('#theme-switcher').addEventListener('click', toggleTheme);