import React from 'react'

import styles from './index.module.css'
import truck from '../../assets/images/tow-truck.png'
import cash from '../../assets/images/cash.png'

function PenaltyPreview(props) {
  if (props.value && props.type === 'isPound') {
    return (
      <div className={styles.corralon}>
        <div className={styles.circleCorralon}>
          <img className={styles.penaltyImage} src={truck} alt=""/>
        </div>
        <span className={styles.textPenalty}><span className={styles.textCorralon}>Corralón:</span> Sí</span>
      </div>
    )
  } else if (!props.value && props.type === 'isPound') {
    return (
      <div className={styles.corralon}>
        <div className={styles.circleCorralon}>
          <img className={styles.penaltyImage} src={truck} alt="" />
        </div>
        <span className={styles.textPenalty}><span className={styles.textCorralon}>Corralón:</span> No</span>
      </div>
    )
  }

  if (props.value && props.type === 'umas') {
    return (
      <div className={styles.corralon}>
        <div className={styles.circleCorralon}>
          <img className={styles.penaltyImage} src={cash} alt="" />
        </div>
        <span className={styles.textPenalty}><span className={styles.textMulta}>Multa:</span> Sí</span>
      </div>
    )
  } else if (!props.value && props.type === 'umas') {
    return (
      <div className={styles.corralon}>
        <div className={styles.circleCorralon}>
          <img className={styles.penaltyImage} src={cash} alt="" />
        </div>
        <span className={styles.textPenalty}><span className={styles.textMulta}>Multa:</span> No</span>
      </div>
    )
  }


}

export default PenaltyPreview
