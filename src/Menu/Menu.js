import React, { useEffect, useRef } from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Container, Grid } from '@mui/material';
import { data } from '../data';
import FadeInSection from './MenuItem';
import SectionTitle from '../shared/SectionTitle';
import SectionSubtitle from '../shared/SectionSubtitle';
import { useAppContext } from '../store/AppContext';
import { getAbsoluteOffsetY } from '../utils/getOffset';

const useStyles = makeStyles({
   root: {
        minHeight: 700,
        padding:40,
        backgroundColor: '#FFF7E8',
    }
});

const Menu = () => {
    const classes = useStyles();
    const { dispatch } = useAppContext()
    const  menuRef = useRef(null)

    useEffect(() => {
        dispatch({ type: 'SET_MENU_POSITION', payload: getAbsoluteOffsetY(menuRef.current)})
    },[dispatch])
    
    return (
        <Box className={classes.root} ref={menuRef}>
            <SectionTitle title={'Nos Menus'} />
            <SectionSubtitle subTitle={'Venez tester la fraicheur de nos sucréries'} />
            <Container>
                <Grid container spacing={4}>
                    {data.map((menuItem) => (
                    <Grid item key={menuItem.id} xs={12} sm={6} md={4}>
                        <FadeInSection menuItem={menuItem} />
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Menu