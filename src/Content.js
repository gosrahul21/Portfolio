import React,{useState} from 'react'
import './Content.css'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './Achievements'
import Education from './Education'
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
            <input type="submit" onClick={onClickHandler} value="change theme"/>
            {/* //About me */}
            <div   className="about border">
                <h1>About</h1>
                <p>
                Hi There! I'm Rahul Kumar From Sahibganj, Jharkhand. I Currently Work As A Software Engineer At Innolabz Ventures. I Have Experience Programming In Many Different Languages Such As Java, Python, However Some Of My Projects Involve Working In Machine Learning.

                I Am Pursuing B.Tech From Bengal College Of Engineering And Technology, Durgapur With An Aggregate Of 8 CGPA In Information Technology.
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
            {/* contact */}
        </div>
    )
}

export default Content;
