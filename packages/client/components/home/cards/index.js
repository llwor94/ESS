import React from 'react';
import clsx from 'clsx'
import styles from './styles.scss';

const CardData = [
  {img: 'static/swimmer1.JPG', name: 'Who we are', text: 'I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They\'re slowed down by their perception of themselves.'},  { center: true, img: 'static/swimmer3.JPG', name: 'Why Eastside Swim', text: 'I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They\'re slowed down by their perception of themselves.'}, {img: 'static/swimmer2.JPG', name: 'What we do', text: 'I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They\'re slowed down by their perception of themselves.'},
]

function Cards() {
  return (
    <div className={styles.wrapper}>
      {CardData.map(card => <Card {...card} />)}
    </div>
  )
}

const Card = ({img, name, text, center}) => (
  <div className={clsx(styles.cardWrapper, center && styles.largeWrapper)}>
    <h3 className={clsx(styles.header, center && styles.largeHeader)}>{name}</h3>
    <div style={{backgroundImage: `url(${img})`}} className={`${styles.image} ${center ? styles.largeImage : ''}`}/>
    <div className={`${styles.textBackground} ${center ? styles.largeTextBackground : ''}`}>
      <p>{text}</p>
    </div>
  </div>
)


export {Cards}
