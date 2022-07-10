import React from 'react'
import styles from '../header/Header.module.css'
import pStarImg from '../../assets/pStarImg.svg'
import pImg from '../../assets/pImg.svg'
import plutoLabImg from '../../assets/plutoLabImg.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src={pImg} width={50} height={50} alt=''/>
      <Image src={plutoLabImg} width={150} height={50} alt=''/>
      <Image src={pStarImg} width={50} height={50} alt=''/>
    </div>
  )
}

export default Header