import React from 'react'
import styles from './index.module.css'

function HomeComponent() {
  return (
    <div>
      <div className={styles.containerBlue}>

        <div className={styles.container}>

          <div className={styles.header}>

            <div className={styles.searchContainer}>

              <h2 className={styles.title__searchContainer}>
                Buen día, <br /> ¿Qué necesitas?
            </h2>

              <a href="./articles">
                <form className={styles.formSearch}>
                  <input className={styles.inputSearch} type="text" placeholder="Realiza una búsqueda" />
                </form>
              </a>

              <img src="./assets/img/tree-64px--orange.png" alt="" />
              <img src="./assets/img/car-64px--red.png" alt="" />
              <img src="./assets/img/tree-64px--green.png" alt="" />
            </div>
          </div>

        </div>

      </div>

      <div className={styles.container}>

        <div>

          <h3>
            Consulta rápida
          </h3>

          <div className={styles.optionsContainer}>

            <div className={styles.cardOption}>
              <img src="./assets/img/rules-64px--purple.png" alt="" />
              <p>
                Reglamento completo
              </p>
            </div>

          </div>
        </div>

        <div className={styles.alertContainer}>
          <img src="./assets/img/alert-64px--white.png" alt="" />
          <p>
            Un oficial me detuvo
      </p>
        </div>

      </div>
    </div>
  )

}

export default HomeComponent
