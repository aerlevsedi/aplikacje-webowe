import React from "react";
import { useRef } from "react";
import "./../styles/Search.css";
import "./../styles/AddStudent.css";
import "./SearchStudent.js";

const AddStudent = (props) => {
	const { studentsList, setStudentsList } = props;
	const inputNameRef = useRef();
	const inputEmailRef = useRef();
	const inputDescriptionRef = useRef();
	const inputTagsRef = useRef();
	const inputClassesRef = useRef();

	console.log("rendered");

	const handleNewStudent = () => {
		setStudentsList(
			studentsList.concat([
				{
					person: {
						name: [inputNameRef.current.value],
						email: [inputEmailRef.current.value],
					},
					description: [inputDescriptionRef.current.value],
					tags: [inputTagsRef.current.value],
					class: [inputClassesRef.current.value],
				},
			])
		);
		inputNameRef.current.value = "";
		inputEmailRef.current.value = "";
		inputDescriptionRef.current.value = "";
		inputTagsRef.current.value = "";
		inputClassesRef.current.value = "";
	};

	return (
		<div className="form">
			<form className="studentForm">
				<input
					ref={inputNameRef}
					type="text"
					className="longInput"
					required
					placeholder="full name"
				/>
				<input
					ref={inputEmailRef}
					type="email"
					className="longInput"
					required
					placeholder="email"
				/>
				<input //textarea?
					ref={inputDescriptionRef}
					type="text"
					rows={5}
					cols={50}
					className="longInput"
					required
					placeholder="description"
				/>
				<input
					ref={inputTagsRef}
					type="text"
					className="longInput"
					required
					placeholder="tags"
				/>
				<input
					ref={inputClassesRef}
					type="text"
					className="longInput"
					required
					placeholder="classes"
				/>
				<input
					type="button"
					className="longButton"
					value="Add new notice"
					onClick={handleNewStudent}
				/>
			</form>
		</div>
	);
};

export default AddStudent;
