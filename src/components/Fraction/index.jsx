
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

import expand from '../../assets/images/expand-arrow-48.png'

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

      <div className="accordion" id="accordionFraction">

        <div className={`${styles.card}`}>

          <div
            className="card-headers"
            id="headingThree"
          >
            <h2
              className="mb-0"
            >
              <button
                className={`btn btn-link collapsed ${styles.collapsible}`}
                data-toggle="collapse"
                data-target={`#${fractionNumber}`}
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Fracción {fractionNumber}
                <img className={styles.iconCollapse} src={expand} alt="expand"/>
              </button>
            </h2>
          </div>

          <div
            id={fractionNumber}
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionFraction"
          >
            <div
              className={`card-body ${styles.content}`}
            >
              <p className={styles.fractionText}>{fractionText}</p>
              <Items
                items={items}
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  )

}

export default Fraction

