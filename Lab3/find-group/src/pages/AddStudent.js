import React from "react";
import { useState } from "react";
import "./../styles/Notice.css";
import "./../styles/AddStudent.css";
import "./SearchStudent.js";

const AddStudent = (props) => {
	const { studentsList, setStudentsList } = props;

	const [newName, setNewName] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [newDescription, setNewDescription] = useState("");
	const [newTags, setNewTags] = useState("");
	const [newClasses, setNewClasses] = useState("");

	const handleNewName = (event) => {
		setNewName(event.target.value);
	};

	const handleNewEmail = (event) => {
		setNewEmail(event.target.value);
	};

	const handleNewDescription = (event) => {
		setNewDescription(event.target.value);
	};

	const handleNewTags = (event) => {
		setNewTags(event.target.value);
	};

	const handleNewClasses = (event) => {
		setNewClasses(event.target.value);
	};

	const handleAddNewItem = () => {
		setStudentsList(
			studentsList.concat([
				{
					person: { name: newName, email: newEmail },
					description: newDescription,
					tags: newTags,
					class: newClasses,
				},
			])
		);

		setNewName("");
		setNewEmail("");
		setNewDescription("");
		setNewTags("");
		setNewClasses("");
	};

	const studentsListHTML = studentsList.map((it, i) => {
		return (
			<div key={i} class="grid-item">
				<p className="notice-name">{it.person.name}</p>

				<label className="notice-description-label">Description</label>
				<p className="notice-description">{it.description}</p>

				<label className="notice-tags-label">Tags</label>
				<p className="notice-tags">{it.tags}</p>

				<label className="notice-class-label">Class</label>
				<p className="notice-class">{it.class}</p>
			</div>
		);
	});
	return (
		<div className="form">
			<form className="studentForm">
				<input
					type="text"
					className="longInput"
					value={newName}
					onChange={handleNewName}
					placeholder="full name"
				/>
				<input
					type="text"
					value={newEmail}
					onChange={handleNewEmail}
					placeholder="email"
				/>
				<input
					type="text"
					value={newDescription}
					onChange={handleNewDescription}
					placeholder="description"
				/>
				<input
					type="text"
					value={newTags}
					onChange={handleNewTags}
					placeholder="tags"
				/>
				<input
					type="text"
					value={newClasses}
					onChange={handleNewClasses}
					placeholder="classes"
				/>
				<input type="button" value="Add new item" onClick={handleAddNewItem} />
				<div class="grid-container">{studentsListHTML}</div>
			</form>
		</div>
	);
};

export default AddStudent;
