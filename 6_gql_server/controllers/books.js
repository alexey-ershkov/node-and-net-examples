const BookStorage = require("../entities/BookStorage");

const bookStorage = new BookStorage();

const getBooks = () => {
    return bookStorage.getAllBooks();
};

const getBook = ({id}) => {
    const book = bookStorage.getBook(id);
    if (!book) {
        throw new Error(`No book with id=${id} found`)
    }

    return book;
};

const addBook = ({book}) => {
    bookStorage.addBook(book);
    return {message: 'Book added'};
}

const updateBook = ({book}) => {
    bookStorage.updateBook(book);
    return {message: 'Book updated'};
}

const deleteBook = ({id}) => {
    bookStorage.deleteBook(id);
    return {message: 'delete book'};
}

module.exports = {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook,
}