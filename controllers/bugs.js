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
// New Route //
// Delete Route //
// Update Route //
// Create Route //
// Show Route //


module.exports = router;