import React from 'react'
import styles from './LuckyCard.module.css'
import Image from 'next/image'
import logo from '../../assets/logo.png'

interface Props {
  img: string;
  choice: string;
}

export default function LuckyCard(props: Props) {
  const { img, choice } = props
  return (
    <div className={styles.box}>
      <Image src={logo} width={180} height={180} alt=''/>
      <div className={styles.choice}>{choice}</div>
    </div>
  )
}
