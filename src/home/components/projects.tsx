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
            <img src="https://images2.boardingschoolreview.com/photo/1122x864/1000/593/img-academy-0Kqhnq.jpg" />
            <div className="project-cta img">
              <button><span>View Project</span></button>
              <button><span>View Code</span></button>
            </div>
            <div className="overlay" />
          </div>
          <div className="project-text">
            <h2 className="project-title">Design Portfolio</h2>
            <p>HTML CSS JAVASCRIPT</p>
          </div>
          <div className="project-cta">
            <button><span>View Project</span></button>
            <button><span>View Code</span></button>
          </div>
        </div>

        <div className="project-item">
          <div className="project-img">
            <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg" />
          </div>
          <div className="project-text">
            <h2 className="project-title">Design Portfolio</h2>
            <p>HTML CSS JAVASCRIPT</p>
          </div>
        </div>

        <div className="project-item">
          <div className="project-img">
            <img src="https://images2.boardingschoolreview.com/photo/1122x864/1000/593/img-academy-0Kqhnq.jpg" />
          </div>
          <div className="project-text">
            <h2 className="project-title">Design Portfolio</h2>
            <p>HTML CSS JAVASCRIPT</p>
          </div>
        </div>

        <div className="project-item">
          <div className="project-img">
            <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg" />
          </div>
          <div className="project-text">
            <h2 className="project-title">Design Portfolio</h2>
            <p>HTML CSS JAVASCRIPT</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects