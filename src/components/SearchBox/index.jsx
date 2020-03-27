
import React, { useState } from 'react'

import styles from './index.module.css'

function SearchBox() {

  const [inputValue, setInputValue] = useState('')

  console.log(inputValue)

  return (
    <div>
      <form className={styles.formSearch}>
        <input className={styles.inputSearch}
          type="text"
          placeholder="Realiza una búsqueda"
          onChange={event => setInputValue(event.target.value)}
        />
      </form>
    </div>
  )

}

export default SearchBox
