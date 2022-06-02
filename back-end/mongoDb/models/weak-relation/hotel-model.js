const mongoose = require('mongoose');

const Hotel = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('HotelSchema', Hotel);