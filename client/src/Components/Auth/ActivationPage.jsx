import React,{useState,useEffect} from 'react';
import {styled} from '@mui/system';
import {
    Grid,
    Box,
    Button,
    Stack
} from '@mui/material';
// import { useJwt } from "react-jwt";
import jwt from 'jwt-decode';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import {isAuth,authenticate} from '../../utils/auth';
import ToastBox from '../Toast/ToastContainer';
import { useNavigate} from 'react-router-dom';
const StyledButton = styled(Button)`
  background-color: #1AC073;
  color: #fff;
  padding: 6px 12px;
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
  &:hover {
    background-color: #1AC078;
  }
  &:focus {
    background-color: green;
  }
`;
const ActivationPage = (props) => {
    let {token}= useParams();
    const [formData, setFormData] = useState({
        name: '',
        token: '',
        show: true
      });
      let { name } = jwt(token);
      useEffect(() => {
        
    
        if (token) {
          setFormData({ ...formData, name, token });
        }
    
        console.log(token, name);
      }, [token]);
      const { show } = formData;
    
      const handleSubmit = e => {
        e.preventDefault();
    
        axios
          .post(`${process.env.REACT_APP_API_URL}/auth/activation`, {
            token
          })
          .then(res => {
            setFormData({
              ...formData,
              show: false
            });
            toast(`${res.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
          })
          .catch(err => {
            toast(`⚠️ ${err}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
     
          });
      };
    
    let navigate = useNavigate();
    const backToSignUP =()=>{
        navigate('/signup');
    }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <ToastBox />
    {/* {isAuth() ? backToSignUP() : null} */}
      <Grid>
        <Grid item xs={8}>
        <Stack spacing={4} direction='column' alignItems='center' sx={{
            marginTop: '2rem',
        }}>
            <Box component="img" src="../.././images/logo.jpg" alt="logo"  sx={{
            maxWidth: {xs:'50%',md:"40%",lg:'40%',xl:'40%'},
            }}/>
            <StyledButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={handleSubmit}>
                Activate your Account
            </StyledButton>
            <Button
            fullWidth
            size="large"
            type="submit"
            variant="outlined"
            sx={{
                maxWidth: '50%',
            }}
            onClick={backToSignUP}
            >
                Back to Signup
            </Button>
            </Stack>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default ActivationPage