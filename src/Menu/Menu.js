import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Container, Grid } from '@mui/material';
import { data } from '../data';
import { FadeInSection } from './MenuItem';
const useStyles = makeStyles({
   root: {
        minHeight: 700,
        padding:40,
        backgroundColor: '#FFF7E8',
    }
});

const Menu = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container>
                <Grid container spacing={4}>
                    {data.map((menuItem) => (
                    <Grid item key={`${Math.floor(Math.random()*1000)}-${menuItem}`} xs={12} sm={6} md={4}>
                        <FadeInSection key={menuItem.id} menuItem={menuItem} />
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Menu