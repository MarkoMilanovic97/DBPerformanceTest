const mongoose = require('mongoose');

const ConferenceRoom = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('ConferenceRoomSchema', ConferenceRoom);