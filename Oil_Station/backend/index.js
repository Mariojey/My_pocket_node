const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8888;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const prices = [5.12, 5.66, 7.23, 2.33];
app.get("/", (req, res) => {
    res.send(`This app is working 🖐️`)
})
app.post("/calculate", (req, res) => {
    console.log(req.body);
    let finallyPrice = parseInt(req.body.countOfLiters) * parseInt(prices[req.body.kindOfFuel]);
    console.log(finallyPrice);
    res.status(200).json(finallyPrice);
})

app.listen(port, () => {
    console.log(`Hello World`);
    console.log(`This app is working 🖐️`);
})