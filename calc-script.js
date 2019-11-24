const nums = document.querySelectorAll('#num');
const clearEverything = document.querySelector('.clear-everything');
const erase = document.querySelector('.clear');
const display = document.querySelector('#disp');
const symbols = document.querySelectorAll('#symbol');
const equals = document.querySelector('.equals');
const dot = document.querySelector('.symbol-point');


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
    } else if ((display.textContent.charAt(display.textContent.length -2) == '/')||
               (display.textContent.charAt(display.textContent.length -2) == '*')||
               (display.textContent.charAt(display.textContent.length -2) == '+')||
               (display.textContent.charAt(display.textContent.length -2) == '-'))  {
      display.textContent = display.textContent.slice(0, display.textContent.length - 2);
      display.textContent += symbol.textContent + ' ';
    } else {
      display.textContent += ' ' + symbol.textContent + ' ';
    }
  }); 
});

equals.addEventListener('click', () => {
  if (display.textContent.length == 0) {
    alert('You have to input all arguments!');
  } else if ((display.textContent.charAt(display.textContent.length -2) == '/')||
             (display.textContent.charAt(display.textContent.length -2) == '*')||
             (display.textContent.charAt(display.textContent.length -2) == '+')||
             (display.textContent.charAt(display.textContent.length -2) == '-'))  {
  display.textContent = display.textContent.slice(0, display.textContent.length - 3); 
  console.log(display.textContent);            
  result = compute(display.textContent);
  memory.textContent = display.textContent + ' ' + '=';
  display.textContent = result;
  } else {
    result = compute(display.textContent);
    memory.textContent = display.textContent + ' ' + '=';
    display.textContent = result;
  }
})

displaySave = display.textContent;

function compute (display1) {

  let displayArr = display1.split(" ");

  for(let i = 0; i < displayArr.length; i++) {
    let result = null;
    if (displayArr[i]=='/') {
      result = divide(displayArr[i-1], displayArr[i+1]);
      displayArr.splice(i-1, 3, result);
      i=0;
    } else if (displayArr[i]=='*') {
      result = multiply(displayArr[i-1], displayArr[i+1]);
      displayArr.splice(i-1, 3, result);
      i=0;
    }
  };

  for(let i = 0; i < displayArr.length; i++) {
    let result = null;
    if (displayArr[i]=='+') {
      result = sum(parseFloat(displayArr[i-1]), parseFloat(displayArr[i+1]));
      displayArr.splice(i-1, 3, result);
      i=0;
    } else if (displayArr[i]=='-') {
      result = subs(displayArr[i-1], displayArr[i+1]);
      displayArr.splice(i-1, 3, result);
      i=0;
    }
  };
  return displayArr;
};

  function divide(a,b) {
    return a/b;
  }

  function multiply (a,b) {
    return a*b;
  }

  function sum(a,b) {
    return a+b;
  }

  function subs(a,b) {
    return a-b;
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

