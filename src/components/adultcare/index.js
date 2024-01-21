import React from 'react';
import './style.css'; // Import your CSS for styling
import { Typography, Grid, Paper } from '@mui/material';
import { LocalHospital, Accessibility, House, AttachMoney } from '@mui/icons-material';
import Carousel from 'react-multi-carousel'; // Import Carousel component
import 'react-multi-carousel/lib/styles.css'; // Import Carousel styles

const SpecialistAdultCare = () => {
  // Content for the Specialist Adult Care section
  const careContent = [
    {
      title: 'Healthcare Support',
      description:
        'Our expert team provides access to quality healthcare services tailored to individual needs.',
      icon: <LocalHospital fontSize="large" />,
    },
    {
      title: 'Accessibility',
      description:
        'Adapted living spaces designed for accessibility, ensuring comfort and ease of use.',
      icon: <Accessibility fontSize="large" />,
    },
    {
      title: 'Comfortable Homes',
      description:
        'Secure and cozy living environments where residents feel at home and cared for.',
      icon: <House fontSize="large" />,
    },
    {
      title: 'Affordable Pricing',
      description:
        'We offer cost-effective solutions, with pricing options tailored to your unique requirements.',
      icon: <AttachMoney fontSize="large" />,
    },
  ];

  // Images for the Carousel
  const carouselImages = [
    {
      image: require('./images/slide1.jpg'), // Use require and .default here
      description: 'Our supportive community promotes a healthy lifestyle.',
    },
    {
      image: require('./images/slide3.jpg'), // Use require and .default here
      description: 'Accessible facilities to ensure convenience for residents.',
    },
    {
      image: require('./images/slide4.jpg'), // Use require and .default here
      description: 'Comfortable and secure homes for all our residents.',
    },
  ];

  return (
    <div className="specialist-adult-care">
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Specialist Adult Care Services
      </Typography>
      <Grid container spacing={3}>
        {careContent.map((content, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} className="care-feature-card">
              {content.icon}
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {content.title}
              </Typography>
              <Typography variant="body2">{content.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <div className="carousel-container">
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Explore Our Specialist Adult Care
        </Typography>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={4000}
          centerMode={false}
          className="carousel"
          containerClass="carousel-container"
          customTransition="all .5"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={image.image}
                alt={`Image ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SpecialistAdultCare;
