import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useAppContext } from '../store/AppContext';
import { makeStyles } from '@mui/styles';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button'
import QuiltedImageList from './component/ImageList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VerticalTabs from './component/MenuDetailsInfo';

const useStyles = makeStyles({
    modalContentContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        border:'none'
    },
    imageListContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'scroll',
    },
});

export default function MenuDetails() {
    const classes = useStyles();
    const { state:{ openModal }, dispatch } = useAppContext();

    const handleCloseModal = () => {
        dispatch({type: 'SET_CLOSE_MODAL', payload:false})
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                keepMounted
            >
                <Fade in={openModal} className={classes.modalContentContainer}>
                    <Box className={classes.modalContentContainer}>
                        <div style={{ padding: '2%'}}>
                            <Button onClick={handleCloseModal}>
                                <ArrowBackIcon /> Retour
                            </Button>
                            <div>
                                <QuiltedImageList />
                            </div>
                            <VerticalTabs />
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
