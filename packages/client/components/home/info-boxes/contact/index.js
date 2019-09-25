import React, { useState } from 'react';
import { TextField }  from '@rmwc/textField';
import {Button} from '@rmwc/button'
import { Dialog, DialogContent } from '@rmwc/dialog';
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

const initialState = {
  lastName: "",
  firstName: "",
  phone: "",
  email: "",
  message: ""
}

function Contact({styles}) {
  const [form, setForm] = useState(initialState);
  const [modalShowing, setModalShowing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setModalShowing(true);
    const name = `${form.firstName} ${form.lastName}`;
    try {
      const {data} = await axios.post('https://us-central1-steel-prism-253608.cloudfunctions.net/email-trigger', {
        name,
        phone: form.phone,
        email: form.email,
        message: form.message
      });
      console.log(data);
      setLoading(false);
    }catch(e) {
      console.error(e)
    }
  };



  return (
    <div className={clsx(styles.section, styles.contact)}>
      <h2>Contact us</h2>
      <form onSubmit={handleSubmit} className={styles.formbox}>
        <div className={styles.formrow}>
          <TextField className={styles.input} outlined name='firstName' label='First Name' value={form.firstName} onChange={handleChange} />
          <TextField className={styles.input} outlined name='lastName' label='Last Name' value={form.lastName} onChange={handleChange}  />
        </div>
        <div className={styles.formrow}>
          <TextField className={styles.input} outlined name='email' label='Email' value={form.email} onChange={handleChange} />
          <TextField className={styles.input} outlined name='phone' label='Phone Number' value={form.phone} onChange={handleChange}  />
        </div>
        <div className={styles.formrow}>
        <TextField className={styles.input} textarea rows={8} span={12} maxLength={500} name='message' outlined label='Message' value={form.message} onChange={handleChange} />
        </div>
        <Notice open={modalShowing} loading={loading} closeModal={() => {setModalShowing(false); setForm(initialState)}}/>
        <Button disabled={Object.values(form).some(x => x === undefined)} label='Submit' style={{alignSelf: 'flex-end', margin: '10px'}} trailingIcon='send' raised/>
      </form>
    </div>
  )
}

const Notice = ({open, closeModal, loading}) => (
  <Dialog open={open} onClose={closeModal}>
    <DialogContent>{loading ? <p>loading...</p> : <p>Success!</p>}</DialogContent>
  </Dialog>
)

export {Contact}
