const nums = document.querySelectorAll('#num');
const clearEverything = document.querySelector('.clear-everything');
const erase = document.querySelector('.clear');
const display = document.querySelector('#disp');

nums.forEach(number => {
  number.addEventListener('click', () => {
    if (display.textContent.length < 22) {
    display.textContent += number.textContent;
    } else {
      alert('Display is full! You can enter max 22 numbers.')
    }
  });
});



clearEverything.addEventListener('click', () => {
  display.textContent = '';
});

erase.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
});

