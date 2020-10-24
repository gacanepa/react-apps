import React, { Component } from 'react';
import  '../css/Student.css';

// Create class component...
class Student extends Component {
    render() {
        const name = this.props.name;
        const courses = this.props.courses;
        const listCourses = courses.map((course) =>
            <li key={course.toLowerCase()}>{course}</li>
        );
        return (
            // Use the Student class defined in Student.css
            <div className="Student">
                <h1>{name}</h1>
                <hr />
                <ul>{listCourses}</ul>
            </div>
        )
    }
}

//... and export it
export default Student;