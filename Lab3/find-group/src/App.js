import './App.css';
import React, { useEffect, useState, useReducer } from 'react';
import AddStudent from './pages/AddStudent';
import AddTeam from './pages/AddTeam';
import SearchTeam from './pages/SearchTeam';
import SearchStudent from './pages/SearchStudent';
import Messages from './pages/Messages';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import Register from './pages/Register';
import AllUsers from './pages/AllUsers';
import AboutUser from './pages/AboutUser';
import Footer from './pages/Footer';
import Login from './pages/Login';
import MyNotices from './pages/MyNotices';
import LoggedInUserContext from './contexts/LoggedInUserContext';
import {
	BrowserRouter,
	NavLink,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { initState, reducer, ReducerContext } from './contexts/ReducerContext';
import axios from 'axios';

import { auth } from './firebase/init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { logout } from './firebase/users';
import EditNotice from './pages/EditNotice';

function App() {
	const [studentsList, setStudentsList] = useState([]);
	const [teamsList, setTeamsList] = useState([]);
	const [usersList, setUsersList] = useState([]);
	// const [images, setImages] = useState([]);
	// const [base64, setBase64] = useState([]);
	const [state, dispatch] = useReducer(reducer, initState);

	const [userInny] = useAuthState(auth);

	useEffect(() => {
		axios.get('http://localhost:3000/data/students.json').then((res) => {
			const students = res.data;
			setStudentsList(students);
		});
	}, []);

	useEffect(() => {
		axios.get('http://localhost:3000/data/teams.json').then((res) => {
			const teams = res.data;
			setTeamsList(teams);
		});
	}, []);

	useEffect(() => {
		axios.get('http://localhost:3000/data/users.json').then((res) => {
			const users = res.data;
			setUsersList(users);
		});
	}, []);

	// useEffect(() => {
	// 	console.log("image");
	// 	axios
	// 		.get("https://picsum.photos/70/100")
	// 		.then((res) => {
	// 			console.log(res);
	// 			setImages(res.data.message);
	// 		})
	// 		.catch((err) => console.log(err));
	// });

	return (
		<>
			<header>
				<h2>Find your new teammates!</h2>
			</header>
			<ReducerContext.Provider value={[state, dispatch]}>
				<LoggedInUserContext.Provider value={useState('')}>
					<main>
						<BrowserRouter>
							<nav>
								{(userInny && (
									<button onClick={logout}>
										Log Out {userInny.displayName}{' '}
									</button>
								)) || <NavLink to='/login'>Login</NavLink>}
								{/* <NavLink to='/signin'>Sign In</NavLink>
								<NavLink to='/signout'>Sign Out</NavLink> */}
								<NavLink to='/myNotices'>My notices</NavLink>
								<NavLink to='/searchStudent'>Search for students</NavLink>
								<NavLink to='/addStudent'>Add your notice</NavLink>
								<NavLink to='/searchTeam'>Search for teams</NavLink>
								<NavLink to='/addTeam'>Add your team notice</NavLink>
								<NavLink to='/allusers'>Show all users</NavLink>
							</nav>

							<Routes>
								<Route
									path='/'
									element={<Navigate replace to='/searchStudent' />}
								/>

								<Route path='/login' element={<Login />} />

								<Route path='/myNotices' element={<MyNotices />} />

								<Route path='/signin' element={<SignIn />} />

								<Route path='/signout' element={<SignOut />} />

								<Route path='/register' element={<Register />} />

								<Route
									path='/searchStudent'
									element={<SearchStudent studentsList={studentsList} />}
								/>

								<Route
									path='/addStudent'
									element={
										<AddStudent
											studentsList={studentsList}
											setStudentsList={setStudentsList}
										/>
									}
								/>

								<Route
									path='/searchTeam'
									element={<SearchTeam teamsList={teamsList} />}
								/>

								<Route
									path='/addTeam'
									element={
										<AddTeam
											teamsList={teamsList}
											setTeamsList={setTeamsList}
										/>
									}
								/>

								<Route
									path='/allusers'
									element={<AllUsers usersList={usersList} />}
								/>

								<Route
									path='/aboutuser'
									element={<AboutUser usersList={usersList} />}
								/>

								<Route path='/message' element={<Messages />} />

								<Route path='/editNotice' element={<EditNotice />} />
							</Routes>
						</BrowserRouter>
					</main>

					<Footer />
				</LoggedInUserContext.Provider>
			</ReducerContext.Provider>
		</>
	);
}

export default App;
