import React, { useState } from 'react'
import styles from '../HeaderProfile/header.module.css'
import meImg from '../assets/mejc.jpeg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbDownload, TbMessageLanguage } from 'react-icons/tb'
import { Fade } from 'react-awesome-reveal'
import 'remixicon/fonts/remixicon.css'
import '../HeaderProfile/header.css'
import MainInfo from '../MainInfo/mainInfo'
import Swal from 'sweetalert2'

export default function Header() {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  })

  const [stateTheme, setStateTheme] = useState(false)
  const [language, setLanguage] = useState('false')

  const toggleLanguage = () => {
    // language === 'false' ? setLanguage('true') : setLanguage('false')
    if (language === 'false') {
      setLanguage('true')
      Toast.fire({
        icon: 'success',
        title: 'Idioma cambiado'
      })
    } else {
      setLanguage('false')
      Toast.fire({
        icon: 'success',
        title: 'Language changed'
      })
    }

  }

  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme')
    setStateTheme(!stateTheme)
  }
  return (
    <>
      {/* THEME BUTTON */}
      <Fade>
        <div className={styles.profileContainer}>
          <i className={stateTheme === false ? 'ri-moon-line change-theme' : 'ri-sun-line change-theme'} onClick={() => toggleTheme()} id='theme-button' />


          <div className={styles.profileContainerGrid}>
            <div className={styles.profileData}>
              <div className={styles.profileBorder}>
                <div className={styles.profilePerfil}>
                  <img src={meImg} alt='img_mine' className={styles.styleImage} />
                </div>
              </div>

              <h2 className={styles.profileName}>Jose Casanova</h2>
              <h2 className={styles.profileProfession}>Web developer</h2>

              <ul className={styles.profileSocial}>
                <a href='https://www.linkedin.com/in/jacasanova98/' target='_blank' rel="noopener noreferrer" className={styles.profileSocialLink}>
                  <FaLinkedin className={styles.iconsRed} />
                </a>
                <a href='https://github.com/Ja-casn' target='_blank' rel="noopener noreferrer" className={styles.profileSocialLink}>
                  <FaGithub className={styles.iconsRed} />
                </a>
              </ul>
            </div>
          </div>

          {/* <----- PROFILE INFO -----> */}

          <div className={styles.profileInfoGrid}>
            <div className={styles.profileInfoGroup}>
              <h3 className={styles.profileInfoNumber}>1</h3>
              <div className={styles.profileInfoDescription}>
                {language === 'false' ? <p>Year of <br /> work</p> : <p>Año de <br /> trabajo</p>}
              </div>
            </div>
            <div className={styles.profileInfoGroup}>
              <h3 className={styles.profileInfoNumber}>+3</h3>
              <div className={styles.profileInfoDescription}>
                {language === 'false' ? <p>Completed <br /> projects</p> : <p>Proyectos <br /> completados</p>}
              </div>
            </div>
            <div className={styles.profileInfoGroup}>
              <h3 className={styles.profileInfoNumber}>+1</h3>
              <div className={styles.profileInfoDescription}>
                {language === 'false' ? <p>Satisfied <br /> customers</p> : <p>Clientes <br /> satisfechos</p>}
              </div>
            </div>
          </div>

          {/* <----- END PROFILE INFO -----> */}


          {/* <-----  PROFILE BUTTONS -----> */}
          <div className={styles.mainContainerButtons}>
            <div className={styles.downloadButton}>
              <span href='' className={styles.downloadButton}>
                {language === 'false' ? <a href='https://drive.google.com/file/d/1yYcP8ZHGlxEHSFiQUwCnrtVW_XkMPw8q/view?usp=sharing' target='_blank' rel="noopener noreferrer"><p className='text-download'>Download CV</p></a> : <a href='https://drive.google.com/file/d/1iCOSCOJD_mlw87Ng5OZSpNpRGIBFD57M/view?usp=sharing' target='_blank' rel="noopener noreferrer"><p className='text-download'>Descargar CV</p></a>} <TbDownload />
              </span>
            </div>

            <div className={styles.containerLanguage}>
              <button onClick={(language) => toggleLanguage(language)} className={styles.btnLanguage}>
                <TbMessageLanguage className={styles.btnLanguageIcon} />
              </button>
            </div>
          </div>

          {/* <----- END PROFILE BUTTONS -----> */}

        </div>
      </Fade>
      <MainInfo language={language} />
    </>
  )
}
