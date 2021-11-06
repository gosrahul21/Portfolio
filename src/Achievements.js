import React from 'react'
import './achivements.css'
import {achievements}  from './db.json'
function Achievements() {

    const renderAchievements = () => {
        return achievements.map((ach) => <li>{ach}</li>);
        
    }

    return (
        <div id="achievements" className='achievements border'>
            <h1>Achievements</h1>
            <ul>
               
                {renderAchievements()}


            </ul>
            


</div>
    )
}

export default Achievements
