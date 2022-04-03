import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
// import './styles.css';

import { motion } from 'framer-motion'

export default function FadeInSection({ menuItem }) {
  const [isVisible, setVisible] =useState(false);
  const domRef =useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting)
      });
    });
    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <motion.div
      ref={domRef} 
      animate={isVisible ? 'visible' : 'hidden'}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1,
            duration: 0.2,
            ease: 'easeInOut'
          }
        },
        hidden: {
          opacity: 0,
          y: -100,
          transition: {
            duration: 0.2,
            ease: 'easeOut'
          }
        }
      }}
      style={{ height: '100%' }}
    >
      <Card 
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} 
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia component="img" image={menuItem.imageURL || ''} alt="random"  />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
              {menuItem.name}
          </Typography>
          <Typography>
              This is a media card. You can use this section to describe the
              content.
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions> */}
      </Card>
    </motion.div>
  );
}

