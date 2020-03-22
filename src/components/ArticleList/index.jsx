import React from 'react'
import styles from './index.module.css'
import ArticleCard from '../ArticleCard'

function ArticleList(props) {

  return (
    <div className={styles.container}>
      {
        props.list.map((article) => (

          <ArticleCard
            articleId={article.articleId}
            abstract={article.abstract}
            umas={article.umas}
            licensePoints={article.licensePoints}
            platePoints={article.platePoints}
            isPound={article.isPound}
            tags={article.tags}
          />

        ))
      }
    </div>
  )
}

export default ArticleList
