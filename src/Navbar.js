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
            <img src ="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.6435-9/84311472_2505624642893204_2124184081779392512_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=I8PDUa6fIFcAX9KIOjQ&tn=6IAM6o9G9_CGKy70&_nc_ht=scontent.fpat1-1.fna&oh=5001a6c2401b8a05257523cb423c9d0b&oe=60DFACA1" className="avatar"/>
            <h1>Rahul Kumar</h1>
            
            <div><a href={db.facebook}><FacebookIcon className="icon"/></a></div>
            <div><a href={db.github}><GithubIcon className="icon"/></a></div>
            <div><a href={db.linkedIN}><LinkedIcon className="icon"/></a></div>
            <div><a href={db.email}><EmailIcon className="icon"/></a></div>
            {/* <div className="social">
                
              
                
                
            </div> */}
        </div>
    )
}

export default Navbar;
