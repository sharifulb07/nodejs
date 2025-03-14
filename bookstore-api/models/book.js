const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    maxLength: [100, "Book title cannot be more than 100 character"],
  },
  author: {
    type: String,
    required: [true, "Author Name is required"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Publication Year is required"],
    min: [1000, "You must write at least 1000 year"],
    max: [new Date().getFullYear(), "Year cannot be in the future"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports=mongoose.model("Book", BookSchema);
