import React from 'react'

import styles from './index.module.css'
import PenaltyPreview from '../PenaltyPreview'

import titleIcon from '../../assets/images/title.png'

function ArticleCard(props) {
  return (
    <div className={styles.cardArticle}>
      <div className={styles.containerTitle}>
        <img className={styles.titleImage} src={titleIcon} alt=""/>
        <p className={styles.articleTitle}>
          Artículo {props.articleId}
        </p>
      </div>
      <p className={styles.abstract}>
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
