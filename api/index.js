const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const app = express();
const userRoute = require('./routes/user_routes.js');
const mongoUrl = process.env.MONGO_DB_URL;

app.use(express.json());
app.use(morgan('dev'));
app.use('/register', userRoute)
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT);
console.log(`Server is listening on http://localhost:${PORT}`);