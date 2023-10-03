import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import './style.css';
import { Button } from '@mui/material';
import emailjs from "emailjs-com";
import { Divider } from '@mui/material';
import 'aos/dist/aos.css';
import AOS from 'aos';

const EMAILJS_SERVICE_ID = "service_2lyhxfb";
const EMAILJS_TEMPLATE_ID = "template_95xjrxn";
const EMAILJS_USER_ID = "jemLsqsOmUA2njnd9";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  const [response, setResponse] = useState('');
  const [formData, setFormData] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      e.target,
      EMAILJS_USER_ID
    ).then(
      (response) => {
        console.log('Sent, we will be in touch', response.status, response.text);
        setResponse('Sent, we will be in touch. Thank you', response.status, response.text);
        e.target.reset();
        setTimeout(() => {
          setResponse('');
        }, 3000);
      },
      (err) => {
        console.log('FAILED...', err);
      }
    );
  };

  return (
    <>
      <div className='container contact'>
        <div className='grid-container' data-aos="fade-down">
          <div className='contact-image' data-aos="fade-up">
            <img src={require('./images/logo.jpg')} alt='Contact Image' />
          </div>
          <div className='contact-info'>
            <Typography variant='h4' sx={{ textAlign: 'center', color: 'Blue' }}> Get in touch</Typography>
            <Typography variant='body2' sx={{ textAlign: 'center' }}>We will reach out within 24hrs to provide you the information you need. Thank you for getting in touch.</Typography>
             <form className='contact-form' id='contactForm' onSubmit={(e) => sendEmail(e)}>
            <div className='contact-form-inner'>
              <div className="mb-3">
                <label htmlFor="validationTextarea">Full name</label>
                <input type="text" className="form-control" placeholder="Full name" required id='name' name='name' />
              </div>
              <div className="mb-3">
                <label htmlFor="validationTextarea">Email</label>
                <input type="email" id='email' name='email' className="form-control" placeholder="Email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="validationTextarea">Subject</label>
                <input type='text' id='subject' name='subject' className='form-control' placeholder='Subject' required />
              </div>
              <div className="mb-3">
                <label htmlFor="validationTextarea">Message</label>
                <textarea className="form-control" id='message' name='message' placeholder="Message" required></textarea>
              </div>
              <div id='response'>{response}</div>
              <Divider className='Divider' textAlign="center">
                <Button id='submit' variant="contained" size="large" style={{ backgroundColor: 'grey' }} type="submit">Submit</Button>
              </Divider>
            </div>
          </form>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Contact;

