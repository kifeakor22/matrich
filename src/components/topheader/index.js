import React, { useState, useEffect } from 'react';
import './style.css';

const TopHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className={`top-header ${isVisible ? '' : 'hidden'}`}>
      Talk to us today: <a href="tel:+447878474981">+447878474981</a>
    </div>
  );
};

export default TopHeader;
