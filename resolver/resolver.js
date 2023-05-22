const resolvers = {
    // Truy vấn dữ liệu
    Query: {
        books: async (parent, args, context) => await context.BookController.all(),
        book: async (parent, args, context) => await context.BookController.detail(args.id),
        authors: async (parent, args, context) => await context.AuthorController.all(),
        author: async (parent, args, context) => await context.AuthorController.detail(args.id),
    },
    Book: {
        // parent: chính là đối tượng Book
        author: async (parent, args, context) => await context.AuthorController.detail(parent.authorId),
    },
    Author: {
        // parent: chính là đối tượng Author
        books: async (parent, args, context) => await context.BookController.all({ authorId: parent.id })
    },

    // Ghi dữ liệu
    Mutation: {
        createAuthor: async (parent, args, context) => await context.AuthorController.add(args),
        createBook: async (parent, args, context) => await context.BookController.add(args),
        updateAuthor: async (parent, args, context) => await context.AuthorController.update(args),
        updateBook: async (parent, args, context) => await context.BookController.update(args),
        deleteAuthor: async (parent, args, context) => await context.AuthorController.delete(args.id),
        deleteBook: async (parent, args, context) => await context.BookController.delete(args.id),
    }
}

module.exports = resolvers;

// + resolvers sẽ trả lại dữ liệu hiển thị ra cho người dùng
// + Phải lấy Type trước rồi mới lấy field
// + Lấy ra cái Type. schema khai báo sao phải lấy ik chang.
// + Lấy ra cái field (trường). schema khai báo sao phải lấy ik chang.
// + args: nhận về các tham số được định nghĩa bên schema.
// + Tham số id khi được truyền thông qua graphSql Server thì luôn bị chuyển thành kiểu string. Nên cần ép kiểu để không bị lỗi. (Ép hết về string)
// + args trong createAuthor sẽ như sau args {id, name, age}.
// + Debug console.log(args) để kiểm tra. Nó sẽ được add vào so sánh vs Type Author, 3 thằng id, name, age đều có hết thiếu mỗi filed books mà
// filed books nằm trong Type Author nên nó sẽ chui vào Type Author, field books để xử lý
// args trả về toàn bộ dữ liệu mà người dùng thêm vào
