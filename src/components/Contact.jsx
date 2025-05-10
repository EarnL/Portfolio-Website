import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {}
        <div className="contact-form">
          <h2>CONTACT ME!</h2>
          <p>We can't solve your problem if you don't tell me about it!</p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>

        {}
        <div className="contact-info">
          <p>🏠 Philippines</p>
          <p>🏠 Quezon, Porvince, Lucena City</p>
          <p>📞 09858478708</p>
          <p>✉️ arnelcaparros02@gmail.com</p>

          <div>
            <a href="mailto:arnelcaparros02@gmail.com">Email Me</a>
            <a href="https://www.facebook.com/share/1FddZZNUbE/">Facebook</a>
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
