import { useState } from "react";
import axios from "axios";
import phoneicon from "./pictures/Untitled_Artwork 3.png";
import insta from "./pictures/Untitled_Artwork 2.png";
import mail from "./pictures/Untitled_Artwork 1.png";
import OneSignal from 'react-onesignal';

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

  var sendNotification = function(data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Basic NGEwMGZmMjItY2NkNy0xMWj"
    };
    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };
    var https = require('https');
    var req = https.request(options, function(res) {  
      res.on('data', function(data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });
    req.on('error', function(e) {
      console.log("ERROR:");
      console.log(e);
    });
    req.write(JSON.stringify(data));
    req.end();
  };

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
      setSuccess("Your information has been submitted! I will call you as soon as possible.");

    }).catch((err) => {
      if (err) {
        setErrorMessage(err)
      }
    })
    var message = {
      "app_id": "5eb5a37e-b458-11",
      "name": "Identifier for SMS Message",
      "sms_from": "+18449284102",
      "contents": { en: "Welcome to Cat Facts!", es: "Bienvenidos a Factos del Gato" },
      "sms_media_urls": ["https://cat.com/cat.jpg"],
      "include_phone_numbers": ["+7156421146"]
    };
    sendNotification(message);
  }

  return (
    <div id="contact">
      <div className="row cta-strip">
        <h2 className="col flex-center" style={{minWidth: "300px"}}><img src={phoneicon} alt="Call" width="50px" /> (715) 642-1146</h2>
        <h2 className="col flex-center"><img className="contact-icon" src={mail} alt="Email" width="50px" />  natalie@vitawd.com</h2>
        <h2 className="col flex-center insta-link"><img className="contact-icon" src={insta} alt="Instagram" width="50px" /> <a href="https://www.instagram.com/vitawebdesign/">@vitawebdesign</a></h2>
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