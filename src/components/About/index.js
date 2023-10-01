import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import './style.css'
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
          padding: '20px',
          backgroundImage: `url(${require('./images/test2.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px'
        }}
>
  <Grid
    container
    spacing={1}
    sx={{ maxWidth: '10000px', width: '100%', position: 'relative' }}
  >
    <Grid item xs={12} sm={12} md={6}>
      <Box
        data-aos="fade-left"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'left', // Align text to the left
          color: 'black',
          paddingTop: '40px'
        }}
      >
        <Typography variant="h5" sx={{ fontSize: '2.5rem' }}>
          WHO WE ARE?
        </Typography>
        <Typography variant="body" sx={{ fontSize: '1.5rem' }}>
          We are experts in Residential Care,
        </Typography>
        <Typography variant="body" sx={{ fontSize: '1.5rem' }}>
          Senior Living
        </Typography>
        <Typography variant="body" sx={{ fontSize: '1rem' }}>
          &
        </Typography>
        <Typography variant="body" sx={{ fontSize: '1.5rem' }}>
          Specialist Adult Care
        </Typography>
       <Link className="link" to="contact">
  <button className="btn btn-dark enquire buttonWithPadding" type="button">
    Make an Enquiry
  </button>
</Link>

      </Box>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      {/* Other content on the right side of the box */}
    </Grid>
  </Grid>
</Box>
    </>
  );
};

export default Herogrid;
