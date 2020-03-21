import React from 'react'
import styles from './index.module.css'

function ArticleCard (props) {

  return (
    <div className={styles.container}>
      {
        props.list.map( ( article ) => (

          <div className={styles.cardArticle}>
            <p className={styles.articleTitle}>
              {article.articleId}
            </p>
            <p>
              Los conductores de vehículos no motorizados tienen preferencia de paso sobre los vehículos motorizados:
            </p>
            <div className={styles.containerPenalizaciones}>
              <div className={styles.corralon}>
                <div className={styles.circleCorralon}></div>
                <span className={styles.textCorralon}>Corralon: Sí</span>
              </div>
              <div className={styles.corralon}>
                <div className={styles.circleUmas}></div>
                <span className={styles.textCorralon}>Hasta $800</span>
              </div>
            </div>
          </div>

         ) )
      }
    </div>
  )
}

export default ArticleCard
