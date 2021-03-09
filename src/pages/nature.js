import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
// import styles from "../styles/StylesGlobal"
import NatureCards from "../components/NatureCards"
import "bootstrap/dist/css/bootstrap.min.css"
import Toptext from "../components/Toptext"
import Navbar from "../components/Navbar"
// import * as ReactBootStrap from "react-bootstrap"

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Toptext />
      <NatureCards />
      <Footer />
    </div>
  )
}
