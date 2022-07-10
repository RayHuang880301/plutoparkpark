import React from 'react'
import styles from './FrontCover.module.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'


export default function FrontCover() {
  return (
    <div className={styles.section}>
      <Header />
      <div className={styles.container}>
       
      </div>
      <Footer />
    </div>
  )
}
