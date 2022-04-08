import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material'
import AboutInfo from './AboutInfo';

const useStyles = makeStyles({
   root: {
        padding: '100px 0px 100px 0px',
        height: '100%',
        // height: 'auto',
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