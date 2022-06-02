const express = require('express');
const router = express.Router();
const Employee = require('../models/ternary-relation/employee-model');
const ConferenceRoom = require('../models/ternary-relation/conference-room-model');
const ReservationTime = require('../models/ternary-relation/reservation-time-model');
const Reservation = require('../models/ternary-relation/reservations-model');
const timeHelper = require('../helpers');

//POST Employee
router.post('/employee', async (req, res) => {
    const employee = new Employee(req.body);
    try {
        await employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

//POST ConferenceRoom
router.post('/conference-room', async (req, res) => {
    const conferenceRoom = new ConferenceRoom(req.body);
    try {
        await conferenceRoom.save();
        res.status(201).send(conferenceRoom);
    } catch (error) {
        res.status(400).send(error);
    }
});

//POST ReservationTime
router.post('/reservation-time', async (req, res) => {
    const reservationTime = new ReservationTime(req.body);
    try {
        await reservationTime.save();
        res.status(201).send(reservationTime);
    } catch (error) {
        res.status(400).send(error);
    }
});


//POST Reservations
router.post('/one-thousand', async (req, res) => {
    var startTime = process.hrtime();
    Employee.find({first_name: "John"}, async (err, employee) => {
        if(err){
            res.status(400).send(err);
        }
        let employee_id = employee.map(employee => employee._id);

        ConferenceRoom.find({name: "Room 2"}, async (err, conference_room) => {
            if(err){
                res.status(400).send(err);
            }
            let conference_room_id = conference_room.map(conference_room => conference_room._id);

            ReservationTime.find({appointment: "11:30"}, async (err, reservation_time) => {
                if(err){
                    res.status(400).send(err);
                }
                let reservation_time_id = reservation_time.map(reservation_time => reservation_time._id);

                for(let i = 0; i < 1000; i++){
                    const reservation = new Reservation({
                        employee_id: employee_id,
                        conference_room_id: conference_room_id,
                        reservation_time_id: reservation_time_id
                    });

                    try{
                      await reservation.save();
                    } catch(err){
                        res.json(err);
                    }
                }
                res.json(timeHelper(process.hrtime(startTime)));
            });
        });
    });
});

router.post('/ten-thousand', async (req, res) => {
    var startTime = process.hrtime();
    Employee.find({first_name: "John"}, async (err, employee) => {
        if(err){
            res.status(400).send(err);
        }
        let employee_id = employee.map(employee => employee._id);

        ConferenceRoom.find({name: "Room 2"}, async (err, conference_room) => {
            if(err){
                res.status(400).send(err);
            }
            let conference_room_id = conference_room.map(conference_room => conference_room._id);

            ReservationTime.find({appointment: "11:30"}, async (err, reservation_time) => {
                if(err){
                    res.status(400).send(err);
                }
                let reservation_time_id = reservation_time.map(reservation_time => reservation_time._id);

                for(let i = 0; i < 10000; i++){
                    const reservation = new Reservation({
                        employee_id: employee_id,
                        conference_room_id: conference_room_id,
                        reservation_time_id: reservation_time_id
                    });

                    try{
                      await reservation.save();
                    } catch(err){
                        res.json(err);
                    }
                }
                res.json(timeHelper(process.hrtime(startTime)));
            });
        });
    });
});

router.post('/one-hundred-thousand', async (req, res) => {
    var startTime = process.hrtime();
    Employee.find({first_name: "John"}, (err, employee) => {
        if(err){
            res.status(400).send(err);
        }
        let employee_id = employee.map(employee => employee._id);

        ConferenceRoom.find({name: "Room 2"}, (err, conference_room) => {
            if(err){
                res.status(400).send(err);
            }
            let conference_room_id = conference_room.map(conference_room => conference_room._id);

            ReservationTime.find({appointment: "11:30"}, async function (err, reservation_time) {
                if(err){
                    res.status(400).send(err);
                }
                let reservation_time_id = reservation_time.map(reservation_time => reservation_time._id);

                for(let i = 0; i < 100000; i++){
                    const reservation = new Reservation({
                        employee_id: employee_id,
                        conference_room_id: conference_room_id,
                        reservation_time_id: reservation_time_id
                    });

                    try{
                        await reservation.save();
                    } catch(err){
                        res.json(err);
                    }
                }
                res.json(timeHelper(process.hrtime(startTime)));
            });
        });
    });
});

router.post('/one-milion', async (req, res) => {
    var startTime = process.hrtime();
    Employee.find({first_name: "John"}, async (err, employee) => {
        if(err){
            res.status(400).send(err);
        }
        let employee_id = employee.map(employee => employee._id);

        ConferenceRoom.find({name: "Room 2"}, async (err, conference_room) => {
            if(err){
                res.status(400).send(err);
            }
            let conference_room_id = conference_room.map(conference_room => conference_room._id);

            ReservationTime.find({appointment: "11:30"}, async (err, reservation_time) => {
                if(err){
                    res.status(400).send(err);
                }
                let reservation_time_id = reservation_time.map(reservation_time => reservation_time._id);

                for(let i = 0; i < 1000000; i++){
                    const reservation = new Reservation({
                        employee_id: employee_id,
                        conference_room_id: conference_room_id,
                        reservation_time_id: reservation_time_id
                    });

                    try{
                      await reservation.save();
                    } catch(err){
                        res.json(err);
                    }
                }
                res.json(timeHelper(process.hrtime(startTime)));
            });
        });
    });
});


//GET
router.get('/one-thousand', async (req, res) => {
    Employee.find({ first_name: "John" }, (err, employee) => {
        if (err) {
            res.json({ message: err });
        }
        let employee_id = employee.map(employee => employee._id);
        
        ConferenceRoom.find({ name: "Room 2" }, (err, conferenceRoom) => {
            if (err) {
                res.json({ message: err});
            }
            let conference_room_id = conferenceRoom.map(conferenceRoom => conferenceRoom._id);

            ReservationTime.find({ appointment: "11:30" }, async (err, reservationTime) => {
                if (err) {
                    res.json({ message: err });
                }
                let reservation_time_id = reservationTime.map(reservationTime => reservationTime._id);
            
                Reservation.countDocuments({employee_id: employee_id, conference_room_id: conference_room_id, reservation_time_id: reservation_time_id}, async function (err, count) {
                    if(err) {
                        res.json({ message: err });
                    }

                    if(count < 1000) {
                        res.json("error");
                    } else {
                        var startTime = process.hrtime();
                        try{
                            await Reservation.find({employee_id: employee_id, conference_room_id: conference_room_id, reservation_time_id: reservation_time_id}).limit(1000);
                        } catch(err){
                            res.json(err);
                        }
                        res.json(timeHelper(process.hrtime(startTime)));
                    }
                });
            });
        });
    });
});

router.get('/ten-thousand', async (req, res) => {
    Employee.find({ first_name: "John" }, (err, employee) => {
        if (err) {
            res.json({ message: err });
        }
        let employee_id = employee.map(employee => employee._id);
        
        ConferenceRoom.find({ name: "Room 2" }, (err, conferenceRoom) => {
            if (err) {
                res.json({ message: err});
            }
            let conference_room_id = conferenceRoom.map(conferenceRoom => conferenceRoom._id);

            ReservationTime.find({ appointment: "11:30" }, async (err, reservationTime) => {
                if (err) {
                    res.json({ message: err });
                }
                let reservation_time_id = reservationTime.map(reservationTime => reservationTime._id);
            
                Reservation.countDocuments({employee_id: employee_id, conference_room_id: conference_room_id, reservation_time_id: reservation_time_id}, async function (err, count) {
                    if(err) {
                        res.json({ message: err });
                    }

                    if(count < 10000) {
                        res.json("error");
                    } else {
                        var startTime = process.hrtime();
                        try{
                            await Reservation.find({employee_id: employee_id, conference_room_id: conference_room_id, reservation_time_id: reservation_time_id}).limit(10000);
                        } catch(err){
                            res.json(err);
                        }
                        res.json(timeHelper(process.hrtime(startTime)));
                    }
                });
            });
        });
    });
});

router.get('/one-hundred-thousand', async (req, res) => {
    Employee.find({ first_name: "John" }, (err, employee) => {
        if (err) {
            res.json({ message: err });
        }
        let employee_id = employee.map(employee => employee._id);
        
        ConferenceRoom.find({ name: "Room 2" }, (err, conferenceRoom) => {
            if (err) {
                res.json({ message: err});
            }
            let conference_room_id = conferenceRoom.map(conferenceRoom => conferenceRoom._id);

            ReservationTime.find({ appointment: "11:30" }, async (err, reservationTime) => {
                if (err) {
                    res.json({ message: err });
                }
                let reservation_time_id = reservationTime.map(reservationTime => reservationTime._id);
            
                Reservation.countDocuments({employee_id: employee_id, conference_room_id: conference_room_id, reservation_time_id: reservation_time_id}, async function (err, count) {
                    if(err) {
                        res.json({ message: err });
                    }

                    if(count < 100000) {
                        res.json("error");
                    } else {
                        var startTime = process.hrtime();
                        try{
                            await Reservation.find({employee_id: employee_id, conference_room_id: conference_room_id, reservation_time_id: reservation_time_id}).limit(100000);
                        } catch(err){
                            res.json(err);
                        }
                        res.json(timeHelper(process.hrtime(startTime)));
                    }
                });
            });
        });
    });
});

router.get('/one-milion', async (req, res) => {
    Employee.find({ first_name: "John" }, (err, employee) => {
        if (err) {
            res.json({ message: err });
        }
        let employee_id = employee.map(employee => employee._id);
        
        ConferenceRoom.find({ name: "Room 2" }, (err, conferenceRoom) => {
            if (err) {
                res.json({ message: err});
            }
            let conference_room_id = conferenceRoom.map(conferenceRoom => conferenceRoom._id);

            ReservationTime.find({ appointment: "11:30" }, async (err, reservationTime) => {
                if (err) {
                    res.json({ message: err });
                }
                let reservation_time_id = reservationTime.map(reservationTime => reservationTime._id);
            
                Reservation.countDocuments({employee_id: employee_id, conference_room_id: conference_room_id, reservation_time_id: reservation_time_id}, async function (err, count) {
                    if(err) {
                        res.json({ message: err });
                    }

                    if(count < 1000000) {
                        res.json("error");
                    } else {
                        var startTime = process.hrtime();
                        try{
                            await Reservation.find({employee_id: employee_id, conference_room_id: conference_room_id, reservation_time_id: reservation_time_id}).limit(1000000);
                        } catch(err){
                            res.json(err);
                        }
                        res.json(timeHelper(process.hrtime(startTime)));
                    }
                });
            });
        });
    });
});

//PUT
router.put('/one-thousand', async (req, res) => {
    Employee.find({ first_name: "John"}, (err, employee) => {
        if(err){
            res.json({ message: err });
        }
        let employee_id = employee.map(employee => employee._id);
        Reservation.countDocuments({employee_id: employee_id}, async (err, count) => {
            if(err){
                res.json({message: err});
            }
            if(count < 1000){
                res.json("error");
            } else {
                ConferenceRoom.find({name: "Room 1"}, async (err, conference_room) => {
                    if(err){
                        res.json({message: err});
                    }
                    let conference_room_id = conference_room.map(conference_room => conference_room._id);
                    var startTime = process.hrtime();
                    try{
                        (await Reservation.find({employee_id: employee_id}).limit(1000)).forEach(async doc => {
                            await Reservation.updateMany({_id: doc._id}, {$set: {conference_room_id: conference_room_id}});
                        });
                    } catch (err){
                        res.json(err);
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                });
            }
        });
    });
});

router.put('/ten-thousand', async (req, res) => {
    Employee.find({ first_name: "John"}, (err, employee) => {
        if(err){
            res.json({ message: err });
        }
        let employee_id = employee.map(employee => employee._id);
        Reservation.countDocuments({employee_id: employee_id}, async (err, count) => {
            if(err){
                res.json({message: err});
            }
            if(count < 10000){
                res.json("error");
            } else {
                ConferenceRoom.find({name: "Room 1"}, async (err, conference_room) => {
                    if(err){
                        res.json({message: err});
                    }
                    let conference_room_id = conference_room.map(conference_room => conference_room._id);
                    var startTime = process.hrtime();
                    try{
                        (await Reservation.find({employee_id: employee_id}).limit(10000)).forEach(async doc => {
                            await Reservation.updateMany({_id: doc._id}, {$set: {conference_room_id: conference_room_id}});
                        });
                    } catch (err){
                        res.json(err);
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                });
            }
        });
    });
});

router.put('/one-hundred-thousand', async (req, res) => {
    Employee.find({ first_name: "John"}, (err, employee) => {
        if(err){
            res.json({ message: err });
        }
        let employee_id = employee.map(employee => employee._id);
        Reservation.countDocuments({employee_id: employee_id}, async (err, count) => {
            if(err){
                res.json({message: err});
            }
            if(count < 100000){
                res.json("error");
            } else {
                ConferenceRoom.find({name: "Room 1"}, async (err, conference_room) => {
                    if(err){
                        res.json({message: err});
                    }
                    let conference_room_id = conference_room.map(conference_room => conference_room._id);
                    var startTime = process.hrtime();
                    try{
                        (await Reservation.find({employee_id: employee_id}).limit(100000)).forEach(async doc => {
                            await Reservation.updateMany({_id: doc._id}, {$set: {conference_room_id: conference_room_id}});
                        });
                    } catch (err){
                        res.json(err);
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                });
            }
        });
    });
});

router.put('/one-milion', async (req, res) => {
    Employee.find({ first_name: "John"}, (err, employee) => {
        if(err){
            res.json({ message: err });
        }
        let employee_id = employee.map(employee => employee._id);
        Reservation.countDocuments({employee_id: employee_id}, async (err, count) => {
            if(err){
                res.json({message: err});
            }
            if(count < 1000000){
                res.json("error");
            } else {
                ConferenceRoom.find({name: "Room 1"}, async (err, conference_room) => {
                    if(err){
                        res.json({message: err});
                    }
                    let conference_room_id = conference_room.map(conference_room => conference_room._id);
                    var startTime = process.hrtime();
                    try{
                        (await Reservation.find({employee_id: employee_id}).limit(1000000)).forEach(async doc => {
                            await Reservation.updateMany({_id: doc._id}, {$set: {conference_room_id: conference_room_id}});
                        });
                    } catch (err){
                        res.json(err);
                    }
                    res.json(timeHelper(process.hrtime(startTime)));
                });
            }
        });
    });
});

//DELETE
router.delete('/one-thousand', async (req, res) => {
    Employee.find({first_name: "John"}, async (err, employee) => {
        if(err){
            res.json({message: err});
        }
        let employee_id = employee.map(employee => employee._id);
        Reservation.countDocuments({employee_id: employee_id}, async (err, count) => {
            if(err){
                res.json({message: err})
            }
            if(count < 1000){
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try{
                    await Reservation.deleteMany({employee_id: employee_id});
                } catch (err){
                    res.json({message: err});
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        });
    });
});

router.delete('/ten-thousand', async (req, res) => {
    Employee.find({first_name: "John"}, async (err, employee) => {
        if(err){
            res.json({message: err});
        }
        let employee_id = employee.map(employee => employee._id);
        Reservation.countDocuments({employee_id: employee_id}, async (err, count) => {
            if(err){
                res.json({message: err})
            }
            if(count < 10000){
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try{
                    await Reservation.deleteMany({employee_id: employee_id});
                } catch (err){
                    res.json({message: err});
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        });
    });
});

router.delete('/one-hundred-thousand', async (req, res) => {
    Employee.find({first_name: "John"}, async (err, employee) => {
        if(err){
            res.json({message: err});
        }
        let employee_id = employee.map(employee => employee._id);
        Reservation.countDocuments({employee_id: employee_id}, async (err, count) => {
            if(err){
                res.json({message: err})
            }
            if(count < 100000){
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try{
                    await Reservation.deleteMany({employee_id: employee_id});
                } catch (err){
                    res.json({message: err});
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        });
    });
});

router.delete('/one-milion', async (req, res) => {
    Employee.find({first_name: "John"}, async (err, employee) => {
        if(err){
            res.json({message: err});
        }
        let employee_id = employee.map(employee => employee._id);
        Reservation.countDocuments({employee_id: employee_id}, async (err, count) => {
            if(err){
                res.json({message: err})
            }
            if(count < 1000000){
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try{
                    await Reservation.deleteMany({employee_id: employee_id});
                } catch (err){
                    res.json({message: err});
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        });
    });
});

module.exports = router;