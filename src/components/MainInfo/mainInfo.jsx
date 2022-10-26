import React from 'react'
import styles from '../MainInfo/main.module.css'
import { HiLink } from 'react-icons/hi'
import { Fade } from 'react-awesome-reveal'
import { BrowserRouter as Router } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { TbArrowBigTop } from 'react-icons/tb'
import { dataProjects } from '../assets/dataProjects.js'
import { Skills } from '../Skills/skills';



export default function MainInfo({ language }) {


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
                  {language === 'false' ? <p>Skills</p> : <p>Habilidades</p>}
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
                  {language === 'false' ? <p>Projects</p> : <p>Proyectos</p>}
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
                  {language === 'false' ? <p>Contact</p> : <p>Contacto</p>}
                </button>
              </Link>
            </ul>

            <div className={styles.filtersSections}>


              <Skills language={language} />

              <h1 id='projects'>
                {language === 'false' ? <p>PROJECTS</p> : <p>PROYECTOS</p>}
              </h1>



              <div className={styles.projectsContentGrid}>
                {/* ARTICLE - 1 */}
                {dataProjects.map((item) => {
                  return (
                    <div className={styles.projectsCard} key={item.nameProject}>
                      <img src={item.imageProject} alt='reference1' className={styles.projectsImg} />

                      <div className={styles.projectsModal}>
                        <div>
                          <span className={styles.projectSubtitle}>{item.subtitle}</span>
                          <h3 className={styles.projectTitle}> {item.nameProject} </h3>

                          <button className={styles.projectButtonSmall}>
                            <a
                              href={item.deploy}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <HiLink className={styles.buttonLink} />
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>

          <button onClick={() => scrollToTop()} className={styles.btnUp}>
            <TbArrowBigTop className={styles.arrowButton} />
          </button>
        </div>
      </Fade>

      <Fade direction='left'>
        <h1 className={styles.contactTitle} id='contact'>
          {language === 'false' ? <p>CONTACT</p> : <p>CONTACTO</p>}
        </h1>
      </Fade>
    </Router>
  )
}
