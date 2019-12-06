import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { Header } from '../components/header'
import {Nav} from '../components/about/nav'
import {Coaches} from '../components/about/coaches'
import {FAQ} from '../components/about/faq'
import {useRouter} from 'next/router'
import '../styles/index.scss'

const currentRoute = (current) => {
  switch (current) {
    case 'faq':
      return <FAQ/>;
    case 'coaches':
      return <Coaches/>;
    default:
      return <Coaches/>;
  }
}

const About = () => {
  const router = useRouter();
  console.log(router);

  return(
    <div>
      <Head>
        <title>About</title>
      </Head>

      <Header />
      <div style={{marginTop: '74px', display: 'flex'}}>
        <Nav />
        {currentRoute(router.query.selected)}
      </div>
    </div>
  );
}

export default About
