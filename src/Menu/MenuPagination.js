import React, { useCallback, useEffect, useState } from 'react';
import { Pagination, Stack, Grid } from '@mui/material';
import { useAppContext } from '../store/AppContext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        margin:'auto',
        padding:40,
     }
 });

const nbItemsPerPage = 4;
export default function MenuPagination() {
    const classes = useStyles();
    const [pages, setPages] = useState();
    const [currentPage, setCurrentPage] = useState(1)

    const { state:{ dataToDisplay, dataToPaginate }, dispatch } = useAppContext();
    
    const handlePageChange = (_event, page) => {
        setCurrentPage(page)
    }

    const setPageData = useCallback((page) => {
       const newDataToDisplay =  dataToPaginate.slice((page - 1) * nbItemsPerPage, page * nbItemsPerPage);
       dispatch({type: 'SET_INITIAL_DATA_TO_DISPLAY', payload:newDataToDisplay});
    },[dataToPaginate,dispatch])
    

    useEffect(() => {
        setPageData(currentPage)
    },[currentPage, setPageData])

    useEffect(() => {
        setPages(Math.ceil(dataToPaginate.length / nbItemsPerPage));        
    },[dataToDisplay,dataToPaginate.length])

    return (
        <Grid container justifyContent='center'>
            <Grid item>
                <Stack spacing={2} className={classes.root}>
                    <Pagination 
                        count={pages} 
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </Stack>
            </Grid>
        </Grid>
    );
}