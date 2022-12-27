const express = require('express');
const router = express.Router();
const path = require('path');
const Book = require('../moduls/book');
const Author = require('../moduls/author');
const author = require('../moduls/author');
const multer = require('multer');
const uploadPath = path.join('public', Book.coverImgBasePath)
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']
const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeTypes.includes(file.mimetype))
    }
})


//All books, search books
router.get('/', async(req, res) => {
    res.send('All Books')
})

//New book
router.get('/new', async(req, res) => {
        renderNewPage(res, new Book())
    })
    //Dla zapisania pliku coverImage musimy zaistalowac multer npm i multer
    //Create book
router.post('/', upload.single('cover'), async(req, res) => {
    const fileName = req.file != null ? req.file.filename : null
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishDate: new Date(req.body.publishDate),
        pageCount: req.body.pageCount,
        coverImageName: fileName,
        description: req.body.description
    })


    try {

        const newBook = await book.save()
            //res.redirect(`books/${newBook.id}`)
        res.redirect(`books`)
    } catch {
        //catch wychwytuje jeżeli jest jakiś error to odsyła na stronę z powrotem wyświetlając komunikat
        renderNewPage(res, book, true)
    }

})

async function renderNewPage(res, book, hasError = false) {
    try {
        const authors = await Author.find({})
        const params = {
            authors: authors,
            book: book
        }
        if (hasError) {
            params.errorMessage = `Error Creating Book`
        }
        res.render('books/new', params)


    } catch {
        res.redirect('/books')
    }
}


module.exports = router