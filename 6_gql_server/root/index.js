const {deleteBook, updateBook, addBook, getBooks, getBook} = require('../controllers/books')


const root = {
    getBooks,
    getBook,
    addBook,
    deleteBook,
    updateBook,
};

module.exports = root;