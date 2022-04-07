import React, { useEffect, useState } from 'react';
import { Pagination, Stack, Grid } from '@mui/material';
import { useAppContext } from '../store/AppContext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        margin:'auto',
        padding:40,
     }
 });

export default function MenuPagination() {
    const classes = useStyles();
    const [nbItemsPerPage, setNbItemsPerPage] = useState(4);
    const [pages, setPages] = useState();

    const { state:{ dataToDisplay, menus }, dispatch } = useAppContext();
    
    const handlePageChange = (_event, page) => {
        setPageData(page)
    }

    const setPageData = (page) => {
       const data =  dataToDisplay.slice((page -1) * nbItemsPerPage, page * nbItemsPerPage);
       dispatch({type: 'SET_INITIAL_DATA_TO_DISPLAY', payload:data})
    }

    useEffect(() => {
        const numberOfAllData = Object.entries(menus).reduce((items, [_key, values]) => {
            return [...items,...values]
        },[]);
        console.log(numberOfAllData.length);
        setPages(numberOfAllData?.length / nbItemsPerPage);
    },[dataToDisplay])

    return (
        <Grid container justifyContent='center'>
            <Grid item>
                <Stack spacing={2} className={classes.root}>
                    <Pagination 
                        count={pages} 
                        onChange={handlePageChange}
                    />
                </Stack>
            </Grid>
        </Grid>
    );
}