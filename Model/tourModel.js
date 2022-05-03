const mongoose = require('mongoose');

const TourSxema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'siz duration kiritingishingiz kerak'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Malumotlarni qushing'],
  },
  difficulty: {
    type: String,
    required: [true, 'Malumotlarni qushing'],
  },
  ratingsAverage: {
    type: Number,
    required: [true, 'Malumotlarni qushing'],
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    required: [true, 'Malumotlarni qushing'],
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'Malumotlarni qushing'],
  },
  summary: {
    type: String,
    required: [true, 'Malumotlarni qushing'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Malumotlarni qushing'],
  },
  imageCover: {
    type: String,
    required: [true, 'Malumotlarni qushing'],
  },
  images: [String],
  startDates: [Date],
  Create: {
    type: Date,
    default: Date.now(),
  },
});
const Tour = mongoose.model('Tours', TourSxema);

module.exports = Tour;
