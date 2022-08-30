const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const signup = async (_, { input }) => {
  const { username, email, password } = input;

  const userExists = await User.findOne({ email });

  if (!userExists) {
    const user = await User.create({ username, email, password });

    if (!user) {
      throw new AuthenticationError("New user could not be created");
    }

    const token = signToken({
      id: user._id,
      email: user.email,
      username: user.username,
    });

    return { token, user };
  } else {
    throw new AuthenticationError("User already exists!");
  }
};

module.exports = signup;
