import { Widget } from '@typeform/embed-react'
import { useEffect } from 'react';
import "../styles/Contact.css";

const Contact = () => {
  useEffect(() => {
    document.title = "Vita Web Design | Contact";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="contact">
      <div className='container contact-container'>
        <h1>I'd love to talk to you!</h1>
        <h3>Give me a call <a id="phone-link" href="tel:7156421146">(715) 642-1146</a></h3>
        <div id='email-form' className='container'>
          <h3 id="contact-header">Or send me an email :</h3>
          <Widget id="q0dW7f20" style={{ width: '100%', height: "950px", padding: "4vw"}} className="my-form" />
        </div>
      </div>
    </div>
  )
}

export default Contact;