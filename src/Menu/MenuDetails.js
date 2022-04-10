import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppContext } from '../store/AppContext';
import { makeStyles } from '@mui/styles';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import QuiltedImageList from './component/ImageList';

const useStyles = makeStyles({
    modalContentContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
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
            >
                <Fade in={openModal} className={classes.modalContentContainer}>
                    <Box className={classes.modalContentContainer}>
                        <div style={{ padding: '5%'}}>
                            <div>
                                <QuiltedImageList />
                            </div>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
