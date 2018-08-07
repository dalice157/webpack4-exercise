import fullname from './fullname';

const person = fullname('Json', 'Wang');

// console.log(person);
var x = document.createElement('div');
x.innerHTML = person;
x.className = "nameTag";

document.body.appendChild(x);