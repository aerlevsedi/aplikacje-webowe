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
		return;
	}

	console.log(`Task: ${newTask}`);

	const listOfTasks = document.getElementById('tasks-list');

	const newDIV = document.createElement('li'); //<div></div>
	newDIV.style.backgroundColor = 'white';
	newDIV.className = 'list-group-item';

	const newButton = document.createElement('button');
	newButton.type = 'button';
	newButton.className = 'btn btn-default';
	newButton.innerHTML = 'X';
	newButton.onclick = function () {
		listOfTasks.removeChild(newDIV);
	};
	newDIV.appendChild(newButton);

	const newP_Task = document.createElement('p');
	newP_Task.innerHTML = ` ${newTask}`;
	newP_Task.style.display = 'inline';

	newP_Task.onclick = function () {
		taskClicked(newDIV);
	};
	newDIV.appendChild(newP_Task);

	listOfTasks.append(newDIV);
};

const taskClicked = (element) => {
	const task = element.children[1];
	task.style.display = 'inline';

	console.log(`Kupa: ${element.innerHTML}`);

	if (element.style.backgroundColor === 'grey') {
		element.style.backgroundColor = 'white';
		task.style.textDecoration = 'none';

		if (element.hasChildNodes()) {
			element.removeChild(element.children[2]);
		}
	} else {
		element.style.backgroundColor = 'grey';
		task.style.textDecoration = 'line-through';

		const newP_Date = document.createElement('p');
		const date = new Date();

		console.log(date.toLocaleDateString());

		newP_Date.innerHTML = ` [${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}]`;
		newP_Date.style.display = 'inline';
		newP_Date.onclick = function () {
			taskClicked(element);
		};

		element.appendChild(newP_Date);
	}
};

const removeTask = (element) => {};
