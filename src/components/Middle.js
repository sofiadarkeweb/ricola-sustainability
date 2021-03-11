import React from "react"
import "./ricola-index.css"
import Nature from "../images/ricolaNature.png"
import People from "../images/people.png"
import Bussines from "../images/bussines.png"
import Ricola from "../images/ricola.png"
// import natureURL from "../pages/nature.js"
import "./ricola-index.css"
import { BrowserRouter, Route, Link } from "react-router-dom"
// import { Link } from "react-router-dom"

// import "../nature.js"

const Middle = () => {
  return (
    <div>
      <div className="mainGrid">
        <div className="subgrid">
          <img className="indexImg" src={Nature} />
        </div>
        <div className="subgrid">
          <span>{/* <Link to={natureURL}>nature</Link> */}</span>

          <img className="indexImg" src={People} />
        </div>
        <div className="subgrid">
          <img className="indexImg" src={Bussines} />
        </div>
        <div className="subgrid">
          <img className="indexImg" src={Ricola} />
        </div>
      </div>
    </div>
  )
}
export default Middle
