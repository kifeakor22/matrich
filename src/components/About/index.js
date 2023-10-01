import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import './style.css';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // animation
import AOS from 'aos';

const Herogrid = () => {
  // animation initialize
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

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
          height: '300px',
          position: 'relative' // Add this line to create a stacking context
        }}
      >
        {/* Add an overlay with a background color */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)' // Adjust opacity as needed
          }}
        ></div>

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
                justifyContent: 'flex-start', // Align text to the left
                color: 'white',
                zIndex: 1, // Ensure text appears above the overlay
                padding: '20px',
                fontWeight: '700',
                fontFamily: 'fantasy'
              }}
            >
              <Typography variant="h5" sx={{ fontSize: '2.5rem' }}>
                WHO WE ARE?
              </Typography>
              <Typography variant="body" sx={{ fontSize: '1.5rem', textAlign: 'left' }}>
                Matrich is your trusted partner in Supported Independent Living (SIL) care.
                Our mission is to empower individuals to lead fulfilling lives while providing essential support.
                Join us in celebrating independence and discover the Matrich difference today.
              </Typography>

              <Link className="link" to="contact">
                <button className="btn btn-dark enquire buttonWithPadding" type="button">
                  Make an Enquiry
                </button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              data-aos="fade-left"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start', // Align text to the left
                color: 'white',
                zIndex: 1, // Ensure text appears above the overlay
                padding: '20px'
              }}
            >
              {/* Text for the second grid */}
            
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Herogrid;
