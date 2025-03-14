const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks.length > 0) {
      res.status(200).send({
        success: true,
        message: "List of Books are found now ",
        data: allBooks,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Books are not founded here ",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;

    const book = await Book.findById(getCurrentBookId);
    if (!book) {
      res.status(404).send({
        success: false,
        message: "book is not found by the id , please try with another id",
      });
    }

    res.status(200).send({
      success: true,
      message: "book found successfully ",
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;

    const newlyCreatedBook = await Book.create(newBookFormData);

    if (newlyCreatedBook) {
      res.status(201).send({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateBook = async (req, res) => {
  try {
    const updateBookFormData = req.body;
    const getCurrentBookId = req.params.id;

    const book = await Book.findByIdAndUpdate(
      getCurrentBookId,
      updateBookFormData,
      { new: true }
    );
    if (!book) {
      res.status(404).send({
        success: false,
        message: "book is not found by the id",
      });
    }

    res.status(200).send({
      success: true,
      message: "book updated successfully ",
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;

    const book = await Book.findByIdAndDelete(getCurrentBookId);
    if (!book) {
      res.status(404).send({
        success: false,
        message: "book is not found by the id",
      });
    }

    res.status(200).send({
      success: true,
      message: "book deleted successfully ",
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
};
