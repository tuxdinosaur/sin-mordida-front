import React from 'react'

import treeOrange from '../../assets/images/tree-orange.png'
import car from '../../assets/images/car-red.png'
import treeGreen from '../../assets/images/tree-green.png'
import rules from '../../assets/images/rules-purple.png'
import alert from '../../assets/images/alert-white.png'

import SearchBox from '../SearchBox'

import styles from './index.module.css'

function HomeComponent(props) {
  return (
    <div>
      <div className={styles.containerBlue}>

        <div className={styles.container}>

          <div className={styles.header}>

            <div className={styles.searchContainer}>

              <h2 className={styles.title__searchContainer}>
                Buen día, <br /> ¿Qué necesitas?
            </h2>

              <SearchBox />

              <div className={styles.containerImages}>
                <img src={treeOrange} alt="" />
                <img src={car} alt="" />
                <img src={treeGreen} alt="" />
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className={styles.container}>

        <h3 className={styles.consultaText}>
          Consulta rápida
          </h3>

        <div className={styles.optionsContainer}>
          <a href="./articles" className={styles.cardOption}>
            <img className={styles.rulesImage} src={rules} alt="" />
            <p className={styles.cardText}>
              Reglamento completo
              </p>
          </a>
        </div>

      </div>

      <div className={styles.containerAlert}>
        <div className={styles.containerAlertBtn}>
          <img className={styles.alertImage} src={alert} alt="" />
          <p className={styles.textAlert}>
            Un oficial me detuvo
          </p>
          <svg className={styles.alertContainerSVG} width="260" height="260">
            <path d="M0,0 a1,1 0 0,0 260,0" />
          </svg>
        </div>
      </div>

    </div>
  )

}

export default HomeComponent
