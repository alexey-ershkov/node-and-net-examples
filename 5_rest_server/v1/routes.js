const {Router} = require('express');
const {deleteBook, updateBook, createBook, getAllBooks, getBook} = require('../controllers/books')

const router = Router();

router.get('/books', getAllBooks);
router.get('/book/:id', getBook)
router.post('/book', createBook);
router.patch('/book', updateBook)
router.delete('/book/:id', deleteBook);

module.exports = router;