import React from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchStudent.js';
import '../styles/Messages.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firestore } from '../firebase/init';
const EditNotice = () => {
	const location = useLocation();
	const { notice } = location.state;
	console.log(notice);

	var db = firestore;

	const inputMessageRef = useRef();

	const handleSendMessage = () => {
		window.confirm('Changes saved!');
		inputMessageRef.current.value = '';
		db.collection('studentNotices')
			.doc(notice.uid)
			.update({ description: 'bar' });
	};

	return (
		<div>
			<label>That's your notice</label>
			<br></br>
			<input
				className='message-input'
				ref={inputMessageRef}
				autoFocus
				placeholder={notice.description}
			></input>
			<br></br>
			<input
				className='message-input'
				ref={inputMessageRef}
				autoFocus
				placeholder={notice.tags}
			></input>
			<br></br>
			<input
				className='message-input'
				ref={inputMessageRef}
				autoFocus
				placeholder={notice.classes}
			></input>
			<br></br>
			<input
				type='button'
				className='longButton'
				value='Send'
				onClick={handleSendMessage}
			></input>
		</div>
	);
};

export default EditNotice;
