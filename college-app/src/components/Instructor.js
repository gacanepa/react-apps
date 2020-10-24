import React from 'react';

// Create functional component and export in one step
export default function Instructor({name, experienceYears}) {
    return (
        <p style={{color: experienceYears > 10 ? "green" : "red"}}>{name} has {experienceYears} years of experience.</p>
    )
}