import React from 'react'
import styles from './contact.module.css'
import { Fade } from 'react-awesome-reveal'

export default function Contact() {
    return (
        <Fade direction='up'>
        <div className={styles.formContainer}>
            <form action="https://formsubmit.co/jacapersonal04@gmail.com" method="POST" className={styles.formInfo}>
                <label className={styles.labelNames}>Name</label>
                <input type="text" placeholder='Name' className={styles.inputStyles} />
                <label className={styles.labelNames}>Email</label>
                <input type="text" placeholder='Email' className={styles.inputStyles} />

                <textarea type="text" className={styles.textArea} placeholder='Write a message'></textarea>
                <button type="submit" className={styles.btnSubmit}><span className={styles.labelNames}>Send</span></button>
            </form>
        </div>
        </Fade>
    )
}
