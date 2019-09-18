import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { Header } from '../components/header'
import {Nav} from '../components/about/nav'
import {Coaches} from '../components/about/coaches'

import '../styles/index.scss'

const Home = () => (
  <div>
    <Head>
      <title>About</title>
    </Head>

    <Header />
    <div style={{marginTop: '74px', display: 'flex'}}>
    <Nav />
    <Coaches/>
    </div>
  </div>
);

export default Home
