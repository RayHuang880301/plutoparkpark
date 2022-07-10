import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'
import plutoLabLogo from '../../assets/plutoLabLogo.png'

export default function Footer() {
  return (
    <div className={styles.section}>
      <div className={styles.img}><Image src={plutoLabLogo} width={67} height={45} alt=''/></div>
      <div className={styles.word}>Created by PlutoLab</div>
      <div className={styles.copyright}>Pluto Lab © 2022</div>
    </div>
  )
}
