require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const hotelRouter = require('./resources/hotels');

const app = express();

const PORT = process.argv[2] || process.env.PORT || 3000;

app.set("view engine", "ejs");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(logger('dev'));

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.static("./public"));

app.use('/', hotelRouter);
// app.use('/hotels', hotelRouter);

// app.use((err, req, res, next) => {
//   console.error(err.stack, next);
//   return res.sendStatus(400);
// });

app.listen(PORT, () => {
  console.log("Server running!");
});
