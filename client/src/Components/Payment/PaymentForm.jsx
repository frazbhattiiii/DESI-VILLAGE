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
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";

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

const PaymentForm = () => {
    const navigate = useNavigate ();
    const [mode,setMode]=useState("");
    // const [ showPassword , setShowPassword ] = useState ( false );
    // const dispatch = useDispatch ();
    // const {  error , register } = useSelector (
    //     ( state ) => state.user
    // );
    // console.log(register)
    // useEffect ( () => {
    //     console.log(register)
    //     // redirect user to login page if registration was successful
    //     if ( register ) {
    //         toast ( "Activation link sent to your email",{
    //             autoClose : 2000 ,
    //         } );
    //     }
    //     if ( error ) {
    //         toast ( error ,{
    //             autoClose : 2000 ,
    //         });
    //     }
    //
    // } , [ register , error ] )
    const handleChange = ( event ) => {
        setMode(event.target.value);
    }
    const SignupSchema = Yup.object ().shape ( {
                                                   firstName : Yup.string ()
                                                                  .min ( 2 , "Too Short!" )
                                                                  .max ( 50 , "Too Long!" )
                                                                  .required ( "First name required" ) ,
                                                   lastName : Yup.string ()
                                                                 .min ( 2 , "Too Short!" )
                                                                 .max ( 50 , "Too Long!" )
                                                                 .required ( "Last name required" ) ,
                                                   email : Yup.string ()
                                                              .email ( "Email must be a valid email address" )
                                                              .required ( "Email is required" ) ,
                                                   address : Yup.string ()
                                                                 .min ( 2 , "Atleast 5 characters" )
                                                                 .max ( 200 , "Too Long!" )
                                                                 .required ( "Address is required" ) ,
                                                   phone : Yup.string()
                                                              .matches(/^[0-9]{10}$/, "Phone number is not valid")
                                                 .required ( "Phone number is required" )
                                                                .min ( 7 , "Atleast 7 characters" )
                                                                .max ( 15 , "Too Long!" )
                                                                .required ( "Phone Number is required" ) ,
                                               } );

    const formik = useFormik ( {
                                   initialValues : {
                                       firstName : "" ,
                                       lastName : "" ,
                                       email : "" ,
                                       address : "" ,
                                       phone:"",
                                       payment:""
                                   } ,
                                   validationSchema : SignupSchema ,
                                   onSubmit : ( e ) => {

                                       const name = formik.values.firstName + " " + formik.values.lastName;
                                       const email = formik.values.email;
                                       const address = formik.values.address;
                                       const phone = formik.values.phone;
                                        const payment = formik.values.payment;
                                        if(payment===''){
                                            toast("Payment Method is required",{
                                                autoClose:2000
                                            })
                                            return;
                                        }

                                       const data = { name , email , address,phone,payment };
                                       console.log(data)
                                       // dispatch ( registerUser ( data ) );
                                   } ,
                               } );

    const { errors , touched , handleSubmit , isSubmitting , getFieldProps } = formik;

    return (
        <>
            <ToastBox/>
            <FormikProvider value={ formik }>
                <Form autoComplete="off" noValidate onSubmit={ handleSubmit }>
                    <Stack spacing={ 3 }>
                        <Stack
                            component={ motion.div }
                            initial={ { opacity : 0 , y : 60 } }
                            animate={ animate }
                            direction={ { xs : "column" , sm : "row" } }
                            spacing={ 2 }
                        >
                            <TextField
                                fullWidth
                                label="First name"
                                { ... getFieldProps ( "firstName" ) }
                                error={ Boolean ( touched.firstName && errors.firstName ) }
                                helperText={ touched.firstName && errors.firstName }
                            />

                            <TextField
                                fullWidth
                                label="Last name"
                                { ... getFieldProps ( "lastName" ) }
                                error={ Boolean ( touched.lastName && errors.lastName ) }
                                helperText={ touched.lastName && errors.lastName }
                            />
                        </Stack>

                        <Stack
                            spacing={ 2 }
                            component={ motion.div }
                            initial={ { opacity : 0 , y : 60 } }
                            direction={ { xs : "column" , sm : "row" } }
                            animate={ animate }
                        >
                            <TextField
                                fullWidth
                                autoComplete="username"
                                type="email"
                                label="Email address"
                                { ... getFieldProps ( "email" ) }
                                error={ Boolean ( touched.email && errors.email ) }
                                helperText={ touched.email && errors.email }
                            />

                            <TextField
                                fullWidth
                                multiline
                                autoComplete="Address"
                                label="Address"
                                { ... getFieldProps ( "address" ) }
                                error={ Boolean ( touched.address && errors.address ) }
                                helperText={ touched.address && errors.address }
                                rows={3}
                                sx={{
                                    width:{md:'35rem',xs:'15rem',xl:"45rem",lg:'45rem',sm:'30rem'}
                                }}
                            />
                        </Stack>
                        <Stack spacing={ 2 }
                               component={ motion.div }
                               initial={ { opacity : 0 , y : 60 } }
                               direction={ { xs : "column" , sm : "row" } }
                               animate={ animate }>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={mode}
                                label='Payment'
                                sx={{
                                    width:{md:'25rem',xs:'15rem',xl:"45rem",lg:'45rem'},
                                    color:'black'
                                }}
                                onChange={handleChange}
                                { ... getFieldProps ( "payment" ) }
                                error={ Boolean (  errors.payment ) }
                                helperText={ errors.payment }
                            >
                                <MenuItem value="" label='Mode of Payment'>
                                    <em>Mode of Payment</em>
                                </MenuItem>
                                <MenuItem value={'Cash'}>Cash</MenuItem>
                                <MenuItem value={'Debit'}>Debit Card</MenuItem>
                                <MenuItem value={'Credit'}>Credit Card</MenuItem>
                            </Select>
                            <TextField
                                fullWidth
                                autoComplete="phone"
                                type="number"
                                label="Phone Number"
                                { ... getFieldProps ( "phone" ) }
                                error={ Boolean ( touched.phone && errors.phone ) }
                                helperText={ touched.phone && errors.phone }
                            />
                        </Stack>

                        <Box
                            component={ motion.div }
                            initial={ { opacity : 0 , y : 20 } }
                            animate={ animate }
                        >
                            <GreenButton loading={ isSubmitting } text="Go to Payment"/>

                        </Box>
                    </Stack>
                </Form>
            </FormikProvider>
        </>
    );
};

export default PaymentForm;
