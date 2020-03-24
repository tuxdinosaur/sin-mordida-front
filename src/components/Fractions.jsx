
import React from 'react'

import Fraction from './Fraction'

function Fractions(props) {

  return (
    <div>
      {
        props.fractions.map((fraction, index) => (
          <Fraction
            key={index}
            fractionId={fraction}
          />
        ))
      }
    </div>
  )

}

export default Fractions
