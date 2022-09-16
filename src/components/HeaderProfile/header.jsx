import React, { useState } from 'react'
import styles from '../HeaderProfile/header.module.css'
import meImg from '../assets/mejc.jpeg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbDownload } from 'react-icons/tb'
import { Fade } from 'react-awesome-reveal'
import 'remixicon/fonts/remixicon.css'
import '../HeaderProfile/header.css'

export default function Header() {

    const [stateTheme, setStateTheme] = useState(false)

    const toggleTheme = () => {
        document.body.classList.toggle('dark-theme')
        setStateTheme(!stateTheme)
    }
    return (
        <>
            {/* THEME BUTTON */}
            <Fade>
                <div className={styles.profileContainer}>
            <i className={stateTheme === false ? 'ri-moon-line change-theme' : 'ri-sun-line change-theme' } onClick={() => toggleTheme()} id='theme-button' />


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
                                    <FaLinkedin className={styles.iconsRed}/>
                                </a>
                                <a href='https://github.com/Ja-casn' target='_blank' rel="noopener noreferrer" className={styles.profileSocialLink}>
                                    <FaGithub className={styles.iconsRed}/>
                                </a>
                            </ul>
                        </div>
                    </div>

                    {/* <----- PROFILE INFO -----> */}

                    <div className={styles.profileInfoGrid}>
                        <div className={styles.profileInfoGroup}>
                            <h3 className={styles.profileInfoNumber}>1</h3>
                            <p className={styles.profileInfoDescription}>
                                Year of <br /> work
                            </p>
                        </div>
                        <div className={styles.profileInfoGroup}>
                            <h3 className={styles.profileInfoNumber}>+3</h3>
                            <p className={styles.profileInfoDescription}>
                                Completed <br /> projects
                            </p>
                        </div>
                        <div className={styles.profileInfoGroup}>
                            <h3 className={styles.profileInfoNumber}>+5</h3>
                            <p className={styles.profileInfoDescription}>
                                Satisfied <br /> customers
                            </p>
                        </div>
                    </div>

                    {/* <----- END PROFILE INFO -----> */}


                    {/* <-----  PROFILE BUTTONS -----> */}
                    <div className={styles.mainContainerButtons}>
                        <div className={styles.downloadButton}>
                            <span href='' className={styles.downloadButton}>
                                Download CV <TbDownload  />
                            </span>
                        </div>

                        <br />

                        {/* <div className={styles.profileButtons}>
                            <HiOutlineMail className={styles.buttonSmall} />
                        </div>

                        <div className={styles.profileButtons}>
                            <HiOutlineMail className={styles.buttonSmall} />
                        </div> */}
                    </div>

                    {/* <----- END PROFILE BUTTONS -----> */}

                </div>
            </Fade>
        </>
    )
}
