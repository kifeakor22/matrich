import React, {useEffect} from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import './style.css'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // animation
import AOS from 'aos';
import { Height } from '@mui/icons-material';


const Herogrid = () => {
// animation initialize 
   useEffect(()=>{
    AOS.init({
      duration: 2000
    })
   },[])
  return (
    <>
      <Box
      className='heroGrid'
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    minHeight: 'calc(100vh - 56px)', // Adjust the height based on your navbar height
    padding: '20px',
    backgroundImage: `url(${require('./images/try.jpg')})`,
    backgroundSize: 'cover', // Adjusts the image to cover the container while maintaining aspect ratio
    backgroundPosition: 'center',
  }}
>

    
      >
        <Grid container spacing={1} sx={{ maxWidth: '10000px', width: '100%', position: 'relative' }}>
          <Grid item xs={12} sm={12} md={12}>
            <Box data-aos="fade-left" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
              <Typography variant="h4">
                Empowering Your Digital World.
              </Typography>
              <Typography variant='h4'>
                Cyber Security,
              </Typography>
              <Typography variant='h4'>
                Cloud Solutions
              </Typography>
              <Typography variant='h5'>
                &
              </Typography>
              <Typography variant='h4'>
                IT Support.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <div>
        <Divider sx={{ color: 'black' }} className='Divider' textAlign="center">
          <Link className='link' to="booking">
            <Button id='cta' variant="contained" size="large" style={{ backgroundColor: 'black' }}>BOOK NOW</Button>
          </Link>
        </Divider>
      </div>
    </>
  );
};

export default Herogrid;
