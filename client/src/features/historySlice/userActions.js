import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

//getting the history
export const orderHistory = createAsyncThunk(
    // action type string
    "user/history",
    // callback function
    async (
      {  },
      { rejectWithValue }
    ) => {
      try {
        let userId = `62d3268aeb8a0df8ddb43f2e`
        // configure header's Content-Type as JSON
        // make request to backend
        console.log(userId);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/user/history`,
          {
            userId

          }
        );
        return response.data;
      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );