import React from 'react'
import Slide from '@material-ui/core/Slide';
import './project.css'
const Projects = () => {
    return (
        <div className="projects border">
            <h1>Projects</h1>
             <div className="project">
               <h2>Ecommerce Website</h2>
               <ul>
                   <li>
                   Ecommerce web application with firebase authentication, Admin Panel, star rating system, card
payment, generating Invoice etc.

                   </li>
                   <li>
                   Tool used: Node.js, react.js, mongodb, redux, react-hooks, HTML& CSS.
                   </li>
               </ul>
             </div>
             <div className="project">
                <h2>DevConnect</h2>
                <ul>
                    <li>DevConnect (05/2020 - Present)
 Social Site for developers where developer can connect with each other and do post, comment, like etc.
</li>
                    <li> Tool used: Node.js, react.js, mongodb, react-hooks, redux, HTML& CSS.</li>
                </ul>
             </div>
        </div>
    )
}

export default Projects;