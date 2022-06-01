import LoggedInUserContext from "../contexts/LoggedInUserContext";
import React, { useContext } from "react";
import { ReducerContext } from "../contexts/ReducerContext";

const Footer = () => {
	const [user] = useContext(LoggedInUserContext);
	const [state] = useContext(ReducerContext);
	// console.log("local storage: ", window.localStorage.getItem("user"));
	return (
		<footer>
			{" "}
			Logged user is: {user} and students in bucket is: {state.students}{" "}
		</footer>
	);
};

export default Footer;
