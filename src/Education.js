import React from 'react'
import './Education.css'
import {education} from './db.json'
function Education() {
    return (
        <div id ="education" className="education border">
            <h1>Education</h1>
            
            {
                education.map(({type,year,name})=>(
                    <div className="edu-part">
                    <div className="left-edu-part">
                        <h2>{type}</h2>
                        <span>Year: {year}</span>
                    </div>
                    <div className="right-edu-part">
                        <p>{name}</p>
                    </div>
                </div>
                ))
            }

        </div>
    )
}

export default Education
