const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/users', require('./Routes/Users'));
app.use('/api/notes', require('./Routes/Notes'));

//Global Variables


module.exports = app;