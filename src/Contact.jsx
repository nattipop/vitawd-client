import { Widget } from '@typeform/embed-react'
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = "Vita Web Design | Contact";
  }, []);

  return (
    <div style={{alignContent: "center", backgroundColor: "var(--website-theme)", textAlign: "center", width: "100%"}}>
      <h3 className="header-front-page" style={{width: "100%", padding: "3vw", paddingTop: "7vw", marginTop: "5vw"}} id="meeting-header">If you have any interest in a meeting, please fill out this form.</h3>
      <Widget id="a5iLhJ7z" style={{ width: '100%', height: "700px", padding: "4vw"}} className="my-form" />
    </div>
  )
}

export default Contact;