import React from 'react'
import styles from './index.module.css'

function PenaltyPreview(props) {
  if (props.value && props.type === 'isPound') {
    return (
      <div className={styles.corralon}>
        <div className={styles.circleCorralon} />
        <span className={styles.textCorralon}>Amerita corralón</span>
      </div>
    )
  } else if (!props.value && props.type === 'isPound') {
    return (
      <div className={styles.corralon}>
        <div className={styles.circleCorralon} />
        <span className={styles.textCorralon}>No amerita corralón</span>
      </div>
    )
  }

  if (props.value && props.type === 'umas') {
    return (
      <div className={styles.corralon}>
        <div className={styles.circleCorralon} />
        <span className={styles.textCorralon}>Amerita multa</span>
      </div>
    )
  } else if (!props.value && props.type === 'umas') {
    return (
      <div className={styles.corralon}>
        <div className={styles.circleCorralon} />
        <span className={styles.textCorralon}>No amerita multa</span>
      </div>
    )
  }


}



export default PenaltyPreview
