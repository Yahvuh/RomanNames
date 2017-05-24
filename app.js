'use strict';

let names = require('./names.js');

// let praenomenEl document.getElementById('praenomen');
// let nomenEl document.getElementById('nomen');
// let cognomenEl document.getElementById('cognomen');
// let agnomenEl document.getElementById('agnomen');



function generate() {
	let i = 0;
	while(i < 10) {
		let praenomen = names.praenomen[Math.floor(Math.random() * (names.praenomen.length))];
		let nomen = names.nomen[Math.floor(Math.random() * (names.nomen.length))];
		let cognomen = names.cognomen[Math.floor(Math.random() * (names.cognomen.length))];
		//let agnomen = names.agnomen[Math.floor(Math.random() * (names.agnomen.length))];
		console.log(praenomen, nomen, cognomen);
		i++;
	}


	//console.log(names)
}

generate();
