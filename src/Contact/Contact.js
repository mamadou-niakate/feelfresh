import { Box } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import SectionTitle from '../shared/SectionTitle';
import SectionSubtitle from '../shared/SectionSubtitle';

const useStyles = makeStyles({
   root: {
      backgroundColor: '#FFF7E8',
      height: 400
    }
});

export const Contact = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <SectionTitle title={'Contact'} />
      <SectionSubtitle subTitle={'N\'hésitez pas à nous contacter'} />
    </Box>
  )
}

