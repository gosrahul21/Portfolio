import React from 'react'
import './Education.css'
function Education() {
    return (
        <div className="education border">
            <h1>Education</h1>
                      <div className="edu-part">
                <div className="left-edu-part">
                    <h2>College</h2>
                    <span>Year:2017 - 2021</span>
                </div>
                <div className="right-edu-part">
                    <p>Bengal College of Engineering and Technology, Durgapur</p>
                </div>
            </div>


            


            <div className="edu-part">
                <div className="left-edu-part">
                    <h2>High School</h2>
                    <span>Year:2015 - 2017</span>
                </div>
                <div className="right-edu-part">
                    <p>Tarar College, Tarar, Bhagalpur</p>
                </div>
            </div>


            <div className="edu-part">
                <div className="left-edu-part">
                    <h2>School</h2>
                    <span>Year: 2015</span>
                </div>
                <div className="right-edu-part">
                    <p>Arya Bal Shanti Niketan, Munger</p>
                </div>
            </div>


        </div>
    )
}

export default Education
