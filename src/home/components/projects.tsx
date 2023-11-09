import React from "react";
import "../styles/projects.css";
import { Link } from "react-router-dom";

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
            <img src="./matchtracker.gg.png" />
            <div className="project-cta img">
              <a href="https://mgacuma.github.io/match-tracker/" target="_blank"><span>View Project</span></a>
              <a href="https://github.com/mgacuma/match-tracker" target="_blank"><span>View Code</span></a>
            </div>
            <div className="overlay" />
          </div>
          <div className="project-text">
            <h2 className="project-title">Matchtracker.gg</h2>
            <p>Typescript React GraphQL</p>
          </div>
          <div className="project-cta">
            <a href="https://mgacuma.github.io/match-tracker-client/" target="_blank"><span>View Project</span></a>
            <a href="https://github.com/mgacuma/match-tracker" target="_blank"><span>View Code</span></a>
          </div>
        </div>

        <div className="project-item">
          <div className="project-img">
            <img src="./web.png" />
            <div className="project-cta img">
              <a href="https://mgacuma.github.io/intro-section-with-dropdown-navigation/" target="_blank"><span>View Project</span></a>
              <a href="https://github.com/mgacuma/intro-section-with-dropdown-navigation" target="_blank"><span>View Code</span></a>
            </div>
            <div className="overlay" />
          </div>
          <div className="project-text">
            <h2 className="project-title">Web Design</h2>
            <p>HTML CSS Javascript</p>
          </div>
          <div className="project-cta">
            <a href="https://mgacuma.github.io/intro-section-with-dropdown-navigation-main/" target="_blank"><span>View Project</span></a>
            <a href="https://github.com/mgacuma/intro-section-with-dropdown-navigation-main" target="_blank"><span>View Code</span></a>
          </div>
        </div>

        <div className="project-item">
          <div className="project-img">
            <img src="./todo-app.png" />
            <div className="project-cta img">
              <Link to="todo-app"><span>View Project</span></Link>
              <a href="https://github.com/mgacuma/todo-server" target="_blank"><span>View Code</span></a>
            </div>
            <div className="overlay" />
          </div>
          <div className="project-text">
            <h2 className="project-title">Todo App</h2>
            <p>Node Express PostgreSQL</p>
          </div>
          <div className="project-cta">
            <Link to="todo-app"><span>View Project</span></Link>
            <a href="https://github.com/mgacuma/todo-server" target="_blank"><span>View Code</span></a>
          </div>
        </div>

        <div className="project-item">
          <div className="project-img">
            <img src="./quiz-app.png" />
            <div className="project-cta img">
              <Link to="quiz-app"><span>View Project</span></Link>
              <a href="https://github.com/mgacuma/hq/tree/main/src/quiz-app" target="_blank"><span>View Code</span></a>
            </div>
            <div className="overlay" />
          </div>
          <div className="project-text">
            <h2 className="project-title">Quiz App</h2>
            <p>MUI Axios REST</p>
          </div>
          <div className="project-cta">
            <Link to="quiz-app"><span>View Project</span></Link>
            <a href="https://github.com/mgacuma/hq/tree/main/src/quiz-app" target="_blank"><span>View Code</span></a>
          </div>
        </div>

        

      </div>
    </div>
  )
}

export default Projects