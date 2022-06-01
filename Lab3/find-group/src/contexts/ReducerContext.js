import { createContext } from "react";

export const ReducerContext = createContext([{}, () => {}]);

export const initState = {
	students: "",
};

export const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "ADD_STUDENT":
			// state = handleAddStudent(state, payload);
			state = { ...state, students: state.students.concat(payload.user) };
			console.log("state: ", state);
			break;
		case "REMOVE_STUDENT":
			state = {
				...state,
				students: state.students.filter((student) => student !== payload.user),
			};
		default:
			console.error("Incorrect action type: ", type);
	}

	return state;
};
