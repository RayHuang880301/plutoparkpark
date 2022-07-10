import React from 'react'
import styles from './FrontCover.module.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import LuckyCard from '../luckyCard/LuckyCard'
import logo from '../../assets/logo.png'
import LoadingCard from '../loadingCard/LoadingCard'
import PlayCard from '../playCard/PlayCard'
import ResultCard from '../resultCard/ResultCard'


export default function FrontCover() {
  return (
    <div className={styles.section}>
      <Header />
      <div className={styles.container}>
        <ResultCard src={logo}/>
        {/* <PlayCard img={logo}></PlayCard> */}
        {/* <LoadingCard /> */}
        {/* <div className={styles.title}>今天，我想來點...</div>
        <div className={styles.cards}>
          <LuckyCard img={logo}>學業運</LuckyCard>
          <LuckyCard img={logo}>事業運</LuckyCard>
          <LuckyCard img={logo}>戀愛運</LuckyCard>
          <LuckyCard img={logo}>健康運</LuckyCard>
        </div> */}
      </div>
      <Footer />
    </div>
  )
}
