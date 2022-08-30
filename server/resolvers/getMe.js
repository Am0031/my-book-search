const { User } = require("../models");

const { ApolloError } = require("apollo-server");

const me = async (_, __, { user }) => {
  try {
    const foundUser = await User.findById({ _id: user._id });

    if (!foundUser) {
      return ApolloError("Cannot find a user with this id!");
    }

    return foundUser;
  } catch (err) {
    console.log(err);
    return ApolloError("Something went wrong!");
  }
};

module.exports = me;
