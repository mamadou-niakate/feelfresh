import {  makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const useStyles = makeStyles({
    scrollTop: {
        position:'fixed',
        width: 50,
        height: 40,
        cursor: "pointer",
        animation: 'fadeIn 0.3s',
        transition: 'opacity 0.4s',
        bottom: 20,
        left:'80%',
        color: '#2EB086',
        opacity: 1
    }
})

const ScrollTop = () => {
    const classes = useStyles();
    const [showScroll, setShowScroll] = useState(false);

    const checkScroll = () => {
        if(!showScroll && window.pageYOffset > 100) {
            setShowScroll(true)
        } else if(showScroll && window.pageYOffset <= 100){
            setShowScroll(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({top:0, behavior:'smooth'})
    }

    window.addEventListener("scroll", checkScroll)

    return (
        <>
        {showScroll && (<FaArrowCircleUp  onClick={scrollTop}  className={classes.scrollTop}/>)}
        </>
        
    )
}

export default ScrollTop;