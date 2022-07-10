import React from 'react'
import styles from './LuckyCard.module.css'
import Image from 'next/image'
import logo from '../../assets/logo.png'

export default function LuckyCard() {
  return (
    <div className={styles.box}>
      <Image src={logo} width={180} height={180} alt=''/>
    </div>
  )
}
