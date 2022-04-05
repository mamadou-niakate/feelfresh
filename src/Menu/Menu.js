import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Container, Grid } from '@mui/material';
import { data } from '../data';
import FadeInSection from './MenuItem';
import SectionTitle from '../shared/SectionTitle';
import SectionSubtitle from '../shared/SectionSubtitle';

const useStyles = makeStyles({
   root: {
        padding:40,
        backgroundColor: '#FFF7E8',
    }
});

const Menu =  React.forwardRef((props, ref) => {
    const classes = useStyles();    
    return (
        <Box className={classes.root} ref={ref} {...props}>
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
})

export default Menu