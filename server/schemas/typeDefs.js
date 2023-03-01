const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    username: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    authors: [String]
    description: String!
    bookId: String
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input SaveBookInput {
    authors: [String]
    description: String!
    bookId: String
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: SaveBookInput!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
