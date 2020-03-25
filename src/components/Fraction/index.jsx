
import React, { useEffect, useState } from 'react'

import Items from '../Items'

import api from '../../lib/api'

import styles from './styles.module.css'

function Fraction(props) {

  const [items, setItems] = useState([])
  const [fractionNumber, setFractionNumber] = useState('')
  const [fractionText, setFractionText] = useState('')

  const fractionId = props.fractionId

  useEffect(() => {

    async function getFraction() {
      const payload = await api.getFraction(fractionId)

      setItems(payload.data.article[0].items)
      setFractionNumber(payload.data.article[0].fractionNumber)
      setFractionText(payload.data.article[0].fractionText)
    }

    getFraction()

  }, [fractionId])

  return (
    <div className={styles.container}>
      <button id="collapsible" className={styles.collapsible}>{fractionNumber}</button>

      <div className={styles.content}>
        <p>{fractionText}</p>
        <Items
          items={items}
        />
      </div>
    </div>
  )

}

export default Fraction
