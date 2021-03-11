import React from "react"
import Headerin from "../components/HeadIn"
import Footer from "../components/Footer"
import Middle from "../components/Middle"
import Navbar from "../components/Navbar"

// import Nature from "../nature"
// import styles from "../styles/StylesGlobal"
import "bootstrap/dist/css/bootstrap.min.css"
// import * as ReactBootStrap from "react-bootstrap"

export default function App() {
  return (
    <div className="app">
      <Navbar />
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
