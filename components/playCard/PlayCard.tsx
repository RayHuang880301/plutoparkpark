import React, { useRef, useEffect } from 'react'
import styles from './PlayCard.module.css'
import Image from 'next/image'

interface Props {
  image: string;
  subImage: string;
}


export default function PlayCard(props: Props) {
  const { image, subImage } = props;
  const effectMusic1 = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio('/audio/b5.mp3') : undefined
  );
  const effectMusic2 = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio('/audio/b6.mp3') : undefined
  );
  const effectMusic3 = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio('/audio/b7.mp3') : undefined
  );
  const effectMusic4 = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio('/audio/b8.mp3') : undefined
  );

  const playRandomEffect = () => {
    const list = [effectMusic1, effectMusic2, effectMusic3, effectMusic4]
    const random = Math.floor(Math.random() * list.length);
    const player = list[random].current;
    if(player) {
      if(!player.paused) {
        player.pause();
        player.currentTime = 0;
      }
      player.play();
    }
  };

  useEffect(() => {
    const handler = (event: any) => {
      console.log(event.key)
      if(event.key === 'z') {
        playRandomEffect();
      }
    }
    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    }
  }, [])

  return (
    <div className={styles.box}>
      <div className={styles.boxImage} style={{backgroundColor: '#F1CD4B', }}>
        {
          (
            subImage &&
            <div className={styles.subBoxImage}>
              <Image src={subImage} width={300} height={300} alt='' layout='fill'/>
            </div>
          ) || ''
        }
        <Image src={image} width={300} height={300} alt='' layout='fill' />
      </div>
      <div className={styles.choice}>即興加入音效，信仰加持一波！</div>
    </div>
  )
}
