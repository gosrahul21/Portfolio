import React from 'react'
import './Skills.css'
const Skills=() => {
    return (
        <div className="skills border">
            <h1> Skills</h1>
            {/* button for skills */}
            <div className="skill-list">
            <div className="skill">C++</div>
            <div className="skill">Python</div>
            <div className="skill">Java</div>
            <div className="skill">Node.js</div>
            <div className="skill">React.js</div>
            <div className="skill"><p>Machine Learning</p></div>
            </div>
 
        </div>
    )
}


export default Skills;