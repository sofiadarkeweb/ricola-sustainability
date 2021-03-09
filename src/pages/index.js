import React from "react"
import Headerin from "../components/HeadIn"
import Footer from "../components/Footer"
import Middle from "../components/Middle"

// import Nature from "../nature"
// import styles from "../styles/StylesGlobal"
import "bootstrap/dist/css/bootstrap.min.css"
// import * as ReactBootStrap from "react-bootstrap"

const background ={
  backgroundColor:"#1E4C45"
}


export default function App() {
  return (
    <div className="app">
      <Headerin />
      <Middle />
      <Footer />
    </div>
  )
}

//alternativt sätt
// function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   )
// }

// export default App

//hej
