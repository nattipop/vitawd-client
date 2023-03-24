import headshot from "./pictures/headshot.jpeg"

const About = () => {
  return (
    <div className="about-me-background">
      <div className="about-me-section">
        <img className="text-right" id="natalie-headshot" src={headshot} />
        <div className="about-me-text">
          <h1>Hi, I'm Natalie</h1>
          <h3>I'm a Web Developer and Designer located in Northern Wisconsin. My goal is to help businesses and non-profits in my area build an online presence.</h3>
          <br/>
          <h3>I started Vita Web Design because I saw a need in my community for good websites. Many small businesses have websites, but they don't work properly and are outdated. My job is to show them the difference a good online presence can make.
          </h3>
          <br/>
          <h3>I have worked with HTML CSS and Javascript to build projects from scratch, as well as building with frameworks like <a href="https://blog.hubspot.com/website/react-js">React</a> and content management systems such as <a href="https://wordpress.org/">Wordpress.org</a>.</h3>
          <br/>
        </div>
      </div>
    </div>
  )
}

export default About;