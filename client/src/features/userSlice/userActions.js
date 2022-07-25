import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { authenticate , setCookie , setLocalStorage } from "../../utils/auth";

export const registerUser = createAsyncThunk (
// action type string
'user/register' ,
// callback function
async ( { name , email , password } , { rejectWithValue } ) => {
    try {
// configure header's Content-Type as JSON
// make request to backend
        const response = await axios.post ( `${ process.env.REACT_APP_API_URL }/auth/register` , {
            name ,
            email ,
            password ,
        } )
        return response.data;

    } catch ( error ) {
// return custom error message from API if any
        if ( error.response && error.response.data.message ) {
            return rejectWithValue ( error.response.data.message )
        } else {
            return rejectWithValue ( error.message )
        }
    }

}
)
export const activateUser = createAsyncThunk (
// action type string
'user/register/activate' ,
// callback function
async ( { token } , { rejectWithValue } ) => {
    try {
// configure header's Content-Type as JSON
        const config = {
            headers : {
                'Content-Type' : 'application/json' ,
            } ,
        }
// make request to backend
        const response = await axios
            .post ( `${ process.env.REACT_APP_API_URL }/auth/activation` , {
                token ,
            } );
        return response.data;
    } catch ( error ) {
// return custom error message from API if any
        if ( error.response && error.response.data.message ) {
            return rejectWithValue ( error.response.data.message )
        } else {
            return rejectWithValue ( error.message )
        }
    }

}
)
export const loginUser = createAsyncThunk (
// action type string
'user/login' ,
// callback function
async ( {
            email , password ,
        } , { rejectWithValue } ) => {
    try {
// configure header's Content-Type as JSON
        const config = {
            headers : {
                'Content-Type' : 'application/json' ,
            } ,
        }
// make request to backend
        const response = await axios
            .post ( `${ process.env.REACT_APP_API_URL }/auth/login` , {
                email ,
                password
            } );
        setCookie ( 'token' , response.data.token );
        console.log ( response.data.user );
        setLocalStorage ( 'user' , response.data.user );
        return response.data;
    } catch ( error ) {
// return custom error message from API if any
        console.log ( error )
        if ( error.response && error.response.data.message ) {
            return rejectWithValue ( error.response.data.message )
        } else {
            return rejectWithValue ( error.message )
        }
    }

}
)
export const googleLogin = createAsyncThunk (
// action type string
'user/google/login' ,
// callback function
async ( { idToken } , { rejectWithValue } ) => {
    try {
// configure header's Content-Type as JSON
        const config = {
            headers : {
                'Content-Type' : 'application/json' ,
            } ,
        }
// make request to backend
        const response = await axios ( {
                                           method : 'POST' ,
                                           url : `${ process.env.REACT_APP_API_URL }/auth/login/google` ,
                                           data : { idToken }
                                       } )
        setCookie ( 'token' , response.data.token );
        console.log ( response.data.user );
        setLocalStorage ( 'user' , response.data.user );
        return response.data;
    } catch ( error ) {
// return custom error message from API if any
        console.log ( error )
        if ( error.response && error.response.data.message ) {
            return rejectWithValue ( error.response.data.message )
        } else {
            return rejectWithValue ( error.message )
        }
    }

}
)
