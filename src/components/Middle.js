import React from "react"
import "./ricola-index.css"
import Nature from "../images/ricolaNature.png"
import People from "../images/people.png"
import Bussines from "../images/bussines.png"
import Ricola from "../images/ricola.png"
import "./ricola-index.css"
import { Link } from "gatsby"

const Middle = () => {
  return (
    <div>
      <div className="mainGrid">
        <div className="subgrid">      
          <Link className="link" to="/nature">Nature</Link>
           <img className="indexImg" src={Nature} />
        </div>
        <div className="subgrid">
           <span>People</span>
           <img className="indexImg" src={People} />
        </div>
        <div className="subgrid">
           <span>Business</span>
           <img className="indexImg" src={Bussines} />
        </div>
        <div className="subgrid">
           <span>Ricola</span>
           <img className="indexImg" src={Ricola} />
        </div>
      </div>
    </div>
  )
}
export default Middle
