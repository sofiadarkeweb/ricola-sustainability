import React from "react"
import styles from "./header.module.css"

const Header = ({ title }) => {
  return (
    <div>
      <h1 className={styles.header}>{title}</h1>
    </div>
  )
}

Header.defaultProps = {
  title: "Nature",
}

export default Header
