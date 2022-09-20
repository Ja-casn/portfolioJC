import React from 'react'
import styles from './contact.module.css'
import { Fade } from 'react-awesome-reveal'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

export default function Contact() {

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
    })

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u3dk0ih', 'template_j14mqc8', e.target, '63a2WS1QlKZyRqZQj')
            .then(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'Message send successfully'
                })
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <Fade direction='up'>
            <div className={styles.formContainer}>
                <form className={styles.formInfo} onSubmit={sendEmail}>
                    <label className={styles.labelNames}>Name</label>
                    <input 
                    type="text" 
                    placeholder='Name' 
                    className={styles.inputStyles} 
                    name='from_name' 
                    required='true'
                    />
                    
                    <label className={styles.labelNames}>Email</label>
                    <input 
                    type="text" 
                    placeholder='Email' 
                    className={styles.inputStyles} 
                    name='email_from' 

                    />

                    <textarea 
                    type="text" 
                    className={styles.textArea} 
                    placeholder='Write a message' 
                    name='message' 

                    />

                    <button type="submit" className={styles.btnSubmit}><span className={styles.labelNames}>Send</span></button>
                </form>
            </div>
        </Fade>
    )
}
