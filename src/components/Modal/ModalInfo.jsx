import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export const ModalInfoContext = null;

const ModalInfo = () => {
    const [ open, setOpen ] = useState(true)

    const openInfoModal = (personagem) => {
        console.log(personagem)
    }

    const handleClose = () => {
        setOpen(false)
    }

    ModalInfoContext = React.createContext({
        openInfoModal: openInfoModal
    })

    return (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Voltar ao game
            </Button>
          </DialogActions>
        </Dialog>
    )
}

export default ModalInfo
