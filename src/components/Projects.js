import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const markbox = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'mongoose', 'Angular'];
    const localBuddy = ['HTML', 'CSS', 'SASS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'mongoose', 'Handlebars'];
    const ironFlip = ['HTML', 'CSS', 'JavaScript', 'Canvas'];
    return (
      <>
        <h2 className="section-title">Ironhack Projects</h2>
        <div className="projects-container">
        <section className="project-description">
            <div className="container">
              <h3>Module 1 - Code a game</h3>
              <p>For this project I used DOM-manupulation and canvas.</p>
              <ul>
                <li>Team: Anna Fredriksson</li>
                <li>Deadline: 7 days</li>
              </ul>
            </div>
          </section>
          <ProjectCard
            name="Iron flip run"
            tagline="A game where you have to avoid obstacles flipping a runner on a line."
            techs={ironFlip}
            demo='https://annaclf.github.io/iron-flip-run' />
          <section className="project-description">
            <div className="container">
              <h3>Module 2 - web app</h3>
              <ul>
                <li>Team: Anna Fredriksson and <a href="https://github.com/hcorta">Hugo Corta</a></li>
                <li>Deadline: 7 days</li>
              </ul>
            </div>
          </section>
          <ProjectCard
            name="Local Buddy"
            tagline="Find friends in the places you visit."
            techs={localBuddy}
            demo='https://local-buddy.herokuapp.com/' />
          <section className="project-description">
            <div className="container">
              <h3>Module 3 - final project</h3>
              <p>My final project at Ironhack was an online text editor for writing markdown notebooks.
              We used Angular for the frontend and express for the backend.</p>
              <ul>
                <li>Team: Anna Fredriksson and <a href="https://github.com/hcorta">Hugo Corta</a></li>
                <li>Deadline: 10 days</li>
                <li>Highlights: No css framework.</li>
              </ul>
            </div>
          </section>
          <ProjectCard
            name="Mark-box"
            tagline="Online text editor for writing markdown notebooks."
            techs={markbox}
            demo='https://markbox-app.herokuapp.com/' />
        </div>
      </>
    );
  }


export default Projects;