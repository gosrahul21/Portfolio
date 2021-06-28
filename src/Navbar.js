import React from 'react'
import './Navbar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'


function Navbar() {
    return (
        <div className="navbar">
            <img src ="avatar.jpg" className="avatar"/>
            <h1>Rahul Kumar</h1>
            <span>gosrahul21@gmail.com</span>
            <div><TwitterIcon/></div>
            <div>  <InstagramIcon/></div>
            <div><FacebookIcon/></div>
            <div><GithubIcon/></div>
            <div><LinkedIcon/></div>
            <div><EmailIcon/></div>
            {/* <div className="social">
                
              
                
                
            </div> */}
        </div>
    )
}

export default Navbar;
