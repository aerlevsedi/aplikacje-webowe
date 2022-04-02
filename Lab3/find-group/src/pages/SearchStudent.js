import React from "react";
import { useState } from "react";
import "./../styles/Notice.css";

const SearchStudent = (props) => {
	const { studentsList, setStudentsList } = props;

	const [descriptionQuery, setDescriptionQuery] = useState("");
	const [tagsQuery, setTagsQuery] = useState("");
	const [classQuery, setClassQuery] = useState("");

	const handleSearchByDescription = (event) => {
		setDescriptionQuery(event.target.value);
	};

	const handleSearchByTags = (event) => {
		setTagsQuery(event.target.value);
	};

	const handleSearchByClass = (event) => {
		setClassQuery(event.target.value);
	};

	const studentsListHTML = studentsList
		.filter((it) => it.description.includes(descriptionQuery))
		.filter((it) => it.tags.includes(tagsQuery))
		.filter((it) => it.class.includes(classQuery))
		.map((it, i) => {
			return (
				<div key={i} class="notice">
					<p class="notice-name">{it.person.name}</p>
					<p class="notice-description">Description: {it.description}</p>
					<p>Tags: {it.tags}</p>
					<p>Class: {it.class}</p>
				</div>
			);
		});

	return (
		<div>
			<input
				type="text"
				value={descriptionQuery}
				onChange={handleSearchByDescription}
			/>
			<label> Search by description</label>
			<br></br>
			<input type="text" value={tagsQuery} onChange={handleSearchByTags} />
			<label> Search by tags</label>
			<br></br>
			<input type="text" value={classQuery} onChange={handleSearchByClass} />
			<label> Search by class</label>
			{studentsListHTML}
		</div>
	);
};

export default SearchStudent;
