const login = require("./login");
const signup = require("./signup");
const saveBook = require("./saveBook");
const removeBook = require("./removeBook");
const me = require("./getMe");

const resolvers = {
  Query: {
    me,
  },
  Mutation: {
    login,
    signup,
    saveBook,
    removeBook,
  },
};

module.exports = resolvers;
