import "../styles/contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-text">
        <h1>Contact</h1>
        <p>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
      </div>

      <form className="contact-form ">

        <div className="input-container name">
          <input id="name" type="text" placeholder=" " />
          <label className="label-name" htmlFor="name">Name</label>
        </div>
        
        <div className="input-container email">
          <input id="email" type="email" placeholder=" " required />
          <label className="label-email" htmlFor="email">Email</label>
        </div>
        
        <div className="input-container message">
          <textarea id="message" placeholder=" " />
          <label className="label-message" htmlFor="message">Message</label>
        </div>
        
        <button className="submit" type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact