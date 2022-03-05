const mongoose = require('./connection.js');

const { Schema, model } = mongoose;

const bugSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    ticketStatus: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
});

const Bug = model('Bug', bugSchema);

module.exports = Bug;