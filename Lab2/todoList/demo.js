'use strict';

$(document).ready(() => {
	$('#modal').click(() => {
		$('#modal').toggle('slow');
		console.log('Wywołałem się na kliknięcie');
	});
});

$(document).ready(() => {
	$('#modalRemove').click(() => {
		$('#modalRemove').toggle('slow');
		console.log('Wywołałem się na kliknięcie');
		return 1;
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

	const newLI = document.createElement('li');
	newLI.id = 'listElem';
	newLI.className = 'list-group-item tasks-list';
	newLI.style.backgroundColor = '#f7cac9';
	newLI.style.textAlign = 'left';
	newLI.style.width = '500px';

	$(newLI).append(
		$(document.createElement('newButton'))
			.prop({
				type: 'button',
				id: 'rmButtonID',
				innerHTML: 'X',
				class: 'btn btn-default buttonRemoveTask',
			})
			.click(function () {
				console.log('Hello');
				$(newLI).remove();
				$('#modalRemove').toggle('slow');
			})
	);

	const newP_Task = document.createElement('div');
	newP_Task.innerHTML = ` ${newTask}`;
	newP_Task.style.display = 'inline';

	newLI.onclick = function () {
		taskClicked(newLI);
	};
	newLI.appendChild(newP_Task);

	listOfTasks.append(newLI);
};

const taskClicked = (element) => {
	const task = element.children[1];
	task.style.display = 'inline';

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

		// check if minutes and hours < 10

		newP_Date.innerHTML = ` [${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}]`;
		newP_Date.style.display = 'inline';
		// newP_Date.onclick = function () {
		// 	taskClicked(element);
		// };

		element.appendChild(newP_Date);
	}
};

const removeTask = (element) => {};
