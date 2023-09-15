const text_field = document.getElementById('text_field');

const button_1 = document.getElementById('button_1');
const button_2 = document.getElementById('button_2');
const button_3 = document.getElementById('button_3');
const button_add = document.getElementById('button_add');
const button_4 = document.getElementById('button_4');
const button_5 = document.getElementById('button_5');
const button_6 = document.getElementById('button_6');
const button_rest = document.getElementById('button_rest');
const button_7 = document.getElementById('button_7');
const button_8 = document.getElementById('button_8');
const button_9 = document.getElementById('button_9');
const button_multiply = document.getElementById('button_multiply');
const button_delete = document.getElementById('button_delete');
const button_0 = document.getElementById('button_0');
const button_equal = document.getElementById('button_equal');
const button_divide = document.getElementById('button_divide');

button_1.addEventListener('click', function() { addNumber('1') });
button_2.addEventListener('click', function() { addNumber('2') });
button_3.addEventListener('click', function() { addNumber('3') });
button_add.addEventListener('click', function() { addNumber('+') });
button_4.addEventListener('click', function() { addNumber('4') });
button_5.addEventListener('click', function() { addNumber('5') });
button_6.addEventListener('click', function() { addNumber('6') });
button_rest.addEventListener('click', function() { addNumber('-') });
button_7.addEventListener('click', function() { addNumber('7') });
button_8.addEventListener('click', function() { addNumber('8') });
button_9.addEventListener('click', function() { addNumber('9') });
button_multiply.addEventListener('click', function() { addNumber('*') });
button_delete.addEventListener('click', function() { del() });
button_0.addEventListener('click', function() { addNumber('0') });
button_equal.addEventListener('click', function() { equal() });
button_divide.addEventListener('click', function() { addNumber('/') });

function addNumber(number) {

  if (text_field.value === '') {
    text_field.value = number
    return
  }

  const lastCharacter =  text_field.value[ text_field.value.length - 1];
  if (
    number === '+'  && lastCharacter === '+' ||
    number === '-'  && lastCharacter === '-' ||
    number === '*'  && lastCharacter === '*' ||
    number === '/'  && lastCharacter === '/') {
    return
  }

  text_field.value = text_field.value + number
}

function del() {
  text_field.value = ''
}

function equal() {

  try {
    text_field.value = eval(text_field.value);
  } catch (error) {
    console.log("Invalid expression")
  }
}

function isNumber(str) {
  if (!isNaN(parseFloat(str))) {
    return true
  }
  return false
}