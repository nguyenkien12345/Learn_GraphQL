const AuthorService = require('../../services/AuthorService');

const AuthorController = {
    // Done
    all: async () => {
        try {
            const data = await AuthorService.all().then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Call AuthorService.all(): ${error}`);
        }
    },

    // Done
    detail: async (id) => {
        try {
            const data = await AuthorService.detail(id).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Call AuthorService.detail(): ${error}`);
        }
    },

    // Done
    add: async (author) => {
        try {
            const data = await AuthorService.add(author).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Call AuthorService.add(): ${error}`);
        }
    },

    // Done
    update: async (author) => {
        try {
            const data = await AuthorService.update(author).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Call await AuthorService.update(): ${error}`);
        }
    },

    // Done
    delete: async (id) => {
        try {
            const data = await AuthorService.delete(id).then((data) => Promise.resolve(data)).catch((error) => Promise.reject(error));
            return data;
        }
        catch (error) {
            console.log(`Error Catch When Delete Author: ${error}`);
        }
    },
};

module.exports = AuthorController;
