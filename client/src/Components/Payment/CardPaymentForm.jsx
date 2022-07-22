import * as Yup from "yup";
import { useEffect , useState } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { registerUser } from "../../features/userSlice/userActions";
import { useFormik , Form , FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import {
    Stack ,
    Box ,
    TextField ,
    IconButton ,
    InputAdornment , Select , InputLabel ,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import ToastBox from "../Toast/ToastContainer";
import { toast , ToastContainer } from "react-toastify";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import GreenButton from "../Buttons/GreenButton";
import { changeStep } from "../../features/paymentSlice/Payment";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

let easing = [ 0.6 , - 0.05 , 0.01 , 0.99 ];
const animate = {
    opacity : 1 ,
    y : 0 ,
    transition : {
        duration : 0.6 ,
        ease : easing ,
        delay : 0.16 ,
    } ,
};

const CardPaymentForm = () => {
    const navigate = useNavigate ();
    const [mode,setMode]=useState("");
    const dispatch = useDispatch ();
    const {step} = useSelector (state => state.payment);
    const [steps,setSteps]=useState(0);
    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
    const handleDate = (newValue) => {
        setValue(newValue);
    };
    const handleChange = ( event ) => {
        setMode(event.target.value);
    }
    const PaymentSchema = Yup.object ().shape ( {
                                                   cardNumber : Yup.string()
                                                                   .required()
                                                                   .max(16,'Card Number cannot be more than 16 digits')
                                                                   .min(10,'Card Number must be 10 digits'),
                                                   cvv : Yup.string ()
                                                            .min ( 3 , "Enter the right CVV" )
                                                            .max ( 3, "Not More than 3!" )
                                                              .required ( "CVV is required" ) ,
                                                   Name : Yup.string ()
                                                                .min ( 2 , "Atleast 5 characters" )
                                                                .max ( 100 , "Too Long!" )
                                                                .required ( "Name is required" )
                                                } );




    const formik = useFormik ( {
                                   initialValues : {
                                       cardNumber : "" ,
                                       expiry : "" ,
                                       cvv : "" ,
                                       Name : ""
                                   } ,
                                   validationSchema : PaymentSchema ,
                                   onSubmit : ( e ) => {
                                       console.log("Submit Clicked");
                                       const cardNumber = formik.values.cardNumber;
                                       const cvv = formik.values.cvv;
                                        const Name = formik.values.Name;
                                        const date = new Date(value);
                                       const data = { cardNumber, cvv, Name,date };
                                       // dispatch(changeStep(2));
                                       console.log(data)
                                   } ,
                               } );

    const { errors , touched , handleSubmit , isSubmitting , getFieldProps } = formik;
    return (
        <>
            <ToastBox/>
            <Stack  component={ motion.div }
                    initial={ { opacity : 0 , y : 60 } }
                    animate={ animate }
                    direction={ { xs : "column" , sm : "row" } }
                    spacing={ 2 }>
                <img src ='../../../public/images/debitCard.png' alt='card image' width='290' height='300' style={{
                    marginTop:'-4rem',
                    marginLeft:'-4rem'
                }}/>
            <FormikProvider value={ formik }>
                <Form autoComplete="off" noValidate onSubmit={ handleSubmit }>
                    <Stack spacing={ 3 }>
                            <TextField
                                type='Number'
                                label="Card Number"
                                { ... getFieldProps ( "cardNumber" ) }
                                error={ Boolean ( touched.cardNumber && errors.cardNumber ) }
                                helperText={ touched.cardNumber && errors.cardNumber }
                            />

                        <Stack
                            spacing={ 2 }
                            component={ motion.div }
                            initial={ { opacity : 0 , y : 60 } }
                            direction={ { xs : "column" , sm : "row" } }
                            animate={ animate }
                        >
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <DatePicker
                                    label="Basic example"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>

                            <TextField
                                type='Password'
                                label="CVV"
                                { ... getFieldProps ( "cvv" ) }
                                error={ Boolean ( touched.cvv && errors.cvv ) }
                                helperText={ touched.cvv && errors.cvv }
                            />
                        </Stack>
                        <Stack spacing={ 2 }
                               component={ motion.div }
                               initial={ { opacity : 0 , y : 60 } }
                               direction={ { xs : "column" , sm : "row" } }
                               animate={ animate }>

                            <TextField
                                fullWidth
                                label="Card Holder Name"
                                { ... getFieldProps ( "Name" ) }
                                error={ Boolean ( touched.Name && errors.Name ) }
                                helperText={ touched.Name && errors.Name }
                            />
                        </Stack>

                        <Box
                            component={ motion.div }
                            initial={ { opacity : 0 , y : 20 } }
                            animate={ animate }
                        >
                            <GreenButton loading={ isSubmitting } text="Confirm Payment"/>

                        </Box>
                    </Stack>
                </Form>
            </FormikProvider>
            </Stack>
        </>
    );
};

export default CardPaymentForm;
