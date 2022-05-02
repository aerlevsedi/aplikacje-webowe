import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/Search.css';

const SignIn = (props) => {
	const { studentsList } = props;

	return (
		<div>
			Hola
			<br></br>
			<NavLink to='/register'>Register</NavLink>
		</div>
	);
};

export default SignIn;
