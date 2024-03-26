class BookStorage {
    storage = undefined;
    constructor() {
        if (!this.storage) {
            this. storage = [];
        }
    }

    getAllBooks() {
        return this.storage;
    }

    getBook(id) {
        return this.storage.find(({id: bookId}) => +id === +bookId );
    }

    addBook(book) {
        this.storage.push(book);
    }

    updateBook(book) {
        this.deleteBook(book.id);
        this.addBook(book);
    }

    deleteBook(id) {
        this.storage = this.storage.filter(({id: bookId}) => +id !== +bookId);
    }
}

module.exports = BookStorage;