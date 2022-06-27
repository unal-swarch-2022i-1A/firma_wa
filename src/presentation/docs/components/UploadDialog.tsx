import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
    open: boolean,
    handleCloseUploadDialog: () => void
}

export default function AlertDialog(props: Props) {

    const handleClose = () => {
        alert("TODO")
    };

    return (
        <div>
            <Dialog
                open={props.open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Cargar archivo"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        TODO: Acá va el formulario para subir el archivo
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleCloseUploadDialog}>
                        Cancelar
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
