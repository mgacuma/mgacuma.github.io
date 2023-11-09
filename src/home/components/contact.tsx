import { useEffect } from "react";
import "../styles/contact.css";

const Contact: React.FC = () => {

  useEffect( () => {
    const nameContainer = document.getElementById('name-container');
    const nameInput = document.getElementById('name');
    const nameLabel = document.getElementById('label-name')
    const emailContainer = document.getElementById('email-container');
    const emailInput = document.getElementById('email');
    const emailLabel = document.getElementById('label-email');
    const messageContainer = document.getElementById('message-container');
    const messageInput = document.getElementById('message');
    const messageLabel = document.getElementById('label-message');
    
    nameInput?.addEventListener('invalid', e => {
      e.preventDefault();
      
      nameInput!.style.borderBottomColor = 'var(--red)';
  
      const error = document.createElement('p');
      error.className = 'error-message';
      error.id = 'error-message';
      error.textContent = 'Required';
      
  
      if(nameContainer?.lastChild?.textContent !== 'Required'){
        nameContainer?.appendChild(error);
      }
      nameLabel!.style.color = 'var(--red)';
  
    }, true);
  
    emailInput?.addEventListener('invalid', e => {
      e.preventDefault();
      
      emailInput!.style.borderBottomColor = 'var(--red)';
  
      const error = document.createElement('p');
      error.className = 'error-message';
      error.id = 'error-message';
      error.textContent = 'Invalid format';
  
      if(emailContainer?.lastChild?.textContent !== 'Invalid format'){
        emailContainer?.appendChild(error);
      }
      emailLabel!.style.color = 'var(--red)';
  
    }, true);

    messageInput?.addEventListener('invalid', e => {
      e.preventDefault();
      
      messageInput!.style.borderBottomColor = 'var(--red)';
  
      const error = document.createElement('p');
      error.className = 'error-message';
      error.id = 'error-message';
      error.textContent = 'Required';
  
      if(messageContainer?.lastChild?.textContent !== 'Required'){
        messageContainer?.appendChild(error);
      }
      messageLabel!.style.color = 'var(--red)';
  
    }, true);


  }, []);
  

  return (
    <div className="contact-container" id="contact">
      <div className="contact-text">
        <h1>Contact</h1>
        <p>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
      </div>

      <form className="contact-form " action="https://getform.io/f/13a3c9ad-a1f3-49b9-b295-c733215c9556" method="POST">

        <div className="input-container name" id="name-container">
          <input id="name" type="text" placeholder=" " required name="name" />
          <label className="label-name" id="label-name" htmlFor="name">Name</label>
        </div>
        
        <div className="input-container email" id="email-container">
          <input id="email" type="email" placeholder=" " name="email" required />
          <label className="label-email" id="label-email" htmlFor="email">Email</label>
        </div>
        
        <div className="input-container message" id="message-container"> 
          <textarea id="message" placeholder=" " required name="message" />
          <label className="label-message" id="label-message" htmlFor="message">Message</label>
        </div>


        <input type="hidden" name="_gotcha" />
        
        <button className="submit" type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact