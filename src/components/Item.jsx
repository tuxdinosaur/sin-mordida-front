
import React, { useEffect, useState } from 'react'

import api from '../lib/api'

function Item(props) {

  const [itemLetter, setItemLetter] = useState('')
  const [itemText, setItemText] = useState('')

  const itemId = props.itemId

  useEffect(() => {

    async function getItem() {
      const payload = await api.getItem(itemId)

      setItemLetter(payload.data.article[0].itemLetter)
      setItemText(payload.data.article[0].itemText)
    }

    getItem()

  }, [itemId])

  return (
    <p><span>{itemLetter}.</span>{itemText}</p>
  )

}

export default Item
