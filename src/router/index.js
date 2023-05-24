const express = require('express')
const router = express.Router()
const NewsRouter = require('./news')

router
.use('/news',NewsRouter)

module.exports = router
