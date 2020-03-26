import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import ArticleCard from '../ArticleCard'

function ArticleList(props) {

  return (
    <div className={styles.container}>
      <div className="row">
      {
        props.list.map((article) => (
          <div className={`col-12- col-lg-6 ${styles.containerArticleCard}`}>
          <Link
            key={`article ${article.articleId}`}
            to={`/articles/${article.articleId}`}
              className={styles.containerArticleCard}
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
            </div>

            ))
            }
            </div>
    </div>
  )
}

export default ArticleList
