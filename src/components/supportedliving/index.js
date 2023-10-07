import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import { LocalHospital, Accessibility, House, AttachMoney } from '@mui/icons-material';
import './style.css';
import './CarouselStyles.css'; // Import the custom CSS for carousel
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component
import {Divider} from '@mui/material';

const features = [
  {
    title: 'Healthcare Support',
    description: 'Access to quality healthcare services.',
    icon: <LocalHospital fontSize="large" />,
  },
  {
    title: 'Accessibility',
    description: 'Adapted living spaces for accessibility.',
    icon: <Accessibility fontSize="large" />,
  },
  {
    title: 'Comfortable Homes',
    description: 'Safe and comfortable living environments.',
    icon: <House fontSize="large" />,
  },
  {
    title: 'Affordable Pricing',
    description: 'Cost-effective solutions for residents.',
    icon: <AttachMoney fontSize="large" />,
  },
];

const slides = [
  {
    image: require('./images/slide1.jpg'), // Use require here
    description: 'Our supportive community promotes a healthy lifestyle.',
  },
  {
    image: require('./images/slides2.jpg'), // Use require here
    description: 'Accessible facilities to ensure convenience for residents.',
  },
  {
    image: require('./images/slide3.jpg'), // Use require here
    description: 'Comfortable and secure homes for all our residents.',
  },
  {
    image: require('./images/slide4.jpg'), // Use require here
    description: 'Affordable pricing options tailored to your needs.',
  },
];

const SupportedLiving = () => {
  return (
    <div className="supported-living">
         <div className="carousel-container">
        <Divider className='Divider' textAlign="center">
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Explore Our Community
        </Typography>
        </Divider>
        {/* Slide content */}
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={slide.image} // Use .default to get the image URL
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
              <Typography variant="body2" className="carousel-description">
                {slide.description}
              </Typography>
            </div>
          ))}
        </Carousel>
      </div>
        <Divider className='Divider' textAlign="center">
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Supported Living Services
      </Typography>
      </Divider>
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} className="feature-card">
              {feature.icon}
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
     
    </div>
  );
};

export default SupportedLiving;

