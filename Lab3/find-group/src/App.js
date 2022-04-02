import "./App.css";
import { useState } from "react";
import AddStudent from "./pages/AddStudent";
import AddTeam from "./pages/AddTeam";
import SearchTeam from "./pages/SearchTeam";
import SearchStudent from "./pages/SearchStudent";
import {
	BrowserRouter,
	NavLink,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

function App() {
	const [studentsList, setStudentsList] = useState([
		{
			person: { name: "Jan Kowalski", email: "jankowalski@gmail.com" },
			description:
				"Szukam miejsca w grupie na projekt z UCiSW i zrobię z tego bardzo długi opis, żeby sprawdzić formatowanie",
			tags: "vhdl, fpga",
			class: "UCISW",
		},
		{
			person: { name: "Rafal Nowak", email: "rafalnowak@gmail.com" },
			description: "Grupa na SO2, wtorki parzyste",
			tags: "C, C++",
			class: "SO2",
		},
		{
			person: { name: "John Travolta", email: "johntravolta@gmail.com" },
			description: "Szukam miejsca na webówkę, wtorek parzysty",
			tags: "react, node, js",
			class: "PIW",
		},
		{
			person: { name: "Alicja Bober", email: "alicjabober@gmail.com" },
			description: "Czwartek TN PO",
			tags: "java, spring",
			class: "PO",
		},
		{
			person: { name: "Jan Brzechwa", email: "janbrzechwa@gmail.com" },
			description: "Szukam pary na peryferyjne",
			tags: "dotnet C#",
			class: "UP",
		},
	]);

	const [teamsList, setTeamsList] = useState([
		{
			name: "Best Team",
			membersList: {
				member1: { name: "Jan Kowalski", email: "jankowalski@gmail.com" },
				member2: { name: "Radek Konieczny", email: "radekkonieczny@gmail.com" },
				member3: { name: "Ada Lovelace", email: "adalovelace@gmail.com" },
				member4: { name: "", email: "" },
				member5: { name: "", email: "" },
			},
			description: "Jakiś opis",
			tags: "Linux, C, assembly",
			class: "OiAK",
		},
		{
			name: "Pierwsza",
			membersList: {
				member1: {
					name: "Hieronim Berbelek",
					email: "hieronimberbelek@gmail.com",
				},
				member2: {
					name: "Władysław Łokietek",
					email: "wladyslawlokietek@gmail.com",
				},
				member3: { name: "", email: "" },
				member4: { name: "", email: "" },
				member5: { name: "", email: "" },
			},
			description: "Jakiś opis, ale ciut dłuższy",
			tags: "Godot engine, sandbox",
			class: "PIPG",
		},
		{
			name: "Czerwone korale",
			membersList: {
				member1: { name: "Zbigniew Frącek", email: "zbigniewfracek@gmail.com" },
				member2: {
					name: "Karol Waliszewski",
					email: "karolwaliszewski@gmail.com",
				},
				member3: { name: "Kamil Nawrot", email: "kamilnawrot@gmail.com" },
				member4: { name: "", email: "" },
				member5: { name: "", email: "" },
			},
			description: "Codzienne ostre klepanie kodu",
			tags: "C++, algo",
			class: "AISD",
		},
	]);

	return (
		<>
			<header>
				<h2>This is the header</h2>
			</header>
			<main>
				<BrowserRouter>
					<nav>
						<NavLink to="/searchStudent">Search for students</NavLink>
						<NavLink to="/addStudent">Add your notice</NavLink>
						<NavLink to="/searchTeam">Search for teams</NavLink>
						<NavLink to="/addTeam">Add your team notice</NavLink>
					</nav>

					<Routes>
						<Route
							path="/"
							element={<Navigate replace to="/searchStudent" />}
						/>

						<Route
							path="/searchStudent"
							element={<SearchStudent studentsList={studentsList} />}
						/>

						<Route
							path="/addStudent"
							element={
								<AddStudent
									studentsList={studentsList}
									setStudentsList={setStudentsList}
								/>
							}
						/>

						<Route
							path="/searchTeam"
							element={<SearchTeam teamsList={teamsList} />}
						/>

						<Route
							path="/addTeam"
							element={
								<AddTeam teamsList={teamsList} setTeamsList={setTeamsList} />
							}
						/>
					</Routes>
				</BrowserRouter>
			</main>
			<footer>footer</footer>
		</>
	);
	//return <Main toDosList={toDosList} setToDoList={setToDoList}/>
}

// const App = () => {

// }
export default App;
