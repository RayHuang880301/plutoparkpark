import React from 'react'
import styles from '../header/Header.module.css'
import pStarImg from '../../assets/pStarImg.png'
import pImg from '../../assets/pImg.png'
import plutoLabImg from '../../assets/plutoLabImg.png'
import Image from 'next/image'

export default function Header() {
  return (
    <div className={styles.header}>
      <Image src={pImg} width={40} height={45} alt=''/>
      <Image src={plutoLabImg} width={180} height={45} alt=''/>
      <Image src={pStarImg} width={50} height={45} alt=''/>
    </div>
  )
}
