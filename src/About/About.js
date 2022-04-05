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

const About = React.forwardRef((props, ref) => {
    const classes = useStyles();
    return (
        <Box ref={ref} {...props} className={classes.root}>
            <Header />
            <AboutInfo />
        </Box>
    ) 
})

export default About