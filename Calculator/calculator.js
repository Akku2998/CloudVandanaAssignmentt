const currentValue = '';
let operator = '';

function appendValue(value) {
  currentValue += value;
  updateResult();
}

function calculateResult() {
  const resultElement = document.getElementById('result');
  if (currentValue !== '') {
    try {
      currentValue = eval(currentValue);
      updateResult();
    } catch (error) {
      resultElement.value = 'Error';
    }
  }
}

function clearResult() {
  currentValue = '';
  updateResult();
}

function updateResult() {
  const resultElement = document.getElementById('result');
  resultElement.value = currentValue;
}
