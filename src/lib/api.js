const API_URL = 'http://localhost:8080/api/v1'

async function getArticles() {

  const emptyResponse = { data: { articles: [] } }

  try {

    const response = await window.fetch(`${API_URL}/articles`)

    const payload = await response.json()

    if (!response.ok) {
      if (response.status >= 500) window.alert("Error al conectarse al servidor")


      return emptyResponse
    }

    payload.data.allArticles = payload.data.allArticles.map((badArticle) => ({
      id: badArticle._id,
      articleId: badArticle.articleId,
      abstract: badArticle.abstract,
      fractions: badArticle.fractions,
      penalties: badArticle.table,
      umas: badArticle.umas,
      licensePoints: badArticle.licensePoints,
      platePoints: badArticle.platePoints,
      isPound: badArticle.isPound,
      tags: badArticle.tags
    }))
    console.log(payload)

    return payload

  } catch (error) {

    window.alert("Ocurrió un error :(")

    return emptyResponse

  }
}

async function getArticle(articleId) {

  const emptyResponse = { data: { articles: {} } }

  try {

    const response = await window.fetch(`${API_URL}/articles/${articleId}`)

    const payload = await response.json()

    if (!response.ok) {
      if (response.status >= 500) window.alert("Error al conectarse al servidor")


      return emptyResponse
    }

    return payload

  } catch (error) {

    window.alert("Ocurrió un error :(")

    return emptyResponse

  }
}

const api = {
  getArticles,
  getArticle
}

export default api
