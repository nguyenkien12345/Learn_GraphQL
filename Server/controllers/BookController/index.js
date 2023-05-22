const BookService = require('../../services/BookService');

const BookController = {
    // Done
    all: async (condition = null) => {
        try {
            const data = await BookService.all(condition).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Call BookService.all(): ${error}`);
        }
    },

    // Done
    detail: async (id) => {
        try {
            const data = await BookService.detail(id).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Call BookService.detail(): ${error}`);
        }
    },

    // Done
    add: async (book) => {
        try {
            const data = await BookService.add(book).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Call BookService.add(): ${error}`);
        }
    },

    // Done
    update: async (book) => {
        try {
            const data = await BookService.update(book).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));;
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Call await BookService.update(): ${error}`);
        }
    },

    // Done
    delete: async (id) => {
        try {
            const data = await BookService.delete(id).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));;
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Call BookService.delete(): ${error}`);
        }
    },
};

module.exports = BookController;
