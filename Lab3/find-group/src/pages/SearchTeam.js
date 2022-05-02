import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Search.css";

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
					<NavLink
						to="/message"
						style={{ textDecoration: "none" }}
						state={{ receiver: it.membersList.member1.name }}
						exact
					>
						<div key={i} class="grid-item-team">
							<p class="notice-name">{it.name}</p>

							<label className="notice-label">Description</label>
							<p className="notice-content">{it.description}</p>

							<label className="notice-label">Tags</label>
							<p className="notice-content">{it.tags}</p>

							<label className="notice-label">Class</label>
							<p className="notice-content">{it.class}</p>

							<div>
								Team members:
								<p>{it.membersList.member1.name}</p>
								<p>{it.membersList.member2.name}</p>
								<p>{it.membersList.member3.name}</p>
								<p>{it.membersList.member4.name}</p>
								<p>{it.membersList.member5.name}</p>
							</div>
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
							value={this.state.descriptionQuery}
							onChange={this.handleSearchByDescription}
						/>
					</div>
					<div className="search-input">
						<label>Search by tags</label>
						<br></br>
						<input
							type="text"
							value={this.state.tagsQuery}
							onChange={this.handleSearchByTags}
						/>
					</div>
					<div className="search-input">
						<label>Search by class</label>
						<br></br>
						<input
							type="text"
							value={this.state.classQuery}
							onChange={this.handleSearchByClass}
						/>
					</div>
				</div>
				<div class="grid-container">{teamsListHTML}</div>
			</div>
		);
	}
}

export default SearchTeam;
