const BookStorage = require("../entities/BookStorage");

const bookStorage = new BookStorage();

const getAllBooks = (req, res) => {
    res.send(bookStorage.getAllBooks())
};

const getBook = (req, res) => {
    const book = bookStorage.getBook(req.params.id);
    if (!book) {
        res.status(404).send({message: 'Not found'});
        return;
    }

    res.send(book);
};

const createBook = (req, res) => {
    bookStorage.addBook(req.body);
    res.send('Book added')
}

const updateBook = (req, res) => {
    bookStorage.updateBook(req.body);
    res.send('Book updated')
}

const deleteBook = (req, res) => {
    bookStorage.deleteBook(req.params.id);
    res.send('delete book')
}

module.exports = {
    getAllBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
}