import * as React from 'react'
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";
import * as styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    
    <nav className={styles.navbar}>
      <Helmet>
        <link rel="icon" href={favicon} />
        <title>GrowMyBusiness</title>
      </Helmet>
      <a href="/">
        <h3>GrowMyBusiness</h3>
      </a>
    </nav>
  )
}

export default Navbar
