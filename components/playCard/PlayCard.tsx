import React, { useRef, useEffect } from 'react'
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


export default function PlayCard(props: Props) {
  const { image, subImage, fortuneType } = props;
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
  // PLUTOEFFECT
  const root = useRef<HTMLDivElement>(null);
  //
  
  const playRandomEffect = () => {
    const effectList = [rotateRandomBatch, rotateRandomBatch, rotateRandomBatch, rotateRandomBatch ]
    const list = [effectMusic1, effectMusic2, effectMusic3, effectMusic4]
    const random = Math.floor(Math.random() * list.length);
    const player = list[random].current;
    if(player) {
      if(!player.paused) {
        player.pause();
        player.currentTime = 0;
      }
      player.play();
      console.log(fortuneType)
      effectList[random](root.current, fortuneType as any);
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
    <>
    <div ref={root} id="pluto-effect" className="pluto-effect only-nft"></div>
    <div className={styles.box}>
      <div className={styles.boxImage} style={{backgroundColor: '#F1CD4B', }}>
        {
          (
            subImage &&
            <div className={styles.subBoxImage}>
              <Image src={subImage} width={300} height={300} alt='' layout='responsive'/>
            </div>
          ) || ''
        }
        <Image src={image} width={300} height={300} alt='' layout='responsive'/>
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

function bounceInTop(current: Element | null, name = FortuneType.Study, time = 700) {
  const ele = createElement('ebit' + name, 'effect-item ef-bounce-in-top');
  const img = createElement(`${name}-img`, '', 'img');
  img.setAttribute('src', require(name));
  ele.append(img);
  if (Math.random() > 0.5) {
      // img.style.transform = 'rotate(90deg)';
      ele.style.bottom = `${(Math.random() * 7 + 1) / 10 * window.innerHeight}px`;
      ele.style.left = '-20%';
      ele.style.opacity = '0.2';
      setTimeout(() => {
          ele.style.left = '120%';
          ele.style.opacity = '1';
      }, 50);
  } else {
      ele.style.bottom = '115%';
      ele.style.left = `${(Math.random() * 7 + 1) / 10 * window.innerWidth}px`;
      ele.style.opacity = '0.2';
      setTimeout(() => {
          ele.style.bottom = '-20%';
          ele.style.opacity = '1';
      }, 50);
  }
  remove(current, ele, time);
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
}
function waterfall(current: Element | null, name = FortuneType.Study, time = 1500) {
  let offset = 0;
  const num = 6;
  const offsetBase = Math.round(window.innerWidth / num);
  new Array(num).fill(0).forEach((_, i) => {
      const ele = createElement('tbp' + name, 'effect-item ef-waterfall top-bottom');
      ele.style.transform = `translateX(${offset}px)`;
      const box = createElement('tbpb' + name, 'box');
      setTimeout(() => {
          const img = createElement(`${name}-img-${i}`, '', 'img');
          img.setAttribute('src', require(name));
          box.append(img);
          ele.append(box);

          remove(current, ele, time);
      }, (Math.random() * 30) * 3 * i);
      offset += offsetBase;
  });
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
}
function rotateRandomBatch(current: Element | null, name = FortuneType.Study, time = 50000) {
  new Array(Math.round((Math.random() * 3) + 3)).fill(0).forEach(() => {
      rotateRandom(current, name, time);
  });
}
const fadeInCenterBig = (current: Element | null, name = FortuneType.Study, time = 500) => {
  const ele = createElement('efb' + name, 'effect-item ef-fade-big');
  const img = createElement(`${name}-img`, '', 'img');
  img.setAttribute('src', require(name));
  ele.append(img);

  remove(current, ele, time);
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
}
function animateFadeInBatch(current: Element | null, name = FortuneType.Study, time = 1000) {
  new Array(Math.round((Math.random() * 5) + 3)).fill(0).forEach(() => {
      animateFadeIn(current, name, time);
  });
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