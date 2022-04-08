import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react'
import { useAppContext } from '../store/AppContext'
// import { makeStyles } from '@mui/styles';
// import { RiCheckboxBlankCircleFill, RiCheckboxCircleFill } from 'react-icons/ri';
// import { BsFillCheckCircleFill } from 'react-icons/bs';

// const useStyles = makeStyles({
//     checkBox: {
//         fonSize: '11.5rem',
//         color: '##686D76',
//     }
// });

const MenuFilter = () => {
    // const classes = useStyles();
    const [filterKeys, setFilterKeys] = useState([])
    const [displayAll, setDisplayAll] = useState(true)

    const { state: {  menus }, dispatch } = useAppContext();

    /**
     * Add isFilterKeySelected property to each item and set it to false
     */
    const getFilterKeys = useCallback(() => {
        const keys = Object.keys(menus);
        const keysSelectabled = keys.reduce((keys, key) => {
            return [...keys, {filterKey:key, isFilterKeySelected: false}]
        },[])
        setFilterKeys(keysSelectabled)
    },[menus]);

    const handleFilterKeysCheck = (filterKey) => {
        const updatedFilterKeys = filterKeys.map((oldFilterKey) => {
            if(oldFilterKey.filterKey.includes(filterKey)) {
                const newFilterKey = {...oldFilterKey, isFilterKeySelected: !oldFilterKey.isFilterKeySelected};
                return newFilterKey;
            }
            return oldFilterKey;
        })
        setFilterKeys(updatedFilterKeys);
        const selectedFilterKeys = updatedFilterKeys.map(ftk => ftk.isFilterKeySelected ? ftk.filterKey : undefined);
        dispatch({type: 'SET_DATA_TO_DISPLAY', payload:selectedFilterKeys});
        setDisplayAll(false)

        // check 'Tous' checkbox in case nothing is checked
        const isNothingChecked = updatedFilterKeys.find(key => key.isFilterKeySelected);
        if(!isNothingChecked) {
            handleAllInitialDataToDisplay();
        }
    }

    const handleAllInitialDataToDisplay = useCallback(() => {
        setDisplayAll(true);
        getFilterKeys()

        const initialStateData = Object.entries(menus).reduce((allMenus,[_key, values]) => {
            return [...allMenus, ...values];
        },[]);
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
                                // checkedIcon={<BsFillCheckCircleFill/>}
                                // icon={<RiCheckboxBlankCircleFill/>}
                            /> 
                        }
                        label={<Typography style={{ textTransform: 'capitalize'}}> Tous </Typography>}
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
                                            // checkedIcon={<BsFillCheckCircleFill />}
                                            // icon={<RiCheckboxBlankCircleFill className={classes.checkBox}/>}
                                        
                                        /> 
                                    }
                                    label={<Typography style={{ textTransform: 'capitalize'}}>{filterKey}</Typography>}
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