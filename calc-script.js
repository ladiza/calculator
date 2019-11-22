const nums = document.querySelectorAll('#num');
const clearEverything = document.querySelector('.clear-everything');
const erase = document.querySelector('.clear');
const display = document.querySelector('#disp');
const memory = document.querySelector('#memory');
const symbols = document.querySelectorAll('#symbol');

nums.forEach(number => {
  number.addEventListener('click', () => {
    if (display.textContent.length < 22) {
    display.textContent += number.textContent;
    } else {
      alert('Display is full! You can enter max 22 numbers.')
    }
    console.log(memory.textContent.length);
  });
});

symbols.forEach(symbol => {
  symbol.addEventListener('click', () => {
    if (display.textContent.length == 0) {
      alert('Write a number first!');
    } else {
      memory.textContent = display.textContent + ' ' + symbol.textContent;
      display.textContent = '';
    };
  });
});

clearEverything.addEventListener('click', () => {
  display.textContent = '';
});

erase.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
});

