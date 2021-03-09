import React from "react"


const Headerin = ({title}) => {
  return (
    <div>
      <h2 className = "title1">{title}</h2>
      <p className = "headText">Towards positive environmental impact. Enriching the lives of people and communities trough growth inspired by nature. Step by step.</p>
    </div>
  )
}

Headerin.defaultProps = {
  title: "Ricola Footsteps",
}

export default Headerin
