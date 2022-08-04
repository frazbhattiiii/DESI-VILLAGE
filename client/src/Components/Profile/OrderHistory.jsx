import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import { Button, Typography, Grid, Divider } from "@mui/material";
import Card from "@mui/joy/Card";
import StarIcon from "@mui/icons-material/Star";
import OrderCard from "./OrderCard";
import {history} from '../../features/historySlice/history'
import { useDispatch , useSelector } from "react-redux";
function OrderHistory() {
  // const {totalItems}=  useSelector(state => state.totalItems);
  // console.log(totalItems)
  return (
    <>
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: "bold",
          mx: 5,
          fontFamily: "Arial",
          color: "#1ac073",
        }}
      >
        Order History
      </Typography>

      <Card
        variant="outlined"
        sx={{ maxWidth: {
          xs: '53rem',
          sm: '54rem',
          md: '55rem',
          lg: '56rem',
          xl: '57rem',
        }, borderColor: "#ccf0d5", cursor: "pointer" }}
      >
        <Grid sx={{ display: "flex", justifyContent: "center", gap: 5.0, flexWrap: "wrap" }}>
          <OrderCard />
          </Grid>
        <Grid sx={{display: 'flex', marginTop: '0.5rem', justifyContent:'right'}}>
        
        <Typography
        variant="h7"
        align="center"
        sx={{
          fontWeight: "bold",
          mx: 5,
          fontFamily: "Arial",
          color: "black",
          float: 'right'
        }}
      >
        $40
      </Typography>
      <Typography
        variant="h7"
        align="center"
        sx={{
          fontWeight: "bold",
          mx: 5,
          fontFamily: "Arial",
          color: "#1ac073",
          float: 'right'
        }}
      >
        Completed
      </Typography>
      </Grid>
      </Card>
    </>
  );
}

export default OrderHistory;
