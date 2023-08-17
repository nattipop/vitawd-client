import { Widget } from '@typeform/embed-react'

const Contact = () => {
  return (
    <div style={{alignContent: "center", backgroundColor: "var(--website-theme)", textAlign: "center", width: "100%"}} className="container">
      <h3 className="header-front-page" style={{width: "60%", padding: "3vw"}}>If you have any interest in a meeting, please fill out this form.</h3>
      <Widget id="a5iLhJ7z" style={{ width: '100%', height: "700px", padding: "4vw"}} className="my-form" />
    </div>
  )
}

export default Contact;