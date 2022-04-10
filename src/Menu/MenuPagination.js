import React, { useCallback, useEffect, useState } from 'react';
import { Pagination, Stack, Grid } from '@mui/material';
import { useAppContext } from '../store/AppContext';
import { makeStyles } from '@mui/styles';
// import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { scroller } from 'react-scroll';

const useStyles = makeStyles({
    root: {
        margin:'auto',
        padding:40,
     }
 });

const nbItemsPerPage = 6;
export default function MenuPagination() {
    const classes = useStyles();
    const [pages, setPages] = useState();
    const [currentPage, setCurrentPage] = useState(1)

    const { state:{ dataToDisplay, dataToPaginate }, dispatch } = useAppContext();
    
    const handlePageChange = (_event, page) => {
        setCurrentPage(() => {

            if(page === 1) {
                scroller.scrollTo('menu');
            }
            
            return page
        })
    }

    const setPageData = useCallback((page) => {
       const newDataToDisplay =  dataToPaginate.slice((page - 1) * nbItemsPerPage, page * nbItemsPerPage);
       dispatch({type: 'SET_INITIAL_DATA_TO_DISPLAY', payload:newDataToDisplay});
    },[dataToPaginate,dispatch])
    

    useEffect(() => {
        setPageData(currentPage)
        
        // need to evoid to scroll directly to the top of the page at page load
        // so we scroll to the top of the menu section only after
        // pagination page is different from 1
        if(currentPage !== 1){
            scroller.scrollTo('menu')
        }

    },[currentPage, setPageData])

    // only render when change of dataToPaginate
    useEffect(() => {
        setCurrentPage(1) 
    },[dataToPaginate])

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