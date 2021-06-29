import React from 'react'
import {experience} from './db.json'
function Experience() {
    return (
        <div className="education border">
            <h1>Experience</h1>
        {experience.map(({name,type,role,date})=>(
                <div className="edu-part">
                <div className="left-edu-part">
                    <h3>{role}</h3>
                    <span><i>Duration: {date}</i></span>
                </div>
                <div className="right-edu-part">
                    <p>{name}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Experience
