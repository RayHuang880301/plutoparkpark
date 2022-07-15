import React, { useRef, useEffect, useState, useCallback } from 'react'
import styles from './PlayCard.module.css'
import Image from 'next/image'
import ImageEffect1 from '../../assets/effect1.png'
import ImageEffect2 from '../../assets/effect2.png'
import ImageEffect3 from '../../assets/effect3.png'
import ImageEffect4 from '../../assets/effect4.png'
import { FortuneType } from '../frontCover/FrontCover'
interface Props {
  fortuneType: FortuneType;
  image: string;
  subImage: string;
}
const b5 = typeof Audio !== "undefined" ? new Audio('/audio/b5.mp3') : undefined;
const b6 = typeof Audio !== "undefined" ? new Audio('/audio/b6.mp3') : undefined;
const b7 = typeof Audio !== "undefined" ? new Audio('/audio/b7.mp3') : undefined;
const b8 = typeof Audio !== "undefined" ? new Audio('/audio/b8.mp3') : undefined;

export default function PlayCard(props: Props) {
  const { image, subImage, fortuneType } = props;
  const effectMusic1 = useRef<HTMLAudioElement | undefined>(
    b5
  );
  const effectMusic2 = useRef<HTMLAudioElement | undefined>(
    b6
  );
  const effectMusic3 = useRef<HTMLAudioElement | undefined>(
    b7
  );
  const effectMusic4 = useRef<HTMLAudioElement | undefined>(
    b8
  );
  // PLUTOEFFECT
  const root = useRef<HTMLDivElement>(null);
  //


  // const [isEffectPlaying, setIsEffectPlaying] = useState(0);
  // const onEffectPlay = useCallback((time: number = 200) => {
  //   if(isEffectPlaying > 0) {
  //     clearTimeout(isEffectPlaying);
  //   }
  //   setIsEffectPlaying(time);
  //   setTimeout(() => {
  //     setIsEffectPlaying(0);
  //   }, time)
  // }, [isEffectPlaying]);
  const playRandomEffect = useCallback((): number => {
    const effectList = [animateFadeInBatch, fadeInCenterBig, rotateRandomBatch, heartbeat ]
    const list = [effectMusic1, effectMusic2, effectMusic3, effectMusic4]
    const random = Math.floor(Math.random() * list.length);
    const player = list[random].current?.cloneNode() as any;
    if(player && player.play) {
      // if(!player.paused) {
      //   player.pause();
      //   player.currentTime = 0;
      // }
      player.play();
      // console.log(fortuneType)
      const time = effectList[random](root.current, fortuneType as any);
      // onEffectPlay();
    }
    return 0;
  }, [])

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <div ref={root} id="pluto-effect" onClick={() => playRandomEffect()} className="pluto-effect only-nft"></div>
    <div className={`${styles.box}`}  onClick={() => playRandomEffect()}>
      <div className={`${styles.boxImage}`} style={{backgroundColor: '#F1CD4B', }}>
        {
          (
            subImage &&
            <div className={styles.subBoxImage}>
              <Image src={subImage} width={300} height={300} alt='' layout='responsive'/>
            </div>
          ) || ''
        }
        <div className={`${styles.boxEyeImage}`}>
          <Image src={image} width={300} height={300} alt='' layout='responsive'/>
        </div>

      </div>
      <div className={styles.choice}>即興加入音效，信仰加持一波！</div>
    </div>
    </>
  )
}

function remove(current: Element | null, ele: Element, time: number) {
  if(!current) return;
  current.append(ele);
  setTimeout(() => {
      ele.innerHTML = '';
      ele.remove();
  }, time);
}

function heartbeat(current: Element | null, name = FortuneType.Study, time = 700) {
  const ele = createElement('eh' + name, 'effect-item ef-heartbeat');
  const img = createElement(`${name}-img`, '', 'img');
  img.setAttribute('src', require(name));
  ele.append(img);
  const { x, y } = getRandomPosition();
  ele.style.left = `${x}px`;
  ele.style.top = `${y}px`;

  remove(current, ele, time);
  return time;
}
function rotateRandom(current: Element | null, name = FortuneType.Study, time = 500) {
  const ele = createElement('eri' + name, 'effect-item ef-rotate-item');
  const img = createElement(`${name}-img`, '', 'img');
  img.setAttribute('src', require(name));
  ele.append(img);
  const { x, y } = getRandomPosition();
  ele.style.left = `${x}px`;
  ele.style.top = `${y}px`;

  remove(current, ele, time);
  return time;
}
function rotateRandomBatch(current: Element | null, name = FortuneType.Study, time = 500) {
  new Array(Math.round((Math.random() * 3) + 3)).fill(0).forEach(() => {
      rotateRandom(current, name, time);
  });
  return time;
}
const fadeInCenterBig = (current: Element | null, name = FortuneType.Study, time = 500) => {
  const ele = createElement('efb' + name, 'effect-item ef-fade-big');
  const img = createElement(`${name}-img`, '', 'img');
  img.setAttribute('src', require(name));
  ele.append(img);

  remove(current, ele, time);
  return time;
}

function animateFadeIn(current: Element | null, name = FortuneType.Study, time = 1000) {
  const ele = createElement('efaa' + name, 'effect-item ef-fade-in');
  const img = createElement(`${name}-img`, '', 'img');
  img.setAttribute('src', require(name));
  ele.append(img);
  const { x, y } = getRandomPosition(200);
  ele.style.left = `${x}px`;
  ele.style.top = `${y}px`;

  remove(current, ele, time);
  return time;
}
function animateFadeInBatch(current: Element | null, name = FortuneType.Study, time = 1000) {
  new Array(Math.round((Math.random() * 5) + 3)).fill(0).forEach(() => {
      animateFadeIn(current, name, time);
  });
  return time;
}

function require(name: FortuneType) {
  switch (name) {
      case FortuneType.Study:
          return ImageEffect1.src;
      case FortuneType.Work:
          return ImageEffect2.src;
      case FortuneType.Love:
          return ImageEffect3.src;
      case FortuneType.Health:
      default:
          return ImageEffect4.src;
  }
};

function preloadImage(url: string) {
  // const img = Image({
  //     src: url
  // });
}

function createElement(name: string, className: string, tag = 'div') {
  const ele = document.createElement(tag);
  ele.setAttribute('class', `${className}`);
  return ele;
}

function getRandomPosition(edge = 200) {
  const x = Math.random() * (window.innerWidth - edge);
  const y = Math.random() * (window.innerHeight - edge);
  return { x, y };
}