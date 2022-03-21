"use strict";

$(document).ready(() => {
	$("#modal").click(() => {
		$("#modal").toggle("slow");
		console.log("Wywołałem się na kliknięcie");
	});
});

$(document).ready(() => {
	$("#modalRemove").click(() => {
		$("#modalRemove").toggle("slow");
		console.log("Wywołałem się na kliknięcie");
	});
});

const test = (n) => {
	console.log(`LOL: ${n}`);
};

const addNewTask = () => {
	const newTask = document.getElementById("new-task").value;

	if (newTask === "") {
		console.error("input is empty");
		$("#modal").toggle("slow");
		return;
	}

	console.log(`Task: ${newTask}`);

	const listOfTasks = document.getElementById("tasks-list");

	const newLI = document.createElement("li");
	newLI.id = "listElem";
	newLI.style.backgroundColor = "white";
	newLI.className = "list-group-item";
	newLI.style.width = "500px";

	function removeTask() {
		listOfTasks.removeChild(newLI);
	}

	const newButton = document.createElement("button");
	newButton.type = "button";
	newButton.className = "btn btn-default";
	newButton.innerHTML = "X";
	newButton.onclick = function () {
		$("#modalRemove").toggle("slow");
		listOfTasks.removeChild(newLI);
	};
	newLI.appendChild(newButton);

	// $(document).ready(function () {
	// 	$(newLI).append(
	// 		$(document.createElement("rmButton")).prop({
	// 			type: "button",
	// 			innerHTML: "Press me",
	// 			class: "btn-styled",
	// 			onclick: function () {
	// 				console.log("Hello");
	// 				$("#modalRemove").toggle("slow");
	// 			},
	// 		})
	// 	);
	// });

	// $(newLI).append(
	// 	$(document.createElement("rmButton")).prop({
	// 		type: "button",
	// 		innerHTML: "X",
	// 		class: "btn btn-default",
	// 		onclick: function () {
	// 			console.log("Hello");
	// 			$("#modalRemove").toggle("slow");
	// 		},
	// 	})
	// );

	const newP_Task = document.createElement("div");
	newP_Task.innerHTML = ` ${newTask}`;
	newP_Task.style.display = "inline";

	newLI.onclick = function () {
		taskClicked(newLI);
	};
	newLI.appendChild(newP_Task);

	listOfTasks.append(newLI);
};

const taskClicked = (element) => {
	const task = element.children[1];
	task.style.display = "inline";

	console.log(`Kupa: ${element.innerHTML}`);

	if (element.style.backgroundColor === "grey") {
		element.style.backgroundColor = "white";
		task.style.textDecoration = "none";

		if (element.hasChildNodes()) {
			element.removeChild(element.children[2]);
		}
	} else {
		element.style.backgroundColor = "grey";
		task.style.textDecoration = "line-through";

		const newP_Date = document.createElement("p");
		const date = new Date();

		console.log(date.toLocaleDateString());

		// check if minutes and hours < 10

		newP_Date.innerHTML = ` [${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}]`;
		newP_Date.style.display = "inline";
		// newP_Date.onclick = function () {
		// 	taskClicked(element);
		// };

		element.appendChild(newP_Date);
	}
};

const removeTask = (element) => {};
