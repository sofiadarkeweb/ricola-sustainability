import React from "react"
import styles from "./Box.css"
import { Card } from "react-bootstrap"
import Herbimg1 from "../images/herbimg1.png"
import Herbimg2 from "../images/herbimg2.png"
import Herbimg3 from "../images/herbimg3.png"
import Herbimg4 from "../images/herbimg4.png"
import Herbimg5 from "../images/herbimg5.png"
import Herbimg6 from "../images/herbimg6.png"
import Herbimg7 from "../images/herbimg7.png"
import Herbimg8 from "../images/herbimg8.png"
import Herbimg9 from "../images/herbimg9.png"
import Herbimg11 from "../images/herbimg11.png"




import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
// import React, { useState } from "react"

const MoreDeets = () => {
  const cardInfo = [
    {
      image: Herbimg11,
      title: "Emission Transparency",
      text: "THE GOAT",
      caption: "herb",
      goal: "Emission Transparency",
    },
    {
      image: Herbimg1,
      title: "Sustainable Agriculture",
      text: "THE TRUE GOAT",
      goal: "Sustainable Agriculture",
    },
    {
      image: Herbimg2,
      title: "Zero Pesticides",
      text: "he good",
      goal: "Zero Pesticides",
    },
    {
      image: Herbimg3,
      title: "Distribution & Logistics",
      text: "he is very close to goat",
      goal: "Distribution & Logistics",

    },
    {
      image: Herbimg4,
      title: "Reduce Waste",
      text: "THE GOAT",
      goal: "Reduce Waste",
    },
    {
      image: Herbimg5,
      title: "Recyclable/Compostable/Biodegradeable",
      text: "THE TRUE GOAT",
      goal: "Recyclable/Compostable/Biodegradeable",
    },
    {
      image: Herbimg6,
      title: "FSC Certification",
      text: "he good",
      goal: "FSC Certification",
    },
    {
      image: Herbimg7,
      title: "Water Reduction",
      text: "he is very close to goat",
      goal: "Water Reduction",
    },
    {
      image: Herbimg8,
      title: "Biodiversity Principles",
      text: "THE GOAT",
      goal: "Biodiversity Principles",
    },
    {
      image: Herbimg9,
      title: "Renewable Energy",
      text: "THE TRUE GOAT",
      goal: "Renewable Energy",
    },
    
  ]

  const renderCard = (card, index) => {
    const Modal = () => (

      <Popup
        className="popupcontainer"
        trigger={<button className="button">{card.goal}</button>}
        modal
      >
        <div>
          <h2 className="goalTitle">{card.goal}</h2>
          <div className="modal-content">
            <img /*variant="top" */ className="popupimg" src={card.image} />
            <div>{card.title}</div>
            <div>{card.text}</div>
          </div>
        </div>

      </Popup>
    )
    return (      
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img
          className="cardImg"
          variant="top"
          /*src="holder.js/100px180"*/ src={card.image}
        />
        <Modal className="modal" />
      </Card>
    )
  }

  return <div className="grid">{cardInfo.map(renderCard)}</div>
}

export default MoreDeets
