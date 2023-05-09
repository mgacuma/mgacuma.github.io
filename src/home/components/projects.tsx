import React from "react";
import "../styles/projects.css";

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-headline">
        <h1>Projects</h1>
        <div className="projects-cta">
          <a 
            onClick={(e => {
              e.preventDefault();

              const contact = document.getElementById('contact');
              contact?.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth',
                  inline: 'start'
                })
              }
            )}
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="projects-grid">

      <div className="project-item">
          <div className="project-img">
            <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
            <div className="project-cta img">
              <button><span>View Project</span></button>
              <button><span>View Code</span></button>
            </div>
            <div className="overlay" />
          </div>
          <div className="project-text">
            <h2 className="project-title">Matchtracker.gg</h2>
            <p>Typescript React GraphQL</p>
          </div>
          <div className="project-cta">
            <button><span>View Project</span></button>
            <button><span>View Code</span></button>
          </div>
        </div>

        <div className="project-item">
          <div className="project-img">
            <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
            <div className="project-cta img">
              <button><span>View Project</span></button>
              <button><span>View Code</span></button>
            </div>
            <div className="overlay" />
          </div>
          <div className="project-text">
            <h2 className="project-title">Web Design</h2>
            <p>HTML CSS Javascript</p>
          </div>
          <div className="project-cta">
            <button><span>View Project</span></button>
            <button><span>View Code</span></button>
          </div>
        </div>

        <div className="project-item">
          <div className="project-img">
            <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
            <div className="project-cta img">
              <button><span>View Project</span></button>
              <button><span>View Code</span></button>
            </div>
            <div className="overlay" />
          </div>
          <div className="project-text">
            <h2 className="project-title">Todo App</h2>
            <p>Node Express PostgreSQL</p>
          </div>
          <div className="project-cta">
            <button><span>View Project</span></button>
            <button><span>View Code</span></button>
          </div>
        </div>

        <div className="project-item">
          <div className="project-img">
            <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
            <div className="project-cta img">
              <button><span>View Project</span></button>
              <button><span>View Code</span></button>
            </div>
            <div className="overlay" />
          </div>
          <div className="project-text">
            <h2 className="project-title">Quiz App</h2>
            <p>MUI Axios REST</p>
          </div>
          <div className="project-cta">
            <button><span>View Project</span></button>
            <button><span>View Code</span></button>
          </div>
        </div>

        

      </div>
    </div>
  )
}

export default Projects