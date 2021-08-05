const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  comments: [String],
  title: { type: String, require: true },
  commentcount: Number
})

const Book = mongoose.model("Book", BookSchema);

exports.Book = Book;
