import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './FrontCover.module.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import LuckyCard from '../luckyCard/LuckyCard'
import logo from '../../assets/logo.png'
import LoadingCard from '../loadingCard/LoadingCard'
import PlayCard from '../playCard/PlayCard'
import ResultCard from '../resultCard/ResultCard'
import ImageFortune1 from '../../assets/study.png';
import ImageFortune2 from '../../assets/work.png';
import ImageFortune3 from '../../assets/love.png';
import ImageFortune4 from '../../assets/health.png';
import ImageFortuneNft1 from '../../assets/nft_study.png';
import ImageFortuneNft2 from '../../assets/nft_work.png';
import ImageFortuneNft3 from '../../assets/nft_love.png';
import ImageFortuneNft4 from '../../assets/nft_health.png';
import ImageFeeling1 from '../../assets/sleep.png';
import ImageFeeling2 from '../../assets/hot.png';
import ImageFeeling3 from '../../assets/drink.png';
import ImageFeeling4 from '../../assets/comfort.png';
import ImageFeeling5 from '../../assets/big.png';

const FAKE_LOADING_TIME = 1 * 1000;

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
        image: ImageFortune1.src,
        backgroundColor: '#F1CD4B',
    }, {
        title: '事業運',
        type: FortuneType.Work,
        audioPath: '/audio/melody2.mp3',
        image: ImageFortune2.src,
        backgroundColor: '#F1CD4B',
    }, {
        title: '戀愛運',
        type: FortuneType.Love,
        audioPath: '/audio/melody3.mp3',
        image: ImageFortune3.src,
        backgroundColor: '#F1CD4B',
    }, {
        title: '健康運',
        type: FortuneType.Health,
        audioPath: '/audio/melody4.mp3',
        image: ImageFortune4.src,
        backgroundColor: '#F1CD4B',
    }
]
const FeelingList = [
    {
        title: '想睡',
        type: FeelingType.Sleep,
        audioPath: '/audio/drum1.mp3',
        image: ImageFeeling1.src,
        backgroundColor: '#D9D9D9',
    }, {
        title: '好熱',
        type: FeelingType.Hot,
        audioPath: '/audio/drum2.mp3',
        image: ImageFeeling2.src,
        backgroundColor: '#D9D9D9',
    }, {
        title: '宿醉',
        type: FeelingType.Drink,
        audioPath: '/audio/drum3.mp3',
        image: ImageFeeling3.src,
        backgroundColor: '#D9D9D9',
    }, {
        title: '舒服',
        type: FeelingType.Comfortable,
        audioPath: '/audio/drum4.mp3',
        image: ImageFeeling4.src,
        backgroundColor: '#D9D9D9',
    }, {
        title: '法大',
        type: FeelingType.Big,
        audioPath: '/audio/drum5.mp3',
        image: ImageFeeling5.src,
        backgroundColor: '#D9D9D9',
    }
]

export default function FrontCover() {


  const [fortuneType, setFortuneType] = useState<FortuneType>(FortuneType.None);
  const [isFortuneSubmit, setIsFortuneSubmit] = useState(false);
  const [feelingType, setFeelingType] = useState<FeelingType>(FeelingType.None);
  const [isFeelingSubmit, setIsFeelingSubmit] = useState(false);

  const subImage = useCallback(() => {
    const item = FortuneList.find(item => item.type === fortuneType);
    if(item) {
      switch (item.type) {
        case FortuneType.Study:
          return ImageFortuneNft1.src;
        case FortuneType.Work:
          return ImageFortuneNft2.src;
        case FortuneType.Love:
          return ImageFortuneNft3.src;
        case FortuneType.Health:
          return ImageFortuneNft4.src;
        default:
          return '';
      }
      return '';
    }
    return '';
  }, [fortuneType])

  const eyeImage = useCallback(() => {
    const item = FeelingList.find(item => item.type === feelingType);
    return item ? item.image : '';
  }, [feelingType])

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

  const isFortuneActive = (fortune: FortuneType) => {
    return !isFortuneSubmit && fortune === fortuneType;
  }

  const isFeelingActive = (feeling: FeelingType) => {
    return !isFeelingSubmit && feeling === feelingType;
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
              {FortuneList.map((item, idx) =>  <LuckyCard onClick={(event) => chooseFortune(item.type)} isPlay={isFortuneActive(item.type)} audioPath={item.audioPath} key={idx} img={item.image} backgroundColor={isFortuneActive(item.type) ? '#FB8111' : item.backgroundColor}>{item.title}</LuckyCard> )}
            </div>
            </>
          )
        }
        {
          (isFortuneSubmit && !isFeelingSubmit &&
          <div className={styles.cards}>
            {FeelingList.map((item, idx) =>  <LuckyCard onClick={(event) => chooseFeeling(item.type)} isPlay={isFeelingActive(item.type)} audioPath={item.audioPath} key={idx} img={item.image} backgroundColor={isFeelingActive(item.type) ? '#939393' : item.backgroundColor} subImage={subImage()}>{item.title}</LuckyCard> )}
          </div> ) || ''
        }
        {
          (!loadingState.isLoaded && isFortuneSubmit && isFeelingSubmit && 
          <LoadingCard />) || ''
        }
        {
          (loadingState.isLoaded && isFortuneSubmit && isFeelingSubmit && 
          <PlayCard image={eyeImage()} subImage={subImage()}></PlayCard>) || ''
        }
        {/* <ResultCard src={logo} result='大吉' word='想睡覺了？到主舞台跟DJ一起嗨，保證今日運勢超 川頁！'/> */}
      </div>
      <Footer />
    </div>
  )
}
