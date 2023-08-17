import { Widget } from '@typeform/embed-react'

const Contact = () => {
  return (
    <div style={{alignContent: "center", backgroundColor: "var(--website-theme)"}} className='container'>
      <h3 className="header-front-page" style={{width: "60%", padding: "3vw", textAlign: "center"}}>If you have any interest in a meeting, please fill out this form.</h3>
      <Widget id="a5iLhJ7z" style={{ width: '100%', height: "700px" }} className="my-form" />
    </div>
  )
}

export default Contact;