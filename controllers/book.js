const Book = require("../models/Book")

exports.addBook = async function(req,res){
    try {
      const book = new Book(req.body);
      const savedBook = await book.save();
      res.json(savedBook);
    } catch (error) {
      res.status(400).json({ error: 'Invalid request' });
    }
  };

exports.listBooks = async function(req,res){
    const books = await Book.find();
    res.json(books);
  };

exports.findBookById = async function(req,res){
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  };

exports.editBook = async function(req,res){
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: 'Invalid request' });
    }
  };

exports.deleteBook = async function(req,res){
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  };