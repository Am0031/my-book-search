const { ApolloError } = require("apollo-server");

const { User } = require("../models");

const saveBook = async (_, { input }, { user }) => {
  try {
    const checkedInput = {
      bookId: input.bookId,
      title: input.title,
      authors: input.authors || ["No authors to display"],
      description: input.description || "No description to display",
      image: input.image || "No image",
      link: input.link || "No link",
    };
    const updatedUser = await User.findByIdAndUpdate(
      { _id: user._id },
      { $addToSet: { savedBooks: checkedInput } },
      { new: true, runValidators: true }
    );

    return updatedUser;
  } catch (err) {
    console.log(err);
    return ApolloError("Failed to save book");
  }
};

module.exports = saveBook;
