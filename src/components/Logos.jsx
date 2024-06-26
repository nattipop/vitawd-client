import { useEffect } from "react";
import "../styles/Logos.css"

const Logos = () => {
  useEffect(() => {
    document.title = "Vita Web Design | Logos";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="logos">
      <img className="weblog-image" src="https://res.cloudinary.com/dawteptkh/image/upload/v1718136690/IMG_3775_wcuqks.jpg" alt="" />
      <h1 id="websites-header">Need a logo? Start here.</h1>
      <h3 className="website-page-headers">Meeting</h3>
      <p className="website-page-p">With something as specific and crucial to your business as a logo, it is important for me to meet with you either in-person or over the phone. This leaves room for questions both ways and establishes good communication from the start - So give me a call!</p>
      <h3 className="website-page-headers">Price</h3>
      <p className="website-page-p">My base price for a logo is $300 with $150 of that required up-front. Variations will be $100/each. You will receive the rights to your logo along with .jpeg and .png files of your logo.</p>
      <h3 className="website-page-headers">Design Process</h3>
      <p className="website-page-p">I will create multiple sketches for a given logo. I will do my best to keep you updated while I work as it is important to have your input before and during the design process. Details like color and font are important to get exactly right because they will establish a brand for your business!</p>
    </div>
  )
}

export default Logos;