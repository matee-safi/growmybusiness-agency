import * as React from 'react'
import * as styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h3>GrowMyBusiness</h3>
      <a href="mailto:growmybusiness.agency@gmail.com" target="blank"><img src="/email.png" alt="email" width="40" /></a>
      <div className={styles.btn}>
        <p>Contact</p>
      </div>
    </nav>
  )
}
