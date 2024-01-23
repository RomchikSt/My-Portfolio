const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true, // removes all white spaces in the beginning and end of a string
    required: [true, 'A tour must have a summary'],
  },
  description: {
    type: String,
    trim: true, // removes all white spaces in the beginning and end of a string
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String], // an array of strings
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, // hides this field from the output
  },
  startDates: [Date], // an array of dates
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
