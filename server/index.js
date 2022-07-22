const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const connectDB = require("./Config/db");

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
if(process.env.NODE_ENV === 'development'){
    app.use(cors({
        origin: process.env.CLIENT_URL
    }));
//   Morgan will allow us to make request logs in the terminal
    app.use(morgan('dev'));
}

const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
connectDB();

app.use("/auth", authRoutes);
// app.use("/payment", paymentRoutes);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});