import React, { useRef } from "react";
import "./../styles/Search.css";

const AddTeam = (props) => {
	const { teamsList, setTeamsList } = props;

	const inputTeamNameRef = useRef();
	const inputMember1NameRef = useRef();
	const inputMember2NameRef = useRef();
	const inputMember3NameRef = useRef();
	const inputMember4NameRef = useRef();
	const inputMember5NameRef = useRef();
	const inputMember1EmailRef = useRef();
	const inputMember2EmailRef = useRef();
	const inputMember3EmailRef = useRef();
	const inputMember4EmailRef = useRef();
	const inputMember5EmailRef = useRef();
	const inputDescriptionRef = useRef();
	const inputTagsRef = useRef();
	const inputClassesRef = useRef();

	const handleAddNewItem = () => {
		setTeamsList(
			teamsList.concat([
				{
					name: inputTeamNameRef.current.value,
					membersList: {
						member1: {
							name: inputMember1NameRef.current.value,
							email: inputMember1EmailRef.current.value,
						},
						member2: {
							name: inputMember2NameRef.current.value,
							email: inputMember2EmailRef.current.value,
						},
						member3: {
							name: inputMember3NameRef.current.value,
							email: inputMember3EmailRef.current.value,
						},
						member4: {
							name: inputMember4NameRef.current.value,
							email: inputMember4EmailRef.current.value,
						},
						member5: {
							name: inputMember5NameRef.current.value,
							email: inputMember5EmailRef.current.value,
						},
					},
					description: inputDescriptionRef.current.value,
					tags: inputTagsRef.current.value,
					class: inputClassesRef.current.value,
				},
			])
		);
		inputTeamNameRef.current.value = "";
		inputMember1NameRef.current.value = "";
		inputMember2NameRef.current.value = "";
		inputMember3NameRef.current.value = "";
		inputMember4NameRef.current.value = "";
		inputMember5NameRef.current.value = "";
		inputMember1EmailRef.current.value = "";
		inputMember2EmailRef.current.value = "";
		inputMember3EmailRef.current.value = "";
		inputMember4EmailRef.current.value = "";
		inputMember5EmailRef.current.value = "";
		inputDescriptionRef.current.value = "";
		inputTagsRef.current.value = "";
		inputClassesRef.current.value = "";
	};

	return (
		<div className="form">
			<form className="teamForm">
				<label>Basic information</label>
				<br></br>
				<input
					ref={inputTeamNameRef}
					type="text"
					required
					className="longInput"
					placeholder="team name"
				/>
				<input
					ref={inputDescriptionRef}
					type="text"
					required
					className="longInput"
					placeholder="description"
				/>
				<br></br>
				<input
					ref={inputTagsRef}
					type="text"
					required
					className="longInput"
					placeholder="tags"
				/>
				<input
					ref={inputClassesRef}
					type="text"
					required
					className="longInput"
					placeholder="classes"
				/>
				<br></br>
				<label>Team members</label>
				<br></br>
				<input
					ref={inputMember1NameRef}
					type="text"
					required
					className="longInput"
					placeholder="member1 name"
				/>
				<input
					ref={inputMember1EmailRef}
					type="text"
					required
					className="longInput"
					placeholder="member1 email"
				/>
				<br></br>
				<input
					ref={inputMember2NameRef}
					type="text"
					className="longInput"
					placeholder="member2 name"
				/>
				<input
					ref={inputMember2EmailRef}
					type="text"
					className="longInput"
					placeholder="member2 email"
				/>
				<br></br>
				<input
					ref={inputMember3NameRef}
					type="text"
					className="longInput"
					placeholder="member3 name"
				/>
				<input
					ref={inputMember3EmailRef}
					type="text"
					className="longInput"
					placeholder="member3 email"
				/>
				<br></br>
				<input
					ref={inputMember4NameRef}
					type="text"
					className="longInput"
					placeholder="member4 name"
				/>
				<input
					ref={inputMember4EmailRef}
					type="text"
					className="longInput"
					placeholder="member4 email"
				/>
				<br></br>
				<input
					ref={inputMember5NameRef}
					type="text"
					className="longInput"
					placeholder="member5 name"
				/>
				<input
					ref={inputMember5EmailRef}
					type="text"
					className="longInput"
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
