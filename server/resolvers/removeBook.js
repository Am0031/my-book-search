const { AuthenticationError } = require("apollo-server-express");

const { User } = require("../models");

const removeBook = async (_, { bookId }, { user }) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: user._id },
    { $pull: { savedBooks: { bookId } } },
    { new: true }
  );

  if (!updatedUser) {
    throw new Error("Couldn't find user with this id!");
  }

  return updatedUser;
};

module.exports = removeBook;
