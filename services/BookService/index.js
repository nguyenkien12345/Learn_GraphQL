const Book = require('../../models/Book');

const BookService = {
    // Done
    all: async (condition = null) => {
        try {
            let data = null;
            if (condition) {
                data = await Book.find(condition).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            }
            else {
                data = await Book.find().then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            }
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Get All Book: ${error}`);
        }
    },

    // Done
    detail: async (id) => {
        try {
            const data = await Book.findById(id).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Get Detail Book: ${error}`);
        }
    },

    // Done
    add: async (book) => {
        try {
            const newBook = await new Book(book);
            const data = await newBook.save().then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Add New Book: ${error}`);
        }
    },

    // Done
    update: async (book) => {
        try {
            const data = await Book.findByIdAndUpdate(book.id, book).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Update Book: ${error}`);
        }
    },

    // Done
    delete: async (id) => {
        try {
            const data = await Book.findByIdAndDelete(id).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Delete Book: ${error}`);
        }
    },
};

module.exports = BookService;
