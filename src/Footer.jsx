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
          <div className="col footer-columns">
            <p>Call:<br/>(715) 642-1146</p>
          </div>
          <div className="col footer-columns">
            <p>Email: natalie@vitawd.com</p>
          </div>
          <div className="col"></div>
        </div>
        <p className="text-center" style={{color: "var(--website-accent-2)", paddingTop: "20px"}}>Website designed by Vita Web Design, LLC </p>
      </div>
    </div>
  )
}

export default Footer;