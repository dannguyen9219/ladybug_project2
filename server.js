// Import Dependencies //
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const bugController = require('./controllers/bugs.js');
const path = require('path');


// Views Express Application Object Engine //
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

// Middleware //
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Listening Route //
app.get('/', (req, res) => {
    res.render('start/First')
});

// Controller Route //
app.use('/bugs', bugController);

// Server Listener //
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));