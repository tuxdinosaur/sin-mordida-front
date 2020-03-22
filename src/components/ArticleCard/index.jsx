import React from 'react'
import styles from './index.module.css'
import PenaltyPreview from '../PenaltyPreview'

function ArticleCard(props) {
  return (
    <div className={styles.cardArticle}>
      <p className={styles.articleTitle}>
        Artículo {props.articleId}
      </p>
      <p>
        {props.abstract}
      </p>
      <div className={styles.containerPenalizaciones}>
        <PenaltyPreview
          type="isPound"
          value={props.isPound}
        />
        <PenaltyPreview
          type="umas"
          value={props.umas}
        />
      </div>
    </div>
  )
}

export default ArticleCard
