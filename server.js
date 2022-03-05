// Import Dependencies //
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');


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
    res.send(`Bugs aren't the problems, they are the features!`)
});

// Server Listener //
const PORT = 9000;
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));