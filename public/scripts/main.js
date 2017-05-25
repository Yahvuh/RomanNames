'use strict';

let praenomenEl = document.getElementById('praenomen');
let nomenEl = document.getElementById('nomen');
let cognomenEl = document.getElementById('cognomen');
//let agnomenEl = document.getElementById('agnomen');

function generate() {
  let praenomen = names.praenomen[Math.floor(Math.random() * (names.praenomen.length))];
  let nomen = names.nomen[Math.floor(Math.random() * (names.nomen.length))];
  let cognomen = names.cognomen[Math.floor(Math.random() * (names.cognomen.length))];
  
  praenomenEl.innerHTML = praenomen;
  nomenEl.innerHTML = nomen;
  cognomenEl.innerHTML = cognomen;
}
