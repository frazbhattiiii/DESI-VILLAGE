import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { authenticate , setCookie , setLocalStorage } from "../../utils/auth";

export const getAllItems = createAsyncThunk (
'items/getAll' ,

async () => {
    try {
// make request to backend
        console.log('getAllItems');
        const response = await axios
            .get(    `${ process.env.REACT_APP_API_URL }/food/get-all-items`);
        return response.data;
    } catch ( error ) {
// return custom error message from API if any
return error.response.data.message;
    }

}
)

