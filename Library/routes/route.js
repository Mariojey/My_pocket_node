const express = require('express');
const router = express.Router();
const Book = require('../moduls/book')

router.get('/', async(req, res) => {
    let books
    try {
        books = await Book.find().sort({ createdAt: 'desc' }).limit(10).exec()
    } catch {
        books = []
    }
    res.render('index', { books: books })
        //^ serwer renderuje nam to co znajdzie w folderze views w pliku index, jeżeli wcześniej ustawiliśmy to na backendzie.
})

module.exports = router