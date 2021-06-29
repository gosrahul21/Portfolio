import React,{useState} from 'react'
import './Content.css'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './Achievements'
import Education from './Education'
import Certification from './Certifications'
import Experience from './Experience'
function Content() {

    
    const [theme,setTheme] =useState("white")
    const onClickHandler = ()=>{
        if(theme==='gray')
            setTheme('white')
        else
            setTheme('gray')
    }

    return (
        <div className={`content ${theme}`}>
            {/* <label>Change Theme</label><input type="submit" className={`btn ${theme==="white"?"gray":"white"}`}onClick={onClickHandler} value=""/> */}
            {/* //About me */}
            <div   className="about border">
                <h1>About</h1>
                <p>
                Hi There! I'm Rahul Kumar From Sahibganj, Jharkhand. I Am Pursuing B.Tech From Bengal College Of Engineering And Technology, Durgapur With An Aggregate Of 8 CGPA In Information Technology.
                
                </p>
            </div>
           
        
          
            {/* Skills  and resumes*/}
            <Skills/>
              {/* //projects */}
              <Projects/>
            {/* //Achievements */}
            <Achievements/>
            {/* Education */}
            <Education/>
            <Experience/>
            <Certification/>
            {/* contact */}
        </div>
    )
}

export default Content;
