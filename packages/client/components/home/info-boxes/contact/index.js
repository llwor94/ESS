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
import axios from 'axios';

function Contact({styles}) {
  const [form, setForm] = useState({
    lastName: undefined,
    firstName: undefined,
    phone: undefined,
    email: undefined,
    message: undefined
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = `${form.firstName} ${form.lastName}`;
    const data = await axios.post('https://us-central1-steel-prism-253608.cloudfunctions.net/email-trigger', {name, phone: form.phone, email: form.email, message: form.message});
    console.log(data)
  };

  return (
    <div className={clsx(styles.section, styles.contact)}>
      <h2>Contact us</h2>
      <form onSubmit={handleSubmit} className={styles.formbox}>
        <div className={styles.formrow}>
          <TextField className={styles.input} outlined name='firstName' label='First Name' onChange={handleChange} />
          <TextField className={styles.input} outlined name='lastName' label='Last Name' onChange={handleChange}  />
        </div>
        <div className={styles.formrow}>
          <TextField className={styles.input} outlined name='email' label='Email' onChange={handleChange} />
          <TextField className={styles.input} outlined name='phone' label='Phone Number' onChange={handleChange}  />
        </div>
        <div className={styles.formrow}>
        <TextField className={styles.input} textarea rows={8} span={12} maxLength={20} name='message' outlined label='Message' onChange={handleChange} />
        </div>
        <Button disabled={Object.values(form).some(x => x === undefined)} label='Submit' style={{alignSelf: 'flex-end', margin: '10px'}} trailingIcon='send' raised/>
      </form>
    </div>
  )
}

export {Contact}
