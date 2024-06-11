import { useEffect } from "react";
import "../styles/Pricing.css";
import { Link } from "react-router-dom";

const Pricing = () => {
  useEffect(() => {
    document.title = "Vita Web Design | Pricing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="pricing">
        <img className="weblog-image" src="https://res.cloudinary.com/dawteptkh/image/upload/v1707321890/IMG_4278F04E118F-1_wczkqo.jpg" alt="" />
        <h1 id="websites-header">Pricing</h1>
        <h3 className="website-page-headers">Quotes</h3>
        <p className="website-page-p">In order to be accurate, I personally quote every website I design. A basic four-page website will start at $500. Any additional pages or components (e.g. online store, blog, or photo gallery) will be priced specifically for each website.</p>
        <h3 className="website-page-headers">Downpayment</h3>
        <p className="website-page-p">I require half down before beginning work on a given website. This reserves your time slot, allowing me to devote time and effort to your custom website. The remaining balance will be due on completion of the site.</p>
        <h3 className="website-page-headers">Add-Ons</h3>
        <p className="website-page-p">I will be up-front about any extra costs. Things often come up during the design process and it's important to be flexible. Extras such as pages and sections will add value and therefore cost more.</p>
        <h3 className="website-page-headers">Domains</h3>
        <p className="website-page-p">Every website needs a good domain name. I use <Link id="pricing-link-one" to="namecheap.com/domains">Namecheap</Link> for all my domains and custom emails. Click <Link id="pricing-link-two" to="https://www.namecheap.com/domains/domain-definition-what-is-a-domain-name/">here</Link> to learn more about what a domain is and why you need one. I offer domain renewal packages! Get a discount when you update your website each time your domain renews.</p>
    </div>
  )
};

export default Pricing;