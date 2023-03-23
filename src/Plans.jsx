import { useEffect, useState } from "react";
import LogoDesign from "./LogoDesign";
import keys from "../config/keys";
import axios from "axios";

const Plans = () => {
  const [plansData, setPlansData] = useState();
  useEffect(() => {
    axios.get(`https://vita-web-design-api.herokuapp.com/api/plans`,{
      headers:{
        "Access-Control-Allow-Origin": "https://www.vitawd.com/",
        "accepts":"application/json"
      }
    }).then(
      response => response.json()
    ).then(
      data => setPlansData(data)
    )
  }, [])

  console.log(plansData)

  const renderPlans = () => {
    return plansData ? (
      plansData.map(plan => {
        return (
          <div className="col plan-div" key={plan._id}>
            <img src={plan.icon_url} className="plan-icon" />
            <h2>{plan.plan_name} <span>{plan.price}</span></h2>
            <p>{plan.description}</p>
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