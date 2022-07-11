import React, { useEffect, useRef, useState } from 'react'
import styles from './FrontCover.module.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import LuckyCard from '../luckyCard/LuckyCard'
import logo from '../../assets/logo.png'
import LoadingCard from '../loadingCard/LoadingCard'
import PlayCard from '../playCard/PlayCard'
import ResultCard from '../resultCard/ResultCard'

const FAKE_LOADING_TIME = 5 * 1000;

enum FortuneType {
  None,
  Study,
  Work,
  Love,
  Health
}

enum FeelingType {
  None,
  Sleep,
  Hot,
  Drink,
  Comfortable,
  Big,
}

const FortuneList = [
    {
        title: '學業運',
        type: FortuneType.Study,
        audioPath: '/audio/melody1.mp3',
    }, {
        title: '事業運',
        type: FortuneType.Work,
        audioPath: '/audio/melody2.mp3',
    }, {
        title: '戀愛運',
        type: FortuneType.Love,
        audioPath: '/audio/melody3.mp3',
    }, {
        title: '健康運',
        type: FortuneType.Health,
        audioPath: '/audio/melody4.mp3',
    }
]
const FeelingList = [
    {
        title: '想睡',
        type: FeelingType.Sleep,
        audioPath: '/audio/drum1.mp3',
    }, {
        title: '好熱',
        type: FeelingType.Hot,
        audioPath: '/audio/drum2.mp3',
    }, {
        title: '宿醉',
        type: FeelingType.Drink,
        audioPath: '/audio/drum3.mp3',
    }, {
        title: '舒服',
        type: FeelingType.Comfortable,
        audioPath: '/audio/drum4.mp3',
    }, {
        title: '法大',
        type: FeelingType.Big,
        audioPath: '/audio/drum5.mp3',
    }
]

export default function FrontCover() {


  const [fortuneType, setFortuneType] = useState<FortuneType>(FortuneType.None);
  const [isFortuneSubmit, setIsFortuneSubmit] = useState(false);
  const [feelingType, setFeelingType] = useState<FeelingType>(FeelingType.None);
  const [isFeelingSubmit, setIsFeelingSubmit] = useState(false);

  const [loadingState, setLoadingState] = useState<{
    isLoaded: boolean,
    timeoutId: number
  }>({
    isLoaded: false,
    timeoutId: 0
  });


  useEffect(() => {
    if(!isFortuneSubmit || !isFeelingSubmit) {
      return;
    }
    if(loadingState.timeoutId) {
      clearTimeout(loadingState.timeoutId);
    }
    const timeoutId = setTimeout(() => {
      setLoadingState({
        isLoaded: true,
        timeoutId: 0,
      })
    }, FAKE_LOADING_TIME);
    setLoadingState({
      isLoaded: false,
      timeoutId: Number(timeoutId),
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFortuneSubmit, isFeelingSubmit])

  const chooseFortune = (fortune: FortuneType) => {
    if(fortuneType !== fortune) {
      setFortuneType(fortune);
    } else {
      setIsFortuneSubmit(true);
    }
  }

  const chooseFeeling = (feeling: FeelingType) => {
    if(feelingType !== feeling) {
      setFeelingType(feeling);
    } else {
      setIsFeelingSubmit(true);
    }
  }

  return (
    <div className={styles.section}>
      <Header />
      <div className={styles.container}>
        {
          !isFortuneSubmit &&
          (
            <>
            <div className={styles.title}>今天，我想來點...</div>
            <div className={styles.cards}>
              {FortuneList.map((item, idx) =>  <LuckyCard onClick={(event) => chooseFortune(item.type)} isPlay={!isFortuneSubmit && item.type === fortuneType} audioPath={item.audioPath} key={idx} img={logo.src}>{item.title}</LuckyCard> )}
            </div>
            </>
          )
        }
        {
          (isFortuneSubmit && !isFeelingSubmit &&
          <div className={styles.cards}>
            {FeelingList.map((item, idx) =>  <LuckyCard onClick={(event) => chooseFeeling(item.type)} isPlay={!isFeelingSubmit && item.type === feelingType} audioPath={item.audioPath} key={idx} img={logo.src}>{item.title}</LuckyCard> )}
          </div> ) || ''
        }
        {
          (!loadingState.isLoaded && isFortuneSubmit && isFeelingSubmit && 
          <LoadingCard />) || ''
        }
        {
          (loadingState.isLoaded && isFortuneSubmit && isFeelingSubmit && 
          <PlayCard img={logo.src}></PlayCard>) || ''
        }
        {/* <ResultCard src={logo} result='大吉' word='想睡覺了？到主舞台跟DJ一起嗨，保證今日運勢超 川頁！'/> */}
      </div>
      <Footer />
    </div>
  )
}
