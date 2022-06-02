const mongoose = require('mongoose');

const Room = mongoose.Schema({
    room_number: {
        type: String,
        require: true
    },
    num_of_beds: {
        type: String,
        require: true
    },
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel"
    }
});

module.exports = mongoose.model('RoomSchema', Room);