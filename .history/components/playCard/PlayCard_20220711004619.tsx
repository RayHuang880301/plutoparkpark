import React from 'react'
import styles from './LuckyCard.module.css'
import Image from 'next/image'

interface Props {
  img: string;
}


export default function PlayCard(props: Props) {
  const { img } = props
  return (
    <div className={styles.box}>
      <Image src={img} width={300} height={300} alt=''/>
      <div className={styles.choice}>即興加入音效，信仰加持一波！</div>
    </div>
  )
}
