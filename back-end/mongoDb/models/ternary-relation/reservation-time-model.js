const mongoose = require('mongoose');

const ReservationTime = mongoose.Schema({
    appointment: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ReservationTimeSchema', ReservationTime);