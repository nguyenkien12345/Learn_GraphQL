const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        id: ID!
        name: String
        genre: String
        views: Int
        author: Author
    }

    type Author {
        id: ID!
        name: String
        email: String
        age: Int
        address: String
        books: [Book]
    }

    # ROOT TYPE (Gốc của sơ đồ (điểm bắt đầu)) 

    # TYPE truy xuất dữ liệu từ data phải luôn là Query không được thay thế bằng từ khác.
    type Query {
        books: [Book]                   # Kết quả trả về là 1 mảng Book
        book (id: ID): Book             # Kết quả trả về là 1 đối tượng Book
        authors: [Author]               # Kết quả trả về là 1 mảng Author
        author (id: ID): Author         # Kết quả trả về là 1 đối tượng Author
    }

    # TYPE ghi dữ liệu vào data phải luôn là Mutation không được thay thế bằng từ khác.
    type Mutation {
        createAuthor(name: String, email: String, age: Int, address: String): Author             # Kết quả trả về là 1 đối tượng Author
        createBook(name: String, genre: String, authorId: ID!): Book                             # Kết quả trả về là 1 đối tượng Book
        updateAuthor(id: ID!, name: String, email: String, age: Int, address: String): Author    # Kết quả trả về là 1 đối tượng Author đã được cập nhật
        updateBook(id: ID!, name: String, genre: String, authorId: ID): Book                    # Kết quả trả về là 1 đối tượng Book đã được cập nhật
        deleteAuthor(id: ID!): Author                                                            # Kết quả trả về là đối tượng Author bị xóa
        deleteBook(id: ID!): Book                                                                # Kết quả trả về là đối tượng Book bị xóa
    }
`

module.exports = typeDefs;

// schema định dạng cấu trúc, sườn của cơ sở dữ liệu
// 1 cuốn sách chỉ thuộc về 1 tác giả. 1 tác giả có thể có nhiều cuốn sách
// typeDefs: Nó là viết tắt của type definitions. Tức là định nghĩa về những cái kiểu dữ liệu mà chúng ta sẽ có ở trong cái GrapQL Server
// comment là dấu #. Không được phép null là dấu !
