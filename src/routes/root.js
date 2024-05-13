const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

router.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'register.html'))
})

router.get('/:id', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'product-page.html'))
})

module.exports = router