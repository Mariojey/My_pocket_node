require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

const PORT = process.env.PORT;

//Routes
const hotelRouter = require('./routes/hotelRouter')
const clientRouter = require('./routes/clientRouter')
const countryRouter = require('./routes/countryRouter')
const cityRouter = require('./routes/cityRouter')

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())
    //listening
app.use('/hotels', hotelRouter)
app.use('/clients', clientRouter)
app.use('/countries', countryRouter)
app.use('/cities', cityRouter)


app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Ups! Something went wrong 🥺"
    });
});

app.listen(PORT, () => {
    console.log(`======================================`);
    console.log(`||          H O T E L E             ||`);
    console.log(`||🦫 Server running on PORT ${PORT}     ||`);
    console.log(`||       Made by MarioJey           ||`);
    console.log(`=====================================`);

})