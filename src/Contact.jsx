import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [email, setEmail] = useState("");
  const [bn, setBn] = useState("");
  const [service, setService] = useState("");
  const [website, setWebsite] = useState(false);
  const [domain, setDomain] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [success, setSuccess] = useState();
  const [additionalInfo, setAdditional] = useState("");
  const [phone, setPhone] = useState("");

  const resetForm = () => {
    setFn("");
    setLn("");
    setEmail("");
    setBn("");
    setService("");
    setDomain(false);
    setWebsite(false);
    setAdditional("");
    setPhone("");
    document.getElementById("basic-website").checked = false;
    document.getElementById("custom-website").checked = false;
    document.getElementById("website-maintenance").checked = false;
    document.getElementById("logo-design").checked = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!fn) return setErrorMessage("First Name is required");
    if(!ln) return setErrorMessage("Last Name is required");
    if(!email) return setErrorMessage("Email is required");
    if(!phone) return setErrorMessage("Phone Number is required");
    if(!bn) return setErrorMessage("Business/Non-Profit Name is required");
    if(!service) return setErrorMessage("Please select a service");
    
    const data = {
      fName: fn,
      lName: ln,
      clientEmail: email,
      business: bn,
      service: service,
      haveWebsite: website,
      haveDomain: domain,
      additionalInfo: additionalInfo,
      clientPhone: phone
    };

    console.log(data)

    axios.post("https://vita-web-design-api.herokuapp.com/api/new-email", {
      headers:{
        "Access-Control-Allow-Origin": "https://www.vitawd.com",
        "Access-Control-Allow-Credentials": true
      },
      body: data
    }).then(res => {
      console.log(res);
      resetForm();
      setErrorMessage("");
      setSuccess("Your information has been submitted! I will call you as soon as possible.")
    }).catch((err) => {
      if (err) {
        setErrorMessage(err)
      }
    })
  }

  return (
    <div id="contact">
      <div className="row" style={{backgroundColor: "var(--website-theme)", width: "101vw", height: "100px"}}>
        <h2 className="col flex-center"><img src="https://previews.dropbox.com/p/thumb/AB4F0vXcKAlZGKBaIfUTarVBY5742-Imln0u8VKnGKRZcGR4m2fr8y7_Rb4XkxGReHL6NLnC0UkkeztXc6i5D58hjLgKlXfzTUJMwPYa1kPdlSCzdVNXOQviueksN741g3eR5HUPIGFHyEA_ISR2kszec0dR54iFn_ieosxxWxB0AShrZC46PI2pCSBmCeodJMC4hs1X2YwOpZ-_XtpKRmVXTKLxuyoo8wfa-C9LonS6zMr9noAZ6oZehLctm1Rws62vgVxXyMxCuJlnRNrDnnC-qnhzDVmp4HWtCf92IRZgGBuKwmOkGaV_utx0Gq1vJnpiChsSpCJlcccTrJYkaLiPHzFLTXaoFGiEZI62ZEundgvH8lLKOe4ya7lZUfsr48g/p.png" alt="Call" width="50px" /> (715) 642-1146</h2>
        <h2 className="col flex-center"><img className="contact-icon" src="https://previews.dropbox.com/p/thumb/AB582xuWOFWVl3FSuthFL5MfMQg_kebnoWCAyUs2Oycu16LYRYJbsuexAyZe_7xx-9Hv2pyRqboKv8rofvEo78U6vSrYn2C2NWQkyMN-oMn9WiXzE9Upavqmf-MbXG5fQLkRL34-O-kiPbvo9-qj1OV-zcFnqxzQFH1-nOcbLPmfpDrZouyOUitINBCOyG9XkNNXwiRd6g415h0xQ8RVPmb_l-WzpaI0rroHxtzXZzaRYUrueyHpBIcBtjJ0YMZ-buYB0j9EwoeXA9sj3flCLBvI_JZdJBLBU2x3hEywT2nzyNCh51SvoLeY0ABENE-m7tjb-VvQDWSh17oDch8GGCKq7s4fnzJ6T9VDIXmDQzSDbLKfS6J4jIm9pf3agh-TBac/p.png" alt="Email" width="50px" />  natalie@vitawd.com</h2>
        <h2 className="col flex-center"><img className="contact-icon" src="https://previews.dropbox.com/p/thumb/AB7_hPiZlMLc1s9azJ6T16FtZw1dNShKbasvqr6kRNP2hEXGlfIgiyNVZ5P3noqR0Sq5qIWcwgJOBB4wAsBhj5ffVBiYprTa-ECe1MmNrWpfR7pOQZI_tPdnsFkMLT4oEW8rSImkYcD6NF8F6zflUTnilvA0EWfFRiphKQLxBWdShsPaJbQ-JMQGrjgtR5GYO23ACJvujLtcjFKN2jQzTd8ylhuJih7ACXae4pIkFQFUYPQ_qTdtzMrU7NPPQVILp4ktoTY3NghtPQQcoalqU6I4PuSm5c6JhRqjYpXs1h_6LQb7DNY9QFYwCh9Rqe0uZCe_eIYulYtJLkTXjdJymhl9nBT0L-s2CzRUeSf0R-COk-T4e4xzvCbIURky9dpYvEE/p.png" alt="Instagram" width="50px" /> @vitawebdesign</h2>
      </div>
      <form id="contact-form">
        <h2 className="text-center schedule-text">If you're interested in scheduling a free consultation, fill in your info and I'll call you.</h2>
        <input onChange={(e) => setFn(e.target.value)} value={fn}className="text-input" placeholder="First Name" />
        <input onChange={(e) => setLn(e.target.value)} value={ln} className="text-input" placeholder="Last Name" />
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="text-input" placeholder="Email" />
        <input onChange={(e) => setPhone(e.target.value)} value={phone} className="text-input" placeholder="Phone Number" />
        <input onChange={(e) => setBn(e.target.value)} value={bn} className="text-input" placeholder="Business/Non-Profit Name" />
        <h3>Service you're interested in</h3>
        <div id="service-input">
          <div className="radio-input">
            <input onChange={(e) => setService(e.target.value)} type="radio" id="basic-website" name="service" value="basic website"/>
            <label for="meeting">Basic Website</label><br/>
          </div>
          <div className="radio-input">
            <input onChange={(e) => setService(e.target.value)} type="radio" id="custom-website" name="service" value="custom website"/>
            <label for="custom-website">Custom Website</label><br/>
          </div>
          <div className="radio-input">
            <input onChange={(e) => setService(e.target.value)} type="radio" id="website-maintenance" name="service" value="website maintenance"/>
            <label for="website-maintenance">Website Maintenance</label><br/>
          </div>
          <div className="radio-input">
            <input onChange={(e) => setService(e.target.value)} type="radio" id="logo-design" name="service" value="logo design"/>
            <label for="logo-design">Logo Design</label><br/>
          </div>
        </div>
        <h3><input onChange={() => setWebsite(!website)} className="form-checkbox" type="checkbox" checked={website} />I currently have a website</h3>
        <h3><input onChange={() => setDomain(!domain)} className="form-checkbox" type="checkbox" checked={domain}/>I own a domain that I would like to use for my website</h3>
        <h3 style={{marginTop: "40px"}}>Anything else you'd like to add?</h3>
        <textarea placeholder="Type any additional info here" value={additionalInfo} className="text-input" id="additional-info" onChange={(e) => setAdditional(e.target.value)} type="text" />
        <h3 id="error-message">{errorMessage ? (
            `* ${errorMessage} *`
          ) : ""
        }</h3>
        <button onClick={handleSubmit} id="submit-button">Submit</button>
      </form>
      <div className="container text-center" style={{paddingTop: "3vw"}}>
        <h2>I would love to hear from you!</h2>
        <h3>If you have any questions or would like more information<br/>on websites email me at natalie@vitawd.com</h3>
      </div>
      <div>{success ? (
        <div id="success-popup">
          <h1>{success}</h1>
          <button onClick={() => setSuccess("")}>Close</button>
        </div>
        ): ""}</div>
    </div>
  )
}

export default Contact;