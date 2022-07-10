import React from 'react'
import styles from './FrontCover.module.css'
import Header from '../header/Header'

export default function FrontCover() {
  return (
    <div className={styles.section}>
      <Header />
      <div className={styles.container}>
        <div className={styles.p}><Image src={pImg} width={300} height={300} alt='' /></div>
      </div>
    </div>
  )
}
