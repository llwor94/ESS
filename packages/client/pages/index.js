import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { Header } from '../components/header'
import {Jumbotron} from "../components/Jumbotron";

import '../styles/index.scss'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet"/>
    </Head>

    <Header />

    <Jumbotron/>
    </div>
)

export default Home
