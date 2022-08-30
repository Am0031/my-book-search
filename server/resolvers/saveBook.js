const { AuthenticationError } = require("apollo-server-express");

const { User } = require("../models");

const saveBook = async (_, { input }, { user }) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: user._id },
      { $addToSet: { savedBooks: input } },
      { new: true, runValidators: true }
    );

    return updatedUser;
  } catch (err) {
    console.log(err);
    throw new AuthenticationError("Failed to save book");
  }
};

module.exports = saveBook;
