import React, { useEffect, useState } from "react";
import { useReducer, useRef } from "react";
import { NavLink } from "react-router-dom";
import { initState, reducer, ReducerContext } from "../contexts/ReducerContext";
import "./../styles/AllUsers.css";
import axios from "axios";

const AllUsers = (props) => {
	const { usersList } = props;
	const [state, dispatch] = useReducer(reducer, initState);
	const imageUrl = "https://picsum.photos/100/50";

	// const imageRef = useRef();

	// const newImage = async () => {
	// 	const res = await fetch(imageUrl);
	// 	const imageBlob = await res.blob();
	// 	const imageObjectURL = URL.createObjectURL(imageBlob);
	// 	imageRef.current.value = imageObjectURL;
	// };

	const [img, setImg] = useState();

	const fetchImage = async () => {
		const res = await fetch(imageUrl);
		const imageBlob = await res.blob();
		const imageObjectURL = URL.createObjectURL(imageBlob);
		setImg(imageObjectURL);
	};

	useEffect(() => {
		fetchImage();
	}, []);

	const usersListHTML = usersList.map((it, i) => {
		// newImage();
		return (
			<ReducerContext.Provider value={[state, dispatch]}>
				<div key={i} className="grid-item-user">
					<NavLink
						key={i}
						to="/aboutuser"
						style={{ textDecoration: "none" }}
						state={{ user: it, imageSrc: img }}
						exact="true"
					>
						<p className="notice-name">{it.name}</p>
					</NavLink>
					{/* <img src={imageRef.current.value} alt="icons" /> */}
					<img src={img} alt="icons" />
					<input
						type="button"
						className="shortButton"
						value="Follow"
						onClick={() => {
							window.confirm("Followed!");
							dispatch({
								type: "ADD_STUDENT",
								payload: { user: it.name },
							});
						}}
					></input>
				</div>
			</ReducerContext.Provider>
		);
	});

	return (
		<div>
			<div className="grid-container">{usersListHTML}</div>
		</div>
	);
};

export default AllUsers;
