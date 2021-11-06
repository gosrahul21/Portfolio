import React from 'react'
import './Navbar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import db from './db.json'

function Navbar() {
    return (
        <div className="navbar">
            <img src = {process.env.PUBLIC_URL+"/dp_fb.jpg"} className="avatar"/>
            <h1>Rahul Kumar</h1>
           <div className="social-links">
                <div><a href={db.facebook}><FacebookIcon className="icon"/></a></div>
                <div><a href={db.github}><GithubIcon className="icon"/></a></div>
                <div><a href={db.linkedIN}><LinkedIcon className="icon"/></a></div>
                <div><a href={db.email}><EmailIcon className="icon"/></a></div>
            </div> 

            <div className="refer_id"><a href="#skills">Skills</a></div>
            <div className="refer_id"><a href="#education">Education</a></div>
            <div className="refer_id"><a href="#experience">Experience</a></div>
            <div className="refer_id"><a href="#project">Projects</a></div>
            <div className="refer_id"><a href="#achievements">Achievements</a></div>
            <div className="refer_id"><a href="#cert">Certifications</a></div>
            {/* <div className="social">
                
              
                
                
            </div> */}
        </div>
    )
}

export default Navbar;
