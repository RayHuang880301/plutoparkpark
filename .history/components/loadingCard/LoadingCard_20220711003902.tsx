import React from 'react'
import styles from './Loading.module.css'

export default function Loading() {
  return (
    <div className={styles.loadingBox}>
      <div className={styles.bar}></div>
      <div className={styles.word}>求神問卜中...</div>
    </div>
  )
}
