let display = document.getElementById('display');

// Add value to display
function appendValue(value) {
  // Replace 'x' with '*' for multiplication
  if (value === 'x') {
    display.value += '*';
  } else {
    display.value += value;
  }
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Evaluate the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
