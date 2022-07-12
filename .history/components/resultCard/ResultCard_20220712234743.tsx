import React from 'react'
import styles from './ResultCard.module.css'
import Image from 'next/image';
import ImageTicket from '../../assets/ticket.png';

interface Props {
  result: string;
  word: string;
  image: string;
  subImage: string;
}

export default function ResultCard(props: Props) {
  const { result, word, subImage, image } = props;

  return (
    <div className={styles.container}>
       <div className={styles.bg}>
        <div className={styles.boxImage} style={{backgroundColor: '#F1CD4B', }}>
        {
          (
            subImage &&
            <div className={styles.subBoxImage}>
              <Image src={subImage} width={180} height={180} alt='' layout='fill'/>
            </div>
          ) || ''
        }
        <Image src={image} width={180} height={180} alt='' layout='fill' />
        </div>
        <div className={styles.result}>{result}</div>
        <div className={styles.word}>{word}</div>
      </div>
    </div>
  )
}
