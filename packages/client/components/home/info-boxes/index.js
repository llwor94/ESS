import React, { useState } from 'react';
import {Location} from "./location";
import {Contact} from "./contact";
import styles from './styles.scss';

function InfoBoxes() {

  return (
    <div className={styles.wrapper}>
      <Contact styles={styles}/>
      {/*<Location styles={styles}/>*/}
    </div>
  )
}

export {InfoBoxes}
