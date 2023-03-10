const express = require('express');
const author = require('../moduls/author');
const router = express.Router();
const Author = require('../moduls/author');
const Book = require('../moduls/book')

//All authors, search authors
router.get('/', async(req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const authors = await Author.find({ searchOptions })
        res.render('authors/index', { authors: authors, searchOptions: req.query })
    } catch {
        res.redirect('/')
    }
    //^ serwer renderuje nam to co znajdzie w folderze views w pliku index, jeżeli wcześniej ustawiliśmy to na backendzie.
})

//New author
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})

//Create author
router.post('/', async(req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try {
        const newAuthor = await author.save()
        res.redirect(`authors/${newAuthor.id}`)
    } catch {
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating author'
        })
    }
    //author.save((err, newAuthor) => {
    //    if (err) {
    //        res.render('authors/new', {
    //            author: author,
    //            errorMessage: 'Error creating author'
    //        })
    //    } else {
    //        //res.redirect(`authors/${newAuthor.id}`)
    //        //^Jeszcze teog nie zaimplementowałem
    //        res.redirect(`authors`)
    //    }
    //})
})

router.get('/:id', async(req, res) => {
    try {
        const author = await Author.findById(req.params.id)
        const books = Book.find({ author: author.id }).limit(6).exec()
        res.render('authors/show', {
            author: author,
            booksByAuthor: books
        })
    } catch {

        res.redirect('/')
    }
})

router.get('/:id/edit', async(req, res) => {
        try {
            const author = await Author.findById(req.params.id)
            res.render('authors/edit', { author: author })
        } catch {
            res.redirect('/authors')
        }
    })
    //Trzeba doinstalować odpowiednie bibiloteki dla metod put i delete (method-override)
router.put('/:id', async(req, res) => {
        let author
        try {
            author = await Author.findById(req.params.id)
            author.name = req.body.name
            await author.save()
            res.redirect(`/authors/${author.id}`)
        } catch {
            if (author == null) {
                res.redirect('/')
            } else {
                res.render('authors/edit', {
                    author: author,
                    errorMessage: 'Error editing author'
                })
            }
        }
    })
    //Jeżeli chcemy usunąć jakiś record z bazy danych to nigdy nigdy przenigddy w świecie nie używać metody get :))))
router.delete('/:id', async(req, res) => {
    let author
    try {
        author = await Author.findById(req.params.id)
        author.name = req.body.name
        await author.remove()
        res.redirect(`/authors`)
    } catch {
        if (author == null) {
            res.redirect('/')
        } else {
            res.redirect(`/authors/${author.id}`)
        }
    }
})

module.exports = router