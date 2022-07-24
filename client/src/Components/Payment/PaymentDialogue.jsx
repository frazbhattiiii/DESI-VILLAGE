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
import { useSelector } from "react-redux";
import CardPaymentForm from "./CardPaymentForm";
import SuccessPayment from "./SuccessPayment";

export default function PaymentDialogue() {
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();
    const {step} = useSelector(state => state.payment);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (step) => {
        setOpen(false);
        console.log(step)
        if(step === 2){
            window.location='/';
            return;
        }
        window.location='/cart'

    };

    return (
        <div>

            <Dialog open={open} onClose={handleClose}>

                <DialogTitle sx={{
                    color:"#1AC073",
                    textAlign:'center',
                    fontSize: '2.5rem',
                }}>Payment</DialogTitle>
                <PaymentStep step={step}/>
                <DialogContent>
                    <DialogContentText sx={{
                        mb:2,
                    }}>
                        Fill the Form to pay for your order.
                    </DialogContentText>
                    {step === 0 && <PaymentForm/>}
                    {step===1 && <CardPaymentForm/>}
                    {step===2 && <SuccessPayment/>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>handleClose(step)}>{step===2?'Ok':'Cancel'}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
