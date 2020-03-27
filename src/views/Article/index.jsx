import React, { useState, useEffect } from 'react'

// ASSETS
import styles from './index.module.css'
import back from '../../assets/images/back.svg'

import Fractions from '../../components/Fractions'
import Table from '../../components/Table'

import api from '../../lib/api'

function Article(props) {
  const [abstract, setAbstract] = useState('')
  const [fractions, setFractions] = useState([])
  const [tags, setTags] = useState([])
  const [umas, setUmas] = useState()
  const [licensePoints, setLicensePoints] = useState()
  const [platePoints, setPlatePoints] = useState()
  const [isPound, setIsPound] = useState()
  const [table, setTable] = useState('')

  const { articleId } = props.match.params

  useEffect(() => {
    async function getArticle() {
      const payload = await api.getArticle(articleId)

      setAbstract(payload.data.article[0].abstract)
      setFractions(payload.data.article[0].fractions)
      setTags(payload.data.article[0].tags)
      setUmas(payload.data.article[0].umas)
      setLicensePoints(payload.data.article[0].licensePoints)
      setPlatePoints(payload.data.article[0].platePoints)
      setIsPound(payload.data.article[0].isPound)
      setTable(payload.data.article[0].table)
    }
    getArticle()
  }, [
    articleId
  ])

  return (
    <div className={styles.container}>
      <a href="/" className={styles.containerBack}>
        <img className={styles.iconBack} src={back} alt="expand" />
      </a>
      <h5 className={styles.titleArticle}>
        Artículo {articleId}
      </h5>
      <p>{abstract}</p>
      <Fractions
        fractions={fractions}
      />
      <Table
        tableId={table}
      />
    </div>
  )

}

export default Article
