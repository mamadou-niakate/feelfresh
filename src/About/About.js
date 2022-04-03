import React from 'react'
import Header from '../Appbar/Appbar'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material'
import AboutInfo from './AboutInfo';

const useStyles = makeStyles({
   root: {
        height: 700,
        backgroundColor: '#FFF7E8',
    }
});
const About = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root} id='about'>
            <Header />
            <AboutInfo />
        </Box>
  )
}

export default About