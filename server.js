// Import Dependencies //
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const bugController = require('./controllers/bugs.js');
const UserRouter = require('./controllers/user.js');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');


// Views Express Application Object Engine //
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

// Middleware //
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
        saveUninitialized: true,
        resave: false,
    })
);

// Listening Route //
app.get('/', (req, res) => {
    res.render('Index')
});

// Controller Routes //
app.use('/bugs', bugController);
app.use('/user', UserRouter);

// Server Listener //
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));