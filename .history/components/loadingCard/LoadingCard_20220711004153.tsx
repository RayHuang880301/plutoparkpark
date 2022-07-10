import React from 'react'
import styles from './LoadingCard.module.css'

export default function LoadingCard() {
  return (
    <div className={styles.loadingBox}>
      <div className={styles.bar}></div>
      <div className={styles.word}>求神問卜中...</div>
    </div>
  )
}
