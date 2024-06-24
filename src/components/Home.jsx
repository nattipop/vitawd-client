import animation from "../pictures/VITA___ANIMATION.gif"
import image from "../pictures/vitalogo.png"
import { useState, useEffect } from "react";
import ImageSlider from  "./ImageSlider";
import "../styles/Home.css";
import { Link } from "react-router-dom";


const Home = () => {
  const [currentImage, setImage] = useState(animation);

  useEffect(() => {
    document.title = "Vita Web Design | Home";
    window.scrollTo(0, 0);
    setTimeout(() => {
      setImage(image)
    }, 2400)
  }, []);
  
  const animateLogo = () => {
    setImage(animation);
    
    setTimeout(() => {
      setImage(image)
    }, 2400);
    return
  };
  
  return (
    <div id="home">
      <div id="hero-landscape" className="section">
        <img 
          src={currentImage}
          id="hero-img"
          onClick={animateLogo}
          />
        <h1 className="header-front-page">
          Building websites for businesses in Barron County, WI and the surrounding area.
        </h1>
      </div>
      <div id="home-pricing" className="section">
        <div className="services-divs">
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1718137245/IMG_3754_2_i9mioj.jpg" alt="" className="services-images" />
          <Link className="react-link home-pricing-button" to="/websites"><button>Websites</button></Link>
        </div>
        <div className="services-divs">
          <img className="services-images" src="https://res.cloudinary.com/dawteptkh/image/upload/v1718137251/IMG_3796_2_yadaaq.jpg" alt="" />
          <Link className="react-link home-pricing-button" to="/logos"><button>Logo Design</button></Link>
        </div>
      </div>
      <div id="home-about" className="section">
        <div className="container">
          <div className="row">
            <div className="col" id="get-to-know">
              <h1 id="home-about-header">Get to know the designer</h1>
              <Link to="/about"><button id="home-about-button">Learn more about Natalie</button></Link>
            </div>
            <div className="col" id="home-about-img-col">
              <img id="home-about-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1706569008/IMG_2349_alcun5.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="roadmap" className="section">
        <div className="row">
          <div className="col roadmap-item row" id="roadmap-call">
            <div className="col-3 roadmap-img-col">
              <img className="roadmap-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701381852/phone-call_tw5bjc.png" alt="" />
            </div>
            <div className="col roadmap-text" id="contact-roadmap">
              <h2>Contact me</h2>
              <h2>(715) 642-1146</h2>
              <p className="roadmap-p">for a free consult. This (1) allows us to get to know each other and (2) allows me to understand what you need in a website.</p>
            </div>
          </div>
          <div className="col roadmap-item row" id="roadmap-quote">
            <div className="col-3 roadmap-img-col">
              <img className="roadmap-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701381617/contract_tsqv7g.png" alt="" />
            </div>
            <div className="col roadmap-text" id="quote-roadmap">
              <h2>Get a quote</h2>
              <p className="roadmap-p">I will send you a quote for the cost of your website (see how I price my jobs <a id="pricing-home-link" href="https://www.vitawd.com/pricing">here</a>). We will set goals and expectations for the completion of your site.</p>
            </div>
          </div>
          <div className="col roadmap-item row" id="roadmap-work">
            <div className="col-3 roadmap-img-col">
              <img className="roadmap-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701381745/laptop_afmqem.png" alt="" />
            </div>
            <div className="col roadmap-text" id="reality-roadmap">
              <h2>Make your website a reality</h2>
              <p className="roadmap-p">Once I receive a downpayment, your time slot will be set in place and we can start discussing details.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="home-review" className="section">
        <h1 id="home-review-header">
          Already a Client?
        </h1>
        <a id="home-review-button" href="https://g.page/r/CbSpYGtNdySXEB0/review"><button>Leave a review</button></a>
      </div>
      <div id="logo-gallery" className="section">
        <h1>Logo Gallery</h1>
        <ImageSlider />
      </div>
    </div>
  )
}


export default Home;