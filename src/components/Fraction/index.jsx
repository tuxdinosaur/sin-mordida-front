
import React, { useEffect, useState } from 'react'

import api from '../../lib/api'

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
    <div>
      <h5>{fractionNumber}</h5>

      <p>{fractionText}</p>
    </div>
  )

}

export default Fraction
