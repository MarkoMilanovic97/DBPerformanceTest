const express = require('express');
const router = express.Router();
const Hotel = require('../models/weak-relation/hotel-model');
const Room = require('../models/weak-relation/room-model');
const timeHelper = require('../helpers');
const { json } = require('express/lib/response');

router.get('/count', async (req, res) => {
    await Hotel.findOne({ name: "Erato" }).then(hotel => {
        res.json({
            count: hotel.rooms.length
        });
    });
});

//POST HOTEL
router.post('/hotel', async (req, res) => {
    const hotel = new Hotel({
        name: req.body.name,
        address: req.body.address,
    });
    await hotel.save().then(hotel => {
        res.json({
            message: "Hotel created successfully",
            hotel: hotel
        });
    });
});

//POST ROOM
router.post('/one-thousand', async (req, res) => {
    var startTime = process.hrtime();
    for(let i = 0; i < 1000; i++){
        const room = new Room({
            room_number: "123",
            num_of_beds: "3"
        });

        try{
            await room.save();
        } catch(err){
            res.json({ message: err });
        }

        Hotel.find({ name: "Erato" }, (err, hotel) => {
            if (err) {
                res.json({ message: err });
            }
            room.hotel_id = hotel.map(hotel => hotel._id);
            room.save();
        });
    }
    res.json(timeHelper(process.hrtime(startTime)));
});

router.post('/ten-thousand', async (req, res) => {
    var startTime = process.hrtime();
    for(let i = 0; i < 10000; i++){
        const room = new Room({
            room_number: "123",
            num_of_beds: "3"
        });

        try{
            await room.save();
        } catch(err){
            res.json({ message: err });
        }

        Hotel.find({ name: "Erato" }, (err, hotel) => {
            if (err) {
                res.json({ message: err });
            }
            room.hotel_id = hotel.map(hotel => hotel._id);
            room.save();
        });
    }
    res.json(timeHelper(process.hrtime(startTime)));
});

router.post('/one-hundred-thousand', async (req, res) => {
    var startTime = process.hrtime();
    for(let i = 0; i < 100000; i++){
        const room = new Room({
            room_number: "123",
            num_of_beds: "3"
        });

        try{
            await room.save();
        } catch(err){
            res.json({ message: err });
        }

        Hotel.find({ name: "Erato" }, (err, hotel) => {
            if (err) {
                res.json({ message: err });
            }
            room.hotel_id = hotel.map(hotel => hotel._id);
            room.save();
        });
    }
    res.json(timeHelper(process.hrtime(startTime)));
});



router.post('/one-milion', async (req, res) => {
    var startTime = process.hrtime();
    for(let i = 0; i < 1000000; i++){
        const room = new Room({
            room_number: "123",
            num_of_beds: "3"
        });

        try{
            await room.save();
        } catch(err){
            res.json({ message: err });
        }

        Hotel.find({ name: "Erato" }, (err, hotel) => {
            if (err) {
                res.json({ message: err });
            }
            room.hotel_id = hotel.map(hotel => hotel._id);
            room.save();
        });
    }
    res.json(timeHelper(process.hrtime(startTime)));
});


//GET
router.get('/one-thousand', async (req, res) => {
    Hotel.find({ name: "Erato" }, (err, hotel) => {
        if (err) {
            res.json({ message: err });
        }
        let hotel_id = hotel.map(hotel => hotel._id);

        Room.countDocuments({hotel_id: hotel_id}, async function (err, count) {
            if(err) {
                console.log(err);
            } else {
                if(count < 1000){
                    res.json("error");
                } else {
                    var startTime = process.hrtime();
                    try{
                        await Room.find({hotel_id: hotel_id}).limit(1000);
                    } catch(err){
                        res.json({ message: err });
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                }
            }
        });
    });
});

router.get('/ten-thousand', async (req, res) => {
    Hotel.find({ name: "Erato" }, (err, hotel) => {
        if (err) {
            res.json({ message: err });
        }
        let hotel_id = hotel.map(hotel => hotel._id);
        console.log(hotel_id);

        Room.countDocuments({hotel_id: hotel_id}, async function (err, count) {
            if(err) {
                console.log(err);
            } else {
                if(count < 10000){
                    res.json("error");
                } else {
                    var startTime = process.hrtime();
                    try{
                        await Room.find({hotel_id: hotel_id}).limit(10000);
                    } catch(err){
                        res.json({ message: err });
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                }
            }
        })
    });
});

router.get('/one-hundred-thousand', async (req, res) => {
    Hotel.find({ name: "Erato" }, (err, hotel) => {
        if (err) {
            res.json({ message: err });
        }
        let hotel_id = hotel.map(hotel => hotel._id);

        Room.countDocuments({hotel_id: hotel_id}, async function (err, count) {
            if(err) {
                console.log(err);
            } else {
                if(count < 100000){
                    res.json("error");
                } else {
                    var startTime = process.hrtime();
                    try{
                        await Room.find({hotel_id: hotel_id}).limit(100000);
                    } catch(err){
                        res.json({ message: err });
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                }
            }
        })
    });
});

router.get('/one-milion', async (req, res) => {
    Hotel.find({ name: "Erato" }, (err, hotel) => {
        if (err) {
            res.json({ message: err });
        }
        let hotel_id = hotel.map(hotel => hotel._id);

        Room.countDocuments({hotel_id: hotel_id}, async function (err, count) {
            if(err) {
                console.log(err);
            } else {
                if(count < 1000000){
                    res.json("error");
                } else {
                    var startTime = process.hrtime();
                    try{
                        await Room.find({hotel_id: hotel_id}).limit(1000000);
                    } catch(err){
                        res.json({ message: err });
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                }
            }
        })
    });
});

//PUT
router.put('/one-thousand', async (req, res) => {
    Hotel.find({ name: "Erato" }, async (err, hotel) => {
        if(err){
            res.json({ message: err });
        }
        let hotel_id = hotel.map(hotel => hotel._id);

        Room.countDocuments({hotel_id: hotel_id}, async function (err, count) {
            if (err) {
                console.log(err)
            } else {
                if (count < 1000) {
                    res.json("error");
                } else {
                    var startTime = process.hrtime();
                    try {
                        (await Room.find({hotel_id: hotel_id}).limit(1000)).forEach(async doc => {
                            await Room.updateMany({ _id: doc._id }, { "$set": { "room_number": "111" } });
                        });
                    } catch (err) {
                        res.json({ message: err });
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                }
            }
        });
    });
});

router.put('/ten-thousand', async (req, res) => {
    Hotel.find({ name: "Erato" }, async (err, hotel) => {
        if(err){
            res.json({ message: err });
        }
        let hotel_id = hotel.map(hotel => hotel._id);

        Room.countDocuments({hotel_id: hotel_id}, async function (err, count) {
            if (err) {
                console.log(err)
            } else {
                if (count < 10000) {
                    res.json("error");
                } else {
                    var startTime = process.hrtime();
                    try {
                        (await Room.find({hotel_id: hotel_id}).limit(10000)).forEach(async doc => {
                            await Room.updateMany({ _id: doc._id }, { "$set": { "room_number": "111" } });
                        });
                    } catch (err) {
                        res.json({ message: err });
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                }
            }
        });
    });
});

router.put('/one-hundred-thousand', async (req, res) => {
    Hotel.find({ name: "Erato" }, async (err, hotel) => {
        if(err){
            res.json({ message: err });
        }
        let hotel_id = hotel.map(hotel => hotel._id);

        Room.countDocuments({hotel_id: hotel_id}, async function (err, count) {
            if (err) {
                console.log(err)
            } else {
                if (count < 100000) {
                    res.json("error");
                } else {
                    var startTime = process.hrtime();
                    try {
                        (await Room.find({hotel_id: hotel_id}).limit(100000)).forEach(async doc => {
                            await Room.updateMany({ _id: doc._id }, { "$set": { "room_number": "111" } });
                        });
                    } catch (err) {
                        res.json({ message: err });
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                }
            }
        });
    });
});

router.put('/one-milion', async (req, res) => {
    Hotel.find({ name: "Erato" }, async (err, hotel) => {
        if(err){
            res.json({ message: err });
        }
        let hotel_id = hotel.map(hotel => hotel._id);

        Room.countDocuments({hotel_id: hotel_id}, async function (err, count) {
            if (err) {
                console.log(err)
            } else {
                if (count < 1000000) {
                    res.json("error");
                } else {
                    var startTime = process.hrtime();
                    try {
                        (await Room.find({hotel_id: hotel_id}).limit(1000000)).forEach(async doc => {
                            await Room.updateMany({ _id: doc._id }, { "$set": { "room_number": "111" } });
                        });
                    } catch (err) {
                        res.json({ message: err });
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                }
            }
        });
    });
});

//DELETE
router.delete('/one-thousand', async (req, res) => {
    Hotel.find({ name: "Erato" }, async (err, hotel) => {
        if(err){
            res.json({ message: err });
        }
        let hotel_id = hotel.map(hotel => hotel._id);

        Room.countDocuments({hotel_id: hotel_id}, async function (err, count) {
            if (err) {
                console.log(err)
            } else {
                if (count < 1000) {
                    res.json("error");
                } else {
                    var startTime = process.hrtime();
                    try {
                       await Room.deleteMany({hotel_id: hotel_id});
                    } catch (err) {
                        res.json({ message: err });
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                }
            }
        });
    });
});

router.delete('/ten-thousand', async (req, res) => {
    Hotel.find({ name: "Erato" }, async (err, hotel) => {
        if(err){
            res.json({ message: err });
        }
        let hotel_id = hotel.map(hotel => hotel._id);

        Room.countDocuments({hotel_id: hotel_id}, async function (err, count) {
            if (err) {
                console.log(err)
            } else {
                if (count < 10000) {
                    res.json("error");
                } else {
                    var startTime = process.hrtime();
                    try {
                       await Room.deleteMany({hotel_id: hotel_id});
                    } catch (err) {
                        res.json({ message: err });
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                }
            }
        });
    });
});

router.delete('/one-hundred-thousand', async (req, res) => {
    Hotel.find({ name: "Erato" }, async (err, hotel) => {
        if(err){
            res.json({ message: err });
        }
        let hotel_id = hotel.map(hotel => hotel._id);

        Room.countDocuments({hotel_id: hotel_id}, async function (err, count) {
            if (err) {
                console.log(err)
            } else {
                if (count < 100000) {
                    res.json("error");
                } else {
                    var startTime = process.hrtime();
                    try {
                       await Room.deleteMany({hotel_id: hotel_id});
                    } catch (err) {
                        res.json({ message: err });
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                }
            }
        });
    });
});

router.delete('/one-milion', async (req, res) => {
    Hotel.find({ name: "Erato" }, async (err, hotel) => {
        if(err){
            res.json({ message: err });
        }
        let hotel_id = hotel.map(hotel => hotel._id);

        Room.countDocuments({hotel_id: hotel_id}, async function (err, count) {
            if (err) {
                console.log(err)
            } else {
                if (count < 1000000) {
                    res.json("error");
                } else {
                    var startTime = process.hrtime();
                    try {
                       await Room.deleteMany({hotel_id: hotel_id});
                    } catch (err) {
                        res.json({ message: err });
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                }
            }
        });
    });
});



module.exports = router;