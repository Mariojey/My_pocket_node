const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
        //^ serwer renderuje nam to co znajdzie w folderze views w pliku index, jeżeli wcześniej ustawiliśmy to na backendzie.
})

module.exports = router