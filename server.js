// const express = require('express');

const env = require('dotenv');
env.config({ path: './config.env' });
const app = require('./App.js');
const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then((res) => {
    console.log('DataBAse connected');
  })
  .catch((error) => {
    console.log(error);
  });


// const tour = new mongoose.Schema({
//   name: {
//     type: [String, 'string kiriting'],
//     required: [true, 'ismingizni kiriting'],
//     min: 10,
//     max: 20,
//     unique: [true, 'bunday ism mavjud'],
//   },
//   age: {
//     type: [Number, 'number kiriting'],
//     required: [true, 'tuldirish shart'],
//     min: 10,
//     max: 20,
//   },
//   country: String,
//   reyting: {
//     type: Number,
//     default: 4.5,
//   },
// });
// const tourModel = new mongoose.model(
//   { name: 'aziz', age: 20, country: 'uzb' },
//   tour
// );
// tourModel.save();
const PORT = process.env.PORT || 8000;
app.listen(PORT, process.env.URL);
