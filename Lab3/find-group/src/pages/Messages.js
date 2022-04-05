import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchStudent.js';

const Messages = () => {
	const location = useLocation();
	const { receiver } = location.state;
	console.log(receiver);

	const handleSendMessage = () => {
		window.confirm("You've sent a message!");
		console.log('message sent');
	};

	return (
		<div>
			<label>Message will be send to {receiver}</label>
			<br></br>
			<textarea
				rows={10}
				cols={50}
				placeholder='write here your message'
			></textarea>
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

export default Messages;
