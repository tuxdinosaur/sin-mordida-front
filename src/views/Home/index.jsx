import React, { Component } from 'react'

import AllArticles from '../AllArticles'

import treeOrange from '../../assets/images/tree-orange.png'
import car from '../../assets/images/car-red.png'
import treeGreen from '../../assets/images/tree-green.png'

import api from '../../lib/api'
import styles from './index.module.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  async componentDidMount() {
    const payload = await api.getArticles()
    this.setState({
      articles: payload.data.allArticles
    })
  }

  async doSearch({ target }) {
    const text = target.value
    const payload = await api.getSearch(text)
    if (text !== '') {
      if (payload.data.article.length !== 0) {
        payload.data.allArticles = payload.data.article.map((badArticle) => ({
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
        console.log(payload.data.allArticles)
      }
    }
  }

  render() {
    return (
      <div>
        <div className={styles.containerBlue}>

          <div className={styles.container}>

            <div className={styles.header}>

              <div className={styles.searchContainer}>

                <h2 className={styles.title__searchContainer}>
                  Buen día, <br /> ¿Qué necesitas?
            </h2>

                <div>
                  <form className={styles.formSearch}>
                    <input className={styles.inputSearch}
                      name='searchBox'
                      type="text"
                      placeholder="Realiza una búsqueda"
                      onChange={this.doSearch}
                    />
                  </form>
                </div>

                <div className={styles.containerImages}>
                  <img src={treeOrange} alt="" />
                  <img src={car} alt="" />
                  <img src={treeGreen} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <AllArticles
          articles={this.state.articles}
        />
      </div >
    )
  }
}

export default Home
