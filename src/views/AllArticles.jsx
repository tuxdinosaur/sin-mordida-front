import React from 'react'

import ArticleList from '../components/ArticleList'

function AllArticles(props) {

  const articles = props.articles

  return (
    <div>
      <ArticleList
        list={articles}
      />
    </div>
  )

}

export default AllArticles
