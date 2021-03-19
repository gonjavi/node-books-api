const express = require('express');
let app = express();
let Book = require('../models/book');

app.get('/books', (req, res) => {
  Book.find({})
    .exec((err, books) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        books
      });
    });
});

app.get('/book/:id', (req, res) => {
  let id = req.params.id;
  Book.findById(id)
    .exec((err, bookDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      }

      if (!bookDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'The book does not exist'
          }
        });
      }

      res.json({
        ok: true,
        book: bookDB
      });
    });
});

app.post('/books', (req, res) => {

});

app.delete('/book/:id', (req, res) => {

});

module.exports = app;