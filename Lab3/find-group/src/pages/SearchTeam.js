import React from "react";
import "./../styles/Notice.css";
import "./../styles/SearchTeam.css";

class SearchTeam extends React.Component {
	constructor(props) {
		super(props);
		this.state = { descriptionQuery: "", tagsQuery: "", classQuery: "" };
	}

	handleSearchByDescription = (event) => {
		this.setState({
			descriptionQuery: event.target.value,
		});
	};

	handleSearchByTags = (event) => {
		this.setState({
			tagsQuery: event.target.value,
		});
	};

	handleSearchByClass = (event) => {
		this.setState({
			classQuery: event.target.value,
		});
	};

	render() {
		const teamsListHTML = this.props.teamsList
			.filter((it) => it.description.includes(this.state.descriptionQuery))
			.filter((it) => it.tags.includes(this.state.tagsQuery))
			.map((it, i) => {
				return (
					<div key={i} class="grid-item">
						<p class="notice-name">{it.name}</p>
						<div>
							Team members:
							<p>{it.membersList.member1.name}</p>
							<p>{it.membersList.member2.name}</p>
							<p>{it.membersList.member3.name}</p>
							<p>{it.membersList.member4.name}</p>
							<p>{it.membersList.member5.name}</p>
						</div>
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
					value={this.state.descriptionQuery}
					onChange={this.handleSearchByDescription}
				/>
				<label>Search by description</label>
				<br></br>
				<input
					type="text"
					value={this.state.tagsQuery}
					onChange={this.handleSearchByTags}
				/>
				<label>Search by tags</label>
				<br></br>
				<input
					type="text"
					value={this.state.classQuery}
					onChange={this.handleSearchByClass}
				/>
				<label>Search by class</label>
				<div class="grid-container">{teamsListHTML}</div>
			</div>
		);
	}
}

export default SearchTeam;
