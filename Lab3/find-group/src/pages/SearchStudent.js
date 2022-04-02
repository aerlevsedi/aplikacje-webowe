import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Notice.css";
import "./../styles/SearchStudent.css";

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

	const navigate = useNavigate();

	const handleClick = (e) => {
		console.log("Klikniete");
		navigate("/message");
	};

	const studentsListHTML = studentsList
		.filter((it) => it.description.includes(descriptionQuery))
		.filter((it) => it.tags.includes(tagsQuery))
		.filter((it) => it.class.includes(classQuery))
		.map((it, i) => {
			return (
				<div key={i} class="grid-item" onClick={handleClick}>
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
			<div class="grid-container">{studentsListHTML}</div>
		</div>
	);
};

export default SearchStudent;
