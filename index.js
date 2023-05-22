const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema/schema');
const resolvers = require('./resolver/resolver');
const AuthorController = require('./controllers/AuthorController/index');
const BookController = require('./controllers/BookController/index');

// Connect to MongoDb 
const optionsMongoDB = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

(async () => {
    try {
        await mongoose.connect('mongodb+srv://nguyentrungkien:nguyentrungkien@cluster0.ag08y0r.mongodb.net/NguyenTrungKien', optionsMongoDB, (error) => {
            if (error) {
                console.log(`Kết nối database mongodb thất bại: ${error}`);
                process.exit(1);                          // Kết thúc chương trình hoàn toàn 
            }
            else {
                console.log(`Kết nối database mongodb thành công`);
            }
        })
    }
    catch (error) {
        console.log(`Kết nối database mongodb thất bại: ${error}`);
        process.exit(1);                                // Kết thúc chương trình hoàn toàn 
    }
})();

// Khởi tạo server với ApolloServer
const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
    context: () => ({ AuthorController, BookController })
    // context này là 1 cái hàm và nó sẽ trả lại những cái gì mà chúng ta có thể truy cập được.
    // Lúc này file resolver có thể nhận được thông qua tham số context
});

// Khởi tạo app
const app = express();

(async () => {
    await server.start();
    server.applyMiddleware({ app });
    return app;
})();

app.listen({ port: 4000 }, () => {
    console.log(`Server is ready at http://localhost:4000${server.graphqlPath}`)
    // server.graphqlPath chính là /graphql 
});
