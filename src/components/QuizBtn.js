import React from "react"
import styles from "./Box.css"

const btnStyle = {
  marginLeft: "50%",
}

const QuizBtn = () => {
  return (
    <div className="buttonContainer">
      <button className="quizBtn quizBtnMain" /*style={{ margin: "0 auto" }}*/>
        Try out the green quiz
      </button>
    </div>
  )
}

// Header.defaultProps = {
//   title: "Ricola",
// }

export default QuizBtn
