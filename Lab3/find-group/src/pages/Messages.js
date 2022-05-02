import React from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import "./SearchStudent.js";
import "../styles/Messages.css";

const Messages = () => {
	const location = useLocation();
	const { receiver } = location.state;
	console.log(receiver);

	const inputMessageRef = useRef();

	const handleSendMessage = () => {
		window.confirm("You've sent a message!");
		inputMessageRef.current.value = "";
	};

	return (
		<div>
			<label>Message will be send to {receiver}</label>
			<br></br>
			<input
				className="message-input"
				ref={inputMessageRef}
				autoFocus
				placeholder="write here your message"
			></input>
			<br></br>
			<input
				type="button"
				className="longButton"
				value="Send"
				onClick={handleSendMessage}
			></input>
		</div>
	);
};

export default Messages;
