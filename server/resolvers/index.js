const login = require("./login");
const signup = require("./signup");
const saveBook = require("./saveBook");
const removeBook = require("./removeBook");
const getMe = require("./getMe");

const resolvers = {
  Query: {
    me: getMe,
  },
  Mutation: {
    login,
    signup,
    saveBook,
    removeBook,
  },
};

module.exports = resolvers;
