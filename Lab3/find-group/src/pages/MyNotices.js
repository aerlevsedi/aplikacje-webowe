import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/Search.css';

import { auth } from '../firebase/init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAllStudentNotices } from '../firebase/notice';

const MyNotices = (props) => {
	const [userInny] = useAuthState(auth);

	// if (userInny) {
	// 	(async () => {
	// 		console.log(await getAllStudentNotices(userInny));
	// 	})();
	// }

	const [studentsList, setStudentsList] = useState([]);

	const getStudentNotices = async () => {
		const res = await getAllStudentNotices(userInny);
		setStudentsList(res);
	};

	React.useEffect(() => {
		getStudentNotices();
	}, []);

	console.log(studentsList);

	const studentsListHTML = studentsList.map((it, i) => {
		return (
			<NavLink
				key={i}
				to='/editNotice'
				style={{ textDecoration: 'none' }}
				state={{ receiver: it.name }}
				exact
			>
				<div key={i} className='grid-item'>
					<p className='notice-name'>{it.name}</p>

					<label className='notice-label'>Description</label>
					<p className='notice-content'>{it.description}</p>

					<label className='notice-label'>Tags</label>
					<p className='notice-content'>{it.tags}</p>

					<label className='notice-label'>Class</label>
					<p className='notice-content'>{it.class}</p>
				</div>
			</NavLink>
		);
	});

	return (
		<div>
			<div className='grid-container'>{studentsListHTML}</div>
		</div>
	);
};

export default MyNotices;
