import './App.css';
import React, { useEffect, useState } from 'react';
import AddStudent from './pages/AddStudent';
import AddTeam from './pages/AddTeam';
import SearchTeam from './pages/SearchTeam';
import SearchStudent from './pages/SearchStudent';
import Messages from './pages/Messages';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

import {
	BrowserRouter,
	NavLink,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import axios from 'axios';

function App() {
	const [studentsList, setStudentsList] = useState([]);

	const [teamsList, setTeamsList] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/data/students.json').then((res) => {
			const students = res.data;
			setStudentsList(students);
		});
	}, []);

	useEffect(() => {
		console.log('kupa');
		axios.get('http://localhost:3000/data/teams.json').then((res) => {
			const teams = res.data;
			setTeamsList(teams);
		});
	}, []);

	return (
		<>
			<header>
				<h2>Find your new teammates!</h2>
			</header>
			<main>
				<BrowserRouter>
					<nav>
						<NavLink to='/signin'>Sign In</NavLink>
						<NavLink to='/searchStudent'>Search for students</NavLink>
						<NavLink to='/addStudent'>Add your notice</NavLink>
						<NavLink to='/searchTeam'>Search for teams</NavLink>
						<NavLink to='/addTeam'>Add your team notice</NavLink>
					</nav>

					<Routes>
						<Route
							path='/'
							element={<Navigate replace to='/searchStudent' />}
						/>

						<Route path='/signin' element={<SignIn />} />

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
								<AddTeam teamsList={teamsList} setTeamsList={setTeamsList} />
							}
						/>

						<Route path='/message' element={<Messages />} />
					</Routes>
				</BrowserRouter>
			</main>
			{/* <footer>footer</footer> */}
		</>
	);
	//return <Main toDosList={toDosList} setToDoList={setToDoList}/>
}

// const App = () => {

// }
export default App;
