require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// Middleware
//app.use(express.json()); // parse json bodies in the request object
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
    // Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/posts", require("./routes/postRoutes"));

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went rely wrong",
    });
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));