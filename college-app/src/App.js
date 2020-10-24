import React from 'react';
import Student from './components/Student';
import Instructor from './components/Instructor';
import './App.css';

function App() {
	return (
		<div className="App">
			<Student
				name = "Gabriel"
				courses = {["CS241", "CIT160"]}
			/>
			<Instructor
				name = "Brother Plate"
				experienceYears = "15"
			/>
			<Instructor
				name = "Sister Doe"
				experienceYears = "7"
			/>
		</div>
	);
}

export default App;
