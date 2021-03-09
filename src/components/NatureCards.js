import React from "react"
import styles from "./Box.css"
import { Card } from "react-bootstrap"
import Herbimg from "../images/herbimg.jpg"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
// import React, { useState } from "react"

const MoreDeets = () => {
  const cardInfo = [
    {
      image: Herbimg,
      title: "Lebron James",
      text: "THE GOAT",
      caption: "herb",
      goal: "goal nr1",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
    {
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Steph Curry",
      text: "he good",
    },
    {
      image:
        "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
      title: "Michael Jordan",
      text: "he is very close to goat",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James",
      text: "THE GOAT",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
    {
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Steph Curry",
      text: "he good",
    },
    {
      image:
        "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
      title: "Michael Jordan",
      text: "he is very close to goat",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James",
      text: "THE GOAT",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
    {
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Steph Curry",
      text: "he good",
    },
    {
      image:
        "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
      title: "Michael Jordan",
      text: "he is very close to goat",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James",
      text: "THE GOAT",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
    {
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Steph Curry",
      text: "he good",
    },
    {
      image:
        "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
      title: "Michael Jordan",
      text: "he is very close to goat",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James",
      text: "THE GOAT",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
    {
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Steph Curry",
      text: "he good",
    },
    {
      image:
        "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
      title: "Michael Jordan",
      text: "he is very close to goat",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James",
      text: "THE GOAT",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
    {
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Steph Curry",
      text: "he good",
    },
    {
      image:
        "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
      title: "Michael Jordan",
      text: "he is very close to goat",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James",
      text: "THE GOAT",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
    {
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Steph Curry",
      text: "he good",
    },
    {
      image:
        "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
      title: "Michael Jordan",
      text: "he is very close to goat",
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
