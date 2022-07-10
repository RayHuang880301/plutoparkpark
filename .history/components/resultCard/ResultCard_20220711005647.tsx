import React from 'react'
import styles from './ResultCard.module.css'
import Image from 'next/image'

interface Props {
  src: string;
  result: string;
  word: string;
}

export default function ResultCard(props: Props) {
  const { src, result, word } = props
  return (
    <div className={styles.bg}>
      <Image src={src} width={170} height={170} alt=''/>
      <div className={styles.result}>{result}</div>
      <div className={styles.word}>{word}</div>
    </div>
  )
}
