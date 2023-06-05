"use strict";

const express = require('express')
const router = express.Router()


// Route definition
// --

router.get("/short-forecast", (request, response) => {
    response.render('pages/forecast/short')
})

router.get("/long-forecast", (request, response) => {
    response.render('pages/forecast/long')
})


// Export router
// --

module.exports = router