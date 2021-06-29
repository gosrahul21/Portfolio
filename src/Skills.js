import React from 'react'
import './Skills.css'
import {skills} from './db.json'
const Skills=() => {
    return (
        <div className="skills border">
            <h1> Skills</h1>
            {/* button for skills */}
            <div className="skill-list">
          
            {skills.map((skill)=> <div className="skill">{skill}</div> )}
            </div>
 
        </div>
    )
}


export default Skills;