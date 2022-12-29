const express = require('express');
const router = express.Router();
const Author = require('../moduls/author');

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
            //res.redirect(`authors/${newAuthor.id}`)
            //^Jeszcze teog nie zaimplementowałem
        res.redirect(`authors`)
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

router.get('/:id', (req, res) => {
    res.send('Show Auhtor' + req.params.id)
})

router.get('/:id/edit', (req, res) => {
        res.send('Edit Author' + req.params.id)
    })
    //Trzeba doinstalować odpowiednie bibiloteki dla metod put i delete (method-override)
router.put('/:id', (req, res) => {
        res.send('Update Author' + req.params.id)
    })
    //Jeżeli chcemy usunąć jakiś record z bazy danych to nigdy nigdy przenigddy w świecie nie używać metody get :))))
router.delete('/:id', (req, res) => {
    res.send('Delete Author' + req.params.id)
})

module.exports = router