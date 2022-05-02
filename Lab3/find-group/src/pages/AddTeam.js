import React from "react";
import { useState } from "react";
import "./../styles/Search.css";

const AddTeam = (props) => {
	const { teamsList, setTeamsList } = props;

	const [newName, setNewName] = useState("");
	const [newMember1Name, setNewMember1Name] = useState("");
	const [newMember1Email, setNewMember1Email] = useState("");
	const [newMember2Name, setNewMember2Name] = useState("");
	const [newMember2Email, setNewMember2Email] = useState("");
	const [newMember3Name, setNewMember3Name] = useState("");
	const [newMember3Email, setNewMember3Email] = useState("");
	const [newMember4Name, setNewMember4Name] = useState("");
	const [newMember4Email, setNewMember4Email] = useState("");
	const [newMember5Name, setNewMember5Name] = useState("");
	const [newMember5Email, setNewMember5Email] = useState("");
	const [newDescription, setNewDescription] = useState("");
	const [newTags, setNewTags] = useState("");
	const [newClasses, setNewClasses] = useState("");

	const handleNewName = (event) => {
		setNewName(event.target.value);
	};

	const handleNewMember1Name = (event) => {
		setNewMember1Name(event.target.value);
	};

	const handleNewMember1Email = (event) => {
		setNewMember1Email(event.target.value);
	};

	const handleNewMember2Name = (event) => {
		setNewMember2Name(event.target.value);
	};

	const handleNewMember2Email = (event) => {
		setNewMember2Email(event.target.value);
	};

	const handleNewMember3Name = (event) => {
		setNewMember3Name(event.target.value);
	};

	const handleNewMember3Email = (event) => {
		setNewMember3Email(event.target.value);
	};

	const handleNewMember4Name = (event) => {
		setNewMember4Name(event.target.value);
	};

	const handleNewMember4Email = (event) => {
		setNewMember4Email(event.target.value);
	};

	const handleNewMember5Name = (event) => {
		setNewMember5Name(event.target.value);
	};

	const handleNewMember5Email = (event) => {
		setNewMember5Email(event.target.value);
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
		setTeamsList(
			teamsList.concat([
				{
					name: newName,
					membersList: {
						member1: { name: newMember1Name, email: newMember1Email },
						member2: { name: newMember2Name, email: newMember2Email },
						member3: { name: newMember3Name, email: newMember3Email },
						member4: { name: newMember4Name, email: newMember4Email },
						member5: { name: newMember5Name, email: newMember5Email },
					},
					description: newDescription,
					tags: newTags,
					class: newClasses,
				},
			])
		);
		setNewName("");
		setNewMember1Name("");
		setNewMember1Email("");
		setNewMember2Name("");
		setNewMember2Email("");
		setNewMember3Name("");
		setNewMember3Email("");
		setNewMember4Name("");
		setNewMember4Email("");
		setNewMember5Name("");
		setNewMember5Email("");
		setNewDescription("");
		setNewTags("");
		setNewClasses("");
	};

	return (
		<div className="form">
			<form className="teamForm">
				<label>Basic information</label>
				<br></br>
				<input
					type="text"
					value={newName}
					required
					className="longInput"
					onChange={handleNewName}
					placeholder="team name"
				/>
				<input
					type="text"
					value={newDescription}
					required
					className="longInput"
					onChange={handleNewDescription}
					placeholder="description"
				/>
				<br></br>
				<input
					type="text"
					value={newTags}
					required
					className="longInput"
					onChange={handleNewTags}
					placeholder="tags"
				/>
				<input
					type="text"
					value={newClasses}
					required
					className="longInput"
					onChange={handleNewClasses}
					placeholder="classes"
				/>
				<br></br>
				<label>Team members</label>
				<br></br>
				<input
					type="text"
					value={newMember1Name}
					required
					className="longInput"
					onChange={handleNewMember1Name}
					placeholder="member1 name"
				/>
				<input
					type="text"
					value={newMember1Email}
					required
					className="longInput"
					onChange={handleNewMember1Email}
					placeholder="member1 email"
				/>
				<br></br>
				<input
					type="text"
					value={newMember2Name}
					className="longInput"
					onChange={handleNewMember2Name}
					placeholder="member2 name"
				/>
				<input
					type="text"
					value={newMember2Email}
					className="longInput"
					onChange={handleNewMember2Email}
					placeholder="member2 email"
				/>
				<br></br>
				<input
					type="text"
					value={newMember3Name}
					className="longInput"
					onChange={handleNewMember3Name}
					placeholder="member3 name"
				/>
				<input
					type="text"
					value={newMember3Email}
					className="longInput"
					onChange={handleNewMember3Email}
					placeholder="member3 email"
				/>
				<br></br>
				<input
					type="text"
					value={newMember4Name}
					className="longInput"
					onChange={handleNewMember4Name}
					placeholder="member4 name"
				/>
				<input
					type="text"
					value={newMember4Email}
					className="longInput"
					onChange={handleNewMember4Email}
					placeholder="member4 email"
				/>
				<br></br>
				<input
					type="text"
					value={newMember5Name}
					className="longInput"
					onChange={handleNewMember5Name}
					placeholder="member5 name"
				/>
				<input
					type="text"
					value={newMember5Email}
					className="longInput"
					onChange={handleNewMember5Email}
					placeholder="member5 email"
				/>
				<br></br>
				<input
					type="button"
					className="longButton"
					value="Add new team notice"
					onClick={handleAddNewItem}
				/>
			</form>
		</div>
	);
};

export default AddTeam;
