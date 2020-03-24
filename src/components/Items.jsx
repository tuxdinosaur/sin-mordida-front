
import React from 'react'

import Item from './Item'

function Items(props) {

  return (
    <div>
      {
        props.items.map((item, index) => (
          <Item
            key={index}
            itemId={item}
          />
        ))
      }
    </div>
  )

}

export default Items
