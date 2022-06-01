import React from "react";
import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./../styles/SignIn.css";
import LoggedInUserContext from "../contexts/LoggedInUserContext";
import useLocalStorage from "../useLocalStorage/useLocalStorage";

const SignIn = (props) => {
	const [user, setUser] = useContext(LoggedInUserContext);
	const [userLS, setUserLS] = useLocalStorage("user", "John Kovalsky");
	const inputLoginRef = useRef();
	const inputPasswordRef = useRef();

	const handleSubmit = () => {
		setUser(inputLoginRef.current.value);
		setUserLS(inputLoginRef.current.value);

		console.log(inputLoginRef.current.value);

		inputLoginRef.current.value = "";
		inputPasswordRef.current.value = "";
	};

	return (
		<div className="signInWindow center">
			{/* <form action="/login" method="POST" id="data"> */}
			<form>
				<h1>Sign in</h1>
				<p>
					<label className="leftLabel">Login: </label>
					<input
						// id="login"
						ref={inputLoginRef}
						type="text"
						// name="login"
						maxLength="30"
					/>
				</p>
				<p>
					<label className="leftLabel">Password: </label>
					<input
						// id="password"
						ref={inputPasswordRef}
						// type="password"
						type="text"
						// name="password"
						maxLength="30"
					/>
				</p>
			</form>
			<p>
				<button onClick={handleSubmit}>Submit</button>
			</p>
			<p>Don't have an account?</p>
			<NavLink to="/register">Register</NavLink>
		</div>
	);
};

export default SignIn;
