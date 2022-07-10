import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FrontCover from '../components/frontCover/FrontCover'

const Home: NextPage = () => {
  return (
    <FrontCover />
  )
}

export default Home
