import React, { useState, useEffect } from 'react'

import api from '../lib/api'

function Article(props) {
  // const [article, setArticle] = useState({})
  // const id = props.match.params.articleId
  //const [articleId, setArticleId] = useState('')
  const [abstract, setAbstract] = useState('')
  const [fractions, setFractions] = useState('')

  const { articleId } = props.match.params


  // console.log(id)

  useEffect(() => {
    async function getArticle() {
      const payload = await api.getArticle(articleId)
      console.log(payload.data.article[0])
      //setArticleId(payload.data.article.articleId)
      setAbstract(payload.data.article[0].abstract)
      setFractions(payload.data.article[0].fractions)

    }
    getArticle()
  }, [
    articleId

  ])

  return (
    <div>
      <h5>
        Artículo {articleId}
      </h5>
      <p>{abstract}</p>
      <h5>{fractions}</h5>
    </div>
  )

}

export default Article
