import React from 'react'
import './Certifications.css'
import {certifications} from './db.json'
const Certification = () =>{

    return (
        <div id="cert" className="certifications border">
            <h1>Certifications</h1>
            {/* //certificate */}
            {/* link */}
            {certifications.map(({name,from,date,link="#"})=>(
                    <div className="cert-part">
                    <div className="left-edu-part">
                        <h3>{from}</h3>
                        <span><i>Duration: {date}</i></span>
                    </div>
                    <div className="right-edu-part">
                        <p>{name}</p>
                        <span><a  className="ref-link" href={link}>Certificate Link</a></span>
                    </div>
                </div>
                ))}
        </div>
    )
}


export default Certification