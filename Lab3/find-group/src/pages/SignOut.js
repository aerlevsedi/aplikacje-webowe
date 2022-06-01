import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./../styles/SignIn.css";
import LoggedInUserContext from "../contexts/LoggedInUserContext";
import useLocalStorage from "../useLocalStorage/useLocalStorage";

const SignOut = () => {
	const [user, setUser] = useContext(LoggedInUserContext);
	const [userLS, setUserLS] = useLocalStorage("user", "John Kowalsky");

	const handleSignOut = () => {
		setUser("");
		setUserLS("");
	};

	return (
		<div className="signInWindow center">
			<h1>Sign out</h1>
			<p>
				<button onClick={handleSignOut}>Sign out</button>
			</p>
			<p>Want to sign in again?</p>
			<NavLink to="/signin">Sign in</NavLink>
		</div>
	);
};

export default SignOut;
