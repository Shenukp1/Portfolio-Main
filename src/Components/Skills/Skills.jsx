import React from 'react'
import './Skills.css';

//TODO: I want to either have a darker hue at the button and lighter at the top or vise versa

const Skills = () => {
  return (
    <section className='skills' id= 'skills'>
        <h2>My <span className="highlight">Skills</span></h2>

        <div className="skills-row">

            <div className="skills-column">
                <h3 className="title">Coding Skills</h3>

                <div className="skills-box">
                    <div className="skills-content">

                        <div className="progress">
                            <h3> HTML <span >90%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3> CSS <span>90%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3> Python <span>100%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3> Java <span>90%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3> JavaScript <span>80%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>


                        
                    </div>
                </div>

            </div>


            <div className="skills-column">
                <h3 className="title">Frameworks/Libraries</h3>

                <div className="skills-box">
                    <div className="skills-content">

                        <div className="progress">
                            <h3> React <span>100%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3> Junit <span>90%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3> Node.js <span>80%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3> Express.js <span>90%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>

                        <div className="progress">
                            <h3> POSIX Threads <span>70%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>


                        
                    </div>
                </div>

            </div>


        </div>

    </section>
  )
}

export default Skills