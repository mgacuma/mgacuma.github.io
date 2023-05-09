import "../styles/skills.css"

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <h3 className="logo ">mgacuma</h3>
      <div className="links-container ">
        <a href="https://github.com/mgacuma" target="_blank">
          <i className="fa fa-github icon"></i>
        </a>
        <a href="https://linkedin.com/in/mgacuma" target="_blank">
          <i className="fa fa-linkedin icon" ></i>
        </a>
      </div>
    </div>
  )
}

export default Footer