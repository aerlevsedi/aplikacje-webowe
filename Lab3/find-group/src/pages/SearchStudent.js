import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Search.css";

const SearchStudent = (props) => {
	const { studentsList } = props;

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
				<NavLink
					to="/message"
					style={{ textDecoration: "none" }}
					state={{ receiver: it.person.name }}
					exact
				>
					<div key={i} className="grid-item">
						<p className="notice-name">{it.person.name}</p>

						<label className="notice-label">Description</label>
						<p className="notice-content">{it.description}</p>

						<label className="notice-label">Tags</label>
						<p className="notice-content">{it.tags}</p>

						<label className="notice-label">Class</label>
						<p className="notice-content">{it.class}</p>
					</div>
				</NavLink>
			);
		});

	return (
		<div>
			<div className="search-inputs">
				<div className="search-input">
					<label>Search by description</label>
					<br></br>
					<input
						type="text"
						value={descriptionQuery}
						onChange={handleSearchByDescription}
					/>
				</div>
				<div className="search-input">
					<label>Search by tags</label>
					<br></br>
					<input type="text" value={tagsQuery} onChange={handleSearchByTags} />
				</div>
				<div className="search-input">
					<label>Search by class</label>
					<br></br>
					<input
						type="text"
						value={classQuery}
						onChange={handleSearchByClass}
					/>
				</div>
			</div>
			<div class="grid-container">{studentsListHTML}</div>
		</div>
	);
};

export default SearchStudent;
