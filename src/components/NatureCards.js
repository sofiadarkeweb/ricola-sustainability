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
import testImg from "../images/testImg.png"

import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
// import React, { useState } from "react"

const MoreDeets = () => {
  const cardInfo = [
    {
      image: Herbimg11,
      title: "Emission Transparency",
      text:
        "We are gathering data from our business world wide to acheieve 100% Emission Transparency. To diminish our carbon footprint and to open up for communication about how to run our company and at the same time give something back to our precious eco systems.",
      caption: "Lemon Balm",
      goal: "Emission Transparency",
    },
    {
      image: Herbimg1,
      title: "Sustainable Agriculture",
      text:
        "We are gathering data from our business world wide to acheieve 100% Emission Transparency. To diminish our carbon footprint and to open up for communication about how to run our company and at the same time give something back to our precious eco systems.",
      caption: "Wild Thyme",
      goal: "Sustainable Agriculture",
    },
    {
      image: Herbimg2,
      title: "Zero Pesticides",
      text:
        "We are gathering data from our business world wide to acheieve 100% Emission Transparency. To diminish our carbon footprint and to open up for communication about how to run our company and at the same time give something back to our precious eco systems.",
      caption: "Linden Flowers",
      goal: "Zero Pesticides",
    },
    {
      image: Herbimg3,
      title: "Distribution & Logistics",
      text:
        "We are gathering data from our business world wide to acheieve 100% Emission Transparency. To diminish our carbon footprint and to open up for communication about how to run our company and at the same time give something back to our precious eco systems.",
      caption: "Linden Flowers",
      goal: "Distribution & Logistics",
    },
    {
      image: Herbimg4,
      title: "Reduce Waste",
      text:
        "We are gathering data from our business world wide to acheieve 100% Emission Transparency. To diminish our carbon footprint and to open up for communication about how to run our company and at the same time give something back to our precious eco systems.",
      caption: "Hyssop",
      goal: "Reduce Waste",
    },
    {
      image: Herbimg5,
      title: "Recyclable/Compostable/Biodegradeable",
      text:
        "We are gathering data from our business world wide to acheieve 100% Emission Transparency. To diminish our carbon footprint and to open up for communication about how to run our company and at the same time give something back to our precious eco systems.",
      goal: "Recyclable/Compostable/Biodegradeable",
      caption: "Thyme",
    },
    {
      image: Herbimg6,
      title: "FSC Certification",
      text:
        "We are gathering data from our business world wide to acheieve 100% Emission Transparency. To diminish our carbon footprint and to open up for communication about how to run our company and at the same time give something back to our precious eco systems.",
      goal: "FSC Certification",
      caption: "Horehound",
    },
    {
      image: Herbimg7,
      title: "Water Reduction",
      text:
        "We are gathering data from our business world wide to acheieve 100% Emission Transparency. To diminish our carbon footprint and to open up for communication about how to run our company and at the same time give something back to our precious eco systems.",
      goal: "Water Reduction",
    },
  ]

  const renderCard = (card, index) => {
    const Modal = () => (
      <Popup
        // className="popup-content"
        // style={{ padding: 20, border: "4px solid #d7d7d7" }}
        trigger={<button className="button">{card.goal}</button>}
        modal
      >
        <div>
          {/* <img variant="top" className="testImg" src={testImg} /> */}
          <h2 className="goalTitle">{card.goal}</h2>
          <div className="modalcontent">
            <div className="imgcontent">
              <div className="caption">{card.caption}</div>
              <img /*variant="top" */ className="popupimg" src={card.image} />
              <p className="smallcaption">Member of our herb family</p>
            </div>
            <div className="sidetext">
              <div className="modaltext">{card.text}</div>
              <button className="quizBtn">Try out the green quiz!</button>
            </div>
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
