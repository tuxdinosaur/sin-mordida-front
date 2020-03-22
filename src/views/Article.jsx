import React from 'react'

function Article(props) {
  console.log(props.match.params.articleId)

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
