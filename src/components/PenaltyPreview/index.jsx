import React from 'react'
import styles from './index.module.css'

function PenaltyPreview(props) {
  if (props.value && props.type === 'isPound') {
    return (
      <div className={styles.corralon}>
        <div className={styles.circleCorralon} />
        <span className={styles.textCorralon}>Corralón: Sí</span>
      </div>
    )
  } else if (!props.value && props.type === 'isPound') {
    return (
      <div className={styles.corralon}>
        <div className={styles.circleCorralon} />
        <span className={styles.textCorralon}>Corralón: No</span>
      </div>
    )
  }

  if (props.value && props.type === 'umas') {
    return (
      <div className={styles.corralon}>
        <div className={styles.circleCorralon} />
        <span className={styles.textCorralon}>Multa: Sí</span>
      </div>
    )
  } else if (!props.value && props.type === 'umas') {
    return (
      <div className={styles.corralon}>
        <div className={styles.circleCorralon} />
        <span className={styles.textCorralon}>Multa: No</span>
      </div>
    )
  }


}



export default PenaltyPreview
