import React from 'react'
import styles from './ResultCard.module.css'

interface Props {
  src: string;
  result: string;
  word: string;
}

export default function ResultCard(props: Props) {
  const { src, result, word } = props
  return (
    <div className={styles.bg}>
      <Image src={src} width={150} height={150} alt=''/>
      <div className={styles.result}>{result}</div>
      <div className={styles.word}>{word}</div>
    </div>
  )
}
