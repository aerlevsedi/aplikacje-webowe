import React from "react";
import { useReducer } from "react";
import { useLocation } from "react-router-dom";
import { initState, reducer, ReducerContext } from "../contexts/ReducerContext";
import "./SearchStudent.js";
import "../styles/Messages.css";

const AboutUser = () => {
	const location = useLocation();
	const { user, imageSrc } = location.state;
	const [state, dispatcher] = useReducer(reducer, initState);
	const userNameString = user.name + ", ";

	return (
		<div>
			<label>About: {user.name}</label>
			<br></br>
			<label>Email: {user.email}</label>
			<br></br>
			<label>Description: {user.description}</label>
			<br></br>
			<img src={imageSrc} />
		</div>
	);
};

export default AboutUser;
