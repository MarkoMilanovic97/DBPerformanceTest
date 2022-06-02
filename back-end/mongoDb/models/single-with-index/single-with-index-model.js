const mongoose = require('mongoose');

const SingleWithIndex = mongoose.Schema({
    first_name: {
        type: String,
        require: true,
        index: true
    },
    last_name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('SingleWithIndexSchema', SingleWithIndex);