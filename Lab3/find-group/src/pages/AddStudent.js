import React from 'react';
import { useState } from 'react';
import './../styles/Search.css';
import './../styles/AddStudent.css';
import './SearchStudent.js';

const AddStudent = (props) => {
	const { studentsList, setStudentsList } = props;

	const [newName, setNewName] = useState('');
	const [newEmail, setNewEmail] = useState('');
	const [newDescription, setNewDescription] = useState('');
	const [newTags, setNewTags] = useState('');
	const [newClasses, setNewClasses] = useState('');

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

		setNewName('');
		setNewEmail('');
		setNewDescription('');
		setNewTags('');
		setNewClasses('');
	};

	const studentsListHTML = studentsList.map((it, i) => {
		return (
			<div key={i} class='grid-item'>
				<p className='notice-name'>{it.person.name}</p>

				<label className='notice-label'>Description</label>
				<p className='notice-content'>{it.description}</p>

				<label className='notice-label'>Tags</label>
				<p className='notice-content'>{it.tags}</p>

				<label className='notice-label'>Class</label>
				<p className='notice-content'>{it.class}</p>
			</div>
		);
	});
	return (
		<div className='form'>
			<form className='studentForm'>
				<input
					type='text'
					className='longInput'
					required
					value={newName}
					onChange={handleNewName}
					placeholder='full name'
				/>
				<input
					type='email'
					className='longInput'
					required
					value={newEmail}
					onChange={handleNewEmail}
					placeholder='email'
				/>
				<input //textarea?
					type='text'
					rows={5}
					cols={50}
					className='longInput'
					required
					value={newDescription}
					onChange={handleNewDescription}
					placeholder='description'
				/>
				<input
					type='text'
					className='longInput'
					required
					value={newTags}
					onChange={handleNewTags}
					placeholder='tags'
				/>
				<input
					type='text'
					className='longInput'
					required
					value={newClasses}
					onChange={handleNewClasses}
					placeholder='classes'
				/>
				<input
					type='button'
					className='longButton'
					value='Add new item'
					onClick={handleAddNewItem}
				/>
				{/* <div class="grid-container">{studentsListHTML}</div> */}
			</form>
		</div>
	);
};

export default AddStudent;
