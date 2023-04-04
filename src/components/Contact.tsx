import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import Input from './core/Input';
import { SectionWrapper } from './hoc';
import { Button } from './core';
import { slideIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import Textarea from './core/Textarea';
import { EarthCanvas } from './canvas';

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
      <div className='sm:mt-12 mt-8 flex flex-wrap gap-10 justify-between'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className=' bg-black-100 sm:p-16 px-6 py-10 rounded-2xl'
        >
          <motion.div variants={textVariant()}>
            <p className={styles.heroSubText}>Get in touch</p>
            <h2 className={styles.sectionHeadText}>Contact Me.</h2>
          </motion.div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col gap-4 w-full sm:mt-16 mt-12'
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
            <Textarea
              rows={7}
              placeholder='Enter your Message'
              name='user_message'
              label='Message'
            />
            <Button label='Submit' type='submit' isFullWidth={false} />
          </form>
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
