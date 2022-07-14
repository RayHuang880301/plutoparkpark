import React, { MouseEventHandler, useEffect, useRef } from 'react'
import styles from './LuckyCard.module.css'
import Image from 'next/image'
interface Props {
  img: string;
  children: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  audioPath: string;
  isPlay: boolean;
  backgroundColor: string;
  subImage?: string;
}

export default function LuckyCard(props: Props) {
  const { img, children, onClick, audioPath, isPlay, backgroundColor, subImage } = props;
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(audioPath) : undefined
  );
  useEffect(() => {
    if(musicPlayers.current) {
      musicPlayers.current.loop = true;
    }
  }, [])

  // const [isPlay, setIsPlay] = useState(false);
  useEffect(() => {
    const player = musicPlayers.current;
    if(!player) {
      return;
    }
    if(isPlay) {
      player.play();
    } else {
      player.pause();
    }

    return () => {
      player.pause();
    }
  }, [isPlay])

  return (
    <div onClick={onClick} className={`${styles.box} ${isPlay ? styles.boxActive : ''}`}>
      <div className={styles.boxImage} style={{backgroundColor, }}>
        {
          (
            subImage &&
            <div className={styles.subBoxImage}>
              <Image src={img} width={180} height={180} alt='' layout='responsive'/>
            </div>
          ) || ''
        }
        {/* <Image src={img} width={180} height={180} alt='' layout='responsive'/> */}
      </div>
      {/* <div className={styles.choice}>{children}</div> */}
    </div>
  )
}

