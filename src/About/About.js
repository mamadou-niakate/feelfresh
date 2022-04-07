import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material'
import AboutInfo from './AboutInfo';

const useStyles = makeStyles({
   root: {
        height: 600,
        backgroundColor: '#FFF7E8',
    }
});

const About = React.forwardRef(() => {
    const classes = useStyles();
    
    return (
        <Box className={classes.root} name='about'>
            <AboutInfo />
        </Box>
    ) 
})

export default About