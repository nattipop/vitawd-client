import animation from "../pictures/Animation.png"
import image from "../pictures/Vitalogo 01 Artboard 1.svg"
import { useState, useEffect } from "react";
import ImageSlider from  "./ImageSlider";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import logos from "../logos.json"


const Home = () => {
  const [currentImage, setImage] = useState(animation);
  const [imageStyling, setImageStyle] = useState();

  useEffect(() => {
    document.title = "Vita Web Design | Home";
    window.scrollTo(0, 0);
    setTimeout(() => {
      setImage(image)
      setImageStyle({width: "300px", paddingTop: "15px", paddingLeft: "12px"})
    }, 2400)
  }, []);
  
  const animateLogo = () => {
    setImage(animation);
    setImageStyle({});
    
    setTimeout(() => {
      setImage(image)
      setImageStyle({width: "300px", paddingTop: "15px", paddingLeft: "12px"})
    }, 2400);
    return
  };
  
  return (
    <div>
      <div id="hero-landscape" className="section">
        <img 
          src={currentImage}
          id="hero-img"
          style={imageStyling} 
          onClick={animateLogo}
          />
        <h1 className="header-front-page">
          Building websites for businesses in Barron County, WI
        </h1>
      </div>
      <div id="home-pricing" className="section">
        <h1 id="home-pricing-header">
          Interested in a website?
        </h1>
        <Link id="home-pricing-button" to="/pricing"><button>Check out pricing</button></Link>
      </div>
      <div id="roadmap" className="section">
        <div className="row container">
          <div className="col roadmap-item row" id="roadmap-call">
            <div className="col-3">
              <img className="roadmap-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701381852/phone-call_tw5bjc.png" alt="" />
            </div>
            <div className="col roadmap-text">
              <h2>Call or contact me (715) 642-1146</h2>
              <p className="roadmap-p">We will work towards setting up a free meeting. You will have the opportunity get to know me and decide if you would like to work with me!</p>
            </div>
          </div>
          <div className="col roadmap-item row" id="roadmap-quote">
            <div className="col-3">
              <img className="roadmap-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701381617/contract_tsqv7g.png" alt="" />
            </div>
            <div className="col roadmap-text">
              <h2>Get a quote</h2>
              <p className="roadmap-p">I will send you a quote for the cost of your website (see more about how I price jobs <Link to="/pricing">here</Link>). We will set goals and expectations for the completion of your site.</p>
            </div>
          </div>
          <div className="col roadmap-item row" id="roadmap-work">
            <div className="col-3 roadmap-img-col">
              <img className="roadmap-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701381745/laptop_afmqem.png" alt="" />
            </div>
            <div className="col roadmap-text">
              <h2>Make your website a reality</h2>
              <p className="roadmap-p">Once I receive a downpayment, we can start discussing details. For further information on this, give me a call or send an email with any questions.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="home-about" className="section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 id="home-about-header">Get to know the designer</h1>
              <Link to="/about"><button id="home-about-button">Learn more about Natalie</button></Link>
            </div>
            <div className="col">
              <img id="home-about-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701383597/IMG_0625_l55cj7.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="home-review" className="section">
        <h1 id="home-review-header">
          Already a Client?
        </h1>
        <Link id="home-review-button" to="https://g.page/r/CbSpYGtNdySXEB0/review"><button>Leave a review</button></Link>
      </div>
      <div id="logo-gallery" className="section">
        <h1>Logo Gallery</h1>
        <ImageSlider logos={logos} />
      </div>
    </div>
  )
}


export default Home;