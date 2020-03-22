import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import ArticleCard from '../ArticleCard'

function ArticleList(props) {

  return (
    <div className={styles.container}>
      {
        props.list.map((article, index) => (
          <Link
            key={article.id || `articles-${article.articleId}`}
            to={`/articles/${article.articleId}`}
          >
            <ArticleCard
              articleId={article.articleId}
              abstract={article.abstract}
              umas={article.umas}
              licensePoints={article.licensePoints}
              platePoints={article.platePoints}
              isPound={article.isPound}
              tags={article.tags}
            />
          </Link>

        ))
      }
    </div>
  )
}

export default ArticleList
