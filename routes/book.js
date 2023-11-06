const express = require("express")

const router = express.Router()

const{addBook,findBook,findBookById,editBook,deleteBook} = require("../controllers/book")

router.post("/addBook", addBook)
router.get("/listBooks", listBooks)
router.get("/findBook/:id", findBookById)
router.put("/editBook/:id", editBook)
router.delete("/deleteBook/:id", deleteBook)
module.exports = router 
