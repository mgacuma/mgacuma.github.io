import { Image } from "@mui/icons-material"
import { Grid, Box, Typography, Container, Divider } from "@mui/material"

import "../styles/profile.css";

const Profile: React.FC = () => {
  return (
    <div className="profile-container ">

      <div className="profile-content ">

        <img className="img-portrait-mobile" src="./portrait-full.jpeg" />

        <div className="profile-header">
          <h1>Kamusta!</h1>
          <h1>I'm <span className="name-text">Miguel Gacuma</span>.</h1>
        </div>

        <div className="profile-body">
          <p>
            Based in San Francisco, I'm a full-stack developer passionate about building intuitive tools to make everyone's lives easier.
          </p>
        </div>

        <div className="profile-cta ">
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

      <img className="img-portrait" src="./portrait-full.jpeg" />

    </div>
  )
}

export default Profile