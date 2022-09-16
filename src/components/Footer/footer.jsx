import React from 'react'
import styles from '../Footer/footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.footerText}>
        &#169; <a href='https://www.linkedin.com/in/jacasanova98/'>Jose Casanova.</a> All rights reserved
      </span>

    </div>
  )
}
