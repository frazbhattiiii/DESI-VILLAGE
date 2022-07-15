import { Icon } from "@iconify/react";
import { Stack, Button, IconButton } from "@mui/material";
import { useEffect } from "react";
import { GoogleLogin } from 'react-google-login';
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import ToastBox from '../Toast/ToastContainer';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { authenticate, isAuth } from "../../utils/auth";

const SocialAuth = () => {
    let navigate = useNavigate();
    const responseGoogle = response => {
        console.log(response);
        axios({
                  method: 'POST',
                  url: `${process.env.REACT_APP_API_URL}/auth/login/google`,
                  data: {idToken: response.tokenId}
              })
            .then(response => {
                authenticate(response, () => {
                    toast(`🎊 Login Successfull`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => {
                        isAuth() && isAuth().role === 'admin'
                        ? navigate('/admin')
                        : navigate('/');
                    }, 2000);
                    console.log('GOOGLE SIGNIN SUCCESS', response);
                })
            })
            .catch(error => {
                toast(`⚠️ ${response.error ? response.error : "Some Technical Error occured"}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log('GOOGLE SIGNIN ERROR', error);
            });
    };


    return (
        <>
            <ToastBox/>
            <Stack direction="row" spacing={2}>

                <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                             buttonText="Sign up with google"
                             onSuccess={responseGoogle}
                             onFailure={responseGoogle}

                             render={renderProps => (
                                 <IconButton
                                     onClick={renderProps.onClick}
                                     disabled={renderProps.disabled}
                                     sx={{
                                         border: "2px solid #ccc",
                                         borderRadius: "5px",
                                         padding: "0.5675rem",
                                         flex: 1,
                                     }}
                                 >
                                     <Icon icon="eva:google-fill" color="#DF3E30" width={24} height={24}/>
                                 </IconButton>)}
                             cookiePolicy={'single_host_origin'}
                />

            </Stack>
        </>
    );
};

export default SocialAuth;