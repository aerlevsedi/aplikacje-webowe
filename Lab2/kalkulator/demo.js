'use strict';

$(document).ready(() => {
	$('#modal').click(() => {
		$('#modal').toggle('slow');
		console.log('Wywołałem się na kliknięcie');
	});
});

// const func = function () {}
// function func () {}
const adder = () => {
	// const x = {'a': 1, 'b': 2};
	// let y = 5;
	// maleLiteryICzasamIDuze
	const numberA = Number(document.getElementById('number-a').value);
	let numberB = document.querySelector('#number-b').value;

	if (numberB === '') {
		console.error('input B is empty');
		$('#modal').toggle('slow');
	}
	numberB = Number(numberB);
	// debugger;
	// console.log(`Zmienna B: ${numberB}`);
	// console.log({numberB}, {numberA});

	if (isNaN(numberA) || isNaN(numberB)) {
		console.warn('Either A or B is NaN');
		return;
	}

	const sum = numberA + numberB;
	// console.log("Liczba A: " + numberA);
	console.log(`${numberA} + ${numberB} = ${sum}`);

	const listOfOperations = document.getElementById('operations-list');

	const newP = document.createElement('p'); //<p></p>
	newP.innerHTML = `${numberA} + ${numberB} = ${sum}`;
	listOfOperations.append(newP);
};
