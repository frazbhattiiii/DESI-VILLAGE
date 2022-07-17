import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PaymentForm from "./PaymentForm";
import { useNavigate } from "react-router-dom";
import PaymentStep from "./Steps";

export default function PaymentDialogue() {
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
        window.location = "/cart";

    };

    return (
        <div>

            <Dialog open={open} onClose={handleClose}>

                <DialogTitle sx={{
                    color:"#1AC073",
                    textAlign:'center',
                    fontSize: '2.5rem',
                }}>Payment</DialogTitle>
                <PaymentStep/>
                <DialogContent>
                    <DialogContentText sx={{
                        mb:2,
                    }}>
                        Fill the Form to pay for your order.
                    </DialogContentText>
                    <PaymentForm />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
