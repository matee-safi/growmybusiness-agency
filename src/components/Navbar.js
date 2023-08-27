import * as React from 'react'
import * as styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h3>GrowMyBusiness</h3>
      <div className={styles.btn}>
        <p>Contact</p>
      </div>
    </nav>
  )
}

export default Navbar
