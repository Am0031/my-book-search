const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    bookId: ID!
    authors: [String!]
    description: String
    image: String
    link: String
    title: String!
  }
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    bookCount: Int!
    savedBooks: [Book]
  }
  type Auth {
    token: String!
    user: User!
  }
  type Query {
    me: User!
  }
  input SignupInput {
    username: String!
    email: String!
    password: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
  input SaveBookInput {
    bookId: String!
    authors: [String]
    image: String
    title: String!
    description: String
    link: String
  }
  type Mutation {
    signup(input: SignupInput!): Auth!
    login(input: LoginInput!): Auth!
    saveBook(input: SaveBookInput!): User!
    removeBook(bookId: ID!): User!
  }
`;

module.exports = typeDefs;
