import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./../styles/Notice.css";
import "./SearchStudent.js";

const Messages = () => {
	// const [newMessage, setNewMessage] = useState("");

	// const handleNewMessage = (msg) => {
	// 	setNewMessage(msg);
	// };

	const handleSendMessage = (msg) => {
		console.log("message sent");
	};

	return (
		<div>
			<label>Message will be send to: </label>
			<br></br>
			<input type="text" placeholder="write here"></input>
			<input type="button" value="Send" onClick={handleSendMessage}></input>
		</div>
	);
};

export default Messages;
