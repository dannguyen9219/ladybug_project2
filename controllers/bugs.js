const express = require('express');
const Bug = require('../models/bug.js');
const router = express.Router('../models/bug.js');

// Router Middleware for Authorization //
router.use((req, res, next) => {
    if (req.session.loggedIn) {
        next()
    }   else {
        res.redirect('/user/login')
    }
});

// Seed Route //
router.get('/seed', (req, res) => {
    const startBugs = [
        { 
        title: `Page Load`,
        ticketStatus: `open`, 
        description: `page 2 does not load`,
        priority: `medium`
        },
        { 
        title: `Home Button`,
        ticketStatus: `open`, 
        description: `Home button does not take you back to homepage`,
        priority: `low`
        },
        { 
        title: `Cart`,
        ticketStatus: `open`, 
        description: `shopping cart does not update`,
        priority: `medium`
        },
        { 
        title: `Footer`,
        ticketStatus: `open`, 
        description: `Footer not correct`,
        priority: `low`
        }
    ]
    Bug.deleteMany({}).then((data) => {
        Bug.create(startBugs).then((data) => {
            res.json(data);
        })
    }).catch((err) => {
        res.status(400).send(err)
    })
});

// Index Route //
router.get('/', (req, res) => {
    if (req.session.username === "admin") {
        //find all bugs//
        Bug.find({})
        .then((bugs) => {
            res.render('bugs/Index', { bugs });
        })
        .catch((error) => {
            console.log(error)
            res.json({ error })
        })
    }   else {
        Bug.find({ username: req.session.username })
        .then((bugs) => {
            res.render('bugs/Index', { bugs });
        })
        .catch((error) => {
            console.log(error)
            res.json({ error })
        })
    }
});

// New Route //
router.get('/new', (req, res) => {
    res.render('bugs/New')
});

// Delete Route //
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Bug.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/bugs')
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});

// Update Route //
router.put('/:id', (req, res) => {
    const { id } = req.params;

    Bug.findByIdAndUpdate(id, req.body, { new: true })
        .then((updatedBug) => {
            res.redirect(`/bugs/${updatedBug._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});

// Create Route //
router.post('/', (req, res) => {
    req.body.username = req.session.username;
    Bug.create(req.body)
        .then((createdBug) => {
            res.redirect(`/bugs/${createdBug._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});

// Edit Route //
router.get('/:id/edit', (req, res) => {
    const { id } = req.params
    Bug.findById(id)
        .then((bug) => {
            res.render('bugs/Edit', { bug })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});

// Show Route //
router.get('/:id', (req, res) => {
    const { id } = req.params

    Bug.findById(id)
        .then((bug) => {
            res.render('bugs/Show', { bug })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});


module.exports = router;