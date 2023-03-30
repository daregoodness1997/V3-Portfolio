import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import Input from './core/Input';
import { SectionWrapper } from './hoc';
import { Button } from './core';

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className='sm:mt-24 mt-16 flex flex-wrap gap-10 justify-between'>
        <div className='w-1/2'>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col gap-4 w-full '
          >
            <Input
              placeholder='Enter your name'
              name='user_name'
              label='Full Name'
            />
            <Input
              placeholder='Enter your email addresss'
              type='email'
              name='user_email'
              label='Email Address'
            />
            <Button label='Submit' type='submit' isFullWidth={true} />
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
