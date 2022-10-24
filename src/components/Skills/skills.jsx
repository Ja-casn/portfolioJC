import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { BsCheckCircle } from 'react-icons/bs'
import styles from '../MainInfo/main.module.css'

export const Skills = ({ language }) => {
  return (
    <>
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
                    <span className={styles.skillsLevel}>
                      {language === 'false' ? <p>Intermediate</p> : <p>Intermedio</p>}
                    </span>
                  </div>
                </div>

                <div className={styles.skillsData}>
                  <BsCheckCircle className={styles.checkCircle} />

                  <div>
                    <h3 className={styles.skillsName}>React</h3>
                    <span className={styles.skillsLevel}>
                      {language === 'false' ? <p>Intermediate</p> : <p>Intermedio</p>}</span>
                  </div>
                </div>

                <div className={styles.skillsData}>
                  <BsCheckCircle className={styles.checkCircle} />

                  <div>
                    <h3 className={styles.skillsName}>Redux</h3>
                    <span className={styles.skillsLevel}>
                      {language === 'false' ? <p>Intermediate</p> : <p>Intermedio</p>}</span>
                  </div>
                </div>
              </div>

              <div className={styles.skillsGroup}>
                <div className={styles.skillsData}>
                  <BsCheckCircle className={styles.checkCircle} />

                  <div>
                    <h3 className={styles.skillsName}>HTML</h3>
                    <span className={styles.skillsLevel}>
                      {language === 'false' ? <p>Intermediate</p> : <p>Intermedio</p>}</span>
                  </div>
                </div>

                <div className={styles.skillsData}>
                  <BsCheckCircle className={styles.checkCircle} />

                  <div>
                    <h3 className={styles.skillsName}>CSS</h3>
                    <span className={styles.skillsLevel}>
                      {language === 'false' ? <p>Intermediate</p> : <p>Intermedio</p>}</span>
                  </div>
                </div>

                <div className={styles.skillsData}>
                  <BsCheckCircle className={styles.checkCircle} />

                  <div>
                    <h3 className={styles.skillsName}>Git</h3>
                    <span className={styles.skillsLevel}>
                      {language === 'false' ? <p>Medium</p> : <p>Medio</p>}
                    </span>
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
                    <span className={styles.skillsLevel}>
                      {language === 'false' ? <p>Medium</p> : <p>Medio</p>}</span>
                  </div>
                </div>

                <div className={styles.skillsData}>
                  <BsCheckCircle className={styles.checkCircle} />

                  <div>
                    <h3 className={styles.skillsName}>Express</h3>
                    <span className={styles.skillsLevel}>
                      {language === 'false' ? <p>Medium</p> : <p>Medio</p>}</span>
                  </div>
                </div>

                <div className={styles.skillsData}>
                  <BsCheckCircle className={styles.checkCircle} />

                  <div>
                    <h3 className={styles.skillsName}>Sequelize</h3>
                    <span className={styles.skillsLevel}>
                      {language === 'false' ? <p>Intermediate</p> : <p>Intermedio</p>}</span>
                  </div>
                </div>
              </div>

              <div className={styles.skillsGroup}>
                <div className={styles.skillsData}>
                  <BsCheckCircle className={styles.checkCircle} />

                  <div>
                    <h3 className={styles.skillsName}>MySQL</h3>
                    <span className={styles.skillsLevel}>
                      {language === 'false' ? <p>Intermediate</p> : <p>Intermedio</p>}</span>
                  </div>
                </div>

                <div className={styles.skillsData}>
                  <BsCheckCircle className={styles.checkCircle} />

                  <div>
                    <h3 className={styles.skillsName}>Python</h3>
                    <span className={styles.skillsLevel}>
                      {language === 'false' ? <p>Basic</p> : <p>Básico</p>}
                    </span>
                  </div>
                </div>

                <div className={styles.skillsData}>
                  <BsCheckCircle className={styles.checkCircle} />

                  <div>
                    <h3 className={styles.skillsName}>Django</h3>
                    <span className={styles.skillsLevel}>
                      {language === 'false' ? <p>Basic</p> : <p>Básico</p>}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Fade>
    </>
  )
}
