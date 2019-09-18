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
      <link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js" />
    </Head>

    <Header />
    <Jumbotron/>
    <InfoBoxes/>
  </div>
);

export default Home
