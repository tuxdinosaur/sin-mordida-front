import React, { useEffect, useState } from 'react'

import api from '../lib/api'

import ArticleList from '../components/ArticleList'

function Search() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function getArticles() {
      const payload = await api.getArticles()

      console.log(payload)

      if (articles.length !== payload.data.allArticles.length) setArticles(payload.data.allArticles)
    }

    getArticles()
  }, articles)

  return (
    <ArticleList
      list={articles}
    />
  )

}

export default Search
