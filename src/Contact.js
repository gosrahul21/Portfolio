import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import './Contact.css'

const Contact = () => {
    return (
    <div className="contact border">
        <h1>Contact</h1>
         <p>On the off chance that you might want to connect with me,
            be it for investigating innovation, business, or to simply
             say hello, don't hesitate to send me an email at gosrahul21@gmail.com
        </p>

        <div className="contact-box">
            <p>
            If you like my work and efforts, please consider buying me a coffee.
            Thank you for your support!
            </p>
            <div className="social">
                <TwitterIcon/>
                <InstagramIcon/>
                <FacebookIcon/>
                <GithubIcon></GithubIcon>
            </div>
        </div>

    </div>
    )
}



export default Contact;