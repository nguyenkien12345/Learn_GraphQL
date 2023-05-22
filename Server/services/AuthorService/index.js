const Author = require('../../models/Author');

const AuthorService = {
    // Done
    all: async () => {
        try {
            const data = await Author.find().then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Get All Author: ${error}`);
        }
    },

    // Done
    detail: async (id) => {
        try {
            const data = await Author.findById(id).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Get Detail Author: ${error}`);
        }
    },

    // Done
    add: async (author) => {
        try {
            const newAuthor = await new Author(author);
            const data = await newAuthor.save().then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Add New Author: ${error}`);
        }
    },

    // Done
    update: async (author) => {
        try {
            const data = await Author.findByIdAndUpdate(author.id, author).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Update Author: ${error}`);
        }
    },

    // Done
    delete: async (id) => {
        try {
            const data = await Author.findByIdAndDelete(id).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Delete Author: ${error}`);
        }
    },
};

module.exports = AuthorService;
