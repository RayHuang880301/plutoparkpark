import React from 'react'
import styles from './LuckyCard.module.css'
import Image from 'next/image'
import logo from '../../assets/logo.png'

interface Props {
  img: string;
  children: string;
}

export default function LuckyCard(props: Props) {
  const { img, children } = props
  return (
    <div className={styles.box}>
      <Image src={logo} width={180} height={180} alt=''/>
      <div className={styles.choice}>{children}</div>
    </div>
  )
}
