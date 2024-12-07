// Selecting necessary DOM elements
const bos = document.querySelector(".jonat");
const malumot = document.querySelector(".sonKirt");
const text = document.querySelector(".habar");
const bos1 = document.querySelector(".minusBos");
const bos2 = document.querySelector(".plusBos");
const colorPicker = document.querySelector("#pick-color");

let inputQimati = 0; // Initial value

// Button: Send number
bos.addEventListener("click", () => {
    const inputValue = Number(malumot.value); // Get user input
    inputQimati = inputValue; // Update the value
    text.textContent = inputQimati; // Display the value
    malumot.value = ""; // Clear the input field
});

// Button: Decrease value
bos1.addEventListener("click", () => {
    if (inputQimati > 0) { // Prevent value from going below 0
        inputQimati--;
        text.textContent = inputQimati > 0 ? inputQimati : ""; // Update display
    } else {
        console.log("Value cannot be less than 0");
    }
});

// Button: Increase value
bos2.addEventListener("click", () => {
    inputQimati++;
    text.textContent = inputQimati; // Update display
});

// Change color based on selected color
function changeColor() {
    const selectedColor = colorPicker.value; // Get color value
    text.style.color = selectedColor; // Apply the color to the displayed text
}


