'use strict';

$(document).ready(() => {
	$('#modal').click(() => {
		$('#modal').toggle('slow');
		console.log('Wywołałem się na kliknięcie');
	});
});

const test = (n) => {
	console.log(`LOL: ${n}`);
};

const addNewTask = () => {
	const newTask = document.getElementById('new-task').value;

	if (newTask === '') {
		console.error('input is empty');
		$('#modal').toggle('slow');
	}

	console.log(`Task: ${newTask}`);

	const listOfTasks = document.getElementById('tasks-list');

	const newDIV = document.createElement('div'); //<div></div>
	newDIV.style.backgroundColor = 'white';
	const newP_Task = document.createElement('p');
	newP_Task.innerHTML = newTask;
	newDIV.appendChild(newP_Task);
	newDIV.onclick = function () {
		taskClicked(newDIV);
	};

	// newDIV.appendChild(newP_Task);
	// newP.innerHTML = `<p id=task1 onclick="checkTask(this)" class=thick-pink-border>${newTask}</p>`;
	listOfTasks.append(newDIV);
	// listOfTasks.append(newP_Task);
};

const taskClicked = (element) => {
	const task = element.children[0];
	task.style.display = 'inline';

	console.log(`Kupa: ${element.innerHTML}`);

	if (element.style.backgroundColor === 'grey') {
		element.style.backgroundColor = 'white';
		task.style.textDecoration = 'none';

		if (element.hasChildNodes()) {
			element.removeChild(element.children[1]);
		}
	} else {
		element.style.backgroundColor = 'grey';
		task.style.textDecoration = 'line-through';

		const newP_Date = document.createElement('p');
		const date = new Date();

		console.log(date.toLocaleDateString());

		newP_Date.innerHTML = ` [${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}]`;
		newP_Date.style.display = 'inline';

		element.appendChild(newP_Date);
	}
};
