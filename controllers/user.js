const express = require('express');
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

const router = express.Router();

// Routes //

// Signup Routes //
router.get('/signup', (req, res) => {
    res.render('user/Signup.jsx')
});


// Login Routes //
router.get('/login', (req, res) => {
    res.render('user/Login.jsx')
});


// Signup Post Response //
router.post('/signup', async (req, res) => {
    console.log(req.body)
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    );
    User.create(req.body)
        .then((user) => {
            res.redirect('/user/login')
        })
        .catch((error) => {
            console.log(error)
            res.json({ error })
        })
});


// Login Post Response //
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username })
        .then(async (user) => {
            if (user) {
                const result = await bcrypt.compare(password, user.password);
                if (result) {
                    req.session.username = username;
                    req.session.loggedIn = true;
                    res.redirect('/bugs');
                }   else {
                    res.json({ error: "password does not match" });
                }
            }   else {
                res.json({ error: "user does not exist" });
            }
        })
        .catch((error) => {
            console.log(error)
            res.json({ error })
        })
});

// Logout Route //
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/')
    })
});



module.exports = router;
