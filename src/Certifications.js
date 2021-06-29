import React from 'react'
import './Certifications.css'
import {certifications} from './db.json'
const Certification = () =>{

    return (
        <div className="certifications border">
            <h1>Certifications</h1>
            {/* //certificate */}
            {/* link */}
            {certifications.map(({name,from,date})=>(
                    <div className="cert-part">
                    <div className="left-edu-part">
                        <h3>{from}</h3>
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


export default Certification