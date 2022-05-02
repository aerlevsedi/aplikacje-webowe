import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/Search.css';

const Register = (props) => {
	const { studentsList } = props;

	return (
		<div>
			Hola Hola <br></br>
			<NavLink to='/signin'>Sign In</NavLink>
		</div>
	);
};

export default Register;
