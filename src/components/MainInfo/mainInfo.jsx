import React from 'react'
import styles from '../MainInfo/main.module.css'
import img2 from '../assets/img2.jpg'
import { HiLink } from 'react-icons/hi'
import { BsCheckCircle } from 'react-icons/bs'
import { Fade } from 'react-awesome-reveal'
import { BrowserRouter as Router } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { TbArrowBigTop } from 'react-icons/tb'

export default function MainInfo() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <Router>
            <Fade>
                <div className={styles.mainContainer}>
                    <div className={styles.filtersContainer}>
                        {/* <---- FILTER TABS ----> */}
                        <ul className={styles.filterContent}>
                            <Link
                                activeClass="active"
                                to="skills"
                                // spy={false}
                                smooth={true}
                                offset={-575}
                                duration={500}
                            >
                                <button className={styles.filtersButton}>
                                    Skills
                                </button>
                            </Link>

                            <Link
                                activeClass="active"
                                to="projects"
                                // spy={false}
                                smooth={true}
                                offset={-30}
                                duration={500}
                            >
                                <button className={styles.filtersButton}>
                                    Projects
                                </button>
                            </Link>

                            <Link
                                activeClass="active"
                                to="contact"
                                // spy={false}
                                smooth={true}
                                // offset={-30}
                                duration={700}
                            >
                                <button className={styles.filtersButton}>
                                    Contact
                                </button>
                            </Link>
                        </ul>

                        <div className={styles.filtersSections}>
                            {/* <---- PROJECTS ----> */}

                            {/* <---- SKILLS ----> */}
                            <Fade direction='left'>
                                <div className={styles.skillsContentGrid}>
                                    <div className={styles.skillsArea}>
                                        <h3 className={styles.skillsTitle} id='skills'>
                                            Frontend Developer
                                        </h3>

                                        <div className={styles.skillsBox}>
                                            <div className={styles.skillsGroup}>
                                                <div className={styles.skillsData}>
                                                    <BsCheckCircle className={styles.checkCircle} />

                                                    <div>
                                                        <h3 className={styles.skillsName}>Javascript</h3>
                                                        <span className={styles.skillsLevel}>Intermediate</span>
                                                    </div>
                                                </div>

                                                <div className={styles.skillsData}>
                                                    <BsCheckCircle className={styles.checkCircle} />

                                                    <div>
                                                        <h3 className={styles.skillsName}>React</h3>
                                                        <span className={styles.skillsLevel}>Intermediate</span>
                                                    </div>
                                                </div>

                                                <div className={styles.skillsData}>
                                                    <BsCheckCircle className={styles.checkCircle} />

                                                    <div>
                                                        <h3 className={styles.skillsName}>Redux</h3>
                                                        <span className={styles.skillsLevel}>Intermediate</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.skillsGroup}>
                                                <div className={styles.skillsData}>
                                                    <BsCheckCircle className={styles.checkCircle} />

                                                    <div>
                                                        <h3 className={styles.skillsName}>HTML</h3>
                                                        <span className={styles.skillsLevel}>Intermediate</span>
                                                    </div>
                                                </div>

                                                <div className={styles.skillsData}>
                                                    <BsCheckCircle className={styles.checkCircle} />

                                                    <div>
                                                        <h3 className={styles.skillsName}>CSS</h3>
                                                        <span className={styles.skillsLevel}>Intermediate</span>
                                                    </div>
                                                </div>

                                                <div className={styles.skillsData}>
                                                    <BsCheckCircle className={styles.checkCircle} />

                                                    <div>
                                                        <h3 className={styles.skillsName}>Git</h3>
                                                        <span className={styles.skillsLevel}>Medium</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* APARTADO 2 */}
                                    <div className={styles.skillsArea}>
                                        <h3 className={styles.skillsTitle}>
                                            Backend Developer
                                        </h3>

                                        <div className={styles.skillsBox}>
                                            <div className={styles.skillsGroup}>
                                                <div className={styles.skillsData}>
                                                    <BsCheckCircle className={styles.checkCircle} />

                                                    <div>
                                                        <h3 className={styles.skillsName}>Node.js</h3>
                                                        <span className={styles.skillsLevel}>Medium</span>
                                                    </div>
                                                </div>

                                                <div className={styles.skillsData}>
                                                    <BsCheckCircle className={styles.checkCircle} />

                                                    <div>
                                                        <h3 className={styles.skillsName}>Express</h3>
                                                        <span className={styles.skillsLevel}>Intermediate</span>
                                                    </div>
                                                </div>

                                                <div className={styles.skillsData}>
                                                    <BsCheckCircle className={styles.checkCircle} />

                                                    <div>
                                                        <h3 className={styles.skillsName}>Sequelize</h3>
                                                        <span className={styles.skillsLevel}>Intermediate</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.skillsGroup}>
                                                <div className={styles.skillsData}>
                                                    <BsCheckCircle className={styles.checkCircle} />

                                                    <div>
                                                        <h3 className={styles.skillsName}>MySQL</h3>
                                                        <span className={styles.skillsLevel}>Intermediate</span>
                                                    </div>
                                                </div>

                                                <div className={styles.skillsData}>
                                                    <BsCheckCircle className={styles.checkCircle} />

                                                    <div>
                                                        <h3 className={styles.skillsName}>Python</h3>
                                                        <span className={styles.skillsLevel}>Basic</span>
                                                    </div>
                                                </div>

                                                <div className={styles.skillsData}>
                                                    <BsCheckCircle className={styles.checkCircle} />

                                                    <div>
                                                        <h3 className={styles.skillsName}>Django</h3>
                                                        <span className={styles.skillsLevel}>Basic</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Fade>


                            <Fade direction='up'>
                                <h1 id='projects'>PROJECTS</h1>
                                <div className={styles.projectsContentGrid}>
                                    {/* ARTICLE - 1 */}
                                    <div className={styles.projectsCard}>
                                        <img src={'https://res.cloudinary.com/djmckgy47/image/upload/v1663290969/musicfyApp-pfGroup_bytuao.png'} alt='reference1' className={styles.projectsImg} />


                                        <div className={styles.projectsModal}>
                                            <div>
                                                <span className={styles.projectSubtitle}>Web</span>
                                                <h3 className={styles.projectTitle}>Streaming Music App</h3>

                                                <button className={styles.projectButtonSmall}>
                                                    <HiLink className={styles.buttonLink} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ARTICLE - 2 */}
                                    <div className={styles.projectsCard}>
                                        <img src={'https://res.cloudinary.com/djmckgy47/image/upload/v1663292106/countries1_hihbrb.png'} alt='reference1' className={styles.projectsImg} />


                                        <div className={styles.projectsModal}>
                                            <div>
                                                <span className={styles.projectSubtitle}>Web</span>
                                                <h3 className={styles.projectTitle}>Countries App</h3>

                                                <button className={styles.projectButtonSmall}>
                                                    <HiLink className={styles.buttonLink} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ARTICLE - 3 */}
                                    <div className={styles.projectsCard}>
                                        <img src={'https://res.cloudinary.com/djmckgy47/image/upload/v1663293933/portfolio_qz8wsl.png'} alt='reference1' className={styles.projectsImg} />


                                        <div className={styles.projectsModal}>
                                            <div>
                                                <span className={styles.projectSubtitle}>Web</span>
                                                <h3 className={styles.projectTitle}>Portfolio</h3>

                                                <button className={styles.projectButtonSmall}>
                                                    <HiLink className={styles.buttonLink} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ARTICLE - 4 */}
                                    <div className={styles.projectsCard}>
                                        <img src={img2} alt='reference1' className={styles.projectsImg} />


                                        <div className={styles.projectsModal}>
                                            <div>
                                                <span className={styles.projectSubtitle}>Web</span>
                                                <h3 className={styles.projectTitle}>In process</h3>

                                                <button className={styles.projectButtonSmall}>
                                                    <HiLink className={styles.buttonLink} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>


                        </div>
                    </div>

                    <button onClick={() => scrollToTop()} className={styles.btnUp}>
                        <TbArrowBigTop className={styles.arrowButton} />
                    </button>
                </div>
            </Fade>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Fade direction='left'>
            <h1 className={styles.contactTitle} id='contact'>CONTACT</h1>
            </Fade>
        </Router>
    )
}
