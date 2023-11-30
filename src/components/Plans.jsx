import { useEffect, useState } from "react";
import LogoDesign from "./LogoDesign";
import keys from "../../config/keys";
import axios from "axios";
import custom from "../pictures/Custom-website.png";
import basic from "../pictures/Simple-website.png";
import maintenance from "../pictures/maintenance.png";

const Plans = () => {
  const [plansData, setPlansData] = useState();
  useEffect(() => {
    axios.get(`https://vita-web-design-api.herokuapp.com/api/plans`,{
      headers:{
        "Access-Control-Allow-Origin": "https://www.vitawd.com",
        "Access-Control-Allow-Credentials": true,
        "accepts":"application/json"
      }
    }).then(
      response => {
        setPlansData(response.data)
      }
    )
  }, [])

  const renderImages = (plan) => {
    if(plan.plan_name === "Basic Website Plan") return <img src={basic} className="plan-icon"></img>

    if (plan.plan_name === "Custom Website Plan") return <img src={custom} className="plan-icon"></img>

    if(plan.plan_name === "Website Maintenance") return <img src={maintenance} className="plan-icon"></img>

    return
  }

  const renderPlans = () => {
    return plansData ? (
      plansData.map(plan => {
        return (
          <div className="col plan-div" key={plan._id}>
            {renderImages(plan)}
            <h2>{plan.plan_name} <span>{plan.price}</span></h2>
            <p className="plan-description">{plan.description}</p>
            <ul>
              {plan.features.map(feature => {
                return <li key={feature}>{feature}</li>
              })}
            </ul>
          </div>
        )
      })
    ) : (
      ""
    )
  }

  return (
    <div>
      <div className="row">
        {renderPlans()}
      </div>
      <div style={{textAlign: "center", width: "100%", paddingTop: "50px"}}>
        <a style={{color: "white", textDecoration: "underline", fontSize: "20px"}} href="https://www.semrush.com/blog/what-is-seo/">What is Search Engine Optimization (SEO)?</a>
      </div>
      <LogoDesign/>
    </div>
  )
}

export default Plans;