import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [state, handleSubmit] = useForm("xpzeoddp");
  const navigate = useNavigate();

  if (state.succeeded) {
      return <div className="success">
        <h1 className="success__header">Success</h1>
        <p className="success__message">Message Sent - Thanks for reaching out!</p>
        <a className="success__button" href="/" onClick={() => navigate.push('/')}>Return Home</a>
      </div>
  }
  return (
    <div className="contact">
        <div className="contact__hero">
            <h1 className="contact__hero-header">Contact Me</h1>
            <img src={`${process.env.PUBLIC_URL}/images/bill.jpeg`} alt="bill-pic" className="contact__hero-pic"/>
        </div>
        <h2 className="contact__subheader">Drop me a message!</h2>
        <div className="contact__container">
            
                <form className="contact__form" onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                        className="contact__form-email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="contact__form-text"
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button className="contact__form-button" type="submit" disabled={state.submitting}>
                        Send Message
                    </button>
                </form>
            </div>
    </div>  
 
    
  );
}

export default Contact;