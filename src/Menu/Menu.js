import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Container, Grid } from '@mui/material';
// import { data } from '../data';
import { menus } from '../jsonfile'
import FadeInSection from './MenuItem';
import SectionTitle from '../shared/SectionTitle';
import SectionSubtitle from '../shared/SectionSubtitle';
import { useAppContext } from '../store/AppContext';
import MenuFilter from './MenuFilter';

const useStyles = makeStyles({
   root: {
        padding:40,
        backgroundColor: '#FFF7E8',
    }
});

const Menu =  React.forwardRef(() => {
    const classes = useStyles();  
    const { state: { dataToDisplay }, dispatch } = useAppContext();
    
    useEffect(() => {
        dispatch({type: 'SET_MENUS', payload: menus});
    }, [dispatch])
    
    return (
        <Box className={classes.root} name='menu'>
            <SectionTitle title={'Nos Menus'} />
            <SectionSubtitle subTitle={'Venez tester la fraicheur de nos sucréries'} />
            <MenuFilter />
            <Container>
                <Grid container spacing={4}>
                    {dataToDisplay?.map((menuItem, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <FadeInSection menuItem={menuItem} />
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
})

export default Menu