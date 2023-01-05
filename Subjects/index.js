const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

//globalVariables
const appProps = require('./globalVariables/globalVariables.js')
const dbProps = require('./globalVariables/dbProps.js')

//db
const mongoose = require('mongoose');
const router = require('./routes/route.js');



app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(dbProps.dbUrl, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log(`🥭 Connected to database`))

app.use('/', router)

app.listen(appProps.port)