import React from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/Register.css';
import { registerWithEmailAndPassword } from '../firebase/users';

const Register = (props) => {
	const inputNameRef = useRef();
	const inputEmailRef = useRef();
	const inputLoginRef = useRef();
	const inputPasswordRef = useRef();

	const handleSubmit = () => {
		console.log('Rejestracja');
	};

	return (
		<div className='registerWindow center'>
			{/* <form action="/register" method="POST" id="dane"> */}
			<div>
				<h1>Fill in the registration sheet</h1>
				<p>
					<label className='leftLabel'>First and last name:</label>
					<input ref={inputNameRef} type='text' maxlength='30' required />
				</p>

				<p>
					<label className='leftLabel'>e-mail:</label>
					<input ref={inputEmailRef} type='text' maxlength='30' required />
				</p>
				<p>
					<label className='leftLabel'>Login:</label>
					<input ref={inputLoginRef} type='text' maxlength='30' required />
				</p>
				<p>
					<label className='leftLabel'>Password:</label>
					<input ref={inputPasswordRef} type='text' maxlength='30' required />
				</p>
			</div>
			<p>
				<button
					onClick={() =>
						registerWithEmailAndPassword(
							inputLoginRef.current.value,
							inputEmailRef.current.value,
							inputPasswordRef.current.value
						)
					}
				>
					Submit
				</button>
			</p>

			<p>Already have an account?</p>
			<NavLink to='/signin'>Sign In</NavLink>
		</div>
	);
};

export default Register;
