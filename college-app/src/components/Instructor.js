import React from 'react';

// Create functional component and export in one step
export default function Instructor({name, experienceYears}) {
    const experienceStyles = {color: experienceYears > 10 ? "green" : "red"}
    return (
        <p style={experienceStyles}>{name} has {experienceYears} years of experience.</p>
    )
}