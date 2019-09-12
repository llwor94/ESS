import React from 'react';

import styles from './styles.scss';

const Jumbotron = () => (
  <div>
  <div style={{backgroundImage: 'linear-gradient(to right bottom, rgba(180, 255, 255, 0.8), rgba(75, 172, 184, 0.8)), url(/static/swimmer.png)'}} className={styles.wrapper}>
    <div>
      <h1>Eastside Swim School</h1>
    </div>

  </div>
    <svg style={{marginTop: '-250px'}} width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path width="100%" fill="#f3f4f5" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,192C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>

  </div>
);

export {Jumbotron}
