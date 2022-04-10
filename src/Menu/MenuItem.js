import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardMedia, CardActions, Typography, Divider } from '@mui/material';

import { motion } from 'framer-motion'
import { useAppContext } from '../store/AppContext';
// import MenuDetails from './MenuDetails';

export default function FadeInSection({ menuItem }) {
  
  // const { state:{ openModal }, dispatch } = useAppContext();

  // const handleOpenModal = () => {
  //     dispatch({type: 'SET_OPEN_MODAL', payload:true})
  // }

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
    <>
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
              ease: 'easeIn'
            }
          },
          hidden: {
            opacity: 0,
            y: -50,
            transition: {
              duration: 0.2,
              ease: 'easeIn'
            }
          }
        }}
        style={{ height: '100%' }}
        // onClick={handleOpenModal}
      >
        <Card 
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} 
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia sx={{ height: 300, objectFit: 'cover' }} component="img" image={menuItem.imageURL || ''} alt="random"  />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
                {menuItem.name}
            </Typography>
            <Typography>
                { menuItem.composants?.join(',') }
            </Typography>
          </CardContent>
          <Divider />
          <CardActions style={{ margin: '0 35% 0 35%', paddingBottom: 20, fontWeight:'bold'}}>
            {/* <Button size="small">View</Button>
            <Button size="small">Edit</Button> */}
            {menuItem.price} {menuItem.currency}
          </CardActions>
        </Card>
      </motion.div>
      {/* {openModal && <MenuDetails menu={menuItem} />} */}
    </>
  );
}

