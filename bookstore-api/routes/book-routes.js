const express = require("express");
const {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");

const router = express.Router();

// All routes that are related to book only

// all books calling
router.get("/get", getAllBooks);
// one books calling
router.get("/get/:id", getSingleBook);

// create a new post
router.post("/add", addNewBook);

// update post
router.put("/update/:id", updateBook);

// delete post
router.delete("/delete/:id", deleteBook);



module.exports=router;