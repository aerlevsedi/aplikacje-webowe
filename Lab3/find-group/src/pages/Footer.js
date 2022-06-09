import LoggedInUserContext from '../contexts/LoggedInUserContext';
import React, { useContext } from 'react';
import { ReducerContext } from '../contexts/ReducerContext';

import { auth } from '../firebase/init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Footer = () => {
	// const [user] = useContext(LoggedInUserContext);
	const [userInny] = useAuthState(auth);
	const [state] = useContext(ReducerContext);
	// console.log("local storage: ", window.localStorage.getItem("user"));

	let userName = '';

	if (userInny) userName = userInny.displayName;

	return (
		<footer>
			{' '}
			Logged user is: {userName} and students in bucket is: {state.students}{' '}
		</footer>
	);
};

export default Footer;
