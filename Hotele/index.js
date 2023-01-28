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
const parkingRouter = require('./routes/parkingRouter')
const roomRouter = require('./routes/roomRouter')
const reservationRouter = require('./routes/reservationRouter')

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())
    //listening
app.use('/api/hotels', hotelRouter)
app.use('/api/clients', clientRouter)
app.use('/api/countries', countryRouter)
app.use('/api/cities', cityRouter)
app.use('/api/parkings', parkingRouter)
app.use('/api/rooms', roomRouter)
app.use('/api/reservations', reservationRouter)


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