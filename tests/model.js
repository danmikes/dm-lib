const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  comments,
  title,
  commentcount,
})

const Book = mongoose.model("Book", BookSchema);

exports.Book = Book;
