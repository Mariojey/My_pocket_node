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
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const router = require('./routes/route.js')
const mongo = require('./globalVariables/path.js')
const author = require('./routes/authors.js')
const book = require('./routes/books.js')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))


const mongoose = require('mongoose');
mongoose.connect(mongo.dbUrl, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log(`🥭 Connected to database`))

app.use('/', router)
app.use('/authors', author)
app.use('/books', book)


app.listen(process.env.PORT || 8888)