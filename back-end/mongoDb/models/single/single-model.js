const mongoose = require('mongoose');

const Single = mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('SingleSchema', Single);