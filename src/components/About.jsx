import { useEffect } from "react";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    document.title = "Vita Web Design | About";
    window.scrollTo(0, 0);
  }, [])
  return (
    <div id="about-section">
      <div className="row">
        <div className="col-5">
          <img id="natalie-headshot" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701645387/IMG_2027_tmp5pw.jpg" />
        </div>
        <div id="about-me-text" className="col">
          <h1>Hi, I'm Natalie Poppe,</h1>
          <h3>a Web Developer and Designer located in Northern Wisconsin.</h3>
          <br/>
          <h3>I started Vita Web Design because I saw a need in my community for good websites. My goal is to show the small business owners in my area the difference a good online presence can make.
          </h3>
          <br/>
          <h3>I have worked with HTML, CSS and Javascript to build projects from scratch, as well as building with frameworks like <a href="https://blog.hubspot.com/website/react-js">React</a> and content management systems such as <a href="https://wordpress.org/">Wordpress.org</a>.</h3>
          <br/>
        </div>
      </div>
    </div>
  )
}

export default About;