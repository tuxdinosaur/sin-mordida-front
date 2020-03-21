import React, { useEffect, useState } from 'react'

import api from '../lib/api'

import ArticleCard from '../components/ArticleCard'

function Search() {

  const [ articles, setArticles ] = useState([])

  useEffect( () => {
    async function getArticles() {
      const payload = await api.getArticles()

      console.log(payload)

      if (articles.length !== payload.data.allArticles.length) setArticles(payload.data.allArticles)
    }

    getArticles()
  }, articles )

  return (
    <ArticleCard
      list= {articles}
    />
  )

}

export default Search
