import React from "react";

import { GiGraduateCap } from "react-icons/gi";
import { BsTelephoneForward } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

import './About.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2><span className="highlight">About Me</span></h2>

      <div className="about_container">
        
        {/* <div className="about_me">
          <div className="about_me_image">
              // {/* TODO: add image maybe -> code: <img src="" alt="Shenuk" /> 
          </div>
        </div> */}

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiGraduateCap className="about_icon" />
              <h5>Degree</h5>
              <small>
                Bachelor of Science (BSc) in Computer Science <br />
                {/*br tag are to break up the line*/}
                <i>University Of Calgary</i>
                {/*italizes tag*/}
              </small>
            </article>

            <article className="about_card">
              <BsTelephoneForward className="about_icon" />
              <h5>Contact</h5>
              <small>
                <ul>
                  <li>Phone: (587)-429-0396</li>
                  <li>Email: Shenuk.Perera228@gmail.com</li>
                </ul>
              </small>
            </article>

            <article className="about_card">
              <TfiWorld className="about_icon" />
              <h5>Location</h5>
              <small>Address...</small>
            </article>
          </div>
          <p>
            Hi, I'm Shenuk Perera, and I am currently a Computer Science Student
            at the University of Calgary. I Excel in Software Development, as i
            am experienced in Python and JavaScript, with a focus on web
            application development and system optimization through rigorous
            testing. 
          </p>


          <p>
            I thrive in collaborative enviroments, and this can be seen
            when I led student teams of up to 20; assigning tasks and supported
            team members with completing tasks when necessary; Excels in
            creating a comfortable and respectful environment for a diverse
            range of individuals. 
          </p>

          <p>
            I hold professionalism to a high standard, and
            this shows in my Strong work ethic; going above and beyond to ensure
            task are completed to ensure a stress-free enviroment for
            individuals.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
