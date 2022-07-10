import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'
import plutoLabLogo from '../../assets/plutoLabLogo.png'

export default function Footer() {
  return (
    <div className={styles.section}>
      <Image src={plutoLabLogo} width={100} height={50} alt=''/>
      <div className={styles.mediaBox}></div>
      <div className={styles.copyright}>Pluto Lab © 2022</div>
    </div>
  )
}
