import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { Header } from '../components/header'
import {Jumbotron} from "../components/home/Jumbotron";
import {InfoBoxes} from "../components/home/info-boxes";
import '../styles/index.scss'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Header />
    <Jumbotron/>
    <InfoBoxes/>
  </div>
);

export default Home
