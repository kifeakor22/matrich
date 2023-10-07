import React, {useEffect} from 'react';
import { Typography, Box, Grid } from '@mui/material';
import './style.css'; // Import your CSS for styling
import 'aos/dist/aos.css';
import AOS from 'aos';
import {Divider} from '@mui/material';

const AboutUs = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="about-us-container">
      <Grid container spacing={2} data-aos="fade-up">
        <Grid item xs={12} md={3}>
          <Box className="about-us-image">
            <img src={require('./images/about-us.png')} alt="About Us" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="about-us-content">
           <Divider className='Divider' textAlign="centre">
            <Typography variant="h4" gutterBottom>
              Welcome to Matrich
            </Typography>
            </Divider> 
            <Typography variant="body1">
              At Matrich, we are dedicated to providing exceptional care and
              support services to individuals and families. With years of
              experience in the healthcare industry, we have established
              ourselves as a trusted partner in delivering high-quality care
              solutions.
            </Typography>
            <Typography variant="body1">
              Our mission is simple yet profound: to enhance the quality of
              life for those we serve. We believe in the power of compassion,
              respect, and individualized care. Our team of dedicated
              professionals is committed to empowering individuals to lead
              fulfilling lives while ensuring their safety, comfort, and
              well-being.
            </Typography>
            <Typography variant="body1">
              Whether it's supported living, specialist adult care, senior
              living, or any of our other services, Matrich is your beacon of
              care and support. We invite you to join us in celebrating
              independence, dignity, and a brighter future. Discover the
              Matrich difference today.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
