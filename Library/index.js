/*
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').parse()
}
*/
//Must have to install
//Express
//ejs
//express-ejs-layouts
//dotenv
//devDependencies with --save-Dev

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');


const router = require('./routes/route.js')
const mongo = require('./globalVariables/path.js')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))


const mongoose = require('mongoose');
mongoose.connect(mongo.dbUrl, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log(`🥭 Connected to database`))

app.use('/', router)

app.listen(process.env.PORT || 8888)