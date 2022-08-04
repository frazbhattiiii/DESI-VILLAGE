import { createSlice } from "@reduxjs/toolkit";
import {
  orderHistory
} from "./userActions";
import { removeCookie, removeLocalStorage } from "../../utils/auth";

const initialState = {
  loading: false,
  loggedIn: true,
  loggedOut: false,
  error: null,
  totalItems: 0,
  items: null,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    history: (state) => {

    },
  },
  extraReducers: {
    [ orderHistory.pending ] : ( state ) => {
        state.loading = true
        state.error = null

    } ,
    [ orderHistory.fulfilled ] : ( state , { payload } ) => {
        state.loading = false
        state.items = payload
        state.totalItems = payload.items.length

    } ,
    [ orderHistory.rejected ] : ( state , { payload } ) => {
        state.loading = false
        state.error = payload

    } ,
  },
});
export const { history } = historySlice.actions;
export default historySlice.reducer;
