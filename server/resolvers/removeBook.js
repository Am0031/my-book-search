const { ApolloError } = require("apollo-server");

const { User } = require("../models");

const removeBook = async (_, { bookId }, { user }) => {
  const updatedUser = await User.findByIdAndUpdate(
    { _id: user.id },
    { $pull: { savedBooks: { $elemMatch: { bookId: bookId } } } },
    { new: true }
  );

  if (!updatedUser) {
    return ApolloError("Couldn't remove book!");
  }

  return updatedUser;
};

module.exports = removeBook;
