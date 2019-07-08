const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const server = require('http').Server(app);

mongoose.connect('mongodb+srv://dba:mobile@cluster0-6xo4h.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

server.listen(process.env.PORT || 3333);
