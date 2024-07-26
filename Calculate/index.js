// index.js

// Selecting elements from the DOM
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let expression = ''; // Variable to store the expression to be evaluated

// Adding event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        if (buttonText === '=') {
            // Evaluate and display the expression
            try {
                display.textContent = eval(expression);
            } catch (error) {
                display.textContent = 'Error';
            }
        } else if (buttonText === 'AC') {
            // Clear the display and reset the expression
            display.textContent = '';
            expression = '';
        } else {
            // Append the clicked button's text to the expression
            expression += buttonText;
            display.textContent = expression;
        }
    });
});
