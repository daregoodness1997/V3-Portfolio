import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import Input from './core/Input';
import { SectionWrapper } from './hoc';
import { Button } from './core';
import { slideIn, textVariant } from '../lib/utils/motion';
import { motion } from 'framer-motion';
import Textarea from './core/Textarea';
import { EarthCanvas } from './canvas';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
          toast('You have succefully sent an email to Dare Gooodness!', {
            icon: '👏',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
              zIndex: 4000,
            },
          });
          setLoading(false);
        },
        error => {
          toast.error("This didn't work, an error occurred");
          console.log(error.text);
          setLoading(false);
        }
      );
  };
  return (
    <>
      <div className='sm:mt-12 mt-8 flex xs:flex-row flex-col gap-4 justify-between'>
        <Toaster position='bottom-center' />

        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className=' bg-accent sm:p-16 px-6 py-10 rounded-2xl xs:w-1/2 w-full'
          initial='hidden'
          whileInView={'show'}
        >
          <motion.div
            variants={textVariant()}
            initial='hidden'
            whileInView={'show'}
          >
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
            <Button
              label='Submit'
              type='submit'
              isFullWidth={false}
              loading={loading}
            />
          </form>
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:h-auto md:h-[550px] h-[350px] sm:w-1/2 w-full'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
