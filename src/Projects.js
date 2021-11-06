import React from 'react'
import Slide from '@material-ui/core/Slide';
import './project.css'

import {projects} from './db.json'
const Projects = () => {
    return (
        <div id ="project" className="projects border">
            <h1>Projects</h1>

             {projects.map(({name,details,link})=>(
                  <div className="project">
                  <h2>{name}</h2>
                  <ul>
                      {details.map((detail)=><li>{detail}|</li>)}
                   {<a className="ref-link" href={link}><span>Project Link</span> </a>}  
                  </ul>
                   
               </div>
             ))}
        </div>

        
    )
}

export default Projects;