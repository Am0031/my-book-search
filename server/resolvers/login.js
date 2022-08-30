const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const login = async (_, { input }) => {
  const { email, password } = input;

  const user = await User.findOne({ email });

  if (!user) {
    throw new AuthenticationError("User not found");
  }

  const correctPw = await user.isCorrectPassword(password);

  if (!correctPw) {
    throw new AuthenticationError("Wrong password");
  }

  const token = signToken({
    id: user._id,
    email: user.email,
    username: user.username,
  });

  return { token, user };
};

module.exports = login;
