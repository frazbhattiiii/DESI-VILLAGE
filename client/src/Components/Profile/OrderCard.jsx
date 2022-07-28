import React from "react";
import Box from "@mui/joy/Box";
import { Typography, Grid } from "@mui/material";
import Card from "@mui/joy/Card";

function OrderCard() {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          maxWidth: "250px",
          height: "90px",
          borderColor: "#ccf0d5",
          display: "flex",
        }}
      >
        <Grid sx={{ display: "flex" }}>
          <Grid>
            <Box
              component="img"
              src="./images/pizza.png"
              alt="Chef Image"
              sx={{
                width: "5rem",

                height: "5rem",
                display: "flex",
              }}
            />
          </Grid>
          <Grid sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography
              variant="h7"
              fontFamily="poppins"
              fontSize="md"
              sx={{ marginLeft: "0.5rem" }}
            >
              Pizza
            </Typography>

            <Typography
              variant="p"
              sx={{
                marginLeft: "0.5rem",
                color: "#808080",
                fontSize: "0.8rem",
                top: "0px",
              }}
            >
              Beef patties, iceberg lettuce, tomato, mozzarella
            </Typography>

            <Typography
              variant="h7"
              fontFamily="poppins"
              fontSize="md"
              sx={{ marginLeft: "0.5rem" }}
            >
              $10
              <Typography
                variant="p"
                sx={{
                  marginLeft: "0.5rem",
                  color: "#808080",
                  fontSize: "0.8rem",
                  top: "0px",
                  float: 'right'
                }}
              >
                Quantity: 2
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default OrderCard;
