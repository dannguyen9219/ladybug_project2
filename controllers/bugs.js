const express = require('express');
const Bug = require('../models/bug.js');
const router = express.Router('../models/bug.js');

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
    Bug.find({})
        .then((bugs) => {
            res.render('bugs/Index', { bugs });
        })
        .catch((error) => {
            res.json({ error })
        })
});

// New Route //
// Delete Route //
// Update Route //
// Create Route //

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