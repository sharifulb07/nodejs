const express = require("express");

const app = express();

// MiddleWare.js

app.use(express.json());

const books = [
  {
    id: 1,
    level: "Book 1",
  },
  {
    id: 2,
    level: "Book 2",
  },
  {
    id: 3,
    level: "Book 3",
  },
  {
    id: 4,
    level: "Book 4",
  },
];

// intro route

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstore api",
  });
});

// get all books

app.get("/get", (req, res) => {
  res.json(books);
});

// get a single book

app.get("/get/:id", (req, res) => {
  const book = books.find((book) => book.id == Number(req.params.id));
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message:
        "Book is not found here . Please try with a different book id now ",
    });
  }
});

// add book in books database

app.post("/add", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random()*1000),
    level: `new book ${Math.floor(Math.random()*1000)}`,
  };
  books.push(newBook);
  res.status(202).json({
    data: `${newBook.level}`,
    message: "new book is added successfully now ",
  });
});

// update book

app.put("/update/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const findCurrentBook = books.find((book) => book.id === bookId);

  if (findCurrentBook) {
    findCurrentBook.level = req.body.level || findCurrentBook.level;
    res.status(202).json({
      data: findCurrentBook,
      message: "book is added succesfully now ",
    });
  } else {
    res.status(404).json({
      message: "book is not found successfully ",
    });
  }
});

app.delete("/delete/:id", (req, res) => {
  const deleteIndex = Number(req.params.id);
  const findCurrentIndexOfBook = books.findIndex(
    (book) => book.id === deleteIndex
  );
  if (findCurrentIndexOfBook != -1) {
    const deletedBook = books.splice(findCurrentIndexOfBook, 1);
    res.status(200).send({
      message: "deleted successfully completed",
      data: deletedBook[0],
    });
  } else {
    res.status(404).json({
      message: "book is not found successfully ",
    });
  }
});

app.listen(3000, () => {
  console.log("My server is running at port at 3000");
});
