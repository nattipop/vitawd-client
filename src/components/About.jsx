import { useEffect } from "react";
import "../styles/About.css";
import "../styles/Mobile.css"

const About = () => {
  useEffect(() => {
    document.title = "Vita Web Design | About";
    window.scrollTo(0, 0);
  }, [])
  return (
    <div id="about-section">
      <div id="overlay"></div>
        <div id="bible-verse">
          <h1>
            "In Him was life, and the life was the light of men. The light shines in the darkness, and the darkness has not overcome it."
            <br/>
            <br/>
            John 1:4-5 
          </h1>
      </div>
      <div id="about-main">
        <div className="col" id="about-header">
          <h1>Hi, I'm Natalie Poppe,</h1>
          <h3>a Web Developer and Designer located in Northern Wisconsin.</h3>
        </div>
        <div className="row container" id="about-main-body">
          <div className="col-5" id="natalie-headshot">
            <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1704213076/IMG_2349_roe58d.jpg" />
          </div>
          <div id="about-me-text" className="col-7">
            <h3>I started Vita Web Design because I believe a good website is vital to promoting a business. My goal is to build a website that complements the quality of your business while catering to your specific needs.
            </h3>
            <br/>
            <h3>I have worked with HTML, CSS and Javascript to build projects from scratch, as well as building with frameworks like <a href="https://blog.hubspot.com/website/react-js">React</a> and content management systems such as <a href="https://wordpress.org/">Wordpress.org</a>.</h3>
            <br/>
            <h3></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;