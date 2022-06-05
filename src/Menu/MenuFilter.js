import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react'
import { useAppContext } from '../store/AppContext'

const MenuFilter = () => {
    const [filterKeys, setFilterKeys] = useState([])
    const [displayAll, setDisplayAll] = useState(true)

    const { state: {  menus }, dispatch } = useAppContext();

    /**
     * Add isFilterKeySelected property to each item and set it to false
     */
    const getFilterKeys = useCallback(() => {
        const keys = Object.keys(menus).map(key => {
            return {filterKey:key, isFilterKeySelected: false}
        })
        setFilterKeys(keys)
    },[menus]);

    const handleFilterKeysCheck = (filterKey) => {
        const dataOfSelectedFilterKey = menus[filterKey];
        const resetPreviousFilterKeys = filterKeys.map(key => {
            if(key.filterKey !== filterKey) {
                key.isFilterKeySelected = false;
            } else {
                key.isFilterKeySelected = !key.isFilterKeySelected;
            }
            return key
        })
        dispatch({type: 'SET_DATA_TO_DISPLAY', payload:dataOfSelectedFilterKey});
        setDisplayAll(false)
        setFilterKeys(resetPreviousFilterKeys)
    }

    const handleAllInitialDataToDisplay = useCallback(() => {
        setDisplayAll(true);
        getFilterKeys()

        const initialStateData = Object.values(menus).flat();

        dispatch({type: 'SET_INITIAL_DATA_TO_DISPLAY', payload:initialStateData})
        dispatch({type: 'DATA_TO_PAGINATE', payload:initialStateData})
    },[dispatch, menus, getFilterKeys])

    useEffect(() => {
        handleAllInitialDataToDisplay()
    },[handleAllInitialDataToDisplay]);

    return (
        <Box sx={{ display: 'flex', justifyContent:'center'}}>
            <FormGroup>
                <Grid container justifyContent={'flex-start'} alignItems='center' sx={{ margin: '-20px 0 20px 0'}}>
                    <FormControlLabel
                        control={ 
                            <Checkbox 
                                checked={displayAll} 
                                onChange={handleAllInitialDataToDisplay} 
                                name={'Tous'}
                                color='success'
                            /> 
                        }
                        label={<Typography style={{ textTransform: 'capitalize', color:'GrayText'}}> Tous </Typography>}
                    />
                    {filterKeys.map(({filterKey, isFilterKeySelected}, index) => {
                        return (
                            <Grid item key={index}>
                                <FormControlLabel
                                    key={index}
                                    control={ 
                                        <Checkbox 
                                            checked={isFilterKeySelected} 
                                            onChange={() => handleFilterKeysCheck(filterKey)} 
                                            name={filterKey}
                                            color='success'
                                        /> 
                                    }
                                    label={<Typography style={{ textTransform: 'capitalize', color:'GrayText'}}>{filterKey}</Typography>}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </FormGroup>
        </Box>
        
    )
}

export default MenuFilter