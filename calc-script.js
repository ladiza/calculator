const nums = document.querySelectorAll('#num');
const clearEverything = document.querySelector('.clear-everything');
const erase = document.querySelector('.clear');
const display = document.querySelector('#disp');
const memory = document.querySelector('#memory');
const symbols = document.querySelectorAll('#symbol');
const equals = document.querySelector('.equals');
const dot = document.querySelector('.symbol-point');

let mem = {firstNum: 0, secondNum: 0, operator: ''};
let equalsUsed = false;

nums.forEach(number => {
  number.addEventListener('click', () => {
    if (display.textContent.length < 22) {
      if (equalsUsed == true) {
        memory.textContent = '';
        display.textContent += number.textContent;
        equalsUsed = false;
      } else {
      display.textContent += number.textContent;
      }
    } else {
      alert('Display is full! You can enter max 22 numbers.')
    }
  });
});

symbols.forEach(symbol => {
  symbol.addEventListener('click', () => {

    if (display.textContent.length == 0) {
      if (memory.textContent.length == 0) {
        alert('Write a number first!');
      } else if (memory.textContent.length > 0) {
        mem.firstNum = memory.textContent;
        mem.operator = symbol.textContent;
        memory.textContent = memory.textContent + ' ' + symbol.textContent;
        equalsUsed = false;
      }
      
    } else if (memory.textContent.includes('+') || 
               memory.textContent.includes('-') ||
               memory.textContent.includes('*') || 
               memory.textContent.includes('/')) {
      mem.secondNum = display.textContent;
      let result = compute(mem.firstNum, mem.secondNum, mem.operator);

      memory.textContent = result + ' ' + symbol.textContent;
      mem.firstNum = result;
      mem.operator = symbol.textContent;
      display.textContent = '';
    } else {
      mem.firstNum = display.textContent;
      mem.operator = symbol.textContent;
      memory.textContent = display.textContent + ' ' + symbol.textContent;
      display.textContent = '';
    };
  }); 
});

equals.addEventListener('click', () => {
  if (display.textContent.length == 0) {
    alert('You have to input all arguments!');
  } else {
  mem.secondNum = display.textContent;
  result = compute(mem.firstNum, mem.secondNum, mem.operator);
  memory.textContent = result;
  display.textContent = '';
  equalsUsed = true;
  }
})

function compute (prvnicislo, druhecislo, picovinamezi) {
  
  let firstNum = parseFloat(prvnicislo);
  let secondNum = parseFloat(druhecislo);
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

dot.addEventListener('click', () => {
  if (display.textContent.includes('.')) {
    alert("You can't insert two decimal points!");
  } else if (display.textContent.length == 0) {
    alert("You have to write something first!");
  } else {
  display.textContent += '.';
  }
});

clearEverything.addEventListener('click', () => {
  display.textContent = '';
  memory.textContent = '';
});

erase.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
});

