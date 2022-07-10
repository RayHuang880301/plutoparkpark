import React from 'react'
import styles from './LuckyCard.module.css'
import Image from 'next/image'

interface Props {
  img: string;
  children: string;
}

export default function LuckyCard(props: Props) {
  const { img, children } = props
  return (
    <div className={styles.box}>
      <Image src={img} width={180} height={180} alt=''/>
      <div className={styles.choice}>{children}</div>
    </div>
  )
}
