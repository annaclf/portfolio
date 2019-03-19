import React from 'react';
import ProjectCard from './ProjectCard';
import Project from './Project';

const Projects = () => {
    const markbox = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'mongoose', 'Angular'];
    const localBuddy = ['HTML', 'CSS', 'SASS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'mongoose', 'Handlebars'];
    const ironFlip = ['HTML', 'CSS', 'JavaScript', 'Canvas'];
    return (
      <>
        <h2 className="section-title">Ironhack Projects</h2>
        <div className="projects-container">
        <Project
          module="Module 1"
          title="Eisen flop laufen (Iron flip run)"
          >
          <p>For this project I used DOM-manupulation and canvas. The idea came from <a href="https://www.youtube.com/watch?v=0iD-B14mX6I" target="_blank">this</a> game. The soundtrack is a 8-bit version of Scweinsteiger by <a href="http://diekatapult.com/" target="_blank">Die Katapult</a>.</p>
        </Project>
        <ProjectCard
          name="Iron flip run"
          tagline="A game where you have to avoid obstacles by flipping a runner on a line using any key"
          techs={ironFlip}
          demo='https://annaclf.github.io/iron-flip-run'
          deadline="7 days" />
        <Project
          module="Module 2"
          title="Local Buddy - Web app"
          >
          <p>Web app made with express and Handlebars. This project also includes a carefully written README, wireframes, following Trello and Kanban.</p>
          <p>Team: Anna Fredriksson and <a href="https://github.com/hcorta">Hugo Corta</a></p>
        </Project>
        <ProjectCard
          name="Local Buddy"
          tagline="Find friends in the places you visit."
          techs={localBuddy}
          demo='https://local-buddy.herokuapp.com/'
          deadline="7 days" />
        <Project
          module="Module 3"
          title="Mark box - SPA app"
        >
          <p>My final project at Ironhack was an online text editor for writing markdown notebooks.
              We used Angular for the frontend and express for the backend.
          <br/>Team: Anna Fredriksson and <a href="https://github.com/hcorta">Hugo Corta</a>
          <br/>Highlights: No css framework.</p>
        </Project>
        <ProjectCard
          name="Mark-box"
          tagline="Online text editor for writing markdown notebooks."
          techs={markbox}
          demo='https://markbox-app.herokuapp.com/'
          deadline='10 days' />
        </div>
      </>
    );
  }


export default Projects;