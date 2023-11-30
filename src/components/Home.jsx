import Plans from "./Plans";
import animation from "../pictures/Animation.png"
import image from "../pictures/Vitalogo 01 Artboard 1.svg"
import { useState, useEffect } from "react";
import Contact from "./Contact";
import "../styles/Home.css";


const Home = () => {
  const [currentImage, setImage] = useState(animation);
  const [imageStyling, setImageStyle] = useState()

  useEffect(() => {
    document.title = "Vita Web Design | Home";
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
  }
  
  return (
    <div>
      <div id="hero-landscape">
        <img 
          src={currentImage}
          className="hero-image"
          style={imageStyling} 
          onClick={animateLogo}
          />
        <h1 className="header-front-page">
          Building websites for businesses in Barron County, WI
        </h1>
      </div>
      <div className="review-section">
        <h1 className="review-question">
          Already a client?
        </h1>
        <a id="leave-a-review" href="https://g.page/r/CbSpYGtNdySXEAI/review"><button>Leave a review</button></a>
      </div>
      <div id="website-plans">
        <h1 className="text-center">Website Plans</h1>
        <Plans />
      </div>
      <Contact/>
    </div>
  )
}


export default Home;