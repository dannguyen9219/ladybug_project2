const mongoose = require('./connection.js');

const { Schema, model } = mongoose;

const bugSchema = new Schema({
    title: {
        type: String,
    },
    category: {
        type: String,
    },
    ticketStatus: {
        type: String,
    },
    description: {
        type: String,
    },
    priority: {
        type: String,
    },
    username: {
        type: String,
    },
});

const Bug = model('Bug', bugSchema);

module.exports = Bug;