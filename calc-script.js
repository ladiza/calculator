const nums = document.querySelectorAll('#num');
const clearEverything = document.querySelector('.clear-everything');
const erase = document.querySelector('.clear');
const display = document.querySelector('#disp');
const memory = document.querySelector('#memory');
const symbols = document.querySelectorAll('#symbol');

let mem = {firstNum: 0, secondNum: 0, operator: ''};

nums.forEach(number => {
  number.addEventListener('click', () => {
    if (display.textContent.length < 22) {
    display.textContent += number.textContent;
    } else {
      alert('Display is full! You can enter max 22 numbers.')
    }
  });
});

symbols.forEach(symbol => {
  symbol.addEventListener('click', () => {

    if (display.textContent.length == 0) {
      alert('Write a number first!');
    } else if (memory.textContent.includes('+') || 
               memory.textContent.includes('-') ||
               memory.textContent.includes('*') || 
               memory.textContent.includes('/')) {
      mem.secondNum = display.textContent;
      let result = compute(mem.firstNum, mem.secondNum, mem.operator);

      memory.textContent = result + ' ' + symbol.textContent;
      mem.firstNum = result;
      mem.operator = symbol.textContent;
      console.log(mem.operator);
      display.textContent = '';
    } else {
      mem.firstNum = display.textContent;
      mem.operator = symbol.textContent;
      console.log(mem.operator);
      memory.textContent = display.textContent + ' ' + symbol.textContent;
      display.textContent = '';
    };
  }); 
});

function compute (prvnicislo, druhecislo, picovinamezi) {
  
  let firstNum = parseInt(prvnicislo);
  let secondNum = parseInt(druhecislo);
  let result = null;
  switch (picovinamezi) {
    case '+':
      result = sum(firstNum, secondNum);
      break;
    case '-':
      result = subtract(firstNum, secondNum);
      break;
    case '*':
      result = multiply(firstNum, secondNum);
      break;
    case '/':
      result = divide(firstNum, secondNum);
      break;
  }
  return result;
}

function sum (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function divide (a, b) {
  return a / b;
}

function multiply (a, b) {
  return a * b;
}

clearEverything.addEventListener('click', () => {
  display.textContent = '';
  memory.textContent = '';
});

erase.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
});

