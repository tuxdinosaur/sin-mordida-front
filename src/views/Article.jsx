import React, { useState, useEffect } from 'react'

import api from '../lib/api'

function Article(props) {
  const [article, setArticle] = useState({})
  const id = props.match.params.articleId

  console.log(id)

  useEffect(() => {
    async function getArticle() {
      const payload = await api.getArticle(id)

      console.log(payload.data.article[0])
      if (article === {}) setArticle(payload.data.article[0])

    }

    getArticle()
  }, [article])

  const list = article
  console.log('Articulo', list)

  return (
    <div>
      <h5>
        articulo
      </h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempora incidunt id quod a corrupti quisquam odio ad aspernatur, velit, facilis sapiente rem! Dignissimos nesciunt perspiciatis reiciendis voluptate similique odit.</p>

    </div>
  )

}

export default Article
