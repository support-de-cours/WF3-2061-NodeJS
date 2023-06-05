"use strict";

const express = require('express')
const router = express.Router()


// Route definition
// --

router.get("/", (request, response) => {

    let color = "Red";

    let fruits = [
        'Pommes',
        'Poires',
        'Bananes',
    ];

    let user = {
        firstname: "John",
        lastname: "DOE"
    };

    response.render('pages/homepage/index', {
        color: color,
        fruits: fruits,
        user: user,
    })

})


// Export router
// --

module.exports = router