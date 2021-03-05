const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://jawan:passforjawan@cluster0.ybepl.mongodb.net/project-management-db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;