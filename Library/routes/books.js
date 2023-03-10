const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
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
    //Pobiera z bazy danych wszystkie książki w których tytule znajdzie wpisaną frazę, którą bierze z requesta
    let query = Book.find()
    if (req.query.title != null && req.query.title != '') {
        query = query.regex('title', new RegExp(req.query.title, 'i')) //<- 'i' UpperCase lOWERcASE, whatever
    }
    try {
        const books = await query.exec()
        res.render('books/index', {
            books: books,
            searchOptions: req.query
        })

    } catch {
        res.redirect('/')
    }

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
            res.redirect(`books/${newBook.id}`)

        } catch {
            if (book.coverImageName != null) {
                removeBookCover(book.coverImageName)
            }
            //catch wychwytuje jeżeli jest jakiś error to odsyła na stronę z powrotem wyświetlając komunikat
            renderNewPage(res, book, true)
        }

    })
    //Update Book
router.put('/:id', upload.single('cover'), async(req, res) => {
    let book
    const fileName = req.file != null ? req.file.filename : null
    try {

        book = await Book.findById(req.params.id)
        book.title = req.body.title
        book.author = req.body.author
        book.publishDate = new Date(req.body.publishDate)
        book.pageCount = req.body.pageCount
        book.description = req.body.description
        res.redirect(`books/${newBook.id}`)
        book.coverImageName = fileName
        await book.save()
        res.redirect(`/books/${book.id}`)
    } catch {
        if (book != null) {
            renderEditPage(res, book, true)
        } else {
            res.redirect('/')
        }
        //catch wychwytuje jeżeli jest jakiś error to odsyła na stronę z powrotem wyświetlając komunikat
    }

})

//Show Book
router.get('/:id', async(req, res) => {
    try {
        //findById znajdzie nam tylko id książki jeżeli chcemy znaleźć coś wiecej musimy użyć populate
        const book = await Book.findById(req.params.id).populate('author').exec()
        res.render('books/show', { book: book })
    } catch {
        res.redirect(`/`)
    }
})



//Edit Book
router.get('/:id/edit', async(req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        renderEditPage(res, book)
    } catch {
        res.redirect('/')
    }

})

//Delete Book
router.delete('/:id', async(req, res) => {
    let book
    try {
        book = await Book.findById(req.params.id)
        await book.remove()
        res.redirect('/books')
    } catch {
        if (book != null) {
            res.render('/books/show', { book: book, errorMessage: 'Could not remove book' })
        } else {
            res.redirect('/')
        }
    }
})

//Usuwa zdjecie okładki książki z public
function removeBookCover(fileName) {
    fs.unlink(path.join(uploadPath, fileName), err => {
        if (err) console.log(err)
    })
}

async function renderNewPage(res, book, hasError = false) {
    renderFormPage(res, book, 'new', hasError)
}

async function renderEditPage(res, book, hasError = false) {
    renderFormPage(res, book, 'edit', hasError)
}

async function renderFormPage(res, book, form, hasError = false) {
    try {
        const authors = await Author.find({})
        const params = {
            authors: authors,
            book: book
        }
        if (hasError) {
            if (form === 'edit') {
                params.errorMessage = `Error Updating Book`
            } else {
                params.errorMessage = `Error Creating Book`
            }
        }
        res.render(`books/${form}`, params)


    } catch {
        res.redirect('/books')
    }
}

module.exports = router