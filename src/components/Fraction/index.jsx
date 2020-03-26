
// import React, { useEffect, useState } from 'react'
// import { Collapse, Button } from 'reactstrap'

// import Items from '../Items'

// import api from '../../lib/api'

// import styles from './styles.module.css'

// function Fraction(props) {

//   const [items, setItems] = useState([])
//   const [fractionNumber, setFractionNumber] = useState('')
//   const [fractionText, setFractionText] = useState('')

//   const fractionId = props.fractionId

//   useEffect(() => {

//     async function getFraction() {
//       const payload = await api.getFraction(fractionId)

//       setItems(payload.data.article[0].items)
//       setFractionNumber(payload.data.article[0].fractionNumber)
//       setFractionText(payload.data.article[0].fractionText)
//     }

//     getFraction()

//   }, [fractionId])

//   return (
//     <div className={styles.container}>
//       <button className={styles.collapsible}>{fractionNumber}</button>

//       <div className={styles.content}>
//         <p>{fractionText}</p>
//         <Items
//           items={items}
//         />
//       </div>
//     </div>
//   )

// }

// export default Fraction


import React, { useEffect, useState } from 'react'
import { Collapse, Button, Card } from 'reactstrap'
import Bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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

      <div class="accordion" id="accordionFraction">

        <div class="card">

          <div
            class="card-header"
            id="headingThree"
          >
            <h2
              class="mb-0"
            >
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target={`#${fractionNumber}`}
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                {fractionNumber}
              </button>
            </h2>
          </div>

          <div
            id={fractionNumber}
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionFraction"
          >
            <div
              class="card-body"
            >
              {fractionText}
            </div>
          </div>

        </div>

      </div>

    </div>
  )

}

export default Fraction

