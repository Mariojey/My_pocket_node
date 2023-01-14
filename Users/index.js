require("dotenv").config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//props
const PORT = process.env.PORT || 3000;

//routes
const userRoutes = require('./routes/userRoutes')

//encode
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use('/users', userRoutes)

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Ups! Something isn't wotking 🥶"
    });
});

//listen 
app.listen(PORT, () => {
    console.log(`🦫  Server running on PORT ${PORT}`);
})