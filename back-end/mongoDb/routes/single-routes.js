const express = require('express');
const router = express.Router();
const Single = require('../models/single/single-model');
const timeHelper = require('../helpers');

router.get('/count', async (req, res) => {
    Single.countDocuments(async function (err, count) {
        res.json({
            count: count
        });
    });
});

//POST
router.post('/one-thousand', async (req, res) => {
    var startTime = process.hrtime();
    for (var i = 0; i < 1000; i++) {
        const single = new Single({
            first_name: "John",
            last_name: "Travolta",
            address: "St21",
            city: "San Francisco"
        });
        try {
            await single.save();
        } catch (err) {
            res.json({ message: err });
        }
    }
    res.json(timeHelper(process.hrtime(startTime)));
});

router.post('/ten-thousand', async (req, res) => {
    var startTime = process.hrtime();
    for (var i = 0; i < 10000; i++) {
        const single = new Single({
            first_name: "John",
            last_name: "Travolta",
            address: "St21",
            city: "San Francisco"
        });
        try {
            await single.save();
        } catch (err) {
            res.json({ message: err });
        }
    }
    res.json(timeHelper(process.hrtime(startTime)));
});

router.post('/one-hundred-thousand', async (req, res) => {
    var startTime = process.hrtime();
    for (var i = 0; i < 100000; i++) {
        const single = new Single({
            first_name: "John",
            last_name: "Travolta",
            address: "St21",
            city: "San Francisco"
        });
        try {
            await single.save();
        } catch (err) {
            res.json({ message: err });
        }
    }
    res.json(timeHelper(process.hrtime(startTime)));
});

router.post('/one-milion', async (req, res) => {
    var startTime = process.hrtime();
    for (var i = 0; i < 1000000; i++) {
        const single = new Single({
            first_name: "John",
            last_name: "Travolta",
            address: "St21",
            city: "San Francisco"
        });
        try {
            await single.save();
        } catch (err) {
            res.json({ message: err });
        }
    }
    res.json(timeHelper(process.hrtime(startTime)));
});

//GET
router.get('/one-thousand', async (req, res) => {
    Single.countDocuments(async function (err, count) {
        if (err) {
            console.log(err)
        } else {
            if (count < 1000) {
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try {
                    await Single.find().limit(1000);
                } catch (err) {
                    res.json({ message: err });
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        }
    });
});

router.get('/ten-thousand', async (req, res) => {
    Single.countDocuments(async function (err, count) {
        if (err) {
            console.log(err)
        } else {
            if (count < 10000) {
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try {
                    await Single.find().limit(10000);
                } catch (err) {
                    res.json({ message: err });
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        }
    });
});

router.get('/one-hundred-thousand', async (req, res) => {
    Single.countDocuments(async function (err, count) {
        if (err) {
            console.log(err)
        } else {
            if (count < 100000) {
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try {
                    await Single.find().limit(100000);
                } catch (err) {
                    res.json({ message: err });
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        }
    });
});

router.get('/one-milion', async (req, res) => {
    Single.countDocuments(async function (err, count) {
        if (err) {
            console.log(err)
        } else {
            if (count < 1000000) {
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try {
                    await Single.find().limit(1000000);
                } catch (err) {
                    res.json({ message: err });
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        }
    });
});

//PUT
router.put('/one-thousand', async (req, res) => {
    Single.countDocuments(async function (err, count) {
        if (err) {
            console.log(err)
        } else {
            if (count < 1000) {
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try {
                    (await Single.find().limit(1000)).forEach(async doc => {
                        await Single.updateMany({ _id: doc._id }, { "$set": { "first_name": "Bob" } });
                    });
                } catch (err) {
                    res.json({ message: err });
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        }
    });
});

router.put('/ten-thousand', async (req, res) => {
    var startTime = process.hrtime();
    Single.countDocuments(async function (err, count) {
        if (err) {
            console.log(err)
        } else {
            if (count < 10000) {
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try {
                    (await Single.find().limit(10000)).forEach(async doc => {
                        await Single.updateMany({ _id: doc._id }, { "$set": { "first_name": "Bob" } });
                    });
                } catch (err) {
                    res.json({ message: err });
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        }
    });
});

router.put('/one-hundred-thousand', async (req, res) => {
    var startTime = process.hrtime();
    Single.countDocuments(async function (err, count) {
        if (err) {
            console.log(err)
        } else {
            if (count < 100000) {
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try {
                    (await Single.find().limit(10000)).forEach(async doc => {
                        await Single.updateMany({ _id: doc._id }, { "$set": { "first_name": "Bob" } });
                    });
                } catch (err) {
                    res.json({ message: err });
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        }
    });
});

router.put('/one-milion', async (req, res) => {
    var startTime = process.hrtime();
    Single.countDocuments(async function (err, count) {
        if (err) {
            console.log(err)
        } else {
            if (count < 1000000) {
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try {
                    (await Single.find().limit(1000000)).forEach(async doc => {
                        await Single.updateMany({ _id: doc._id }, { "$set": { "first_name": "Bob" } });
                    });
                } catch (err) {
                    res.json({ message: err });
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        }
    });
});

//DELETE
router.delete('/one-thousand', async (req, res) => {
    Single.countDocuments(async function (err, count) {
        if (err) {
            console.log(err)
        } else {
            if (count < 1000) {
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try{
                    await Single.deleteMany({});
                } catch (err) {
                    res.json({ message: err });
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        }
    });
});

router.delete('/ten-thousand', async (req, res) => {
    Single.countDocuments(async function (err, count) {
        if (err) {
            console.log(err)
        } else {
            if (count < 10000) {
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try{
                    await Single.deleteMany({});
                } catch (err) {
                    res.json({ message: err });
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        }
    });
});

router.delete('/one-hundred-thousand', async (req, res) => {
    Single.countDocuments(async function (err, count) {
        if (err) {
            console.log(err)
        } else {
            if (count < 100000) {
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try{
                    await Single.deleteMany({});
                } catch (err) {
                    res.json({ message: err });
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        }
    });
});

router.delete('/one-milion', async (req, res) => {
    Single.countDocuments(async function (err, count) {
        if (err) {
            console.log(err)
        } else {
            if (count < 1000000) {
                res.json("error");
            } else {
                var startTime = process.hrtime();
                try{
                    await Single.deleteMany({});
                } catch (err) {
                    res.json({ message: err });
                }
                res.json(timeHelper(process.hrtime(startTime)));
            }
        }
    });
});

module.exports = router;