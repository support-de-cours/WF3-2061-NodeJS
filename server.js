"use strict";

// Library imports
// --

const express = require('express')
const path = require('path')
const ejs = require('ejs')
const portService = require('./src/Service/Port');
const environment = require('./config/environment');


// App settings
// --

const app = express()
const port = environment.APP_ENV !== 'dev' ? portService() : 3000

// Define the "views" directory
app.set('views', path.join(__dirname, "templates"));

// Define the HTML engine
app.set('view engine', "html");
app.engine('html', ejs.__express);

// Add the access to the "public" directory
app.use( express.static( path.join(__dirname, "public") ) );
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));



// App routings
// --

app.use( require('./src/Controller/Homepage') )
app.use( require('./src/Controller/Forecast') )



// Server Start
// --

app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})
  