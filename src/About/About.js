import React, { useEffect, useRef } from 'react'
import Header from '../Appbar/Appbar'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material'
import AboutInfo from './AboutInfo';
import { useAppContext } from '../store/AppContext';

const useStyles = makeStyles({
   root: {
        height: 700,
        backgroundColor: '#FFF7E8',
    }
});

const About = () => {
    const classes = useStyles();
    const { dispatch } = useAppContext()
    const  aboutRef = useRef(null)

    useEffect(() => {
        const bodyRect = document.body.getBoundingClientRect();
        const { top } = aboutRef.current.getBoundingClientRect()
        const offset   = top - bodyRect.top;
        dispatch({ type: 'SET_ABOUT_POSITION', payload: offset})
    },[dispatch])

    return (
        <Box ref={aboutRef} className={classes.root}>
            <Header />
            <AboutInfo />
        </Box>
  ) 
}

export default About