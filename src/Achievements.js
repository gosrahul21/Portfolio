import React from 'react'
import './achivements.css'
import {achievements}  from './db.json'
function Achievements() {

    const renderAchievements = () => {
        return achievements.map((ach) => <li>{ach}</li>);
        
    }

    return (
        <div className='achievements border'>
            <h1>Achievements</h1>
            <ul>
                {/* <li>
                3 Star Codechef https://www.codechef.com/users/gosrahul21
                </li>
                <li>
               4 Star in problem solving skills on Hackerrank
                </li>
                <li>
               Secured 8k rank in TCS CodeVita competition
among 1.5 lakh participants
                </li>
                <li>
               Secured 327 rank in TCS CodeVIta in Second
round
                </li>
                <li>
               Secured 1728 rank in Google KickStart, Round
G, 2020
                </li>
                <li>
               Secured Silver (Elite) Medal in Programming in
C, NPTEL
                </li>
                <li>
               Secured 1st Position at “LDR” competition,
Robotics, BCET, Durgapur
                </li> */}
                {renderAchievements()}

            </ul>


</div>
    )
}

export default Achievements
