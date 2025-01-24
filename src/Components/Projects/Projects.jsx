import React from 'react'
import Website from "../../assets/Images/color.png";
import './Projects.css';
const Projects = () => {
  return (
    <section id= 'projects' className='projects'>
        <h2>My <span className="highlight">Projects</span></h2>

        <div className="project_container">
            
          

            {/* copy paste article for to add more project */}


          <article className='project_item'>
              <div className="project_item_image">
                  <img src={Website} alt='pOne'/>
              </div>
              <h3>Project Name</h3>
              <small className='text-light'>Project description</small>

              <div className="project_item_btn">
                <a href='' className='btn'>GitHub</a>
              </div>

          </article>
          <article className='project_item'>
              <div className="project_item_image">
                  <img src={Website} alt='pOne'/>
              </div>
              <h3>Project Name</h3>
              <small className='text-light'>Project description</small>

              <div className="project_item_btn">
                <a href='' className='btn'>GitHub</a>
              </div>

          </article>
          <article className='project_item'>
              <div className="project_item_image">
                  <img src={Website} alt='pOne'/>
              </div>
              <h3>Project Name</h3>
              <small className='text-light'>Project description</small>

              <div className="project_item_btn">
                <a href='' className='btn'>GitHub</a>
              </div>

          </article>

        </div>
        

    </section>
  )
}

export default Projects