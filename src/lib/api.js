// const API_URL = 'https://sin-mordida-api.mybluemix.net/api/v1'
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

    return payload

  } catch (error) {

    window.alert("Ocurrió un error :(")

    return emptyResponse

  }
}

async function getSearch(text) {

  const emptyResponse = { data: { articles: [] } }

  try {

    const response = await window.fetch(`${API_URL}/articles?text=${text}`)

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

async function getFraction(fractionId) {

  const emptyResponse = { data: { fraction: {} } }

  try {

    const response = await window.fetch(`${API_URL}/fractions/${fractionId}`)

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

async function getItem(itemId) {

  const emptyResponse = { data: { item: {} } }

  try {

    const response = await window.fetch(`${API_URL}/items/${itemId}`)

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

async function getTable(tableId) {

  const emptyResponse = { data: { table: {} } }

  try {

    const response = await window.fetch(`${API_URL}/tables/${tableId}`)

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
  getArticle,
  getFraction,
  getItem,
  getTable,
  getSearch
}

export default api
