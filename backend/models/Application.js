// models/Application.js
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name: String,
    age: Number,
    interest: String,
    notes: String,
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
