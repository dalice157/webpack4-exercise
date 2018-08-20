import fullname from './fullname.js';
import '../css/style.css';

const person = fullname('Json', 'Wang');

// console.log(person);
var x = document.createElement('div');
x.innerHTML = person;
x.className = "nameTag";

document.body.appendChild(x);