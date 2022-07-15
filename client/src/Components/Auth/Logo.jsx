
import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src="./images/logo.jpg" alt="logo" width='400px' />
      </Link>
    </Box>
  );
};

export default Logo;