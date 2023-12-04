import { useEffect } from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  useEffect(() => {
    document.title = "Vita Web Design | Pricing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="pricing">
      <div className="container">
        <h1>Pricing</h1>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <img className="pricing-icons" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701650656/contract_1_eclx5g.png" alt="" width="64px"/>
              </div>
              <h2 className="col pricing-text">Quotes</h2>
            </div>
            <h3>In order to be accurate, I personally quote every website I design. A basic four-page website will start at $500. Any functional components (e.g. online store, blog, or photo gallery) will be added on top of that.</h3>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <img className="pricing-icons" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701650648/money_fbkuus.png" alt="" width="64px"/>
              </div>
              <h2 className="col pricing-text">Downpayment</h2>
            </div>
            <h3>I require a $250 downpayment before beginning any work on a website, </h3>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <img className="pricing-icons" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701650639/addon_tbhjne.png" alt="" width="64px"/>
              </div>
              <h2 className="col pricing-text">Add-Ons</h2>
            </div>
            <h3>I will be up-front about any extra costs if you would like to add a page, section or functionality to your website. This can be done before or during the design process.</h3>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Pricing;