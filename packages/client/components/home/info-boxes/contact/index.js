import React, { useState } from 'react';
import { TextField } from '@rmwc/textfield';
import {Button} from '@rmwc/button'
import clsx from 'clsx';
import '@rmwc/icon'
import '@material/textfield/dist/mdc.textfield.css'
import '@material/floating-label/dist/mdc.floating-label.css'
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/button/dist/mdc.button.css'
import '@rmwc/icon/icon.css';

function Contact({styles}) {
  return (
    <div className={clsx(styles.section, styles.contact)}>
      <h2>Contact us</h2>
      <div className={styles.formbox}>
        <div className={styles.formrow}>
          <TextField className={styles.input} outlined label='Student First Name' />
          <TextField className={styles.input} outlined label='Student Last Name' />
        </div>
        <div className={styles.formrow}>
          <TextField className={styles.input} outlined label='Email' />
          <TextField className={styles.input} outlined label='Phone Number' />
        </div>
        <div className={styles.formrow}>
        <TextField className={styles.input} textarea rows={8} span={12} maxLength={20} outlined label='Message' />
        </div>
        <Button label='Submit' style={{alignSelf: 'flex-end', margin: '10px'}} trailingIcon='send' raised/>
      </div>
    </div>
  )
}

export {Contact}
