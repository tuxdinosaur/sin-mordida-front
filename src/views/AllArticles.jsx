import React, { useEffect, useState } from 'react'

import api from '../lib/api'

import ArticleList from '../components/ArticleList'

import SearchBox from '../components/SearchBox'

function AllArticles() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function getArticles() {
      const payload = await api.getArticles()

      if (articles.length !== payload.data.allArticles.length) setArticles(payload.data.allArticles)
    }

    getArticles()
  }, [articles])

  return (
    <div>
      <SearchBox />

      <ArticleList
        list={articles}
      />
    </div>
  )

}

export default AllArticles
