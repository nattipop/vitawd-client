import phone from "./pictures/Untitled_Artwork 3.png";
import mail from "./pictures/Untitled_Artwork 1.png"

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col footer-columns">
            <a className="footer-links" href="https://www.instagram.com/vitawebdesign/"><p>Instagram</p></a>
          </div>
          <div className="col footer-columns">
            <a className="footer-links" href="https://www.facebook.com/profile.php?id=100090352163156"><p>Facebook</p></a>
          </div>
          <div className="col footer-columns" style={{minWidth: "200px"}}>
            <p><img src={phone} alt="Call" width="30px" /> (715) 642-1146</p>
          </div>
          <div className="col footer-columns" style={{minWidth: "250px"}}>
            <p><img src={mail} alt="Email" width="30px" /> natalie@vitawd.com</p>
          </div>
          <div className="col"></div>
        </div>
        <p className="text-center" style={{color: "var(--website-accent-2)", paddingTop: "20px"}}>Website designed by Vita Web Design, LLC </p>
      </div>
    </div>
  )
}

export default Footer;