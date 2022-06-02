const mongoose = require('mongoose');

const Reservations = mongoose.Schema({
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    conference_room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ConferenceRoom",
        required: true
    },
    reservation_time_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ReservationTime",
        required: true
    }
});

module.exports = mongoose.model('ReservationsSchema', Reservations);