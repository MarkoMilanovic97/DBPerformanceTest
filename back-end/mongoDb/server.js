const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const singleCollectionRoutes = require('./routes/single-routes');
app.use('/single-collection', singleCollectionRoutes);

const weakRelationRoutes = require('./routes/weak-relation-routes');
app.use('/weak-relation', weakRelationRoutes);

const ternaryRelationRoutes = require('./routes/ternary-relation-routes');
app.use('/ternary-relation', ternaryRelationRoutes);

const singleWithIndexCollectionRoutes = require('./routes/single-with-index-routes');
app.use('/index', singleWithIndexCollectionRoutes);

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected');
});

app.listen(process.env.PORT);