import React from "react"
import styles from "./Navbar.module.css"
import logo from "../images/ricola_logo.png"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} />
      <div className={styles.hamburgerwrapper}>
        <div className={styles.hamburgerlines}></div>
        <div className={styles.hamburgerlines}></div>
        <div className={styles.hamburgerlines}></div>
      </div>
    </div>
  )
}

// Header.defaultProps = {
//   title: "Ricola",
// }

export default Navbar
