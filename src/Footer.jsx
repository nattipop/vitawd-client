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
            <p><img src="https://previews.dropbox.com/p/thumb/AB4F0vXcKAlZGKBaIfUTarVBY5742-Imln0u8VKnGKRZcGR4m2fr8y7_Rb4XkxGReHL6NLnC0UkkeztXc6i5D58hjLgKlXfzTUJMwPYa1kPdlSCzdVNXOQviueksN741g3eR5HUPIGFHyEA_ISR2kszec0dR54iFn_ieosxxWxB0AShrZC46PI2pCSBmCeodJMC4hs1X2YwOpZ-_XtpKRmVXTKLxuyoo8wfa-C9LonS6zMr9noAZ6oZehLctm1Rws62vgVxXyMxCuJlnRNrDnnC-qnhzDVmp4HWtCf92IRZgGBuKwmOkGaV_utx0Gq1vJnpiChsSpCJlcccTrJYkaLiPHzFLTXaoFGiEZI62ZEundgvH8lLKOe4ya7lZUfsr48g/p.png" alt="Call" width="30px" /> (715) 642-1146</p>
          </div>
          <div className="col footer-columns" style={{minWidth: "250px"}}>
            <p><img src="https://previews.dropbox.com/p/thumb/AB582xuWOFWVl3FSuthFL5MfMQg_kebnoWCAyUs2Oycu16LYRYJbsuexAyZe_7xx-9Hv2pyRqboKv8rofvEo78U6vSrYn2C2NWQkyMN-oMn9WiXzE9Upavqmf-MbXG5fQLkRL34-O-kiPbvo9-qj1OV-zcFnqxzQFH1-nOcbLPmfpDrZouyOUitINBCOyG9XkNNXwiRd6g415h0xQ8RVPmb_l-WzpaI0rroHxtzXZzaRYUrueyHpBIcBtjJ0YMZ-buYB0j9EwoeXA9sj3flCLBvI_JZdJBLBU2x3hEywT2nzyNCh51SvoLeY0ABENE-m7tjb-VvQDWSh17oDch8GGCKq7s4fnzJ6T9VDIXmDQzSDbLKfS6J4jIm9pf3agh-TBac/p.png" alt="Email" width="30px" /> natalie@vitawd.com</p>
          </div>
          <div className="col"></div>
        </div>
        <p className="text-center" style={{color: "var(--website-accent-2)", paddingTop: "20px"}}>Website designed by Vita Web Design, LLC </p>
      </div>
    </div>
  )
}

export default Footer;