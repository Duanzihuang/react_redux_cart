const express = require('express')
const router = express.Router()
const service = require('./service')

router.get('/book', service.findAll)
router.get('/book/:id', service.findById)
router.post('/book', service.addBook)
router.put('/book/:id', service.editBook)
router.delete('/book/:id', service.deleteBook)

module.exports = router
