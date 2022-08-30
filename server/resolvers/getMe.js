const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const me = async (_, __, { user }) => {
  try {
    const foundUser = await User.findById({ _id: user._id });

    if (!foundUser) {
      throw new Error("Cannot find a user with this id!");
    }

    return foundUser;
  } catch (err) {
    console.log(err);
    throw new AuthenticationError("Something went wrong!");
  }
};

module.exports = me;
